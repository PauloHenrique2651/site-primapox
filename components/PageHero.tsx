import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, copy, marker }: { eyebrow: string; title: ReactNode; copy: string; marker: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <p className="hero__eyebrow"><span /> {eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__aside">
          <span>{marker}</span>
          <p>{copy}</p>
        </div>
      </div>
      <div className="page-hero__line" aria-hidden="true"><i /></div>
    </section>
  );
}
