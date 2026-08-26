import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import {
  Acordeao,
  CtaFinal,
  Depoimentos,
  GradeMotivos,
  Manifesto,
  SecaoContato,
  Selos,
  Surge,
} from "@/components/Secoes";
import { FichaMedico, PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { IconeEstetoscopio, IconeSeta, IconeWhatsapp } from "@/components/Icones";
import { agendarUrl, site } from "@/content/site";
import {
  comoCuido,
  faq,
  home,
  jornada,
  oncologiaClinica,
  segundaOpiniao,
} from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function Home() {
  useSeo(rota(home.path));

  return (
    <Pagina heroTransparente>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="sobrelinha">Oncologia Clínica · São Paulo</p>
            <h1>{home.h1}</h1>
            <p className="hero-sub">{home.subheadline}</p>
            <div className="linha-botoes">
              <a className="botao" href={agendarUrl()} target="_blank" rel="noreferrer">
                <IconeWhatsapp /> {site.ctas.primary}
              </a>
              <Link className="botao botao-vazado" href={comoCuido.path}>
                {site.ctas.secundario}
              </Link>
            </div>
          </div>

          <figure className="hero-figura" style={{ margin: 0 }}>
            <img
              src={site.foto.src}
              alt={site.foto.alt}
              width={site.foto.width}
              height={site.foto.height}
              fetchPriority="high"
            />
            <figcaption className="hero-selo">
              {site.doctor}
              <br />
              {site.crm} · {site.rqe}
            </figcaption>
          </figure>
        </div>
      </section>

      <Selos />

      <section className="secao fundo-branco">
        <div className="wrap">
          <Surge>
            <p className="sobrelinha">Para quem eu ajudo</p>
            <h2 style={{ maxWidth: "20ch" }}>{home.paraQuem.titulo}</h2>
            <p className="chamada">{home.paraQuem.texto}</p>
            <RespostaDireta path={home.path} />
          </Surge>
          <div style={{ marginTop: 46 }}>
            <GradeMotivos />
          </div>
        </div>
      </section>

      <section className="secao fundo-areia">
        <div className="wrap duas-colunas">
          <div>
            <p className="sobrelinha">Como eu cuido</p>
            <h2>{home.previa.titulo}</h2>
            <p>{home.previa.texto}</p>
            <ul className="lista-marcada" style={{ marginTop: "1.6em" }}>
              {home.previa.lista.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="linha-botoes">
              <Link className="link-seta" href={comoCuido.path}>
                Conhecer meu jeito de cuidar <IconeSeta />
              </Link>
            </div>
          </div>
          <figure className="coluna-figura" style={{ margin: 0 }}>
            <img
              src={site.fotoFechada.src}
              alt={site.fotoFechada.alt}
              loading="lazy"
              width={site.fotoFechada.width}
              height={site.fotoFechada.height}
            />
          </figure>
        </div>
      </section>

      <Manifesto />

      <section className="secao fundo-branco">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Quem sou eu</p>
            <h2>{home.quemSouEu.titulo}</h2>
            <p className="chamada">{home.quemSouEu.texto}</p>
            <FichaMedico />
          </Surge>
        </div>
      </section>

      <section className="secao fundo-areia">
        <div className="wrap">
          <Surge>
            <p className="sobrelinha">Especialidade</p>
            <h2>{home.especialidade.titulo}</h2>
            <p className="chamada">{home.especialidade.chamada}</p>
          </Surge>
          <div className="grade-cartoes" style={{ marginTop: 44 }}>
            <Link className="cartao" href={oncologiaClinica.path}>
              <IconeEstetoscopio className="icone" />
              <h3>Oncologia Clínica</h3>
              <p>
                Diagnóstico, definição do tratamento sistêmico e acompanhamento contínuo do
                paciente oncológico.
              </p>
              <span className="link-seta">
                Ver Oncologia Clínica <IconeSeta />
              </span>
            </Link>
            <Link className="cartao" href={segundaOpiniao.path}>
              <IconeEstetoscopio className="icone" />
              <h3>Segunda opinião</h3>
              <p>
                Revisão de um diagnóstico ou de um plano de tratamento já indicado, com análise
                detalhada dos laudos.
              </p>
              <span className="link-seta">
                Ver segunda opinião <IconeSeta />
              </span>
            </Link>
            <Link className="cartao" href={jornada.path}>
              <IconeEstetoscopio className="icone" />
              <h3>Jornada do paciente</h3>
              <p>
                As etapas do caminho, do diagnóstico ao acompanhamento de longo prazo, e o que
                esperar de cada uma.
              </p>
              <span className="link-seta">
                Ver a jornada <IconeSeta />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SecoesGeo path={home.path} fundo="fundo-areia" />

      <section className="secao fundo-branco">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Dúvidas rápidas</p>
            <h2 style={{ marginBottom: 32 }}>{faq.h1}</h2>
          </Surge>
          <Acordeao itens={faq.itens} />
          <div className="linha-botoes">
            <Link className="link-seta" href={faq.path}>
              Ver todas as dúvidas <IconeSeta />
            </Link>
          </div>
        </div>
      </section>

      {/* As perguntas aqui são as de atendimento (onde atende, formação); as da
          consulta ficam em /perguntas-frequentes. Cada rota com FAQPage no
          schema precisa exibir exatamente as perguntas que declara — marcação
          sem conteúdo visível é violação de diretriz, não atalho. */}
      <PerguntasDaPagina path={home.path} fundo="fundo-areia" />

      {site.showTestimonials ? <Depoimentos /> : null}

      <CtaFinal titulo={home.ctaFinal.titulo} texto={home.ctaFinal.texto} />

      <SecaoContato
        titulo="Agende sua consulta"
        texto="Fale diretamente pelo WhatsApp para agendar sua consulta ou tirar dúvidas antes de marcar um horário."
        origem="home"
      />
    </Pagina>
  );
}
