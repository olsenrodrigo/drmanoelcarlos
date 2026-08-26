import { Pagina } from "@/components/Layout";
import { Acordeao, CtaFinal, Surge, TopoPagina } from "@/components/Secoes";
import { FichaMedico, PerguntasDaPagina, RespostaDireta } from "@/components/Geo";
import { faq } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function Faq() {
  useSeo(rota(faq.path));

  return (
    <Pagina>
      <TopoPagina
        titulo="Perguntas frequentes"
        sobrelinha={faq.h1}
        trilha={[{ label: "Perguntas frequentes" }]}
      >
        <RespostaDireta path={faq.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Consulta e valores</p>
            <h2 style={{ marginBottom: 32 }}>Dúvidas rápidas</h2>
          </Surge>
          <Acordeao itens={faq.itens} />
        </div>
      </section>

      <PerguntasDaPagina path={faq.path} fundo="fundo-branco" />

      <section className="secao fundo-areia">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Em resumo</p>
            <h2 style={{ marginBottom: 24 }}>Ficha do atendimento</h2>
            <FichaMedico />
          </Surge>
        </div>
      </section>

      <CtaFinal
        titulo="Ficou com alguma dúvida que não está aqui?"
        texto="Pergunte diretamente pelo WhatsApp antes de marcar — respondemos em horário de atendimento."
        contexto="tenho uma dúvida antes de marcar a consulta"
      />
    </Pagina>
  );
}
