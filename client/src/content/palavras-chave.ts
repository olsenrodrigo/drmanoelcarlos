/**
 * Mapa de palavras-chave do site — cada termo com uma rota dona só.
 *
 * Serve a três coisas ao mesmo tempo:
 *  1. documentar o alvo de cada rota (para quem for editar copy depois);
 *  2. alimentar `knowsAbout` / `areaServed` do schema.org (SEO local + entidade);
 *  3. alimentar o `llms.txt` e o resumo lido por motores generativos (GEO).
 *
 * Regra ao editar: só entram termos que o site realmente sustenta no texto.
 * Nada de procedimento que o consultório não oferece e nada de promessa de
 * resultado — é conteúdo de saúde, e o buscador trata como YMYL.
 */

/** Como o nome aparece escrito por aí — usado em `alternateName` e no llms.txt. */
export const variantesDeMarca = [
  "Dr. Manoel Carlos",
  "Dr. Manoel Carlos Leonardi",
  "Manoel Carlos Leonardi",
  "Manoel Carlos Leonardi de Azevedo Souza",
  "Dr. Manoel Leonardi",
  "Dr. Manoel Carlos oncologista",
  "Dr. Manoel Carlos Oncologia Clínica",
];

/**
 * Bairros e regiões de São Paulo cobertos pelo site.
 *
 * A âncora do bloco Jardim das Perdizes / Barra Funda é factual: o Hospital
 * Emunah, um dos quatro hospitais parceiros da copy, fica no Jardim das
 * Perdizes — bairro planejado dentro da região da Barra Funda, zona oeste.
 * Os demais bairros são os do entorno dos outros hospitais parceiros
 * (Higienópolis, Liberdade, Jardim Paulista) e os vizinhos imediatos.
 */
export const bairrosAtendidos = [
  "Jardim das Perdizes",
  "Barra Funda",
  "Água Branca",
  "Perdizes",
  "Pompeia",
  "Higienópolis",
  "Santa Cecília",
  "Lapa",
  "Vila Leopoldina",
  "Liberdade",
  "Jardim Paulista",
  "Bela Vista",
];

/** Municípios da região metropolitana de onde chegam pacientes. */
export const cidadesAtendidas = [
  "São Paulo",
  "Osasco",
  "Guarulhos",
  "Santo André",
  "São Bernardo do Campo",
  "São Caetano do Sul",
  "Barueri",
];

export const termosRegionais = [
  "oncologista zona oeste São Paulo",
  "oncologista região central de São Paulo",
  "oncologia clínica capital paulista",
  "tratamento de câncer zona oeste SP",
];

export type AlvoDaRota = {
  path: string;
  primaria: string;
  secundarias: string[];
};

/**
 * Uma palavra-chave primária por rota — sem canibalizar entre páginas.
 *
 * Os alvos de bairro pedidos pelo cliente têm dono exclusivo:
 *   oncologia Jardim das Perdizes -> /oncologia-jardim-das-perdizes
 *   oncologia Barra Funda         -> /oncologia-barra-funda
 *   oncologista em São Paulo      -> /oncologista-em-sao-paulo
 * A home fica com a busca por nome (marca), que é o termo com maior volume
 * de intenção direta para um consultório médico.
 */
export const alvosPorRota: AlvoDaRota[] = [
  {
    path: "/",
    primaria: "Dr. Manoel Carlos oncologista",
    secundarias: [
      "Dr. Manoel Carlos Leonardi",
      "Manoel Carlos Leonardi de Azevedo Souza oncologista",
      "oncologista CRM-SP 139361",
      "oncologista humanizado São Paulo",
      "consulta oncológica sem pressa",
    ],
  },
  {
    path: "/oncologia-clinica",
    primaria: "oncologista clínico São Paulo",
    secundarias: [
      "oncologia clínica São Paulo",
      "consulta oncologia São Paulo",
      "médico oncologista São Paulo",
      "tratamento sistêmico câncer São Paulo",
      "quimioterapia acompanhamento médico São Paulo",
      "terapia-alvo oncologia São Paulo",
    ],
  },
  {
    path: "/como-eu-cuido",
    primaria: "acompanhamento oncológico humanizado",
    secundarias: [
      "oncologista atencioso São Paulo",
      "consulta oncologia sem pressa",
      "oncologista que explica o tratamento",
      "decisão compartilhada tratamento oncológico",
      "acompanhamento contínuo paciente com câncer",
    ],
  },
  {
    path: "/jornada-do-paciente-oncologico",
    primaria: "jornada do paciente com câncer",
    secundarias: [
      "etapas do tratamento oncológico",
      "o que esperar depois do diagnóstico de câncer",
      "primeira consulta com oncologista o que levar",
      "acompanhamento após o tratamento de câncer",
    ],
  },
  {
    path: "/segunda-opiniao-oncologica",
    primaria: "segunda opinião câncer São Paulo",
    secundarias: [
      "segunda opinião oncológica",
      "revisão de diagnóstico de câncer",
      "segunda opinião médica oncologia São Paulo",
      "revisar plano de tratamento oncológico",
    ],
  },
  {
    path: "/onde-atendo",
    primaria: "oncologista Hospital Nove de Julho",
    secundarias: [
      "oncologista Hospital Leforte Liberdade",
      "oncologista Hospital Samaritano Higienópolis",
      "oncologista Hospital Emunah",
      "consultório oncologia São Paulo",
      "oncologista convênio São Paulo",
    ],
  },
  {
    path: "/perguntas-frequentes",
    primaria: "dúvidas sobre consulta com oncologista",
    secundarias: [
      "quanto custa consulta com oncologista",
      "oncologista atende convênio",
      "quanto tempo dura consulta com oncologista",
      "oncologista atende por teleconsulta",
    ],
  },
  {
    path: "/oncologista-em-sao-paulo",
    primaria: "oncologista em São Paulo",
    secundarias: [
      "oncologista São Paulo SP",
      "oncologista perto de mim São Paulo",
      "oncologista particular São Paulo",
      "tratamento de câncer em São Paulo",
      "clínica oncológica São Paulo",
      ...termosRegionais,
    ],
  },
  {
    path: "/oncologia-jardim-das-perdizes",
    primaria: "oncologia Jardim das Perdizes",
    secundarias: [
      "oncologia Jd. das Perdizes",
      "oncologista Jardim das Perdizes",
      "oncologista Jd das Perdizes",
      "tratamento de câncer Jardim das Perdizes",
      "tratamento de câncer Jd. das Perdizes",
      "câncer Jardim das Perdizes",
      "oncologia clínica Jardim das Perdizes",
      "médico oncologista Jardim das Perdizes",
      "oncologista Perdizes São Paulo",
      "oncologista Hospital Emunah Jardim das Perdizes",
    ],
  },
  {
    path: "/oncologia-barra-funda",
    primaria: "oncologia Barra Funda",
    secundarias: [
      "oncologista Barra Funda",
      "tratamento de câncer Barra Funda",
      "câncer Barra Funda",
      "oncologia clínica Barra Funda",
      "tratamento oncológico Barra Funda",
      "oncologista Água Branca",
      "oncologista Pompeia São Paulo",
      "oncologista Lapa São Paulo",
      "oncologista perto do Terminal Barra Funda",
    ],
  },
  {
    path: "/agendar-consulta",
    primaria: "agendar consulta oncologista São Paulo",
    secundarias: [
      "WhatsApp oncologista São Paulo",
      "marcar consulta com oncologista",
      "contato Dr. Manoel Carlos oncologista",
    ],
  },
];

export const alvoDaRota = (path: string) => alvosPorRota.find((a) => a.path === path);

/** Palavras-chave de uma rota, prontas para `keywords`. */
export const chavesDaRota = (path: string) => {
  const alvo = alvoDaRota(path);
  return alvo ? [alvo.primaria, ...alvo.secundarias] : [];
};

/** Conjunto sem repetição — vai para a propriedade `keywords` do schema. */
export const todasAsChaves = Array.from(
  new Set(alvosPorRota.flatMap((a) => [a.primaria, ...a.secundarias])),
);

/**
 * Assuntos que o médico domina, como TEMAS — não como frases de busca.
 *
 * `knowsAbout` do schema.org espera entidade/tópico ("Oncologia clínica"), não
 * palavra-chave geolocalizada ("oncologia Barra Funda"). Despejar a lista de
 * keywords ali é keyword stuffing em JSON-LD.
 */
export const topicosDoMedico = [
  "Oncologia clínica",
  "Diagnóstico de câncer",
  "Tratamento sistêmico do câncer",
  "Quimioterapia",
  "Terapia-alvo",
  "Segunda opinião oncológica",
  "Acompanhamento oncológico",
  "Jornada do paciente oncológico",
  "Decisão compartilhada em oncologia",
  "Clínica médica",
];

/**
 * Trava contra canibalização: duas rotas não podem declarar o mesmo termo.
 * Roda no import, então quebra o build (e o `npm run dev`) em vez de deixar o
 * erro chegar silencioso ao Google.
 */
const donoDoTermo = new Map<string, string>();
for (const alvo of alvosPorRota) {
  for (const termo of [alvo.primaria, ...alvo.secundarias]) {
    const chave = termo.toLowerCase();
    const dono = donoDoTermo.get(chave);
    if (dono && dono !== alvo.path) {
      throw new Error(
        `Canibalização de palavra-chave: "${termo}" está declarado em ${dono} e em ${alvo.path}. ` +
          `Cada termo deve ter uma rota dona só.`,
      );
    }
    donoDoTermo.set(chave, alvo.path);
  }
}
