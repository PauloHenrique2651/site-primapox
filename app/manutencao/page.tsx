import type { Metadata } from "next";
import { MaintenanceSection } from "@/components/MaintenanceSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Manutenção",
  description: "Cuidados com a pintura poliéster: limpeza, intervalos recomendados, fatores ambientais, retoques e silicone industrial.",
};

export default function ManutencaoPage() {
  return (
    <>
      <PageHero
        eyebrow="Primapox / Manutenção"
        marker="CUIDADOS"
        title={<>Cuide do acabamento.<br /><em>Preserve a superfície.</em></>}
        copy="A pintura poliéster precisa de limpeza regular para manter suas propriedades decorativas. A frequência depende do ambiente e das condições de exposição."
      />
      <MaintenanceSection />
    </>
  );
}
