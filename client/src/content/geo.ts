import { site } from "@/content/site";

/**
 * Conteúdo escrito para SEO e GEO — deliberadamente separado de `content/pages.ts`.
 *
 * `pages.ts` é a copy aprovada e não se mexe sem alinhar. Tudo o que está aqui
 * foi escrito depois, para dois objetivos que a copy institucional não cobre
 * sozinha:
 *
 *  - SEO: dar corpo às páginas-alvo (`/oncologia-clinica`,
 *    `/oncologista-em-sao-paulo`, `/oncologia-jardim-das-perdizes`,
 *    `/oncologia-barra-funda`). Duas frases não rankeiam.
 *  - GEO: dar a motores generativos (ChatGPT, Claude, Perplexity, Gemini,
 *    visão geral do Google) trechos que eles conseguem citar — resposta direta
 *    na primeira frase, fato verificável, entidade nomeada.
 *
 * Restrições herdadas do briefing, válidas aqui também:
 *  - nenhuma promessa de cura, prognóstico ou taxa de sucesso;
 *  - nenhum tratamento que o consultório não realize;
 *  - nenhum dado do atendimento particular — valor, dias e horários,
 *    endereço do consultório, "só particular", pacote de acompanhamento
 *    (decisão do cliente, set/2026: passados só ao vivo, a quem pedir);
 *  - nenhum depoimento identificável.
 *
 * Este arquivo é o que o Dr. Manoel precisa revisar. O resto do SEO é estrutura.
 */

export type SecaoGeo = {
  titulo: string;
  paragrafos?: string[];
  lista?: string[];
  /** Fecha a seção com um link interno para a rota indicada. */
  linkPara?: { path: string; texto: string };
};

export type PerguntaGeo = { pergunta: string; resposta: string };

export type BlocoGeo = {
  /**
   * Resposta direta, autossuficiente, em 1–3 frases. É o trecho com maior
   * chance de ser citado literalmente por um motor generativo, então precisa
   * conter sozinho: o que é, onde é, quem responde. Sem pronome solto.
   */
  resumo: string;
  secoes?: SecaoGeo[];
  faqTitulo?: string;
  faq?: PerguntaGeo[];
};

/** Ficha em pares rótulo/valor — o formato que um motor extrai sem errar. */
export const fichaMedico = [
  { rotulo: "Nome", valor: site.doctorFull },
  { rotulo: "Especialidade", valor: "Oncologia Clínica" },
  { rotulo: "Registro", valor: site.registro },
  { rotulo: "Formação", valor: "Medicina pela FMRP-USP; residências em Clínica Médica (HC-FMRP-USP) e Oncologia Clínica (ICESP-USP)" },
  { rotulo: "Atuação", valor: "Oncologista clínico titular do Grupo Américas / Oncologia Américas (rede DASA)" },
  { rotulo: "Onde atende", valor: site.hospitais.map((h) => h.nome).join(", ") },
  { rotulo: "Convênio", valor: "Atendimento por convênio nos hospitais parceiros" },
  { rotulo: "Primeira consulta", valor: "Cerca de 1 hora" },
  { rotulo: "Retornos", valor: "Cerca de 30 minutos" },
  { rotulo: "Teleconsulta", valor: "Não disponível — todo o atendimento é presencial" },
  {
    rotulo: "Agendamento",
    valor: [
      ...site.hospitais.filter((h) => h.telefone).map((h) => `${h.nome}: ${h.telefone}`),
      `${site.whatsappRotulo}: WhatsApp ${site.whatsappDisplay}`,
    ].join(" · "),
  },
];

/* ------------------------------------------------------------------- home -- */

const HOME: BlocoGeo = {
  resumo:
    "O Dr. Manoel Carlos (Manoel Carlos Leonardi de Azevedo Souza, CRM-SP 139.361, RQE 39585 e 103468) é oncologista clínico em São Paulo. Atende nos hospitais Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah. A primeira consulta dura cerca de uma hora e termina com um plano de tratamento explicado em linguagem clara.",
  secoes: [
    {
      titulo: "O que o Dr. Manoel Carlos faz",
      paragrafos: [
        "A oncologia clínica é a especialidade que coordena o cuidado de quem tem — ou pode ter — um câncer: confirma o diagnóstico junto com os exames, define o tratamento sistêmico quando ele é indicado e acompanha a evolução do quadro ao longo do tempo. Na prática, é o médico que responde às três perguntas que mais angustiam depois de um diagnóstico: o que eu tenho, o que se faz nesse caso e o que acontece daqui para frente.",
      ],
      lista: [
        "Avaliação de diagnóstico recente de câncer, ainda em investigação ou já confirmado",
        "Segunda opinião sobre diagnóstico ou sobre um plano de tratamento já indicado",
        "Definição e coordenação do tratamento sistêmico, conforme o caso",
        "Acompanhamento durante o tratamento, com ajuste de conduta quando necessário",
        "Acompanhamento de longo prazo, depois da fase mais intensa do tratamento",
      ],
      linkPara: { path: "/oncologia-clinica", texto: "Ver a página de Oncologia Clínica" },
    },
    {
      titulo: "Como funciona o primeiro atendimento",
      paragrafos: [
        "A primeira consulta é longa de propósito. Ela existe para que a história clínica seja ouvida inteira, os exames sejam revistos com calma e as opções de tratamento sejam apresentadas com tempo para perguntas — não para entregar uma conduta pronta em quinze minutos.",
      ],
      lista: [
        "Agendamento pelo telefone do hospital escolhido ou pelo WhatsApp de demais agendamentos",
        "Consulta inicial de cerca de 1 hora, com revisão do histórico e de todos os exames trazidos",
        "Apresentação das opções de tratamento, com riscos, benefícios e expectativas explicados",
        "Plano construído em conjunto — a decisão sobre o próximo passo é compartilhada",
        "Retornos de cerca de 30 minutos para acompanhar a evolução e ajustar o que for preciso",
      ],
    },
    {
      titulo: "O que levar à primeira consulta",
      paragrafos: [
        "Quanto mais completo o material, menos tempo se gasta repetindo exame que já existe. Se algo estiver faltando, a consulta acontece do mesmo jeito: parte do trabalho é justamente identificar o que ainda precisa ser investigado.",
      ],
      lista: [
        "Laudos e imagens de exames já realizados (tomografia, ressonância, PET-CT, ultrassom)",
        "Resultado de biópsia e laudo de anatomia patológica, quando houver",
        "Exames de sangue recentes",
        "Relatórios e receitas de outros médicos que já acompanharam o caso",
        "Lista dos medicamentos em uso, incluindo os de uso contínuo",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes sobre o atendimento",
  faq: [
    {
      pergunta: "Onde o Dr. Manoel Carlos atende em São Paulo?",
      resposta:
        "O Dr. Manoel Carlos atende nos hospitais Nove de Julho (Rua Peixoto Gomide, 545, Cerqueira César), Samaritano Higienópolis (Rua Conselheiro Brotero, 1486), Leforte Liberdade (Rua Barão de Iguape, 209) e Emunah, no Jardim das Perdizes. O agendamento é feito pelo telefone de cada hospital ou, para os demais agendamentos, pelo WhatsApp (11) 99202-8745.",
    },
    {
      pergunta: "Qual a formação do Dr. Manoel Carlos?",
      resposta:
        "Manoel Carlos Leonardi de Azevedo Souza é formado em Medicina pela Faculdade de Medicina de Ribeirão Preto da USP (FMRP-USP), com residência em Clínica Médica pelo Hospital das Clínicas da FMRP-USP e em Oncologia Clínica pelo Instituto do Câncer do Estado de São Paulo (ICESP-USP). Integrou o ASCO University Fellows Advisory Group, da American Society of Clinical Oncology, e compõe o Comitê Científico do Instituto Vencer o Câncer. Registro: CRM-SP 139.361; RQE 39585 (Clínica Médica) e RQE 103468 (Oncologia Clínica).",
    },
    {
      pergunta: "Preciso de encaminhamento para marcar a primeira consulta?",
      resposta:
        "Não. A consulta pode ser marcada diretamente, pelo telefone do hospital ou pelo WhatsApp, com ou sem encaminhamento de outro médico. Se já houver relatório de um profissional que acompanhou o caso, vale levar — ele acelera a revisão do histórico.",
    },
    {
      pergunta: "O Dr. Manoel Carlos atende quem ainda não tem diagnóstico confirmado?",
      resposta:
        "Sim. Boa parte das primeiras consultas acontece na fase de investigação, quando existe uma suspeita e ainda faltam exames para confirmá-la ou afastá-la. Nesses casos, a consulta serve para organizar a investigação: revisar o que já foi feito e definir o que ainda precisa ser solicitado.",
    },
  ],
};

/* -------------------------------------------------------- oncologia clínica */

const ONCOLOGIA_CLINICA: BlocoGeo = {
  resumo:
    "Oncologia clínica é a especialidade médica que cuida do diagnóstico, do tratamento sistêmico e do acompanhamento contínuo do paciente com câncer. Em São Paulo, o Dr. Manoel Carlos (CRM-SP 139.361, RQE 39585 e 103468) conduz esse acompanhamento em consulta de cerca de uma hora na primeira avaliação, com plano de tratamento explicado em linguagem clara e decisão tomada em conjunto com o paciente.",
  secoes: [
    {
      titulo: "O que faz um oncologista clínico",
      paragrafos: [
        "O oncologista clínico é o médico que coordena o tratamento do câncer do ponto de vista sistêmico — isto é, dos tratamentos que agem no organismo como um todo, e não apenas em um ponto, como a cirurgia e a radioterapia. Cabe a ele interpretar os exames que fecham o diagnóstico, definir se há indicação de tratamento medicamentoso, escolher entre as opções disponíveis para aquele caso e acompanhar a resposta ao longo do tempo.",
        "Na prática, é também quem organiza a conversa entre as especialidades. Um mesmo caso pode envolver cirurgião, radioterapeuta, patologista e radiologista; alguém precisa reunir essas peças em um plano único e traduzi-lo para o paciente.",
      ],
    },
    {
      titulo: "Quando procurar um oncologista clínico",
      lista: [
        "Diagnóstico de câncer recém-recebido, ainda sem definição de tratamento",
        "Suspeita levantada em um exame de rotina, ainda em fase de investigação",
        "Plano de tratamento já indicado por outro serviço, com dúvida sobre a conduta",
        "Tratamento em andamento sem acompanhamento próximo o suficiente",
        "Efeitos do tratamento que estão difíceis de manejar no dia a dia",
        "Alta da fase intensa do tratamento e necessidade de seguimento de longo prazo",
      ],
      linkPara: { path: "/segunda-opiniao-oncologica", texto: "Entenda quando pedir uma segunda opinião" },
    },
    {
      titulo: "Como o tratamento é definido",
      paragrafos: [
        "Não existe protocolo genérico: dois diagnósticos com o mesmo nome podem exigir condutas diferentes conforme o subtipo do tumor, o estágio, os achados moleculares, as doenças que a pessoa já tinha antes e o que ela quer para a própria vida. Por isso a definição do tratamento vem depois da revisão completa dos exames, e não na primeira frase da consulta.",
        "As opções disponíveis para o caso são apresentadas com riscos, benefícios e expectativas — em linguagem clara, sem o jargão que faz o paciente sair da sala sem saber o que foi combinado. A decisão é tomada em conjunto.",
      ],
    },
    {
      titulo: "Acompanhamento durante e depois do tratamento",
      paragrafos: [
        "O tratamento oncológico não termina na prescrição. Os retornos existem para medir a resposta, ajustar a conduta quando ela não vem como esperado e cuidar dos efeitos que aparecem no caminho — que muitas vezes são o que mais pesa no dia a dia de quem está em tratamento.",
        "Depois da fase mais intensa, o acompanhamento segue com consultas de rotina, para monitorar a evolução a longo prazo — essa etapa é parte do tratamento, não um extra.",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes sobre oncologia clínica",
  faq: [
    {
      pergunta: "Qual a diferença entre oncologista clínico e oncologista cirúrgico?",
      resposta:
        "O oncologista clínico cuida do diagnóstico e dos tratamentos sistêmicos — aqueles que agem no organismo inteiro, como a quimioterapia e as terapias-alvo — e acompanha o paciente ao longo de toda a jornada. O oncologista cirúrgico é o especialista que opera. Nos casos em que a cirurgia é indicada, os dois trabalham juntos, e cabe ao oncologista clínico coordenar a ordem das etapas.",
    },
    {
      pergunta: "O oncologista clínico é quem define se preciso de quimioterapia?",
      resposta:
        "Sim. A indicação de tratamento sistêmico — quimioterapia, terapia-alvo e outras modalidades, conforme o caso — é do oncologista clínico, e depende do tipo e do subtipo do tumor, do estágio da doença e das condições clínicas do paciente. Nem todo diagnóstico de câncer leva à quimioterapia.",
    },
    {
      pergunta: "Quanto tempo depois do diagnóstico devo procurar um oncologista?",
      resposta:
        "O mais cedo possível. Ter uma primeira avaliação marcada organiza a investigação e evita o período de espera sem conduta definida, que costuma ser o mais angustiante. Mesmo sem todos os exames prontos, a consulta ajuda a definir o que ainda falta.",
    },
    {
      pergunta: "Preciso levar todos os exames na primeira consulta?",
      resposta:
        "Leve tudo o que tiver: laudos e imagens, resultado de biópsia, exames de sangue recentes e relatórios de outros médicos. Se faltar algum exame, a própria consulta define quais são necessários — parte do trabalho da avaliação inicial é justamente essa.",
    },
  ],
};

/* ---------------------------------------------------------- como eu cuido -- */

const COMO_CUIDO: BlocoGeo = {
  resumo:
    "O atendimento do Dr. Manoel Carlos combina formação em oncologia pela USP e pelo ICESP com consultas longas: cerca de 1 hora na primeira avaliação e 30 minutos nos retornos, tempo suficiente para revisar exames, explicar cada opção e decidir junto com o paciente. O acompanhamento continua durante e depois do tratamento, com retornos regulares.",
  secoes: [
    {
      titulo: "Por que a consulta é longa",
      paragrafos: [
        "Uma consulta oncológica curta obriga a escolher entre ouvir a história e explicar a conduta. A primeira avaliação de uma hora existe para não ter de escolher: dá para revisar o histórico inteiro, olhar os exames com calma, responder às perguntas que a pessoa trouxe anotadas e ainda combinar o próximo passo.",
        "O efeito prático aparece depois. Paciente que entendeu o plano adere melhor ao tratamento, reconhece antes o efeito que precisa ser comunicado e chega ao retorno com perguntas melhores.",
      ],
    },
    {
      titulo: "O que a decisão compartilhada significa na prática",
      paragrafos: [
        "Decidir em conjunto não é transferir a decisão para o paciente. É apresentar as opções reais para aquele caso, dizer o que a literatura mostra sobre cada uma, explicar o que muda no dia a dia de quem escolhe cada caminho — e então decidir com a pessoa, considerando o que ela valoriza.",
      ],
      lista: [
        "Cada opção é apresentada com riscos, benefícios e expectativa realista",
        "O que ainda é incerto é dito como incerto, não como certeza",
        "O plano é escrito em linguagem que a família também entende",
        "Mudanças de conduta são explicadas antes de acontecer",
      ],
      linkPara: { path: "/jornada-do-paciente-oncologico", texto: "Ver as etapas da jornada oncológica" },
    },
  ],
  faqTitulo: "Perguntas frequentes sobre o acompanhamento",
  faq: [
    {
      pergunta: "Como funciona o acompanhamento contínuo?",
      resposta:
        "Os retornos acontecem com a frequência que o tratamento pede: para medir a resposta, ajustar a conduta quando necessário e cuidar dos efeitos que aparecem no caminho. Depois da fase mais intensa, o acompanhamento segue com consultas de rotina, para monitorar a evolução a longo prazo.",
    },
    {
      pergunta: "Posso tirar dúvidas entre uma consulta e outra?",
      resposta:
        "Sim. As dúvidas entre uma consulta e outra podem ser encaminhadas pelo WhatsApp de agendamento, com resposta em horário de atendimento. Sintoma que não pode esperar deve ser levado ao pronto-atendimento do hospital.",
    },
    {
      pergunta: "A família pode participar da consulta?",
      resposta:
        "Sim, e é recomendado. Em consulta oncológica a informação é muita, e ter um acompanhante ajuda a reter o que foi combinado. O plano é explicado em linguagem que a família também entende.",
    },
  ],
};

/* ---------------------------------------------------------------- jornada -- */

const JORNADA: BlocoGeo = {
  resumo:
    "A jornada do paciente oncológico costuma ter quatro etapas: diagnóstico e avaliação inicial, decisão do plano de tratamento, acompanhamento durante o tratamento e acompanhamento contínuo de longo prazo. Entender esse percurso reduz a ansiedade do desconhecido e ajuda a saber quais perguntas fazer em cada momento — o Dr. Manoel Carlos acompanha o paciente em todas elas.",
  secoes: [
    {
      titulo: "Quanto tempo dura cada etapa",
      paragrafos: [
        "Não existe cronograma único: o tempo de cada etapa depende do tipo de tumor, do que os exames mostram e da resposta ao tratamento. O que costuma ser constante é a ordem — investigar, decidir, tratar, acompanhar — e o fato de que a última etapa não tem prazo para acabar.",
        "Vale desconfiar de quem promete data fechada logo na primeira conversa, antes de ver os exames.",
      ],
    },
    {
      titulo: "Perguntas que ajudam em cada consulta",
      paragrafos: [
        "Chegar com perguntas escritas muda a qualidade da consulta. Estas costumam abrir as conversas mais úteis:",
      ],
      lista: [
        "Qual é exatamente o diagnóstico, incluindo tipo e subtipo?",
        "Em que estágio a doença está e o que isso muda no tratamento?",
        "Quais são as opções para o meu caso e por que essa é a indicada?",
        "O que esperar de efeitos e como eles serão manejados?",
        "Como saberemos se o tratamento está funcionando, e quando?",
        "O que devo comunicar imediatamente, sem esperar o retorno?",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes sobre a jornada oncológica",
  faq: [
    {
      pergunta: "O que acontece na primeira consulta com o oncologista?",
      resposta:
        "A primeira consulta dura cerca de uma hora. Nela, o histórico clínico é revisto em detalhe, todos os exames trazidos são analisados, as dúvidas são esclarecidas e, quando já há informação suficiente, o plano de tratamento é construído em conjunto. Quando falta exame, a consulta define quais são necessários para fechar o diagnóstico.",
    },
    {
      pergunta: "O acompanhamento continua depois do fim do tratamento?",
      resposta:
        "Sim. Mesmo depois da fase mais intensa, o acompanhamento segue com consultas de rotina para monitorar a evolução a longo prazo. Essa etapa é parte do tratamento, não um extra.",
    },
    {
      pergunta: "Posso mudar de médico no meio do tratamento?",
      resposta:
        "Pode. Escolher quem conduz o próprio tratamento é um direito do paciente, e trocar de médico ou pedir uma segunda opinião não interrompe o cuidado — os relatórios e exames acompanham o paciente. O importante é que a transição seja feita com o material clínico completo em mãos.",
    },
  ],
};

/* ------------------------------------------------------- segunda opinião --- */

const SEGUNDA_OPINIAO: BlocoGeo = {
  resumo:
    "A segunda opinião oncológica é a revisão, por outro médico, de um diagnóstico de câncer ou de um plano de tratamento já indicado. É um direito do paciente e pode ser pedida a qualquer momento da jornada. Com o Dr. Manoel Carlos, em São Paulo, a revisão é feita em consulta de cerca de uma hora, com análise detalhada dos laudos e explicação em linguagem clara.",
  secoes: [
    {
      titulo: "Quando a segunda opinião faz mais diferença",
      lista: [
        "Diagnóstico recém-fechado, antes de começar qualquer tratamento",
        "Indicação de tratamento agressivo, com efeitos importantes no dia a dia",
        "Divergência entre laudos ou entre médicos que avaliaram o caso",
        "Caso raro, com subtipo pouco comum ou achado molecular incomum",
        "Tratamento em curso sem a resposta esperada",
        "Sensação de não ter entendido o plano — motivo suficiente por si só",
      ],
    },
    {
      titulo: "O que levar para uma segunda opinião",
      paragrafos: [
        "A qualidade da segunda opinião depende do material disponível. Sem os laudos originais, o que se obtém é uma conversa, não uma revisão.",
      ],
      lista: [
        "Laudo da biópsia e da anatomia patológica (e o bloco de parafina, quando solicitado)",
        "Exames de imagem com laudo e, se possível, as imagens em si",
        "Relatório do médico que acompanha o caso, com o tratamento indicado",
        "Exames de sangue recentes e lista de medicamentos em uso",
      ],
      linkPara: { path: "/agendar-consulta", texto: "Agendar uma segunda opinião" },
    },
    {
      titulo: "O que esperar do resultado",
      paragrafos: [
        "Na maior parte das vezes, a segunda opinião confirma a conduta indicada — e esse resultado tem valor: começar um tratamento pesado com segurança sobre a decisão muda a forma de atravessá-lo. Quando a revisão aponta uma alternativa, ela é apresentada com os motivos, e a decisão final continua sendo do paciente, junto com o médico que ele escolher para conduzir o caso.",
        "Pedir uma segunda opinião não é desconfiança do primeiro médico, e não obriga a trocar de profissional.",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes sobre segunda opinião",
  faq: [
    {
      pergunta: "Preciso avisar o médico que já me acompanha?",
      resposta:
        "Não é obrigatório, mas facilita: o relatório dele é parte do material que a revisão analisa. Pedir uma segunda opinião é prática comum em oncologia e não rompe o vínculo com o médico que conduz o caso.",
    },
    {
      pergunta: "A segunda opinião atrasa o início do tratamento?",
      resposta:
        "Em geral, não. A avaliação costuma ser marcada em poucos dias e, quando o caso exige início rápido, isso é dito na própria consulta. O risco maior costuma ser começar um tratamento pesado com uma dúvida não resolvida.",
    },
    {
      pergunta: "A segunda opinião é feita pelo convênio?",
      resposta:
        "Pelo convênio, a avaliação pode ser feita nos hospitais parceiros — Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah. A cobertura do plano é confirmada no agendamento, com o hospital escolhido.",
    },
  ],
};

/* -------------------------------------------------------------- onde atendo */

const ONDE_ATENDO: BlocoGeo = {
  resumo:
    "O Dr. Manoel Carlos atende em quatro hospitais de São Paulo: Hospital Nove de Julho (Rua Peixoto Gomide, 545 — Cerqueira César; agendamento (11) 97614-9750), Hospital Samaritano Higienópolis (Rua Conselheiro Brotero, 1486; (11) 3821-5701), Hospital Leforte Liberdade (Rua Barão de Iguape, 209; (11) 91306-4455) e Hospital Emunah, no Jardim das Perdizes. Demais agendamentos pelo WhatsApp (11) 99202-8745. Todo o atendimento é presencial: não há teleconsulta.",
  secoes: [
    {
      titulo: "Como escolher o hospital",
      paragrafos: [
        "A conduta médica é a mesma em qualquer uma das unidades. O que costuma decidir é o convênio — cada hospital tem a própria lista de planos aceitos — e a distância de casa, que pesa mais do que parece quando o tratamento exige retornos frequentes.",
        "Na dúvida, o WhatsApp de demais agendamentos ajuda a indicar a unidade que faz mais sentido para o seu caso.",
      ],
      linkPara: { path: "/perguntas-frequentes", texto: "Ver dúvidas sobre convênio e consulta" },
    },
  ],
  faqTitulo: "Perguntas frequentes sobre locais de atendimento",
  faq: [
    {
      pergunta: "Quais hospitais o Dr. Manoel Carlos atende?",
      resposta:
        "Hospital Nove de Julho, Hospital Samaritano Higienópolis, Hospital Leforte Liberdade e Hospital Emunah, todos em São Paulo.",
    },
    {
      pergunta: "Como agendar em cada hospital?",
      resposta:
        "Pelo telefone de cada unidade: Hospital Nove de Julho, (11) 97614-9750; Hospital Samaritano Higienópolis, (11) 3821-5701; Hospital Leforte Liberdade, (11) 91306-4455. Os demais agendamentos, incluindo o Hospital Emunah, são feitos pelo WhatsApp (11) 99202-8745.",
    },
    {
      pergunta: "Há atendimento por teleconsulta?",
      resposta: "Não. Todo o atendimento é presencial, nos hospitais parceiros.",
    },
  ],
};

/* ----------------------------------------------------- oncologista em SP --- */

const SAO_PAULO: BlocoGeo = {
  resumo:
    "O Dr. Manoel Carlos é oncologista clínico em São Paulo (CRM-SP 139.361, RQE 39585 e 103468), com formação pela FMRP-USP e residência em Oncologia Clínica pelo ICESP-USP. Atende em quatro hospitais da capital: Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah.",
  secoes: [
    {
      titulo: "Atendimento na capital paulista",
      paragrafos: [
        "São Paulo concentra boa parte dos serviços de oncologia do país, o que é uma vantagem e um problema: há onde tratar, mas escolher fica difícil. O critério que costuma importar mais depois do primeiro susto não é a lista de aparelhos, e sim quem vai atender o telefone quando surgir um efeito às onze da noite.",
        "O atendimento é pensado justamente para isso: consultas longas, acompanhamento próximo e um canal direto para as dúvidas que aparecem entre um retorno e outro.",
      ],
      lista: [
        "Quatro hospitais parceiros: Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah",
        "Primeira consulta de cerca de 1 hora; retornos de cerca de 30 minutos",
        "Acompanhamento durante e depois do tratamento",
        "Atendimento presencial — não há teleconsulta",
      ],
    },
    {
      titulo: "Regiões de onde chegam os pacientes",
      paragrafos: [
        "Os quatro hospitais parceiros cobrem regiões diferentes da cidade — Cerqueira César, Higienópolis, Liberdade e Jardim das Perdizes, na região da Barra Funda —, o que costuma resolver o deslocamento para quem mora ou trabalha na zona oeste e na área central. Também chegam pacientes da região metropolitana, em especial de Osasco, Barueri, Guarulhos e do ABC.",
      ],
      linkPara: { path: "/onde-atendo", texto: "Ver todos os locais de atendimento" },
    },
  ],
  faqTitulo: "Perguntas frequentes sobre atendimento em São Paulo",
  faq: [
    {
      pergunta: "Como escolher um oncologista em São Paulo?",
      resposta:
        "Confira o registro de especialista (o RQE, que comprova a especialidade junto ao CRM), a formação e onde o médico atende. Depois, avalie o formato do acompanhamento: quanto tempo dura a consulta, quem responde entre um retorno e outro e se o plano é explicado de um jeito que dê para entender e decidir junto. Em oncologia, o acompanhamento pesa tanto quanto a indicação inicial.",
    },
    {
      pergunta: "O Dr. Manoel Carlos atende pacientes de fora de São Paulo?",
      resposta:
        "Sim, inclusive para segunda opinião. Como não há teleconsulta, a avaliação é presencial — o que costuma ser resolvido concentrando a revisão dos exames em uma única consulta longa, marcada com antecedência.",
    },
  ],
};

/* --------------------------------------------------- Jardim das Perdizes --- */

const PERDIZES: BlocoGeo = {
  resumo:
    "Quem mora no Jardim das Perdizes e procura um oncologista pode ser atendido pelo Dr. Manoel Carlos no próprio bairro: ele integra o corpo clínico do Hospital Emunah, no Jardim das Perdizes, além de atender em outros três hospitais parceiros em São Paulo. A consulta inicial dura cerca de uma hora e cobre diagnóstico, definição de tratamento e acompanhamento.",
  secoes: [
    {
      titulo: "Oncologia no bairro, sem atravessar a cidade",
      paragrafos: [
        "O Jardim das Perdizes é um bairro planejado na região da Barra Funda, zona oeste de São Paulo, entre a Água Branca e a Marginal Tietê. Para quem mora ali, a diferença prática de tratar perto de casa aparece na rotina do tratamento oncológico: consulta de retorno, exame de controle e ajuste de conduta acontecem muitas vezes, e cada deslocamento longo pesa mais quando se está em tratamento.",
        "O Hospital Emunah, um dos quatro hospitais parceiros onde o Dr. Manoel Carlos atende, fica no próprio Jardim das Perdizes. É o endereço mais próximo para moradores do bairro e do entorno imediato — Água Branca, Barra Funda e Pompeia.",
      ],
      lista: [
        "Diagnóstico e investigação de suspeita de câncer",
        "Definição do tratamento sistêmico, quando indicado",
        "Segunda opinião sobre diagnóstico ou plano já indicado",
        "Acompanhamento durante e depois do tratamento",
      ],
      linkPara: { path: "/oncologia-clinica", texto: "Entenda o que a oncologia clínica cobre" },
    },
    {
      titulo: "Jardim das Perdizes e Perdizes não são o mesmo bairro",
      paragrafos: [
        "A confusão é comum e atrapalha na hora de procurar atendimento. Perdizes é o bairro tradicional da zona oeste, ao redor da PUC-SP e da Rua Cardoso de Almeida. O Jardim das Perdizes é um bairro planejado bem mais recente, erguido na antiga área industrial da Barra Funda, com acesso pela Avenida Marquês de São Vicente. São regiões vizinhas, mas distintas — e o Hospital Emunah fica no Jardim das Perdizes.",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes — Jardim das Perdizes",
  faq: [
    {
      pergunta: "Existe oncologista no Jardim das Perdizes?",
      resposta:
        "Sim. O Dr. Manoel Carlos, oncologista clínico (CRM-SP 139.361, RQE 39585 e 103468), atende no Hospital Emunah, que fica no Jardim das Perdizes, em São Paulo. Ele também atende nos hospitais Nove de Julho, Samaritano Higienópolis e Leforte Liberdade.",
    },
    {
      pergunta: "Onde fazer tratamento de câncer perto do Jardim das Perdizes?",
      resposta:
        "O Hospital Emunah, no próprio Jardim das Perdizes, é o endereço mais próximo para moradores do bairro e da região da Barra Funda e da Água Branca. O acompanhamento com o Dr. Manoel Carlos também pode ser feito nos outros hospitais parceiros, conforme o convênio e a preferência do paciente.",
    },
    {
      pergunta: "O Jardim das Perdizes fica na Barra Funda?",
      resposta:
        "Sim. O Jardim das Perdizes é um bairro planejado erguido na região da Barra Funda, zona oeste de São Paulo, na antiga área industrial próxima à Água Branca e à Marginal Tietê. Não deve ser confundido com Perdizes, bairro tradicional vizinho, ao redor da PUC-SP.",
    },
  ],
};

/* ------------------------------------------------------------- Barra Funda */

const BARRA_FUNDA: BlocoGeo = {
  resumo:
    "Para quem mora ou trabalha na Barra Funda, o Dr. Manoel Carlos é oncologista clínico com atendimento na região: ele integra o corpo clínico do Hospital Emunah, no Jardim das Perdizes — bairro dentro da própria Barra Funda —, além de outros três hospitais parceiros em São Paulo. Atende diagnóstico, definição de tratamento, segunda opinião e acompanhamento contínuo.",
  secoes: [
    {
      titulo: "Atendimento oncológico na região da Barra Funda",
      paragrafos: [
        "A Barra Funda é um dos maiores nós de circulação de São Paulo: o Terminal Intermodal Palmeiras-Barra Funda concentra metrô, trem e ônibus intermunicipais, e a região é acessível de praticamente toda a zona oeste e do interior. Para tratamento oncológico, isso importa mais do que parece — o paciente em tratamento faz esse trajeto muitas vezes, às vezes acompanhado, às vezes cansado depois de uma sessão.",
        "O atendimento na região acontece no Hospital Emunah, no Jardim das Perdizes, dentro da própria Barra Funda. Moradores da Água Branca, da Pompeia, da Lapa, de Perdizes e da Vila Leopoldina chegam ali sem atravessar o centro.",
      ],
      lista: [
        "Primeira avaliação com revisão completa dos exames trazidos",
        "Plano de tratamento explicado em linguagem clara, decidido em conjunto",
        "Retornos para acompanhar a resposta e ajustar a conduta",
        "Acompanhamento de longo prazo, depois da fase mais intensa do tratamento",
      ],
      linkPara: { path: "/oncologia-jardim-das-perdizes", texto: "Ver a página do Jardim das Perdizes" },
    },
    {
      titulo: "O que fazer diante de uma suspeita",
      paragrafos: [
        "Nem toda alteração em exame é câncer, e a maior parte das suspeitas se resolve na investigação. O que costuma custar caro é o intervalo entre o achado e a primeira avaliação especializada — o período em que a pessoa fica pesquisando sozinha, sem alguém para dizer o que aquele laudo significa.",
        "Uma consulta com oncologista clínico nessa fase serve para organizar a investigação: revisar o que já foi feito, definir o que ainda falta e dar um horizonte de tempo.",
      ],
    },
  ],
  faqTitulo: "Perguntas frequentes — Barra Funda",
  faq: [
    {
      pergunta: "Onde encontrar um oncologista na Barra Funda?",
      resposta:
        "O Dr. Manoel Carlos, oncologista clínico (CRM-SP 139.361, RQE 39585 e 103468), atende no Hospital Emunah, no Jardim das Perdizes, bairro que fica na região da Barra Funda, em São Paulo. Também atende nos hospitais Nove de Julho, Samaritano Higienópolis e Leforte Liberdade.",
    },
    {
      pergunta: "Onde tratar câncer na região da Barra Funda?",
      resposta:
        "Na região, o atendimento oncológico do Dr. Manoel Carlos acontece no Hospital Emunah, no Jardim das Perdizes. É o endereço mais próximo para quem mora na Barra Funda, na Água Branca, na Pompeia e na Lapa, com acesso pelo Terminal Palmeiras-Barra Funda.",
    },
    {
      pergunta: "Como agendar uma consulta no Hospital Emunah?",
      resposta: `Pelo WhatsApp de demais agendamentos, ${site.whatsappDisplay}. O mesmo contato ajuda a indicar outra unidade, se ela fizer mais sentido para o seu convênio ou para o deslocamento.`,
    },
  ],
};

/* --------------------------------------------------------------- agendar -- */

const AGENDAR: BlocoGeo = {
  resumo: `Para agendar consulta com o Dr. Manoel Carlos, oncologista clínico em São Paulo, ligue para o hospital escolhido — Nove de Julho (11) 97614-9750, Samaritano Higienópolis (11) 3821-5701 ou Leforte Liberdade (11) 91306-4455. Os demais agendamentos são feitos pelo WhatsApp ${site.whatsappDisplay} ou pelo e-mail ${site.email}.`,
};

/* -------------------------------------------------------------------- FAQ -- */

const FAQ_PAGINA: BlocoGeo = {
  resumo:
    "A primeira consulta com o Dr. Manoel Carlos dura cerca de uma hora; os retornos, cerca de 30 minutos. O atendimento por convênio é feito nos hospitais Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah. Não há teleconsulta: todo o atendimento é presencial.",
  faqTitulo: "Outras dúvidas frequentes",
  faq: [
    {
      pergunta: "Como agendo uma consulta?",
      resposta: `Pelo telefone do hospital escolhido — Nove de Julho (11) 97614-9750, Samaritano Higienópolis (11) 3821-5701 ou Leforte Liberdade (11) 91306-4455. Os demais agendamentos são feitos pelo WhatsApp ${site.whatsappDisplay} ou pelo e-mail ${site.email}.`,
    },
    {
      pergunta: "O que acontece na primeira consulta?",
      resposta:
        "Revisão do histórico clínico e dos exames trazidos, esclarecimento das dúvidas e construção do plano de tratamento, em cerca de uma hora. Quando falta exame, a consulta define quais são necessários.",
    },
    {
      pergunta: "Qual a diferença entre a primeira consulta e o retorno?",
      resposta:
        "A primeira consulta dura cerca de uma hora porque inclui a avaliação completa: história clínica, revisão de todos os exames e definição do plano. Os retornos duram cerca de 30 minutos e servem para acompanhar a evolução, avaliar a resposta ao tratamento e ajustar a conduta quando necessário.",
    },
    {
      pergunta: "Em quanto tempo consigo ser atendido?",
      resposta:
        "Depende da agenda de cada hospital, e casos em investigação são priorizados sempre que possível. A disponibilidade é informada no próprio contato de agendamento.",
    },
  ],
};

/* ------------------------------------------------------------------ mapa -- */

const porRota: Record<string, BlocoGeo> = {
  "/": HOME,
  "/oncologia-clinica": ONCOLOGIA_CLINICA,
  "/como-eu-cuido": COMO_CUIDO,
  "/jornada-do-paciente-oncologico": JORNADA,
  "/segunda-opiniao-oncologica": SEGUNDA_OPINIAO,
  "/onde-atendo": ONDE_ATENDO,
  "/oncologista-em-sao-paulo": SAO_PAULO,
  "/oncologia-jardim-das-perdizes": PERDIZES,
  "/oncologia-barra-funda": BARRA_FUNDA,
  "/perguntas-frequentes": FAQ_PAGINA,
  "/agendar-consulta": AGENDAR,
};

export const geoDaRota = (path: string): BlocoGeo | undefined => porRota[path];

export const perguntasDaRota = (path: string): PerguntaGeo[] => porRota[path]?.faq ?? [];
