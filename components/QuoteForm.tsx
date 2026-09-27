"use client";

import { useState } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h3>Escopo preparado.</h3>
        <p>A versão local não envia dados. Para falar agora, ligue para (21) 3448-7320 ou escreva para primapox@primapox.com.</p>
        <button type="button" onClick={() => setStatus("idle")}>Preencher novamente</button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form__grid">
        <label>
          <span>Nome *</span>
          <input name="name" autoComplete="name" required placeholder="Como podemos chamar você?" />
        </label>
        <label>
          <span>Empresa *</span>
          <input name="company" autoComplete="organization" required placeholder="Nome da empresa" />
        </label>
        <label>
          <span>E-mail corporativo *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="nome@empresa.com.br" />
        </label>
        <label>
          <span>Telefone *</span>
          <input name="phone" type="tel" autoComplete="tel" required placeholder="(21) 00000-0000" />
        </label>
        <label>
          <span>Tipo de peça</span>
          <select name="application" defaultValue="">
            <option value="" disabled>Selecione</option>
            <option>Esquadria ou elemento arquitetônico</option>
            <option>Gabinete ou painel</option>
            <option>Mobiliário ou expositor</option>
            <option>Componente industrial</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          <span>Cidade / Estado</span>
          <input name="location" autoComplete="address-level2" placeholder="Rio de Janeiro / RJ" />
        </label>
      </div>
      <label>
        <span>Conte sobre o projeto *</span>
        <textarea name="details" required rows={5} placeholder="Material, dimensões, quantidade, uso da peça e prazo desejado." />
      </label>
      <label className="file-field">
        <span>Anexos</span>
        <input name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx" />
        <span className="file-field__visual"><strong>Arraste desenhos ou fotos</strong> PDF, JPG, PNG, DOCX ou XLSX</span>
      </label>
      <div className="quote-form__submit">
        <p>Ao enviar, você concorda com o uso dos dados para retorno sobre esta solicitação.</p>
        <button className="button button--red" type="submit">Preparar solicitação <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
