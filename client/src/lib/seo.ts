import { useEffect } from "react";
import { site } from "@/content/site";
import type { Meta } from "@/content/pages";
import {
  bairrosAtendidos,
  chavesDaRota,
  cidadesAtendidas,
  todasAsChaves,
  topicosDoMedico,
  variantesDeMarca,
} from "@/content/palavras-chave";
import { geoDaRota, type PerguntaGeo } from "@/content/geo";

const ID_JSONLD = "seo-jsonld";

function tag(seletor: string, cria: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(seletor);
  if (!el) {
    el = cria();
    document.head.appendChild(el);
  }
  return el;
}

function meta(atributo: "name" | "property", chave: string, valor: string) {
  const el = tag(`meta[${atributo}="${chave}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(atributo, chave);
    return m;
  });
  el.setAttribute("content", valor);
}

export const urlDaRota = (path: string) => `${site.origin}${path === "/" ? "" : path}`;

/** Aplica title, description, canonical, Open Graph e JSON-LD da rota atual. */
export function useSeo(dados: Meta & { path: string; jsonLd?: unknown }) {
  const { title, description, path } = dados;
  const jsonLd = dados.jsonLd ? JSON.stringify(dados.jsonLd) : null;

  useEffect(() => {
    const url = urlDaRota(path);
    document.title = title;
    meta("name", "description", description);
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:url", url);
    meta("property", "og:type", "website");
    meta("property", "og:locale", "pt_BR");
    meta("property", "og:site_name", site.name);
    meta("property", "og:image", `${site.origin}/opengraph.jpg`);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", description);
    meta("name", "twitter:image", `${site.origin}/opengraph.jpg`);

    const chaves = chavesDaRota(path);
    if (chaves.length) meta("name", "keywords", chaves.join(", "));

    const canonical = tag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.rel = "canonical";
      return l;
    }) as HTMLLinkElement;
    canonical.href = url;
  }, [title, description, path]);

  useEffect(() => {
    document.getElementById(ID_JSONLD)?.remove();
    if (!jsonLd) return;
    const script = document.createElement("script");
    script.id = ID_JSONLD;
    script.type = "application/ld+json";
    script.textContent = jsonLd;
    document.head.appendChild(script);
    return () => script.remove();
  }, [jsonLd]);
}

/* ------------------------------------------------------------------ dados -- */

/** Um único @id por entidade em todas as páginas — consolida o grafo. */
const ID_CONSULTORIO = `${site.origin}/#consultorio`;
const ID_PESSOA = `${site.origin}/#manoel-carlos`;
const ID_SITE = `${site.origin}/#site`;

/**
 * Data da última revisão clínica do conteúdo, em `lastReviewed`.
 *
 * Conteúdo de oncologia é YMYL ("your money or your life") — o Google pesa
 * quem revisou e quando. Atualizar sempre que o Dr. Manoel revisar os textos;
 * uma data velha aqui é pior que nenhuma, então não deixar apodrecer.
 */
const DATA_REVISAO = "2026-09-29";

/**
 * Endereço: só a cidade. O consultório particular não é divulgado no site
 * (decisão do cliente, set/2026) — nem endereço, nem horário, nem valor. Os
 * endereços completos declarados são os dos hospitais, logo abaixo.
 */
const enderecoPostal = {
  "@type": "PostalAddress",
  addressLocality: site.cidade,
  addressRegion: site.estado,
  addressCountry: "BR",
};

/** Hospitais onde o Dr. Manoel atende, como entidades próprias, com endereço e telefone. */
const hospitais = site.hospitais.map((h) => ({
  "@type": "Hospital",
  name: h.nome,
  ...(h.telefone ? { telephone: `+55 ${h.telefone}` } : {}),
  address: {
    "@type": "PostalAddress",
    ...(h.rua ? { streetAddress: h.rua, postalCode: h.cep } : {}),
    addressLocality: `${h.bairro}, ${site.cidade}`,
    addressRegion: site.estado,
    addressCountry: "BR",
  },
}));

/**
 * Área atendida: municípios como `City` e bairros como `Place`.
 *
 * Bairro não é cidade — declarar "Barra Funda" como `City` faz o validador
 * aceitar e o buscador desconfiar. `Place` com `containedInPlace` diz a coisa
 * certa: é um lugar dentro do município de São Paulo.
 */
const areaAtendida = [
  ...cidadesAtendidas.map((cidade) => ({
    "@type": "City",
    name: cidade,
    addressRegion: "SP",
    addressCountry: "BR",
  })),
  ...bairrosAtendidos.map((bairro) => ({
    "@type": "Place",
    name: bairro,
    containedInPlace: { "@type": "City", name: "São Paulo", addressRegion: "SP" },
  })),
];

export const pessoaSchema = {
  "@type": "Physician",
  "@id": ID_PESSOA,
  name: site.doctorFull,
  alternateName: variantesDeMarca,
  honorificPrefix: "Dr.",
  jobTitle: "Oncologista Clínico",
  medicalSpecialty: "https://schema.org/Oncologic",
  identifier: [
    { "@type": "PropertyValue", propertyID: "CRM", value: "CRM-SP 139.361" },
    ...site.rqes.map((r) => ({
      "@type": "PropertyValue",
      propertyID: "RQE",
      name: r.area,
      value: `RQE ${r.numero}`,
    })),
  ],
  url: site.origin,
  image: `${site.origin}/opengraph.jpg`,
  worksFor: { "@id": ID_CONSULTORIO },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Faculdade de Medicina de Ribeirão Preto da Universidade de São Paulo (FMRP-USP)",
      sameAs: "https://pt.wikipedia.org/wiki/Faculdade_de_Medicina_de_Ribeirão_Preto",
    },
    {
      "@type": "MedicalOrganization",
      name: "Instituto do Câncer do Estado de São Paulo (ICESP-USP)",
      sameAs: "https://pt.wikipedia.org/wiki/Instituto_do_Câncer_do_Estado_de_São_Paulo",
    },
  ],
  memberOf: [
    { "@type": "Organization", name: "American Society of Clinical Oncology (ASCO)", sameAs: "https://www.asco.org/" },
    { "@type": "Organization", name: "Instituto Vencer o Câncer — Comitê Científico" },
  ],
  affiliation: hospitais,
  knowsAbout: topicosDoMedico,
  knowsLanguage: ["pt-BR", "en"],
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin].filter(Boolean),
};

/** Entidade do consultório — base do schema de todas as páginas. */
export const consultorioSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": ID_CONSULTORIO,
  name: site.name,
  alternateName: variantesDeMarca,
  description:
    "Oncologia clínica em São Paulo/SP. Diagnóstico, definição de tratamento sistêmico, segunda opinião e acompanhamento contínuo do paciente oncológico, com o Dr. Manoel Carlos (CRM-SP 139.361, RQE 39585 e 103468), nos hospitais Nove de Julho, Samaritano Higienópolis, Leforte Liberdade e Emunah.",
  url: site.origin,
  image: `${site.origin}/opengraph.jpg`,
  logo: `${site.origin}/favicon.png`,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  founder: { "@id": ID_PESSOA },
  employee: { "@id": ID_PESSOA },
  address: enderecoPostal,
  areaServed: areaAtendida,
  // `knowsAbout` = tópicos; `keywords` = termos de busca. Trocar os dois de
  // lugar é o erro mais comum de JSON-LD em site de consultório.
  knowsAbout: topicosDoMedico,
  keywords: todasAsChaves.join(", "),
  medicalSpecialty: "https://schema.org/Oncologic",
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Consulta oncológica",
      description:
        "Primeira avaliação de cerca de 1 hora, com revisão de histórico e exames e construção do plano de tratamento.",
      url: urlDaRota("/oncologia-clinica"),
    },
    {
      "@type": "MedicalProcedure",
      name: "Segunda opinião oncológica",
      description:
        "Revisão de diagnóstico de câncer ou de plano de tratamento já indicado, com análise detalhada dos laudos.",
      url: urlDaRota("/segunda-opiniao-oncologica"),
    },
    {
      "@type": "MedicalProcedure",
      name: "Acompanhamento oncológico contínuo",
      description:
        "Acompanhamento durante e depois do tratamento, com retornos regulares para monitorar a evolução e ajustar a conduta.",
      url: urlDaRota("/como-eu-cuido"),
    },
  ],
  location: hospitais,
  isAcceptingNewPatients: true,
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin].filter(Boolean),
};

export const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": ID_SITE,
  url: site.origin,
  name: site.name,
  inLanguage: "pt-BR",
  publisher: { "@id": ID_CONSULTORIO },
};

export const faqSchema = (itens: PerguntaGeo[], path?: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...(path ? { "@id": `${urlDaRota(path)}#faq` } : {}),
  inLanguage: "pt-BR",
  about: { "@id": ID_CONSULTORIO },
  mainEntity: itens.map((item) => ({
    "@type": "Question",
    name: item.pergunta,
    acceptedAnswer: { "@type": "Answer", text: item.resposta },
  })),
});

/**
 * A página como entidade própria, com quem a revisou e quando.
 *
 * `MedicalWebPage` + `reviewedBy` + `lastReviewed` é o par que sinaliza autoria
 * clínica em conteúdo de saúde. Sem isso, o texto é só texto: o buscador não
 * tem como saber que um oncologista inscrito no CRM respondeu por ele. O
 * `description` usa o resumo do bloco GEO quando existe — é a frase escrita
 * justamente para ser citada.
 */
export const paginaSchema = (
  path: string,
  title: string,
  description: string,
  { medica = true }: { medica?: boolean } = {},
) => {
  const url = urlDaRota(path);
  const geo = geoDaRota(path);
  return {
    "@type": medica ? "MedicalWebPage" : "WebPage",
    "@id": `${url}#pagina`,
    url,
    name: title,
    description: geo?.resumo ?? description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": ID_SITE },
    about: { "@id": ID_CONSULTORIO },
    primaryImageOfPage: `${site.origin}/opengraph.jpg`,
    lastReviewed: DATA_REVISAO,
    reviewedBy: { "@id": ID_PESSOA },
    publisher: { "@id": ID_CONSULTORIO },
    ...(medica ? { audience: { "@type": "Patient" } } : {}),
  };
};

/** Reflete as migalhas visuais — ajuda o Google a montar a trilha. */
export const trilhaSchema = (itens: { path: string; nome: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ path: "/", nome: "Início" }, ...itens].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.nome,
    item: urlDaRota(item.path),
  })),
});

/**
 * Junta vários schemas num @graph só. Achata partes que já são um @graph —
 * um nó "@graph dentro de @graph" fica sem @type e os validadores ignoram
 * tudo que estiver dentro dele.
 */
export const grafo = (...partes: unknown[]) => {
  const nos: Record<string, unknown>[] = [];
  const achatar = (parte: unknown) => {
    const { "@context": _ignorado, ...resto } = parte as Record<string, unknown>;
    if (Array.isArray(resto["@graph"])) {
      (resto["@graph"] as unknown[]).forEach(achatar);
      return;
    }
    nos.push(resto);
  };
  partes.forEach(achatar);
  // o mesmo @id pode chegar por caminhos diferentes (o consultório, por exemplo)
  const vistos = new Set<string>();
  const unicos = nos.filter((no) => {
    const id = typeof no["@id"] === "string" ? (no["@id"] as string) : null;
    if (!id) return true;
    if (vistos.has(id)) return false;
    vistos.add(id);
    return true;
  });
  return { "@context": "https://schema.org", "@graph": unicos };
};
