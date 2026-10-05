import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Soluções", description: "Soluções Primapox para pintura eletrostática e proteção de componentes metálicos." };

export default function SolucoesPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Serviços" marker="PINTURA A PÓ" title={<>Uma competência.<br /><em>Aplicações diversas.</em></>} copy="Pintura eletrostática a pó com resinas híbrida e poliéster, preparação de superfície, aplicação, cura e controle do acabamento." />
      <section className="content-section">
        <div className="shell solution-listing">
          <Link href="/solucoes/pintura-eletrostatica-a-po">
            <span>PINTURA / PREPARAÇÃO / ACABAMENTO</span>
            <h2>Pintura eletrostática a pó</h2>
            <p>Benefícios, tipos de resina, materiais, aplicações e referência técnica da tinta poliéster.</p>
            <b>Conhecer serviços <span className="icon icon--north-east" aria-hidden="true" /></b>
          </Link>
        </div>
      </section>
    </>
  );
}
