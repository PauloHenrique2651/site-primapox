import type { Metadata } from "next";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { processSteps } from "@/data/site";

export const metadata: Metadata = { title: "Processo", description: "Entenda as etapas da pintura eletrostática a pó: preparação, aplicação, cura e controle." };

export default function ProcessoPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Processo" marker="04 ETAPAS" title={<>O acabamento nasce<br /><em>antes da tinta.</em></>} copy="Uma sequência simples de entender e exigente de executar: ler, preparar, aplicar e curar." />
      <section className="content-section process-page">
        <div className="shell process-page__list">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="process-principle">
        <div className="shell"><span>PRINCÍPIO</span><p>Uma camada só trabalha bem quando a superfície foi preparada para recebê-la.</p></div>
      </section>
      <ContactBand />
    </>
  );
}
