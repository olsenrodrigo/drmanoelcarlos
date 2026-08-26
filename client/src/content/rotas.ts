import type { Meta } from "@/content/pages";
import {
  agendar,
  barraFunda,
  comoCuido,
  consultorio,
  faq,
  home,
  jornada,
  oncologiaClinica,
  perdizes,
  saoPaulo,
  segundaOpiniao,
} from "@/content/pages";
import { perguntasDaRota } from "@/content/geo";
import {
  consultorioSchema,
  faqSchema,
  grafo,
  paginaSchema,
  pessoaSchema,
  siteSchema,
  trilhaSchema,
} from "@/lib/seo";

export type Rota = Meta & { path: string; jsonLd?: unknown };

/**
 * Registro único das rotas indexáveis: é a fonte tanto do `useSeo` de cada
 * página quanto da pré-renderização em `script/prerender.ts`. Manter os dois
 * lendo daqui evita que o HTML estático descole do que a SPA aplica.
 *
 * Toda rota carrega, no mínimo:
 *   - `paginaSchema`      — a página como entidade, com data de revisão e revisor
 *   - `consultorioSchema` — a entidade do consultório
 *   - `trilhaSchema`      — migalhas, quando a rota não é a home
 *   - `faqSchema`         — quando a rota tem perguntas em `content/geo.ts`
 */
const pagina = (
  path: string,
  meta: Meta,
  trilha: { path: string; nome: string }[],
  ...extras: unknown[]
) => {
  const perguntas = perguntasDaRota(path);
  return grafo(
    paginaSchema(path, meta.title, meta.description),
    consultorioSchema,
    pessoaSchema,
    ...(trilha.length ? [trilhaSchema(trilha)] : []),
    ...(perguntas.length ? [faqSchema(perguntas, path)] : []),
    ...extras,
  );
};

export const rotas: Rota[] = [
  {
    ...home.meta,
    path: home.path,
    jsonLd: pagina(home.path, home.meta, [], siteSchema),
  },
  {
    ...oncologiaClinica.meta,
    path: oncologiaClinica.path,
    jsonLd: pagina(oncologiaClinica.path, oncologiaClinica.meta, [
      { path: oncologiaClinica.path, nome: "Oncologia Clínica" },
    ]),
  },
  {
    ...comoCuido.meta,
    path: comoCuido.path,
    jsonLd: pagina(comoCuido.path, comoCuido.meta, [
      { path: comoCuido.path, nome: "Como eu cuido" },
    ]),
  },
  {
    ...jornada.meta,
    path: jornada.path,
    jsonLd: pagina(jornada.path, jornada.meta, [
      { path: jornada.path, nome: "Jornada do paciente oncológico" },
    ]),
  },
  {
    ...segundaOpiniao.meta,
    path: segundaOpiniao.path,
    jsonLd: pagina(segundaOpiniao.path, segundaOpiniao.meta, [
      { path: segundaOpiniao.path, nome: "Segunda opinião oncológica" },
    ]),
  },
  {
    ...consultorio.meta,
    path: consultorio.path,
    jsonLd: pagina(consultorio.path, consultorio.meta, [
      { path: consultorio.path, nome: "Onde atendo" },
    ]),
  },
  {
    ...faq.meta,
    path: faq.path,
    jsonLd: grafo(
      paginaSchema(faq.path, faq.meta.title, faq.meta.description),
      consultorioSchema,
      pessoaSchema,
      // as cinco da copy aprovada + as escritas para GEO, num FAQPage só
      faqSchema([...faq.itens, ...perguntasDaRota(faq.path)], faq.path),
      trilhaSchema([{ path: faq.path, nome: "Perguntas frequentes" }]),
    ),
  },
  {
    ...saoPaulo.meta,
    path: saoPaulo.path,
    jsonLd: pagina(saoPaulo.path, saoPaulo.meta, [
      { path: saoPaulo.path, nome: "Oncologista em São Paulo" },
    ]),
  },
  {
    ...perdizes.meta,
    path: perdizes.path,
    jsonLd: pagina(perdizes.path, perdizes.meta, [
      { path: saoPaulo.path, nome: "Oncologista em São Paulo" },
      { path: perdizes.path, nome: "Jardim das Perdizes" },
    ]),
  },
  {
    ...barraFunda.meta,
    path: barraFunda.path,
    jsonLd: pagina(barraFunda.path, barraFunda.meta, [
      { path: saoPaulo.path, nome: "Oncologista em São Paulo" },
      { path: barraFunda.path, nome: "Barra Funda" },
    ]),
  },
  {
    ...agendar.meta,
    path: agendar.path,
    jsonLd: pagina(agendar.path, agendar.meta, [
      { path: agendar.path, nome: "Agendar consulta" },
    ]),
  },
];

const porPath = new Map(rotas.map((r) => [r.path, r]));

/** Lança se a rota não estiver registrada — assim uma rota nova não passa batido. */
export const rota = (path: string): Rota => {
  const encontrada = porPath.get(path);
  if (!encontrada) throw new Error(`Rota sem registro de SEO: ${path}`);
  return encontrada;
};
