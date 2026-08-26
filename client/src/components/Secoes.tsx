import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "wouter";
import * as Accordion from "@radix-ui/react-accordion";
import { z } from "zod";
import { Simbolo } from "@/components/Brand";
import {
  IconeChevron,
  IconeEmail,
  IconeEstetoscopio,
  IconeHospital,
  IconeLocal,
  IconeRelogio,
  IconeSeta,
  IconeWhatsapp,
  iconesCuidado,
  iconesMotivo,
} from "@/components/Icones";
import { agendarUrl, site, whatsappUrl } from "@/content/site";
import { home } from "@/content/pages";

/* ------------------------------------------------------------- animação -- */

export function Surge({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`surge ${className}`.trim()} data-visivel={visivel}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------- topo de página -- */

export function Migalhas({ trilha }: { trilha: { href?: string; label: string }[] }) {
  return (
    <nav className="migalhas" aria-label="Trilha de navegação">
      <Link href="/">Início</Link>
      {trilha.map((item) => (
        <span key={item.label} style={{ display: "contents" }}>
          <span aria-hidden="true">/</span>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function TopoPagina({
  titulo,
  sobrelinha,
  trilha,
  children,
}: {
  titulo: string;
  sobrelinha?: string;
  trilha: { href?: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="pagina-topo">
      <div className="wrap">
        <Migalhas trilha={trilha} />
        {sobrelinha && <p className="sobrelinha">{sobrelinha}</p>}
        <h1>{titulo}</h1>
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ manifesto -- */

export function Manifesto() {
  return (
    <section className="secao fundo-petroleo manifesto-fundo">
      <Simbolo className="marca-dagua" />
      <div className="wrap-estreito manifesto">
        <Surge>
          <div className="fio" />
          <blockquote>{home.quemSouEu.frase}</blockquote>
          <p>
            {site.doctorFull} — {site.crm} · {site.rqe}
          </p>
        </Surge>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- selos -- */

export function Selos() {
  return (
    <section className="selos">
      <div className="wrap">
        <ul className="selos-grid">
          {home.selos.map((selo) => (
            <li key={selo.titulo}>
              <strong>{selo.titulo}</strong>
              {selo.texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- motivos -- */

export function GradeMotivos() {
  return (
    <div className="grade-motivos">
      {home.paraQuem.cards.map((card) => {
        const Icone = iconesMotivo[card.icone];
        return (
          <article className="card-motivo" key={card.texto}>
            <Icone />
            <p>{card.texto}</p>
          </article>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------- blocos "cuido" -- */

export function BlocosCuidado({
  itens,
}: {
  itens: readonly { icone: keyof typeof iconesCuidado; titulo: string; texto: string }[];
}) {
  return (
    <div className={`grade-cartoes${itens.length === 4 ? " quatro" : ""}`}>
      {itens.map((bloco) => {
        const Icone = iconesCuidado[bloco.icone];
        return (
          <article className="cartao" key={bloco.titulo}>
            <Icone className="icone" />
            <h3>{bloco.titulo}</h3>
            <p>{bloco.texto}</p>
          </article>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- etapas -- */

export function Etapas({
  itens,
}: {
  itens: readonly { rotulo: string; titulo: string; texto: string }[];
}) {
  return (
    <ol className="etapas">
      {itens.map((etapa, i) => (
        <li key={etapa.titulo} data-marco={i === 0}>
          <span className="etapa-rotulo">{etapa.rotulo}</span>
          <h3>{etapa.titulo}</h3>
          <p>{etapa.texto}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------- hospitais -- */

export function ListaHospitais() {
  return (
    <div className={`grade-cartoes${site.hospitais.length === 4 ? " quatro" : ""}`}>
      {site.hospitais.map((hospital) => (
        <article className="cartao" key={hospital.nome}>
          <IconeHospital className="icone" />
          <h3>{hospital.nome}</h3>
          <p>{hospital.bairro ? `${hospital.bairro} — São Paulo/SP` : "São Paulo/SP"}</p>
        </article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ FAQ --- */

export function Acordeao({ itens }: { itens: readonly { pergunta: string; resposta: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible>
      {itens.map((item) => (
        <Accordion.Item className="acordeao-item" value={item.pergunta} key={item.pergunta}>
          <Accordion.Header>
            <Accordion.Trigger className="acordeao-gatilho">
              {item.pergunta}
              <IconeChevron />
            </Accordion.Trigger>
          </Accordion.Header>
          {/* forceMount: sem ele o Radix só monta a resposta ao abrir, e o
              texto some do HTML estático — some do índice do Google e do
              FAQPage declarado no JSON-LD, que ficaria sem conteúdo visível
              correspondente. Montado sempre, o fechado é só altura zero. */}
          <Accordion.Content className="acordeao-conteudo" forceMount>
            {/* O padding fica no <p>, dentro deste wrapper: padding em item de
                grid não encolhe junto com a track, e a resposta fechada vazava
                uma faixa de 26px. */}
            <div>
              <p>{item.resposta}</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

/* ------------------------------------------------------------------ CTA --- */

export function CtaFinal({
  titulo,
  texto,
  contexto,
}: {
  titulo: string;
  texto?: string;
  contexto?: string;
}) {
  return (
    <section className="secao fundo-petroleo">
      <div className="wrap cta-final">
        <Surge>
          <div className="fio" />
          <h2>{titulo}</h2>
          {texto && <p>{texto}</p>}
          <div className="linha-botoes">
            <a
              className="botao botao-claro"
              href={agendarUrl(contexto)}
              target="_blank"
              rel="noreferrer"
            >
              <IconeWhatsapp /> {site.ctas.whatsapp}
            </a>
            <a className="botao botao-vazado-claro" href={`mailto:${site.email}`}>
              <IconeEmail /> Escrever por e-mail
            </a>
          </div>
        </Surge>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- depoimentos -- */

export function Depoimentos() {
  return (
    <section className="secao fundo-areia">
      <div className="wrap">
        <p className="sobrelinha">Prova social</p>
        <h2>{home.provaSocial.titulo}</h2>
        <p className="chamada" style={{ marginBottom: 40 }}>
          {home.provaSocial.texto}
        </p>
        {home.provaSocial.itens.length > 0 ? (
          <div className="grade-depoimentos">
            {home.provaSocial.itens.map((d) => (
              <blockquote className="card-depoimento" key={d.texto}>
                <p>{d.texto}</p>
                <cite>{d.autor}</cite>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="depoimentos-vazio">
            <p>{home.provaSocial.placeholder}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- contato --- */

export function DadosContato() {
  return (
    <div className="dados-contato">
      <div className="dado">
        <IconeWhatsapp />
        <div>
          <strong>WhatsApp</strong>
          <p>
            <a href={agendarUrl()} target="_blank" rel="noreferrer">
              {site.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="dado">
        <IconeEmail />
        <div>
          <strong>E-mail</strong>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
      <div className="dado">
        <IconeRelogio />
        <div>
          <strong>Consultório particular</strong>
          <p>{site.hours}</p>
        </div>
      </div>
      <div className="dado">
        <IconeLocal />
        <div>
          <strong>Onde fica</strong>
          {site.enderecoConfirmado ? (
            <p>
              {site.address.street}
              <br />
              {site.address.district} — {site.address.city}/{site.address.state}
            </p>
          ) : (
            <p>
              Consultório em {site.address.city}/{site.address.state}. O endereço completo e a
              orientação de como chegar são enviados no agendamento.
            </p>
          )}
        </div>
      </div>
      <div className="dado">
        <IconeHospital />
        <div>
          <strong>Convênio</strong>
          <p>{site.hospitais.map((h) => h.nome).join(" · ")}</p>
        </div>
      </div>
      <div className="dado">
        <IconeEstetoscopio />
        <div>
          <strong>Registro</strong>
          <p>{site.registro}</p>
        </div>
      </div>
    </div>
  );
}

const assuntos = [
  "Primeira consulta",
  "Segunda opinião",
  "Acompanhamento de tratamento em andamento",
  "Dúvida sobre exames ou resultados",
  "Outro assunto",
] as const;

const esquema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome."),
  telefone: z.string().trim().min(8, "Informe um telefone/WhatsApp válido."),
  // O select já nasce com um valor válido — nada de placeholder desabilitado,
  // que vaza "undefined" na mensagem do WhatsApp quando o campo não é tocado.
  assunto: z.enum(assuntos),
  mensagem: z.string().trim().optional(),
});

const vazio = { nome: "", telefone: "", assunto: assuntos[0] as string, mensagem: "" };

/** O formulário não grava nada: monta a mensagem e abre a conversa no WhatsApp. */
export function Formulario({ origem }: { origem: string }) {
  const [valores, setValores] = useState(vazio);
  const [erros, setErros] = useState<Record<string, string>>({});

  const enviar = (evento: FormEvent) => {
    evento.preventDefault();
    const resultado = esquema.safeParse(valores);
    if (!resultado.success) {
      const proximos: Record<string, string> = {};
      resultado.error.issues.forEach((i) => {
        proximos[String(i.path[0])] = i.message;
      });
      setErros(proximos);
      return;
    }
    setErros({});
    const d = resultado.data;
    const partes = [
      `Olá, Dr. Manoel Carlos! Vim pelo site (${origem}) e gostaria de agendar uma consulta.`,
      `Nome: ${d.nome}`,
      `Telefone/WhatsApp: ${d.telefone}`,
      `Assunto: ${d.assunto}`,
      d.mensagem ? `Mensagem: ${d.mensagem}` : null,
    ].filter(Boolean);
    window.open(whatsappUrl(partes.join(" ")), "_blank", "noopener");
  };

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <div className="form-duplo">
        <label className="campo">
          <span>Nome</span>
          <input
            type="text"
            autoComplete="name"
            value={valores.nome}
            onChange={(e) => setValores({ ...valores, nome: e.target.value })}
            aria-invalid={!!erros.nome}
          />
          {erros.nome && <small role="alert">{erros.nome}</small>}
        </label>
        <label className="campo">
          <span>Telefone / WhatsApp</span>
          <input
            type="tel"
            autoComplete="tel"
            value={valores.telefone}
            onChange={(e) => setValores({ ...valores, telefone: e.target.value })}
            aria-invalid={!!erros.telefone}
          />
          {erros.telefone && <small role="alert">{erros.telefone}</small>}
        </label>
      </div>
      <label className="campo">
        <span>Assunto</span>
        <select
          value={valores.assunto}
          onChange={(e) => setValores({ ...valores, assunto: e.target.value })}
        >
          {assuntos.map((assunto) => (
            <option key={assunto} value={assunto}>
              {assunto}
            </option>
          ))}
        </select>
      </label>
      <label className="campo">
        <span>Mensagem (opcional)</span>
        <textarea
          rows={4}
          value={valores.mensagem}
          onChange={(e) => setValores({ ...valores, mensagem: e.target.value })}
        />
      </label>
      <button className="botao" type="submit" style={{ width: "100%" }}>
        <IconeWhatsapp /> {site.ctas.whatsapp}
      </button>
      <p className="form-nota">
        Ao enviar, a conversa abre no WhatsApp com os seus dados preenchidos. Nenhuma informação
        clínica é armazenada neste site — descrições detalhadas do caso ficam para a consulta.
      </p>
    </form>
  );
}

export function SecaoContato({
  titulo,
  texto,
  origem,
  fundo = "fundo-areia",
}: {
  titulo: string;
  texto: string;
  origem: string;
  fundo?: string;
}) {
  return (
    <section className={`secao ${fundo}`} id="agendar">
      <div className="wrap">
        <p className="sobrelinha">Agendamento</p>
        <h2>{titulo}</h2>
        <p className="chamada" style={{ marginBottom: 44 }}>
          {texto}
        </p>
        <div className="grade-contato">
          <DadosContato />
          <Formulario origem={origem} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- aviso -- */

export function AvisoPilar({
  texto,
  botao,
}: {
  texto: string;
  botao: { path: string; label: string };
}) {
  return (
    <div className="aviso">
      <p>{texto}</p>
      <Link className="botao botao-vazado" href={botao.path}>
        {botao.label} <IconeSeta />
      </Link>
    </div>
  );
}
