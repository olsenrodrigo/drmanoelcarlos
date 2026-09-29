# Site do Dr. Manoel Carlos — Oncologia Clínica

Site institucional do Dr. Manoel Carlos Leonardi de Azevedo Souza (CRM-SP 139.361,
RQE 39585 — Clínica Médica e RQE 103468 — Oncologia Clínica), oncologista clínico em São Paulo. Construído sobre a base
`whitelabel_v2` (React 19 + Vite + Express), com pré-renderização por rota.

## Rodar

```bash
npm install
npm run dev                     # desenvolvimento (Vite + Express), porta 5000
PORT=5180 npm run dev           # em outra porta

npm run check                   # TypeScript
npm run build                   # client + HTML por rota + sitemap + llms.txt + server
PORT=5180 npm start             # produção (serve dist/)
```

O servidor escuta em `0.0.0.0`, então em rede local o site responde também no IP
da máquina (ex.: `http://192.168.18.171:5180`).

## Deploy (VPS)

```bash
git clone https://github.com/olsenrodrigo/drmanoelcarlos.git
cd drmanoelcarlos
npm ci
npm run build
PORT=3000 npm start          # atrás de Caddy/Nginx
```

**Não precisa de banco nem de SMTP.** O formulário de contato não grava nada: ele
monta a mensagem e abre a conversa no WhatsApp. A rota `/api/contact` e o
`server/email.ts` são herança do boilerplate e não são chamados pelo site — o
`pg.Pool` é preguiçoso, então o servidor sobe sem `DATABASE_URL`. O
`.env.example` fica aqui para o caso de essas rotas serem ligadas um dia.

Rotas servidas como HTML estático (`server/static.ts`): cada rota tem seu
`.html` pré-renderizado, com URL limpa e sem barra final; o que não existe
responde **404 de verdade** (e não soft 404). Reverso na frente: basta apontar
tudo para a porta do Node, sem regra de rewrite.

Ao trocar o domínio, atualizar `site.origin` em `client/src/content/site.ts` e a
linha `Sitemap:` de `client/public/robots.txt` — canonical, Open Graph, sitemap
e llms.txt saem daí.

## Estrutura

```
client/src/content/     copy e SEO — é o que o cliente revisa
  site.ts               dados institucionais (contatos, horários, hospitais, fotos)
  pages.ts              COPY APROVADA, transcrita do documento do cliente (v2)
  geo.ts                conteúdo escrito para SEO/GEO (resumos citáveis, FAQ por página)
  palavras-chave.ts     alvo de cada rota + trava contra canibalização
  rotas.ts              registro único das rotas indexáveis + JSON-LD de cada uma
client/src/lib/seo.ts   schema.org (Physician, MedicalBusiness, MedicalWebPage, FAQPage)
client/src/components/  Brand, Icones, Layout, Secoes, Geo
client/src/pages/       uma por rota (Area.tsx atende as três páginas de bairro)
client/src/entry-ssr.tsx  usada só no build: HTML estático por rota + llms.txt
script/prerender.ts     gera um .html por rota + sitemap.xml + llms.txt
```

**Regra ao editar**: `pages.ts` é copy aprovada — não se mexe sem alinhar com o
cliente. Texto novo (para dar corpo a uma página, responder uma dúvida, cobrir
uma busca) vai em `geo.ts`.

## Rotas

| Rota | Palavra-chave primária |
|---|---|
| `/` | Dr. Manoel Carlos oncologista |
| `/como-eu-cuido` | acompanhamento oncológico humanizado |
| `/oncologia-clinica` | oncologista clínico São Paulo |
| `/jornada-do-paciente-oncologico` | jornada do paciente com câncer |
| `/segunda-opiniao-oncologica` | segunda opinião câncer São Paulo |
| `/onde-atendo` | oncologista Hospital Nove de Julho |
| `/perguntas-frequentes` | dúvidas sobre consulta com oncologista |
| `/oncologista-em-sao-paulo` | oncologista em São Paulo |
| `/oncologia-jardim-das-perdizes` | oncologia Jardim das Perdizes |
| `/oncologia-barra-funda` | oncologia Barra Funda |
| `/agendar-consulta` | agendar consulta oncologista São Paulo |

Uma rota nova precisa entrar em `content/pages.ts`, `content/palavras-chave.ts`,
`content/rotas.ts` e `App.tsx` — o `rota()` lança erro se faltar registro, e a
trava de canibalização quebra o build se dois caminhos disputarem o mesmo termo.

## SEO e GEO

- **HTML estático por rota** (`script/prerender.ts`): buscadores de IA (GPTBot,
  ClaudeBot, PerplexityBot) não executam JavaScript. Sem isso o site é invisível
  para respostas geradas.
- **JSON-LD por rota** em `@graph`: `MedicalWebPage` (com `lastReviewed` e
  `reviewedBy`), `Physician`, `MedicalBusiness`, `BreadcrumbList` e `FAQPage`.
- **Resposta direta** no topo de cada página (`.resposta-direta`): 1–3 frases
  autossuficientes, escritas para serem citadas literalmente.
- **FAQ por página**, visível no HTML — o acordeão usa `forceMount`, então a
  resposta existe no HTML mesmo fechada (marcação sem conteúdo visível é
  violação de diretriz).
- `robots.txt` libera explicitamente os crawlers de IA; `llms.txt` é gerado no
  build a partir do mesmo conteúdo do site.
- `DATA_REVISAO` em `lib/seo.ts` alimenta `lastReviewed`. **Atualizar sempre que
  o Dr. Manoel revisar os textos** — data velha é pior que nenhuma.

## Atendimento particular: fora do site

Por decisão do cliente (set/2026), **nenhum dado do atendimento particular
aparece no site**: valor da consulta, dias e horários, endereço do consultório,
"só particular" e o pacote de acompanhamento com valor mensal. Esses dados são
passados só ao vivo, a quem pedir, para evitar problema jurídico com a rede
Américas. Vale para a copy, o `geo.ts`, o JSON-LD e o `llms.txt` — não
reintroduzir. O site mostra os hospitais (`site.hospitais`) com endereço e
telefone de agendamento, e o WhatsApp (11) 99202-8745 como "demais
agendamentos".

## Pendências (dados que faltam)

1. **Hospital Emunah** — veio sem endereço e sem telefone. Hoje aparece só com o
   bairro (Jardim das Perdizes) e agenda pelo WhatsApp de demais agendamentos.
   Ao receber: preencher `rua`/`cep`/`telefone` em `site.hospitais`.
2. **Fotos do Emunah** — o cliente pediu fotos no Emunah no lugar das do
   consultório particular; os arquivos ainda não chegaram. As seções já esperam
   `src`/`alt`/`width`/`height` em `site.foto*`.
3. **Redes sociais** — o briefing pede redes em destaque. Só a página do Facebook
   foi encontrada em fonte pública. Instagram e LinkedIn ficam vazios em
   `site.social`; o rodapé e a página de contato já renderizam o que for
   preenchido.
4. **Fotos** — existe um único retrato. `site.foto` (inteiro) e `site.fotoFechada`
   (mesmo arquivo, enquadramento fechado) cobrem o site hoje.
   *O arquivo original tinha a arte "Minha Trajetória", uma faixa diagonal e o
   logotipo sobrepostos; o fundo foi reconstruído para liberar o uso.*
5. **Marca** — o logotipo do Dr. Manoel (monograma "MC" com estetoscópio +
   assinatura) só existe em baixa resolução, embutido na foto. O site usa um
   símbolo próprio em SVG (`components/Brand.tsx`), com a paleta tirada das
   cores medidas nesse logotipo. Quando chegar o vetor oficial, trocar só o
   componente `Simbolo`.

Resolvidas em set/2026: RQE 39585 (Clínica Médica) confirmado; depoimentos
publicados na home (nome + inicial do sobrenome, sem o nome completo do
paciente).

## Decisões de design

- **Paleta**: azul-petróleo tirado do logotipo do próprio médico (#3C90A8 /
  #489C9C medidos no arquivo original), escurecido até quase preto para as
  seções de fundo cheio. Neutro em areia (#F8F6F2), não branco puro — oncologia
  pede ambiente acolhedor. Dourado só em fios e sobrelinhas.
- **Tipografia**: Source Serif 4 (títulos) + Figtree (corpo) — o par aprovado
  em projetos anteriores da mesma linha.
- **Sem stock**: nenhuma foto de banco de imagens. Onde falta foto, o peso fica
  na tipografia e nos blocos.
- **Contraste**: sobrelinhas e texto de apoio verificados em AA (o dourado foi
  escurecido para #8a6a35 por causa disso).
