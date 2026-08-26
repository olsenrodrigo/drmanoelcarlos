import retrato from "@/assets/images/dr-manoel-carlos.jpg";
import retratoFechado from "@/assets/images/dr-manoel-carlos-retrato.jpg";

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
  rqe: "RQE 103468",
  registro: "CRM-SP 139.361 | RQE 103468 (Oncologia Clínica)",
  especialidade: "Oncologia Clínica",
  origin: "https://www.drmanoelcarlos.com.br",

  whatsapp: "5511992028745",
  whatsappDisplay: "(11) 99202-8745",
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

  /**
   * Consultório particular. O endereço não veio no onboarding ("[a definir]"
   * na copy) e por isso NÃO é exibido em lugar nenhum do site — endereço
   * errado em ficha de saúde é pior que endereço ausente.
   * TODO: preencher `street`/`district`/`zip`, ligar `enderecoConfirmado` e
   * revisar o JSON-LD em `lib/seo.ts` (address + geo) antes de publicar.
   * Pista para conferir: diretórios médicos ainda listam "Alameda Santos, 211
   * — Paraíso" (endereço antigo, não confirmado pelo cliente).
   */
  enderecoConfirmado: false,
  address: {
    street: "",
    district: "",
    city: "São Paulo",
    state: "SP",
    zip: "",
    mapsUrl: "",
  },

  /** Consultório particular: dias e horários confirmados na copy. */
  hours: "Terças-feiras, das 19h às 21h, e sextas-feiras, das 13h às 17h",
  hoursCurto: "Terças, 19h–21h · Sextas, 13h–17h",

  /**
   * Hospitais parceiros (atendimento por convênio), na ordem da copy.
   * O bairro só aparece quando é verificável — no nome da própria unidade
   * (Samaritano Higienópolis, Leforte Liberdade) ou em fonte pública.
   */
  hospitais: [
    { nome: "Hospital Nove de Julho", bairro: "Jardim Paulista" },
    { nome: "Hospital Samaritano Higienópolis", bairro: "Higienópolis" },
    { nome: "Hospital Leforte Liberdade", bairro: "Liberdade" },
    { nome: "Hospital Emunah", bairro: "Jardim das Perdizes" },
  ],

  valorConsulta: "R$ 870",

  /** Depoimentos autorizados existem, mas os textos não foram enviados. */
  showTestimonials: false,

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

export const whatsappUrl = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const agendarUrl = (contexto?: string) =>
  whatsappUrl(
    contexto
      ? `Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta — ${contexto}.`
      : "Olá, Dr. Manoel Carlos! Vim pelo site e gostaria de agendar uma consulta.",
  );
