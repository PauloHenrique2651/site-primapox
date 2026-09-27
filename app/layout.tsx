import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.primapox.com"),
  title: {
    default: "Primapox | Pintura eletrostática a pó no Rio de Janeiro",
    template: "%s | Primapox",
  },
  description: "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Primapox",
    title: "Primapox | Pintura eletrostática a pó",
    description: "Precisão no processo. Proteção em cada camada.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
