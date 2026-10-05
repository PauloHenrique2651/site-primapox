import type { Metadata } from "next";
import { ApplicationVisual } from "@/components/ApplicationVisual";
import { ContactBand } from "@/components/ContactBand";
import { PageHero } from "@/components/PageHero";
import { applications } from "@/data/site";

export const metadata: Metadata = { title: "Aplicações", description: "Aplicações da pintura eletrostática a pó em arquitetura, indústria, varejo e mobiliário metálico." };

export default function AplicacoesPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Aplicações" marker="METAL / USO" title={<>Uma superfície.<br /><em>Muitas funções.</em></>} copy="A viabilidade depende do material, das dimensões da peça, da geometria e do ambiente em que ela será usada." />
      <section className="content-section">
        <div className="shell application-index">
          {applications.map((application, index) => (
            <article key={application.code}>
              <ApplicationVisual className={`application-index__code application-index__code--${application.tone}`} image={application.image} alt={application.imageAlt} position={application.imagePosition} />
              <div><span>0{index + 1}</span><h2>{application.title}</h2><p>{application.description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
