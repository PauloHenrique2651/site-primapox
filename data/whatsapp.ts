import { company } from "./site";

export function whatsappLink(message = "Olá! Gostaria de solicitar um orçamento de pintura eletrostática a pó.") {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function quoteMessage(form: FormData, files: File[]) {
  const field = (name: string) => String(form.get(name) ?? "").trim();
  return [
    "*Solicitação de orçamento — Primapox*",
    "",
    `*Nome:* ${field("name")}`,
    `*Empresa:* ${field("company")}`,
    `*E-mail:* ${field("email")}`,
    `*Telefone:* ${field("phone")}`,
    `*Tipo de peça:* ${field("application") || "Não informado"}`,
    `*Cidade / Estado:* ${field("location") || "Não informado"}`,
    "",
    "*Sobre o projeto:*",
    field("details"),
    ...(files.length ? ["", "*Anexos selecionados:*", ...files.map((file) => `- ${file.name}`)] : []),
  ].join("\n");
}
