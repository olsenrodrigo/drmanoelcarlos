import { Pagina } from "@/components/Layout";
import { CtaFinal, SecaoContato, Surge, TopoPagina } from "@/components/Secoes";
import { PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { jornada, segundaOpiniao } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function SegundaOpiniao() {
  useSeo(rota(segundaOpiniao.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={segundaOpiniao.h1}
        sobrelinha="Revisão de diagnóstico e de conduta"
        trilha={[{ label: segundaOpiniao.nav }]}
      >
        <RespostaDireta path={segundaOpiniao.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap-estreito conteudo-longo">
          <Surge>
            {/* Trecho da copy aprovada da página de jornada — é a frase que o
                Dr. Manoel usa para explicar o assunto, e repeti-la aqui evita
                inventar uma segunda versão da mesma ideia. */}
            <p className="chamada">{jornada.segundaOpiniao.texto}</p>
          </Surge>
        </div>
      </section>

      <SecoesGeo path={segundaOpiniao.path} fundo="fundo-branco" />

      <PerguntasDaPagina path={segundaOpiniao.path} fundo="fundo-areia" />

      <CtaFinal
        titulo="Quer uma segunda opinião sobre o seu caso?"
        texto="A consulta de revisão dura cerca de uma hora e analisa laudos, exames e o plano já indicado."
        contexto="quero uma segunda opinião sobre o meu diagnóstico"
      />

      <SecaoContato
        titulo="Agende a revisão do seu caso"
        texto="Leve os laudos, os exames de imagem e o relatório do médico que acompanha o caso — é o material que torna a revisão possível."
        origem="segunda opinião"
        fundo="fundo-branco"
      />
    </Pagina>
  );
}
