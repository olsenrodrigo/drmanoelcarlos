import { Pagina } from "@/components/Layout";
import { SecaoContato, Surge, TopoPagina } from "@/components/Secoes";
import { RespostaDireta } from "@/components/Geo";
import { IconeEmail, IconeWhatsapp } from "@/components/Icones";
import { agendarUrl, site } from "@/content/site";
import { agendar } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function Agendar() {
  useSeo(rota(agendar.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={agendar.h1}
        sobrelinha="Agendamento"
        trilha={[{ label: agendar.nav }]}
      >
        <RespostaDireta path={agendar.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap-estreito centrado">
          <Surge>
            <p className="chamada">{agendar.texto}</p>
            <div className="linha-botoes" style={{ justifyContent: "center" }}>
              <a className="botao" href={agendarUrl()} target="_blank" rel="noreferrer">
                <IconeWhatsapp /> Agendar pelo WhatsApp — {site.whatsappDisplay}
              </a>
            </div>
            <p style={{ marginTop: 26 }}>
              {agendar.alternativa}{" "}
              <a className="link-seta" href={`mailto:${site.email}`}>
                <IconeEmail width={16} /> {site.email}
              </a>
            </p>
            <p style={{ marginTop: 26, fontSize: ".92rem" }}>
              Consultório particular: {site.hours}. Atendimento por convênio nos hospitais
              parceiros, em horário comercial. Não há teleconsulta.
            </p>
          </Surge>
        </div>
      </section>

      <SecaoContato
        titulo="Prefere deixar seus dados?"
        texto="Preencha o formulário e a conversa abre no WhatsApp já com as suas informações."
        origem="agendar consulta"
        fundo="fundo-branco"
      />
    </Pagina>
  );
}
