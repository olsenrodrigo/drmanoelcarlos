import retrato from "@/assets/images/dr-manoel-carlos.jpg";
import retratoFechado from "@/assets/images/dr-manoel-carlos-retrato.jpg";

export type Hospital = {
  nome: string;
  rua: string;
  bairro: string;
  cep: string;
  telefone: string;
};

/**
 * Dados institucionais. Toda a copy exibida vem daqui, de `content/pages.ts`
 * (copy aprovada) ou de `content/geo.ts` (conteúdo escrito para SEO/GEO).
 */
export const site = {
  name: "Dr. Manoel Carlos — Oncologia Clínica",
  shortName: "Dr. Manoel Carlos",
  doctor: "Dr. Manoel Carlos",
  doctorFull: "Manoel Carlos Leonardi de Azevedo Souza",
  crm: "CRM-SP 139.361",
  /** RQE confirmados pelo cliente (set/2026): Clínica Médica e Oncologia Clínica. */
  rqes: [
    { numero: "39585", area: "Clínica Médica" },
    { numero: "103468", area: "Oncologia Clínica" },
  ],
  rqe: "RQE 39585 · RQE 103468",
  registro: "CRM-SP 139.361 | RQE 39585 (Clínica Médica) | RQE 103468 (Oncologia Clínica)",
  especialidade: "Oncologia Clínica",
  origin: "https://www.drmanoelcarlos.com.br",

  /** WhatsApp para os agendamentos que não são feitos direto com um hospital. */
  whatsapp: "5511992028745",
  whatsappDisplay: "(11) 99202-8745",
  whatsappRotulo: "Demais agendamentos",
  email: "drmanoelcarlosleonardi@gmail.com",

  /**
   * Redes sociais. O briefing pede redes em destaque, mas só a página do
   * Facebook foi confirmada em fonte pública (facebook.com/DrManoelCarlosLeonardi).
   * TODO: confirmar Instagram/LinkedIn com o consultório e acrescentar aqui —
   * o rodapé e a página de contato já renderizam o que estiver preenchido.
   */
  social: {
    facebook: "https://www.facebook.com/DrManoelCarlosLeonardi/",
    instagram: "",
    linkedin: "",
  },

  cidade: "São Paulo",
  estado: "SP",

  /*
   * Atendimento particular (valor, dias, horários, endereço do consultório e
   * pacote de acompanhamento) NÃO aparece no site, por decisão do cliente
   * (set/2026): esses dados são passados só ao vivo, a quem pedir, para evitar
   * conflito com a rede Américas. Não reintroduzir aqui, na copy, no geo.ts,
   * no JSON-LD nem no llms.txt.
   */

  /**
   * Hospitais onde o Dr. Manoel atende, na ordem da copy, com endereço e
   * telefone de agendamento enviados pelo cliente. O Emunah não veio com
   * endereço nem telefone: agenda pelo WhatsApp de demais agendamentos.
   */
  hospitais: [
    {
      nome: "Hospital Nove de Julho",
      rua: "Rua Peixoto Gomide, 545",
      bairro: "Cerqueira César",
      cep: "01409-002",
      telefone: "(11) 97614-9750",
    },
    {
      nome: "Hospital Samaritano Higienópolis",
      rua: "Rua Conselheiro Brotero, 1486",
      bairro: "Higienópolis",
      cep: "01232-010",
      telefone: "(11) 3821-5701",
    },
    {
      nome: "Hospital Leforte Liberdade",
      rua: "Rua Barão de Iguape, 209",
      bairro: "Liberdade",
      cep: "01507-000",
      telefone: "(11) 91306-4455",
    },
    {
      nome: "Hospital Emunah",
      rua: "",
      bairro: "Jardim das Perdizes",
      cep: "",
      telefone: "",
    },
  ] as Hospital[],

  /** Depoimentos enviados pelo cliente (set/2026) — ver `home.provaSocial`. */
  showTestimonials: true,

  ctas: {
    primary: "Agendar consulta",
    whatsapp: "Agendar pelo WhatsApp",
    secundario: "Conhecer meu jeito de cuidar",
  },

  /**
   * Só existe um ensaio do Dr. Manoel. `foto` é o retrato inteiro (hero) e
   * `fotoFechada` é o mesmo arquivo em enquadramento fechado — a diferença de
   * corte é o que evita a sensação de foto repetida ao longo do site.
   * TODO: quando houver ensaio novo (consultório, consulta, hospital), trocar
   * aqui — as seções já esperam `src`/`alt`/`width`/`height`.
   */
  foto: {
    src: retrato,
    alt: "Dr. Manoel Carlos, oncologista clínico em São Paulo, de braços cruzados em retrato profissional",
    width: 1350,
    height: 1688,
  },
  fotoFechada: {
    src: retratoFechado,
    alt: "Retrato do Dr. Manoel Carlos, oncologista clínico, CRM-SP 139.361",
    width: 750,
    height: 937,
  },
} as const;

export const telUrl = (telefone: string) => `tel:+55${telefone.replace(/\D/g, "")}`;

export const mapsUrl = (h: Hospital) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${h.nome}, ${h.rua} - ${h.bairro}, ${site.cidade} - ${site.estado}, ${h.cep}`,
  )}`;

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const agendarUrl = (contexto?: string) =>
  whatsappUrl(
    contexto
      ? `Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta — ${contexto}.`
      : "Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta.",
  );
