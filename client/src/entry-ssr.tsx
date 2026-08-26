import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { rotas } from "@/content/rotas";
import { site } from "@/content/site";
import { faq } from "@/content/pages";
import { bairrosAtendidos, chavesDaRota, cidadesAtendidas } from "@/content/palavras-chave";
import { fichaMedico, geoDaRota } from "@/content/geo";
import { urlDaRota } from "@/lib/seo";

/**
 * Entrada usada só no build, por `script/prerender.ts`.
 *
 * Motivo: buscadores de IA (GPTBot, ClaudeBot, PerplexityBot…) e vários
 * validadores não executam JavaScript. Sem HTML estático eles veem apenas
 * `<div id="root"></div>` e o site fica invisível para respostas geradas.
 */

const escapar = (texto: string) =>
  texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function renderizarRota(path: string) {
  const dados = rotas.find((r) => r.path === path);
  if (!dados) throw new Error(`Rota sem registro: ${path}`);

  const corpo = renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );

  const url = urlDaRota(path);
  const chaves = chavesDaRota(path);
  const cabeca = [
    `<title>${escapar(dados.title)}</title>`,
    `<meta name="description" content="${escapar(dados.description)}" />`,
    chaves.length ? `<meta name="keywords" content="${escapar(chaves.join(", "))}" />` : "",
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapar(dados.title)}" />`,
    `<meta property="og:description" content="${escapar(dados.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${escapar(site.name)}" />`,
    `<meta property="og:image" content="${site.origin}/opengraph.jpg" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapar(dados.title)}" />`,
    `<meta name="twitter:description" content="${escapar(dados.description)}" />`,
    `<meta name="twitter:image" content="${site.origin}/opengraph.jpg" />`,
    dados.jsonLd
      ? `<script type="application/ld+json" id="seo-jsonld">${JSON.stringify(dados.jsonLd).replace(/</g, "\\u003c")}</script>`
      : "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return { corpo, cabeca };
}

export const caminhos = rotas.map((r) => r.path);
export const origem = site.origin;

/**
 * `llms.txt` — convenção emergente: um resumo em markdown, sem navegação nem
 * script, que motores generativos conseguem ler direto. Aqui ele é montado a
 * partir do mesmo conteúdo do site, então nunca descola da copy aprovada.
 */
export const llmsTxt = [
  `# ${site.name}`,
  "",
  "> Consultório de oncologia clínica em São Paulo/SP. Diagnóstico, definição de",
  "> tratamento, segunda opinião e acompanhamento contínuo do paciente oncológico.",
  `> Médico responsável: ${site.doctorFull} — ${site.registro}.`,
  "",
  "## Ficha",
  "",
  // A ficha vem do mesmo lugar que a versão visível do site — se um dia
  // divergirem, é bug. NAP inconsistente entre fontes derruba SEO local.
  ...fichaMedico.map((linha) => `- ${linha.rotulo}: ${linha.valor}`),
  `- E-mail: ${site.email}`,
  `- Site: ${site.origin}`,
  "",
  "## Médico responsável",
  "",
  `${site.doctorFull} (${site.registro}) é oncologista clínico, formado em Medicina pela`,
  "Faculdade de Medicina de Ribeirão Preto da USP (FMRP-USP), com residência em Clínica",
  "Médica pelo Hospital das Clínicas da FMRP-USP e em Oncologia Clínica pelo Instituto do",
  "Câncer do Estado de São Paulo (ICESP-USP). Integrou o ASCO University Fellows Advisory",
  "Group, da American Society of Clinical Oncology, e compõe o Comitê Científico do",
  "Instituto Vencer o Câncer. Atua como oncologista clínico titular do Grupo Américas /",
  "Oncologia Américas (rede DASA), com 17 anos de atuação na medicina.",
  "",
  "## Locais de atendimento",
  "",
  `- Consultório particular em ${site.address.city}/${site.address.state} — ${site.hours}`,
  ...site.hospitais.map(
    (h) => `- ${h.nome}${h.bairro ? ` (${h.bairro}, São Paulo/SP)` : ""} — atendimento por convênio`,
  ),
  "",
  "## Páginas",
  "",
  // Cada página com o resumo escrito para citação, quando existir — é mais
  // específico e mais útil ao leitor automático do que o meta description.
  ...rotas.map((r) => {
    const resumo = geoDaRota(r.path)?.resumo ?? r.description;
    return `- [${r.title}](${urlDaRota(r.path)}): ${resumo}`;
  }),
  "",
  "## Perguntas frequentes",
  "",
  // Todas as perguntas do site num lugar só: as da copy aprovada e as escritas
  // por página em `content/geo.ts`, sem repetir.
  ...(() => {
    const vistas = new Set<string>();
    const linhas: string[] = [];
    const juntar = (
      itens: readonly { pergunta: string; resposta: string }[],
      origemUrl?: string,
    ) => {
      for (const item of itens) {
        const chave = item.pergunta.toLowerCase();
        if (vistas.has(chave)) continue;
        vistas.add(chave);
        linhas.push(`### ${item.pergunta}`, "", item.resposta, "");
        if (origemUrl) linhas.push(`Fonte: ${origemUrl}`, "");
      }
    };
    juntar(faq.itens, urlDaRota(faq.path));
    for (const r of rotas) {
      juntar(geoDaRota(r.path)?.faq ?? [], urlDaRota(r.path));
    }
    return linhas;
  })(),
  "## Observações",
  "",
  "- O consultório particular atende somente em regime particular; o atendimento por",
  "  convênio acontece nos hospitais parceiros.",
  "- Não há teleconsulta: todo o atendimento é presencial.",
  "- A primeira consulta dura cerca de 1 hora; os retornos, cerca de 30 minutos.",
  "- Existe pacote opcional de acompanhamento contínuo, com consultas semanais e",
  "  telefone disponível 24h; o valor mensal é combinado individualmente.",
  "- Este site é informativo e não substitui consulta médica; nenhuma conduta é",
  "  indicada sem avaliação presencial.",
  `- Cidades atendidas: ${cidadesAtendidas.join(", ")}.`,
  `- Bairros de São Paulo cobertos: ${bairrosAtendidos.join(", ")}.`,
].join("\n");
