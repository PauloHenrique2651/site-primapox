import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "A empresa",
  description: "Conheça a Primapox, empresa de pintura eletrostática a pó em Vigário Geral, Rio de Janeiro.",
};

export default function EmpresaPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Empresa" marker="DESDE +20 ANOS" title={<>Experiência que<br /><em>ganha camada.</em></>} copy="Uma operação construída em torno da preparação, da aplicação eletrostática e do acabamento de componentes metálicos." />
      <section className="content-section">
        <div className="shell editorial-grid">
          <div className="editorial-grid__index">01</div>
          <div className="editorial-grid__lead">
            <h2>Metal bem tratado começa por um processo bem conduzido.</h2>
          </div>
          <div className="editorial-grid__copy">
            <p>A Primapox atua há mais de 20 anos no segmento de pintura industrial. Nossa especialidade é a pintura eletrostática a pó, aplicada a peças e componentes metálicos que exigem cobertura uniforme, resistência e qualidade visual.</p>
            <p>Atendemos a partir de Vigário Geral, no Rio de Janeiro, com uma linha de trabalho que integra análise da peça, preparação da superfície, aplicação, cura e controle final.</p>
          </div>
        </div>
      </section>
      <section className="value-section">
        <div className="shell value-grid">
          {[
            ["Preparação", "A qualidade da película depende do que acontece antes da aplicação."],
            ["Uniformidade", "A deposição eletrostática favorece a cobertura de cantos, bordas e arestas."],
            ["Critério", "Resina, acabamento e processo precisam conversar com o uso real da peça."],
          ].map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
