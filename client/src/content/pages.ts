/**
 * Copy aprovada do site — transcrita do documento "COPY DO SITE Dr. Manoel
 * Carlos - v2", sem reescrita. O que foi escrito depois, para SEO/GEO, mora em
 * `content/geo.ts`; misturar os dois faz a revisão do cliente virar caça ao
 * texto novo.
 *
 * Os `meta` seguem os títulos e descrições sugeridos na própria copy quando
 * ela os traz; onde não traz (home, FAQ, páginas de bairro), foram escritos
 * no mesmo tom e com a palavra-chave da rota em `content/palavras-chave.ts`.
 *
 * Ajustes pedidos pelo cliente depois da v2 (set/2026): saíram do site todos
 * os dados do atendimento particular (valor da consulta, dias e horários do
 * consultório, "apenas particular" e o pacote de acompanhamento com valor
 * mensal) — passam a ser informados só ao vivo, a quem pedir. O "Onde atendo"
 * lista os hospitais com endereço e telefone; entraram o RQE de Clínica
 * Médica e os depoimentos.
 */

export type Meta = { title: string; description: string };
export type Bloco = { titulo: string; texto?: string; lista?: string[] };

/* -------------------------------------------------------------------- home */

export const home = {
  path: "/",
  meta: {
    title: "Dr. Manoel Carlos | Oncologista Clínico em São Paulo",
    description:
      "Oncologista clínico em São Paulo. Diagnóstico, tratamento e acompanhamento oncológico com consulta sem pressa e plano explicado com clareza. CRM-SP 139.361, RQE 39585 e 103468.",
  } satisfies Meta,

  h1: "Diagnóstico, tratamento e acompanhamento oncológico com clareza e presença humana",
  subheadline:
    "Eu sou o Dr. Manoel Carlos, oncologista clínico, e ajudo você a entender seu diagnóstico, decidir o melhor caminho de tratamento e ser acompanhado de perto em cada etapa da jornada oncológica.",

  paraQuem: {
    titulo: "Quando você deve me procurar",
    texto:
      "Receber um diagnóstico de câncer — ou apenas suspeitar dele — traz medo e muitas perguntas sem resposta. Meu trabalho é reduzir essa incerteza: explicar com clareza o que está acontecendo, apresentar as opções de tratamento e acompanhar você de perto em cada etapa, sem pressa e sem jargão técnico desnecessário.",
    cards: [
      {
        icone: "diagnostico" as const,
        texto: "Recebi um diagnóstico de câncer e não sei quais são os próximos passos",
      },
      {
        icone: "segundaOpiniao" as const,
        texto: "Quero uma segunda opinião sobre meu diagnóstico ou plano de tratamento",
      },
      {
        icone: "acompanhamento" as const,
        texto: "Estou em tratamento oncológico e preciso de acompanhamento próximo e contínuo",
      },
      {
        icone: "exames" as const,
        texto: "Tenho dúvidas sobre exames, resultados ou a evolução do meu quadro",
      },
      {
        icone: "tempo" as const,
        texto: "Busco um médico que explique cada etapa com calma, sem pressa",
      },
    ],
  },

  previa: {
    titulo: "Consulta sem pressa, com plano claro",
    texto:
      "Cada pessoa chega até mim em um momento diferente da jornada oncológica. Por isso a primeira consulta é longa o suficiente para ouvir sua história com atenção, revisar seus exames com calma e construir, junto com você, um plano de tratamento que faça sentido para a sua vida.",
    lista: [
      "Primeira consulta de 1 hora, para ouvir sua história com atenção",
      "Plano de tratamento explicado em linguagem clara, sem termos técnicos que confundem",
      "Acompanhamento contínuo, com canal direto para dúvidas entre consultas",
    ],
  },

  quemSouEu: {
    titulo: "Quem sou eu",
    texto:
      "Sou Manoel Carlos Leonardi de Azevedo Souza, médico formado pela Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP), com residência em Clínica Médica pelo Hospital das Clínicas da FMRP-USP e em Oncologia Clínica pelo Instituto do Câncer do Estado de São Paulo (ICESP-USP). Fui integrante do ASCO University Fellows Advisory Group, ligado à American Society of Clinical Oncology, e atualmente componho o Comitê Científico do Instituto Vencer o Câncer. Atuo como oncologista clínico titular do Grupo Américas/Oncologia Américas (rede DASA), atendendo nos hospitais Nove de Julho e LeForte, com 17 anos de atuação na medicina.",
    frase:
      "Acredito que tratar câncer não é só prescrever o protocolo certo — é caminhar ao lado de cada paciente com clareza, técnica sólida e humanidade.",
  },

  /** A faixa de selos logo abaixo do hero: formação e credenciais, em fatos. */
  selos: [
    { titulo: "FMRP-USP", texto: "Medicina pela Faculdade de Medicina de Ribeirão Preto da USP" },
    { titulo: "ICESP-USP", texto: "Residência em Oncologia Clínica no Instituto do Câncer do Estado de São Paulo" },
    { titulo: "ASCO", texto: "Integrante do ASCO University Fellows Advisory Group" },
    { titulo: "17 anos", texto: "De atuação na medicina, hoje na rede DASA / Oncologia Américas" },
  ],

  especialidade: {
    titulo: "Oncologia Clínica",
    chamada:
      "Diagnóstico, definição de tratamento e acompanhamento contínuo para pacientes oncológicos, com atenção a cada etapa da jornada.",
  },

  provaSocial: {
    titulo: "O que os pacientes mais valorizam",
    texto:
      "Clareza nas explicações, tempo dedicado a cada consulta e um acompanhamento próximo durante todo o tratamento são os pontos mais citados por quem já passou pelo consultório.",
    /**
     * Depoimentos autorizados, enviados pelo cliente (set/2026). Texto do
     * paciente mantido, só com acento, pontuação e a grafia do nome do médico
     * corrigidos; o "Pontos de melhoria: Nenhuma" do formulário de origem saiu.
     * Autor com nome e inicial do sobrenome — a regra da copy v2 é não
     * publicar nome completo de paciente.
     */
    itens: [
      {
        texto:
          "O Dr. Manoel é um excelente profissional, atencioso, competente! Médico detalhista que nos passa total confiança. Relação médico-paciente totalmente humanizada, médico amigo. Recomendo porque fez total diferença no meu processo pós-cirurgia e continuo o meu acompanhamento com ele. Gratidão!",
        autor: "Daniel A.",
      },
      {
        texto:
          "Dr. Manoel, você é um ser de luz! Além de fera nos diagnósticos, mesmo que ainda em consulta preliminar, é um ser humano incrível, de uma educação admirável! Siga firme no seu propósito e com a certeza de estar no caminho certo! Que Deus o abençoe sempre e tenha vida e saúde em abundância!",
        autor: "Déia C.",
      },
      {
        texto:
          "Um excelente médico e melhor oncologista. Um ser humano que cuida do paciente com carinho e dedicação. Gratidão sempre. Não há palavras para agradecer. Que Deus abençoe sempre.",
        autor: "Aline C.",
      },
      {
        texto:
          "Minha gratidão ao médico que iniciou meu tratamento contra o câncer de mama. Um profissional excepcional, humano e extremamente competente. Fui acolhida desde o início. Sou muito grata por todo cuidado e dedicação.",
        autor: "Léia A.",
      },
    ] as { texto: string; autor: string }[],
    placeholder:
      "Os depoimentos autorizados serão publicados aqui de forma anônima, respeitando o sigilo médico.",
  },

  ctaFinal: {
    titulo: "Você não precisa enfrentar isso sozinho",
    texto:
      "Agende uma consulta e tenha um plano de cuidado claro, construído com atenção à sua história e às suas dúvidas.",
  },
} as const;

/* --------------------------------------------------------- como eu cuido -- */

export const comoCuido = {
  path: "/como-eu-cuido",
  nav: "Como eu cuido",
  meta: {
    title: "Como eu cuido | Dr. Manoel Carlos, Oncologista",
    description:
      "Conheça o método de atendimento do Dr. Manoel Carlos: formação sólida em oncologia (USP, ICESP, ASCO) e acompanhamento humanizado, com tempo dedicado a cada consulta.",
  } satisfies Meta,

  h1: "Meu jeito de cuidar: técnica sólida, presença humana",
  abertura:
    "Tratar câncer exige rigor técnico — mas exige, igualmente, presença humana. Uni minha formação na FMRP-USP e no ICESP, além da experiência internacional junto à ASCO, a um jeito de atender que não abre mão do tempo necessário para ouvir, explicar e construir, junto com cada paciente, um plano de tratamento que faça sentido. Não existe protocolo genérico: existe ciência aplicada com atenção à sua história.",

  blocos: [
    {
      icone: "formacao" as const,
      titulo: "Formação e atualização constante",
      texto:
        "Graduação em Medicina pela FMRP-USP, residências em Clínica Médica (HC-FMRP-USP) e Oncologia Clínica (ICESP-USP), participação no ASCO University Fellows Advisory Group e atuação no Comitê Científico do Instituto Vencer o Câncer — uma base técnica atualizada com o que há de mais recente em oncologia.",
    },
    {
      icone: "tempo" as const,
      titulo: "Tempo dedicado a cada consulta",
      texto:
        "Primeira consulta de 1 hora, retornos de 30 minutos: tempo suficiente para revisar exames com calma, tirar dúvidas e ajustar o plano de tratamento conforme sua evolução.",
    },
    {
      icone: "acompanhamento" as const,
      titulo: "Acompanhamento contínuo",
      texto:
        "Acompanhamento próximo durante todo o tratamento, com retornos regulares para medir a resposta, ajustar a conduta e responder às dúvidas que surgem no caminho.",
    },
    {
      icone: "decisao" as const,
      titulo: "Decisões compartilhadas",
      texto:
        "Cada opção de tratamento é explicada em linguagem clara, para que a decisão sobre os próximos passos seja tomada em conjunto — você entende o porquê de cada escolha.",
    },
  ],

  ctaFinal: "Quer um acompanhamento assim para o seu tratamento?",
} as const;

/* ------------------------------------------------------ oncologia clínica -- */

export const oncologiaClinica = {
  path: "/oncologia-clinica",
  nav: "Oncologia Clínica",
  meta: {
    title: "Oncologia Clínica em São Paulo | Dr. Manoel Carlos",
    description:
      "Oncologista clínico em São Paulo. Diagnóstico, tratamento e acompanhamento oncológico com atendimento humanizado. Agende sua consulta.",
  } satisfies Meta,

  h1: "Oncologia Clínica: diagnóstico, tratamento e acompanhamento",
  abertura:
    "A Oncologia Clínica cuida do diagnóstico, da definição do tratamento sistêmico (como quimioterapia, terapias-alvo e outras modalidades, conforme cada caso) e do acompanhamento contínuo do paciente oncológico. Meu papel é coordenar essa jornada com você: interpretar exames, apresentar as opções disponíveis com clareza e acompanhar sua evolução a cada etapa.",

  queixas: {
    titulo: "Principais queixas que avalio",
    lista: [
      "Diagnóstico recente de câncer, ainda em fase de investigação ou confirmação",
      "Necessidade de uma segunda opinião sobre diagnóstico ou plano de tratamento já iniciado",
      "Dúvidas sobre exames, resultados ou evolução do quadro",
      "Acompanhamento contínuo durante e após o tratamento oncológico",
    ],
  },

  consulta: {
    titulo: "O que você pode esperar da consulta",
    texto:
      "Na primeira consulta (cerca de 1 hora), reviso seu histórico clínico e exames em detalhe, esclareço dúvidas e construo, junto com você, um plano de tratamento personalizado. Os retornos (cerca de 30 minutos) servem para acompanhar sua evolução e ajustar o que for necessário.",
  },

  acompanhamento: {
    titulo: "Acompanhamento contínuo",
    texto:
      "O acompanhamento continua durante e depois do tratamento, com retornos regulares para monitorar a evolução, ajustar a conduta e esclarecer as dúvidas que surgem no caminho.",
  },

  ctaFinal: "Precisa de acompanhamento oncológico ou de uma segunda opinião?",
} as const;

/* ---------------------------------------------------------------- jornada -- */

export const jornada = {
  path: "/jornada-do-paciente-oncologico",
  nav: "Jornada do paciente",
  meta: {
    title: "Jornada do Paciente Oncológico | Dr. Manoel Carlos",
    description:
      "Entenda as etapas da jornada de um paciente oncológico, do diagnóstico ao acompanhamento contínuo, com o Dr. Manoel Carlos, oncologista clínico em São Paulo.",
  } satisfies Meta,

  h1: "A jornada do paciente oncológico: o que esperar em cada etapa",
  abertura:
    "Receber um diagnóstico de câncer joga qualquer pessoa em um território desconhecido. Entender, ainda que de forma geral, o caminho que costuma ser percorrido — do diagnóstico ao acompanhamento de longo prazo — ajuda a reduzir a ansiedade e a tomar decisões mais informadas a cada etapa. Esta página existe para isso: mostrar, em linhas gerais, o que é essa jornada e como eu acompanho você ao longo dela.",

  oQueE: {
    titulo: "O que é a jornada oncológica?",
    texto:
      "É o conjunto de etapas que um paciente costuma percorrer desde a suspeita ou confirmação de um diagnóstico de câncer até o acompanhamento contínuo, seja durante o tratamento ativo, seja depois dele.",
  },

  porQue: {
    titulo: "Por que entender essa jornada importa?",
    lista: [
      "Reduz a ansiedade de lidar com o desconhecido",
      "Ajuda a saber quais perguntas fazer em cada etapa",
      "Permite tomar decisões mais informadas sobre o tratamento",
      "Facilita a comunicação entre paciente, família e equipe médica",
    ],
  },

  etapas: [
    {
      rotulo: "Etapa 1",
      titulo: "Diagnóstico e avaliação inicial",
      texto:
        "Revisão de exames, histórico clínico e, quando necessário, solicitação de exames complementares para confirmar e detalhar o diagnóstico.",
    },
    {
      rotulo: "Etapa 2",
      titulo: "Decisão do plano de tratamento",
      texto:
        "Apresentação das opções de tratamento disponíveis para o caso, com explicação clara de riscos, benefícios e expectativas — a decisão é sempre construída em conjunto com o paciente.",
    },
    {
      rotulo: "Etapa 3",
      titulo: "Acompanhamento durante o tratamento",
      texto:
        "Consultas de retorno para monitorar a resposta ao tratamento, ajustar condutas quando necessário e oferecer suporte às dúvidas que surgem no caminho.",
    },
    {
      rotulo: "Etapa 4",
      titulo: "Acompanhamento contínuo",
      texto:
        "Mesmo após a fase mais intensa do tratamento, o acompanhamento continua, com consultas de rotina para monitorar a evolução a longo prazo.",
    },
  ],

  segundaOpiniao: {
    titulo: "Quando buscar uma segunda opinião?",
    texto:
      "Buscar uma segunda opinião é um direito do paciente e pode trazer mais segurança na hora de decidir sobre um diagnóstico ou tratamento já indicado — é bem-vindo a qualquer momento da jornada.",
  },

  ctaFinal: "Está em alguma dessas etapas e quer conversar sobre o seu caso?",
} as const;

/* ------------------------------------------------------------- consultório */

export const consultorio = {
  path: "/onde-atendo",
  nav: "Onde atendo",
  meta: {
    title: "Onde atendo | Dr. Manoel Carlos, Oncologista",
    description:
      "Endereços e telefones dos hospitais onde o Dr. Manoel Carlos, oncologista clínico, atende em São Paulo: Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah.",
  } satisfies Meta,

  h1: "Onde atendo",
  abertura:
    "Atendo em hospitais parceiros em São Paulo. Confira abaixo o endereço e o telefone de agendamento de cada unidade.",

  hospitalar: {
    titulo: "Hospitais parceiros",
    texto: "O agendamento é feito diretamente com o hospital escolhido, pelo telefone de cada unidade:",
  },

  demais: {
    titulo: "Demais agendamentos",
    texto: "Para agendar em outra unidade ou tirar dúvidas antes de marcar, fale pelo WhatsApp:",
  },

  presencial: {
    titulo: "Atendimento presencial",
    texto: "No momento, todo o atendimento é presencial — não há teleconsulta disponível.",
  },

  ctaFinal: "Quer agendar sua consulta?",
} as const;

/* ----------------------------------------------------------------- agendar */

export const agendar = {
  path: "/agendar-consulta",
  nav: "Agendar consulta",
  meta: {
    title: "Agendar Consulta | Dr. Manoel Carlos, Oncologista",
    description:
      "Agende sua consulta com o Dr. Manoel Carlos, oncologista clínico em São Paulo, pelo WhatsApp ou e-mail.",
  } satisfies Meta,

  h1: "Agende sua consulta",
  texto:
    "Fale diretamente pelo WhatsApp para agendar sua consulta ou tirar dúvidas antes de marcar um horário.",
  alternativa: "Prefere e-mail? Escreva para",
} as const;

/* --------------------------------------------------------------------- FAQ */

export const faq = {
  path: "/perguntas-frequentes",
  nav: "Dúvidas",
  meta: {
    title: "Perguntas frequentes | Dr. Manoel Carlos, Oncologista",
    description:
      "Convênios, duração do atendimento, acompanhamento entre consultas e teleconsulta: as dúvidas mais comuns sobre a consulta com o Dr. Manoel Carlos.",
  } satisfies Meta,

  h1: "Dúvidas rápidas",

  /**
   * As perguntas da copy aprovada, na ordem original — sem "Quanto custa a
   * consulta?" e com as respostas sobre convênio e acompanhamento sem dado do
   * atendimento particular (ajuste do cliente, set/2026).
   */
  itens: [
    {
      pergunta: "O atendimento aceita convênio?",
      resposta:
        "Sim. O atendimento por convênio é feito nos hospitais parceiros (Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah). A cobertura do seu plano é confirmada no agendamento, com o hospital escolhido.",
    },
    {
      pergunta: "Quanto tempo dura a consulta?",
      resposta:
        "A primeira consulta dura cerca de 1 hora, para uma avaliação completa. Os retornos duram cerca de 30 minutos.",
    },
    {
      pergunta: "Existe acompanhamento entre as consultas?",
      resposta:
        "Sim. O acompanhamento continua entre um retorno e outro, e as dúvidas que surgem no caminho podem ser encaminhadas pelo WhatsApp de agendamento.",
    },
    {
      pergunta: "Atende por teleconsulta?",
      resposta:
        "Não. O atendimento é presencial, nos hospitais parceiros.",
    },
  ],
} as const;

/* ------------------------------------------------- páginas de área atendida */

export const saoPaulo = {
  path: "/oncologista-em-sao-paulo",
  nav: "Oncologista em SP",
  meta: {
    title: "Oncologista em São Paulo | Dr. Manoel Carlos",
    description:
      "Oncologista clínico em São Paulo, com atendimento nos hospitais Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah. Diagnóstico, tratamento e segunda opinião.",
  } satisfies Meta,
  h1: "Oncologista clínico em São Paulo",
} as const;

export const perdizes = {
  path: "/oncologia-jardim-das-perdizes",
  nav: "Jd. das Perdizes",
  meta: {
    title: "Oncologia no Jardim das Perdizes | Dr. Manoel Carlos",
    description:
      "Oncologia clínica para pacientes do Jardim das Perdizes e região: diagnóstico, tratamento de câncer e acompanhamento com o Dr. Manoel Carlos, que atende no Hospital Emunah, no bairro.",
  } satisfies Meta,
  h1: "Oncologia no Jardim das Perdizes",
} as const;

export const barraFunda = {
  path: "/oncologia-barra-funda",
  nav: "Barra Funda",
  meta: {
    title: "Oncologia na Barra Funda | Dr. Manoel Carlos",
    description:
      "Oncologista clínico para quem mora ou trabalha na Barra Funda: diagnóstico, tratamento de câncer, segunda opinião e acompanhamento contínuo com o Dr. Manoel Carlos.",
  } satisfies Meta,
  h1: "Oncologia na Barra Funda",
} as const;

export const segundaOpiniao = {
  path: "/segunda-opiniao-oncologica",
  nav: "Segunda opinião",
  meta: {
    title: "Segunda Opinião Oncológica em São Paulo | Dr. Manoel Carlos",
    description:
      "Segunda opinião sobre diagnóstico de câncer ou plano de tratamento já indicado, com revisão detalhada de exames e explicação em linguagem clara. São Paulo/SP.",
  } satisfies Meta,
  h1: "Segunda opinião oncológica",
} as const;

/** Ordem do menu principal e do rodapé. */
export const paginas = [
  home,
  comoCuido,
  oncologiaClinica,
  jornada,
  segundaOpiniao,
  consultorio,
  faq,
  agendar,
  saoPaulo,
  perdizes,
  barraFunda,
];
