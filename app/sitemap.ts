import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.primapox.com";
  const routes = ["", "/empresa", "/solucoes", "/solucoes/pintura-eletrostatica-a-po", "/processo", "/aplicacoes", "/galeria", "/manutencao", "/central-tecnica", "/contato", "/politica-de-privacidade"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .7 }));
}
