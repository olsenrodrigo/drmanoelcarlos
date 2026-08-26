import { Pagina } from "@/components/Layout";
import { BlocosCuidado, CtaFinal, Surge } from "@/components/Secoes";
import { PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { TopoPagina } from "@/components/Secoes";
import { site } from "@/content/site";
import { comoCuido } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function ComoCuido() {
  useSeo(rota(comoCuido.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={comoCuido.h1}
        sobrelinha="Meu jeito de cuidar"
        trilha={[{ label: comoCuido.nav }]}
      >
        <RespostaDireta path={comoCuido.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap duas-colunas alinha-topo">
          <p className="chamada">{comoCuido.abertura}</p>
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

      <section className="secao fundo-branco">
        <div className="wrap">
          <Surge>
            <p className="sobrelinha">Quatro compromissos</p>
            <h2 style={{ marginBottom: 44 }}>O que você pode esperar do acompanhamento</h2>
          </Surge>
          <BlocosCuidado itens={comoCuido.blocos} />
        </div>
      </section>

      <SecoesGeo path={comoCuido.path} fundo="fundo-areia" />

      <PerguntasDaPagina path={comoCuido.path} fundo="fundo-branco" />

      <CtaFinal
        titulo={comoCuido.ctaFinal}
        texto="Agende uma consulta e tenha um plano de cuidado claro, construído com atenção à sua história e às suas dúvidas."
        contexto="quero entender como funciona o acompanhamento"
      />
    </Pagina>
  );
}
