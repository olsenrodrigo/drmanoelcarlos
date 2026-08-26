import { Pagina } from "@/components/Layout";
import { CtaFinal, Etapas, Surge, TopoPagina } from "@/components/Secoes";
import { PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { jornada } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function Jornada() {
  useSeo(rota(jornada.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={jornada.h1}
        sobrelinha="Jornada oncológica"
        trilha={[{ label: jornada.nav }]}
      >
        <RespostaDireta path={jornada.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap-estreito conteudo-longo">
          <Surge>
            <p className="chamada">{jornada.abertura}</p>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{jornada.oQueE.titulo}</h2>
              <p>{jornada.oQueE.texto}</p>
            </div>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{jornada.porQue.titulo}</h2>
              <ul className="lista-marcada">
                {jornada.porQue.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Surge>
        </div>
      </section>

      <section className="secao fundo-branco">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Etapa por etapa</p>
            <h2 style={{ marginBottom: 44 }}>O caminho que a maioria dos pacientes percorre</h2>
          </Surge>
          <Etapas itens={jornada.etapas} />

          <Surge>
            <div className="bloco-destaque" style={{ marginTop: 48 }}>
              <h3>{jornada.segundaOpiniao.titulo}</h3>
              <p>{jornada.segundaOpiniao.texto}</p>
            </div>
          </Surge>
        </div>
      </section>

      <SecoesGeo path={jornada.path} fundo="fundo-areia" />

      <PerguntasDaPagina path={jornada.path} fundo="fundo-branco" />

      <CtaFinal
        titulo={jornada.ctaFinal}
        texto="Agende uma consulta e tenha um plano de cuidado claro, construído com atenção à sua história e às suas dúvidas."
        contexto="quero conversar sobre a etapa em que estou"
      />
    </Pagina>
  );
}
