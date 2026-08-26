import { Link } from "wouter";
import { Pagina } from "@/components/Layout";
import { IconeSeta } from "@/components/Icones";
import { agendar, faq, oncologiaClinica } from "@/content/pages";

export default function NotFound() {
  return (
    <Pagina>
      <section className="secao" style={{ paddingTop: "calc(var(--topo) + 80px)" }}>
        <div className="wrap-estreito">
          <p className="sobrelinha">Erro 404</p>
          <h1>Esta página não foi encontrada</h1>
          <p className="chamada">
            O endereço acessado não existe ou foi movido. Abaixo estão os caminhos mais
            procurados do site.
          </p>
          <ul className="lista-marcada" style={{ marginTop: "2em" }}>
            <li>
              <Link className="link-seta" href="/">
                Página inicial <IconeSeta />
              </Link>
            </li>
            <li>
              <Link className="link-seta" href={oncologiaClinica.path}>
                Oncologia Clínica <IconeSeta />
              </Link>
            </li>
            <li>
              <Link className="link-seta" href={faq.path}>
                Perguntas frequentes <IconeSeta />
              </Link>
            </li>
            <li>
              <Link className="link-seta" href={agendar.path}>
                Agendar consulta <IconeSeta />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Pagina>
  );
}
