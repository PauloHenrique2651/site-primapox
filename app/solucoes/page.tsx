import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Soluções", description: "Soluções Primapox para pintura eletrostática e proteção de componentes metálicos." };

export default function SolucoesPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Soluções" marker="SOLUÇÃO 01" title={<>Uma competência.<br /><em>Aplicações diversas.</em></>} copy="A oferta publicada reflete a capacidade comprovada da Primapox. Novas soluções entram no portfólio somente depois de validadas." />
      <section className="content-section">
        <div className="shell solution-listing">
          <Link href="/solucoes/pintura-eletrostatica-a-po">
            <span>01 / SOLUÇÃO PUBLICADA</span>
            <h2>Pintura eletrostática a pó</h2>
            <p>Cobertura uniforme, resistência e acabamento técnico para componentes metálicos.</p>
            <b>Conhecer solução <span className="icon icon--north-east" aria-hidden="true" /></b>
          </Link>
        </div>
      </section>
    </>
  );
}
