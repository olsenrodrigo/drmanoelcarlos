import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import { CtaFinal, GaleriaEmunah, ListaHospitais, Surge, TopoPagina } from "@/components/Secoes";
import { PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { IconeSeta } from "@/components/Icones";
import { agendarUrl, site } from "@/content/site";
import { barraFunda, consultorio, perdizes, saoPaulo } from "@/content/pages";
import { IconeWhatsapp } from "@/components/Icones";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function OndeAtendo() {
  useSeo(rota(consultorio.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={consultorio.h1}
        sobrelinha="Locais de atendimento"
        trilha={[{ label: consultorio.nav }]}
      >
        <RespostaDireta path={consultorio.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap">
          <Surge>
            <p className="chamada">{consultorio.abertura}</p>
            <p className="sobrelinha" style={{ marginTop: 40 }}>
              {consultorio.hospitalar.titulo}
            </p>
            <h2 style={{ marginBottom: 12 }}>Endereços e agendamento</h2>
            <p style={{ marginBottom: 40 }}>{consultorio.hospitalar.texto}</p>
          </Surge>
          <ListaHospitais />
        </div>
      </section>

      <GaleriaEmunah fundo="fundo-branco" />

      <section className="secao fundo-areia">
        <div className="wrap-estreito">
          <Surge>
            <div className="bloco-destaque">
              <h3>{consultorio.demais.titulo}</h3>
              <p>{consultorio.demais.texto}</p>
              <p style={{ marginTop: "1em" }}>
                <a className="link-seta" href={agendarUrl()} target="_blank" rel="noreferrer">
                  <IconeWhatsapp width={16} /> {site.whatsappDisplay}
                </a>
              </p>
            </div>
          </Surge>
          <Surge>
            <div className="bloco-destaque" style={{ marginTop: 24 }}>
              <h3>{consultorio.presencial.titulo}</h3>
              <p>{consultorio.presencial.texto}</p>
            </div>
          </Surge>
        </div>
      </section>

      <SecoesGeo path={consultorio.path} fundo="fundo-branco" />

      <PerguntasDaPagina path={consultorio.path} fundo="fundo-areia" />

      <section className="secao-curta fundo-branco">
        <div className="wrap-estreito centrado">
          <p className="sobrelinha" style={{ justifyContent: "center" }}>
            Atendimento por região
          </p>
          <p>
            <Link className="link-seta" href={saoPaulo.path}>
              Oncologista em São Paulo <IconeSeta />
            </Link>
          </p>
          <p>
            <Link className="link-seta" href={perdizes.path}>
              Oncologia no Jardim das Perdizes <IconeSeta />
            </Link>
          </p>
          <p>
            <Link className="link-seta" href={barraFunda.path}>
              Oncologia na Barra Funda <IconeSeta />
            </Link>
          </p>
        </div>
      </section>

      <CtaFinal
        titulo={consultorio.ctaFinal}
        texto="Ligue para o hospital de sua preferência ou fale pelo WhatsApp de demais agendamentos — ajudamos a indicar a unidade que faz mais sentido para você."
        contexto="quero saber onde e quando posso ser atendido"
      />
    </Pagina>
  );
}
