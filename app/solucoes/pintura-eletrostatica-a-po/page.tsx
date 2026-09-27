import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { benefits } from "@/data/site";

export const metadata: Metadata = {
  title: "Pintura eletrostática a pó",
  description: "Pintura eletrostática a pó no Rio de Janeiro: preparação de superfície, aplicação uniforme e cura controlada para peças metálicas.",
};

export default function PinturaEletrostaticaPage() {
  return (
    <>
      <PageHero eyebrow="Solução / Pintura a pó" marker="ELETROSTÁTICA" title={<>Cobertura uniforme.<br /><em>Desempenho contínuo.</em></>} copy="A tinta em pó recebe carga eletrostática, adere à peça preparada e forma uma película consolidada após a cura." />
      <section className="content-section">
        <div className="shell editorial-grid">
          <div className="editorial-grid__index">01</div>
          <div className="editorial-grid__lead"><h2>Por que a carga eletrostática faz diferença?</h2></div>
          <div className="editorial-grid__copy">
            <p>Ao ser pulverizado, o pó é atraído pela superfície metálica. Essa relação favorece uma distribuição regular e ajuda a recobrir cantos, bordas e arestas.</p>
            <p>Depois da aplicação, a peça passa pela cura. O aquecimento ativa o sistema de resinas e transforma o pó depositado em uma película contínua.</p>
          </div>
        </div>
      </section>
      <section className="spec-section">
        <div className="shell spec-grid">
          <div className="spec-grid__title"><p className="eyebrow">Benefícios do processo</p><h2>O que a superfície ganha.</h2></div>
          <div className="spec-grid__items">
            {benefits.map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><strong>{benefit}</strong></div>)}
          </div>
        </div>
      </section>
      <section className="resin-section">
        <div className="shell resin-grid">
          <article><span>HÍBRIDA</span><h3>Uso interior</h3><p>Combinação de resinas epóxi e poliéster indicada historicamente pela Primapox para peças de uso interno.</p></article>
          <article><span>POLIÉSTER</span><h3>Uso exterior</h3><p>Sistema de resina utilizado em superfícies metálicas expostas, especialmente quando acabamento e resistência ao ambiente importam.</p></article>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
