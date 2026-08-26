import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import { AvisoPilar, CtaFinal, SecaoContato, Surge, TopoPagina } from "@/components/Secoes";
import { PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { IconeSeta } from "@/components/Icones";
import { jornada, oncologiaClinica, segundaOpiniao } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

export default function OncologiaClinica() {
  useSeo(rota(oncologiaClinica.path));

  return (
    <Pagina>
      <TopoPagina
        titulo={oncologiaClinica.h1}
        sobrelinha="Especialidade"
        trilha={[{ label: oncologiaClinica.nav }]}
      >
        <RespostaDireta path={oncologiaClinica.path} />
      </TopoPagina>

      <section className="secao fundo-areia">
        <div className="wrap-estreito conteudo-longo">
          <Surge>
            <p className="chamada">{oncologiaClinica.abertura}</p>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{oncologiaClinica.queixas.titulo}</h2>
              <ul className="lista-marcada">
                {oncologiaClinica.queixas.lista.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Surge>

          <Surge className="secao-geo">
            <div>
              <h2>{oncologiaClinica.consulta.titulo}</h2>
              <p>{oncologiaClinica.consulta.texto}</p>
            </div>
          </Surge>

          <Surge className="secao-geo">
            <div className="bloco-destaque">
              <h3>{oncologiaClinica.acompanhamento.titulo}</h3>
              <p>{oncologiaClinica.acompanhamento.texto}</p>
            </div>
          </Surge>

          <div style={{ marginTop: 40 }}>
            <AvisoPilar
              texto="Quer entender o caminho inteiro, do diagnóstico ao acompanhamento de longo prazo?"
              botao={{ path: jornada.path, label: "Ver a jornada do paciente" }}
            />
          </div>
        </div>
      </section>

      <SecoesGeo path={oncologiaClinica.path} fundo="fundo-branco" />

      <PerguntasDaPagina path={oncologiaClinica.path} fundo="fundo-areia" />

      <section className="secao-curta fundo-branco">
        <div className="wrap-estreito centrado">
          <p>
            Já tem um diagnóstico ou um tratamento indicado e quer conferir a conduta?
          </p>
          <p>
            <Link className="link-seta" href={segundaOpiniao.path}>
              Ver como funciona a segunda opinião <IconeSeta />
            </Link>
          </p>
        </div>
      </section>

      <CtaFinal
        titulo={oncologiaClinica.ctaFinal}
        texto="A primeira consulta dura cerca de uma hora e termina com um plano explicado em linguagem clara."
        contexto="preciso de acompanhamento em oncologia clínica"
      />

      <SecaoContato
        titulo="Agende sua consulta"
        texto="Fale diretamente pelo WhatsApp para agendar sua consulta ou tirar dúvidas antes de marcar um horário."
        origem="oncologia clínica"
      />
    </Pagina>
  );
}
