import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import { CtaFinal, ListaHospitais, Surge, TopoPagina } from "@/components/Secoes";
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
        <div className="wrap-estreito conteudo-longo">
          <Surge>
            <p className="chamada">{consultorio.abertura}</p>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{consultorio.particular.titulo}</h2>
              <p>{consultorio.particular.texto}</p>
              {/* O endereço veio como "[a definir]" na copy; enquanto não for
                  confirmado, o site diz isso em vez de mostrar um endereço
                  antigo de diretório médico. Ver `site.enderecoConfirmado`. */}
              {site.enderecoConfirmado ? (
                <p>
                  <strong>Endereço:</strong> {site.address.street} — {site.address.district},{" "}
                  {site.address.city}/{site.address.state}
                </p>
              ) : (
                <p>{consultorio.particular.enderecoPendente}</p>
              )}
              <p style={{ marginTop: "1.4em" }}>
                <a className="link-seta" href={agendarUrl()} target="_blank" rel="noreferrer">
                  <IconeWhatsapp width={16} /> Agendar pelo WhatsApp {site.whatsappDisplay}
                </a>
              </p>
            </div>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{consultorio.hospitalar.titulo}</h2>
              <p>{consultorio.hospitalar.texto}</p>
            </div>
          </Surge>
        </div>
      </section>

      <section className="secao fundo-branco">
        <div className="wrap">
          <Surge>
            <p className="sobrelinha">Hospitais parceiros</p>
            <h2 style={{ marginBottom: 44 }}>Onde o atendimento por convênio acontece</h2>
          </Surge>
          <ListaHospitais />

          <Surge>
            <div className="bloco-destaque" style={{ marginTop: 44 }}>
              <h3>{consultorio.presencial.titulo}</h3>
              <p>{consultorio.presencial.texto}</p>
            </div>
          </Surge>
        </div>
      </section>

      <SecoesGeo path={consultorio.path} fundo="fundo-areia" />

      <PerguntasDaPagina path={consultorio.path} fundo="fundo-branco" />

      <section className="secao-curta fundo-areia">
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
        texto="Diga qual porta de atendimento faz mais sentido para você — consultório particular ou hospital parceiro — e a agenda é combinada pelo WhatsApp."
        contexto="quero saber onde e quando posso ser atendido"
      />
    </Pagina>
  );
}
