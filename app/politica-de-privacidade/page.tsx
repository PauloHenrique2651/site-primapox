import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Política de privacidade" };

export default function PrivacidadePage() {
  return (
    <><PageHero eyebrow="Primapox / Privacidade" marker="DADOS" title={<>Informação usada<br /><em>com finalidade.</em></>} copy="Esta política explica o tratamento dos dados enviados nos canais de contato da Primapox." /><section className="content-section"><div className="shell legal-copy"><h2>Dados de contato</h2><p>Nome, empresa, e-mail, telefone e informações de projeto são utilizados somente para analisar e responder à solicitação enviada.</p><h2>Arquivos</h2><p>Desenhos, fotografias e documentos enviados devem conter apenas informações necessárias para a avaliação do projeto.</p><h2>Direitos</h2><p>O titular pode solicitar acesso, correção ou exclusão de dados por meio do e-mail primapox@primapox.com.</p></div></section></>
  );
}
