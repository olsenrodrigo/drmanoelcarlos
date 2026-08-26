import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import { CtaFinal, ListaHospitais, SecaoContato, Surge, TopoPagina } from "@/components/Secoes";
import { FichaMedico, PerguntasDaPagina, RespostaDireta, SecoesGeo } from "@/components/Geo";
import { IconeSeta } from "@/components/Icones";
import type { Meta } from "@/content/pages";
import { barraFunda, perdizes, saoPaulo } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { rota } from "@/content/rotas";

type Area = { path: string; nav: string; h1: string; meta: Meta };

/**
 * Molde das páginas de área atendida (`/oncologista-em-sao-paulo`,
 * `/oncologia-jardim-das-perdizes`, `/oncologia-barra-funda`).
 *
 * O conteúdo que diferencia uma da outra está em `content/geo.ts` — aqui fica
 * só a estrutura, para que as três não saiam do ar quando uma mudar de forma.
 */
export default function PaginaArea({ dados }: { dados: Area }) {
  useSeo(rota(dados.path));

  const outras = [saoPaulo, perdizes, barraFunda].filter((a) => a.path !== dados.path);
  const trilha =
    dados.path === saoPaulo.path
      ? [{ label: dados.nav }]
      : [{ href: saoPaulo.path, label: "Oncologista em São Paulo" }, { label: dados.nav }];

  return (
    <Pagina>
      <TopoPagina titulo={dados.h1} sobrelinha="Área atendida" trilha={trilha}>
        <RespostaDireta path={dados.path} />
      </TopoPagina>

      <SecoesGeo path={dados.path} fundo="fundo-areia" />

      <section className="secao fundo-branco">
        <div className="wrap">
          <Surge>
            <p className="sobrelinha">Onde o atendimento acontece</p>
            <h2 style={{ marginBottom: 44 }}>Consultório particular e hospitais parceiros</h2>
          </Surge>
          <ListaHospitais />
        </div>
      </section>

      <PerguntasDaPagina path={dados.path} fundo="fundo-areia" />

      <section className="secao fundo-branco">
        <div className="wrap-estreito">
          <Surge>
            <p className="sobrelinha">Em resumo</p>
            <h2 style={{ marginBottom: 24 }}>Ficha do atendimento</h2>
            <FichaMedico />
          </Surge>
          <div className="linha-botoes">
            {outras.map((area) => (
              <Link key={area.path} className="link-seta" href={area.path}>
                {area.h1} <IconeSeta />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal
        titulo="Quer conversar sobre o seu caso?"
        texto="Agende uma consulta e tenha um plano de cuidado claro, construído com atenção à sua história e às suas dúvidas."
        contexto={`sou da região ${dados.nav}`}
      />

      <SecaoContato
        titulo="Agende sua consulta"
        texto="Fale diretamente pelo WhatsApp para agendar sua consulta ou tirar dúvidas antes de marcar um horário."
        origem={dados.nav}
      />
    </Pagina>
  );
}
