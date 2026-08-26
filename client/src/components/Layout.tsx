import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Marca } from "@/components/Brand";
import {
  IconeFacebook,
  IconeFechar,
  IconeInstagram,
  IconeLinkedin,
  IconeMenu,
  IconeWhatsapp,
} from "@/components/Icones";
import { agendarUrl, site } from "@/content/site";
import {
  agendar,
  barraFunda,
  comoCuido,
  consultorio,
  faq,
  jornada,
  oncologiaClinica,
  perdizes,
  saoPaulo,
  segundaOpiniao,
} from "@/content/pages";

const menu = [
  { href: comoCuido.path, label: comoCuido.nav },
  { href: oncologiaClinica.path, label: oncologiaClinica.nav },
  { href: jornada.path, label: jornada.nav },
  { href: consultorio.path, label: consultorio.nav },
  { href: faq.path, label: faq.nav },
];

/** As redes que o consultório tem preenchidas em `content/site.ts`. */
const redes = [
  { href: site.social.instagram, label: "Instagram", Icone: IconeInstagram },
  { href: site.social.facebook, label: "Facebook", Icone: IconeFacebook },
  { href: site.social.linkedin, label: "LinkedIn", Icone: IconeLinkedin },
].filter((rede) => rede.href);

export function Cabecalho({ transparenteNoTopo = false }: { transparenteNoTopo?: boolean }) {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [local] = useLocation();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => setAberto(false), [local]);

  return (
    <header
      className="cabecalho"
      data-topo={transparenteNoTopo && !rolou && !aberto}
      data-preso={rolou}
      data-aberto={aberto}
    >
      <div className="wrap">
        <div className="cabecalho-inner">
          <Link href="/" className="marca-link" aria-label={`${site.doctor} — página inicial`}>
            <Marca />
          </Link>

          <nav className="menu" aria-label="Navegação principal">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={local === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a className="botao" href={agendarUrl()} target="_blank" rel="noreferrer">
              <IconeWhatsapp /> {site.ctas.primary}
            </a>
          </nav>

          <button
            className="botao-menu"
            type="button"
            aria-expanded={aberto}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <IconeFechar width={24} /> : <IconeMenu width={24} />}
          </button>
        </div>

        {aberto && (
          <nav className="menu-movel" aria-label="Navegação principal">
            {menu.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={segundaOpiniao.path}>{segundaOpiniao.nav}</Link>
            <Link href={saoPaulo.path}>{saoPaulo.nav}</Link>
            <a className="botao" href={agendarUrl()} target="_blank" rel="noreferrer">
              <IconeWhatsapp /> {site.ctas.primary}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rodape-grid">
          <div className="rodape-marca">
            <Link href="/" className="marca-link" aria-label={`${site.doctor} — página inicial`}>
              <Marca />
            </Link>
            <p>
              {site.doctorFull}
              <br />
              {site.registro}
            </p>
            <p>
              Consultório particular em {site.address.city}/{site.address.state}
              <br />
              {site.hours}
            </p>
            {redes.length > 0 && (
              <div className="rodape-social">
                {redes.map(({ href, label, Icone }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icone />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h4>Atendimento</h4>
            <ul>
              <li>
                <Link href={oncologiaClinica.path}>{oncologiaClinica.nav}</Link>
              </li>
              <li>
                <Link href={segundaOpiniao.path}>{segundaOpiniao.nav}</Link>
              </li>
              <li>
                <Link href={comoCuido.path}>{comoCuido.nav}</Link>
              </li>
              <li>
                <Link href={jornada.path}>{jornada.nav}</Link>
              </li>
              <li>
                <Link href={consultorio.path}>{consultorio.nav}</Link>
              </li>
              <li>
                <Link href={faq.path}>Perguntas frequentes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Onde atendo</h4>
            <ul>
              <li>
                <Link href={saoPaulo.path}>Oncologista em São Paulo</Link>
              </li>
              <li>
                <Link href={perdizes.path}>Oncologia no Jardim das Perdizes</Link>
              </li>
              <li>
                <Link href={barraFunda.path}>Oncologia na Barra Funda</Link>
              </li>
              <li>
                <Link href={agendar.path}>Agendar consulta</Link>
              </li>
              <li>
                <a href={agendarUrl()} target="_blank" rel="noreferrer">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rodape-base">
          <span>
            © {new Date().getFullYear()} {site.doctor}. Todos os direitos reservados.
          </span>
          <span>
            Este site tem caráter informativo e não substitui a consulta médica.
          </span>
        </div>
      </div>
    </footer>
  );
}

export function BotaoWhatsapp() {
  return (
    <a
      className="whatsapp-fixo"
      href={agendarUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <IconeWhatsapp />
      <span>Agendar consulta</span>
    </a>
  );
}

export function Pagina({
  children,
  heroTransparente = false,
}: {
  children: ReactNode;
  heroTransparente?: boolean;
}) {
  return (
    <>
      <Cabecalho transparenteNoTopo={heroTransparente} />
      <main id="conteudo">{children}</main>
      <Rodape />
      <BotaoWhatsapp />
    </>
  );
}
