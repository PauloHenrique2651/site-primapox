import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Central técnica", description: "Conteúdo técnico sobre pintura eletrostática a pó, preparação e acabamento de componentes metálicos." };

const topics = [
  ["Fundamentos", "Como funciona a pintura eletrostática a pó?"],
  ["Preparação", "Por que a limpeza do substrato define a aderência?"],
  ["Materiais", "Resina híbrida ou poliéster: o que muda?"],
  ["Projeto", "Quais informações enviar para cotar um lote de peças?"],
];

export default function CentralTecnicaPage() {
  return (
    <>
      <PageHero eyebrow="Primapox / Central técnica" marker="CONTEÚDO" title={<>Conhecimento que<br /><em>prepara decisões.</em></>} copy="Uma base de conteúdo direto para compradores, projetistas e profissionais que especificam componentes metálicos." />
      <section className="content-section"><div className="shell topic-list">{topics.map(([tag, title], index) => <article key={title}><span>0{index + 1} / {tag}</span><h2>{title}</h2><p>Conteúdo em preparação editorial.</p></article>)}</div></section>
    </>
  );
}
