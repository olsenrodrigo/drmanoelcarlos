import retrato from "@/assets/images/dr-manoel-carlos.jpg";
import retratoFechado from "@/assets/images/dr-manoel-carlos-retrato.jpg";
import emunahRecepcao from "@/assets/images/emunah-recepcao.jpg";
import emunahEspera from "@/assets/images/emunah-sala-de-espera.jpg";
import emunahConsultorio1 from "@/assets/images/emunah-consultorio-1.jpg";
import emunahConsultorio2 from "@/assets/images/emunah-consultorio-2.jpg";

export type Hospital = {
  nome: string;
  /** Razão/nome oficial, quando difere do nome pelo qual o local é conhecido. */
  nomeOficial?: string;
  /** Tipo schema.org: o Emunah é clínica, não hospital. */
  tipo: "Hospital" | "MedicalClinic";
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
   * Locais onde o Dr. Manoel atende, na ordem da copy, com endereço e
   * telefone de agendamento enviados pelo cliente. O Emunah é o EMNH Instituto
   * de Medicina (clínica, não hospital): endereço e telefone tirados do site do
   * próprio instituto (emnhinstituto.com.br); CEP conferido no ViaCEP.
   */
  hospitais: [
    {
      nome: "Hospital Nove de Julho",
      tipo: "Hospital",
      rua: "Rua Peixoto Gomide, 545",
      bairro: "Cerqueira César",
      cep: "01409-002",
      telefone: "(11) 97614-9750",
    },
    {
      nome: "Hospital Samaritano Higienópolis",
      tipo: "Hospital",
      rua: "Rua Conselheiro Brotero, 1486",
      bairro: "Higienópolis",
      cep: "01232-010",
      telefone: "(11) 3821-5701",
    },
    {
      nome: "Hospital Leforte Liberdade",
      tipo: "Hospital",
      rua: "Rua Barão de Iguape, 209",
      bairro: "Liberdade",
      cep: "01507-000",
      telefone: "(11) 91306-4455",
    },
    {
      nome: "Instituto Emunah",
      nomeOficial: "EMNH Instituto de Medicina",
      tipo: "MedicalClinic",
      rua: "Av. Marquês de São Vicente, 2219 — Conj. 316",
      bairro: "Jardim das Perdizes",
      cep: "05036-040",
      telefone: "(11) 3615-2474",
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

  /**
   * Fotos do Instituto Emunah — tiradas do site do próprio instituto, a
   * pedido do cliente, no lugar das fotos de consultório particular.
   */
  fotosEmunah: [
    { src: emunahRecepcao, alt: "Recepção do Instituto Emunah, no Jardim das Perdizes", width: 742, height: 495 },
    { src: emunahEspera, alt: "Sala de espera do Instituto Emunah, com poltronas e jardim vertical", width: 1280, height: 860 },
    { src: emunahConsultorio1, alt: "Consultório do Instituto Emunah", width: 1252, height: 877 },
    { src: emunahConsultorio2, alt: "Consultório do Instituto Emunah com mesa de atendimento", width: 1280, height: 854 },
  ],
} as const;

export const telUrl = (telefone: string) => `tel:+55${telefone.replace(/\D/g, "")}`;

export const mapsUrl = (h: Hospital) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${h.nomeOficial ?? h.nome}, ${h.rua} - ${h.bairro}, ${site.cidade} - ${site.estado}, ${h.cep}`,
  )}`;

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const agendarUrl = (contexto?: string) =>
  whatsappUrl(
    contexto
      ? `Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta — ${contexto}.`
      : "Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta.",
  );
