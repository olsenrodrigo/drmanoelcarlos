type Props = { className?: string; titulo?: string };

/**
 * Símbolo da marca: um arco aberto terminando num disco — eco do estetoscópio
 * que fecha o monograma "MC" da assinatura do Dr. Manoel, sem tentar redesenhar
 * a assinatura em si.
 *
 * TODO: quando o consultório enviar o arquivo vetorial oficial da marca, é aqui
 * que ele entra — o resto do site consome só este componente e o `Marca` abaixo.
 */
export function Simbolo({ className, titulo }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={titulo ? "img" : "presentation"}
      aria-hidden={titulo ? undefined : true}
    >
      {titulo && <title>{titulo}</title>}
      <path
        d="M20.98 46.11 A17.9 17.9 0 1 1 43.02 46.11"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <circle cx="43.02" cy="46.11" r="6" fill="currentColor" />
    </svg>
  );
}

/** Lockup completo: símbolo + nome + descritor da especialidade. */
export function Marca({ compacto = false }: { compacto?: boolean }) {
  return (
    <>
      <Simbolo className="marca-simbolo" />
      <span className="marca-texto">
        <span className="marca-nome">Dr. Manoel Carlos</span>
        {!compacto && <span className="marca-desc">Oncologia Clínica</span>}
      </span>
    </>
  );
}
