import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-mark" href="/" aria-label="Primapox — página inicial">
      <svg className="brand-mark__symbol" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M3 18h13v8H3z" />
        <path d="M15 15h4v14h-4zM20 12h3v20h-3zM24 16h5l8 4v4l-8 4h-5z" />
        <path className="brand-mark__spark" d="M38 13l1.6 3.4L43 18l-3.4 1.6L38 23l-1.6-3.4L33 18l3.4-1.6z" />
      </svg>
      <span className="brand-mark__lockup">
        <span className="brand-mark__name"><b>prima</b><strong>pox</strong></span>
        {!compact && <span className="brand-mark__descriptor">Pintura eletrostática a pó</span>}
      </span>
    </Link>
  );
}
