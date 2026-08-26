import type { SVGProps } from "react";

/**
 * Ícones de traço, todos em `currentColor` e no mesmo grid de 24×24 — assim a
 * cor vem do contexto (petróleo nos cards, branco no rodapé) e nenhum deles
 * destoa de peso quando aparecem lado a lado.
 */
type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
};

/* ---------------------------------------------------------------- temas --- */

/** Laudo com selo — diagnóstico recém-recebido. */
export const IconeDiagnostico = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M8.5 12.5h5M8.5 16h3" />
  </svg>
);

/** Duas folhas sobrepostas — segunda opinião. */
export const IconeSegundaOpiniao = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 4h7l4 4v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M15 4v4h4" />
    <path d="M5 8v10a3 3 0 0 0 3 3h8" />
  </svg>
);

/** Batimento contínuo — acompanhamento durante o tratamento. */
export const IconeAcompanhamento = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 12h4l2-5 3 10 2.5-7 1.5 2h5" />
  </svg>
);

/** Lupa sobre gráfico — dúvidas sobre exames e evolução. */
export const IconeExames = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6M8.5 12l2-2.5 1.8 2.4L14.5 9" />
  </svg>
);

/** Relógio — tempo dedicado à consulta. */
export const IconeTempo = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

/** Capelo — formação e atualização. */
export const IconeFormacao = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4 2.5 9 12 14l9.5-5z" />
    <path d="M6.5 11.2V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.8M21.5 9v5.5" />
  </svg>
);

/** Duas falas — decisão compartilhada. */
export const IconeDecisao = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8l-4 3z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v3l-3.5-3H12" />
  </svg>
);

/** Cruz hospitalar. */
export const IconeHospital = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20V8.5L12 4l8 4.5V20" />
    <path d="M2.5 20h19M12 9.5v5M9.5 12h5M9.5 20v-3.5h5V20" />
  </svg>
);

/** Estetoscópio — a especialidade em si. */
export const IconeEstetoscopio = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3v5a4 4 0 0 0 8 0V3" />
    <path d="M6 3H4.5M14 3h1.5M10 12v3.5a4.5 4.5 0 0 0 9 0V14" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

/* ---------------------------------------------------------------- dados --- */

export const IconeLocal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconeRelogio = IconeTempo;

export const IconeEmail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

/* -------------------------------------------------------------- navegação */

export const IconeSeta = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

export const IconeSetaEsquerda = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12H5m6-6-6 6 6 6" />
  </svg>
);

export const IconeChevron = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconeMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconeFechar = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ---------------------------------------------------------------- redes --- */

export const IconeWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
  </svg>
);

export const IconeInstagram = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconeFacebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.6a17 17 0 0 0-2.2-.1c-2.6 0-4.3 1.6-4.3 4.5v1.5H7.5V12h3v9.5h3.5V12h2.6l.4-3.5H14z" />
  </svg>
);

export const IconeLinkedin = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.5h4v11H3v-11zm7 0h3.8v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.31-2.02 2.66v5.14h-4v-11z" />
  </svg>
);

/* ---------------------------------------------------------------- mapas --- */

export const iconesMotivo = {
  diagnostico: IconeDiagnostico,
  segundaOpiniao: IconeSegundaOpiniao,
  acompanhamento: IconeAcompanhamento,
  exames: IconeExames,
  tempo: IconeTempo,
} as const;

export const iconesCuidado = {
  formacao: IconeFormacao,
  tempo: IconeTempo,
  acompanhamento: IconeAcompanhamento,
  decisao: IconeDecisao,
} as const;
