"use client";

import { useState } from "react";
import { company } from "@/data/site";
import { quoteMessage, whatsappLink } from "@/data/whatsapp";
import styles from "./QuoteForm.module.css";

type Handoff = { message: string; kind: "chat" | "native" | "fallback" };

function canShareAttachments(files: File[]) {
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (!mobile || !files.length || !navigator.share || !navigator.canShare) return false;
  try {
    return navigator.canShare({ files });
  } catch {
    return false;
  }
}

export function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [nativeShare, setNativeShare] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [dragging, setDragging] = useState(false);
  const [handoff, setHandoff] = useState<Handoff | null>(null);

  function updateFiles(next: File[]) {
    const allowed = next.filter((file) => /\.(pdf|jpe?g|png|docx|xlsx)$/i.test(file.name));
    setFiles(allowed);
    setNativeShare(canShareAttachments(allowed));
    setHandoff(null);
    setNotice(allowed.length < next.length ? "Use arquivos PDF, JPG, PNG, DOCX ou XLSX." : "");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !event.currentTarget.reportValidity()) return;
    const message = quoteMessage(new FormData(event.currentTarget), files);
    setNotice("");
    if (canShareAttachments(files)) {
      setBusy(true);
      try {
        await navigator.share({ title: "Orçamento Primapox", text: message, files });
        setHandoff({ message, kind: "native" });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setNotice("Compartilhamento cancelado. Seus dados e arquivos continuam no formulário.");
        } else {
          setHandoff({ message, kind: "fallback" });
          setNotice("Não foi possível compartilhar os arquivos neste navegador. Abra a conversa e anexe-os diretamente no WhatsApp.");
        }
      } finally {
        setBusy(false);
      }
      return;
    }
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setHandoff({ message, kind: "chat" });
  }

  return (
    <form className={`quote-form ${styles.form}`} id="orcamento" onSubmit={handleSubmit} onChange={() => setHandoff(null)}>
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
      <label className={`file-field ${dragging ? styles.dragging : ""}`} onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(event) => { event.preventDefault(); setDragging(false); updateFiles([...files, ...Array.from(event.dataTransfer.files)]); }}>
        <span>Anexos</span>
        <input name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx" onChange={(event) => updateFiles(Array.from(event.currentTarget.files ?? []))} />
        <span className="file-field__visual"><strong>Selecione ou arraste desenhos e fotos</strong> PDF, JPG, PNG, DOCX ou XLSX</span>
      </label>
      {files.length > 0 && (
        <div className={styles.attachments}>
          <p className={styles.caption}>{files.length} {files.length === 1 ? "arquivo selecionado" : "arquivos selecionados"}</p>
          <ul>{files.map((file, index) => (
            <li key={`${file.name}-${file.size}-${index}`}>
              <span>{file.name}<small>{(file.size / 1024 / 1024).toFixed(2)} MB</small></span>
              <button type="button" aria-label={`Remover ${file.name}`} onClick={() => updateFiles(files.filter((_, position) => position !== index))}>Remover</button>
            </li>
          ))}</ul>
          <p className={styles.help}>
            {nativeShare
              ? `Ao continuar, escolha WhatsApp e a conversa da Primapox (${company.whatsappLabel}) para compartilhar os dados e arquivos. Confira os anexos antes de confirmar o envio.`
              : "Os dados vão na mensagem pronta. Neste navegador, anexe os arquivos diretamente na conversa do WhatsApp."}
          </p>
        </div>
      )}
      {notice && <p className={styles.notice} role="status">{notice}</p>}
      {handoff && (
        <div className={styles.handoff} role="status">
          <h3>{handoff.kind === "native" ? "Confira o envio no WhatsApp" : "Continue na conversa do WhatsApp"}</h3>
          <p>{handoff.kind === "native"
            ? "Seu aparelho abriu o compartilhamento. Confira o destinatário, a mensagem e os arquivos no WhatsApp. O site não confirma a entrega."
            : files.length
              ? "A mensagem contém os dados do formulário e os nomes dos anexos. Adicione os arquivos na conversa antes de confirmar o envio."
              : "A mensagem está pronta com os dados do formulário. Revise e confirme o envio no WhatsApp."}</p>
          <a className="text-link" href={whatsappLink(handoff.message)} target="_blank" rel="noopener noreferrer">Abrir conversa da Primapox <span className="icon icon--north-east" aria-hidden="true" /></a>
        </div>
      )}
      <div className="quote-form__submit">
        <p>Você revisa e confirma o envio no WhatsApp. Os dados serão usados pela Primapox para responder à sua solicitação.</p>
        <button className="button button--red" type="submit" disabled={busy}>{busy ? "Abrindo compartilhamento" : nativeShare ? "Compartilhar orçamento e anexos" : "Enviar pelo WhatsApp"} <span className="icon icon--north-east" aria-hidden="true" /></button>
      </div>
    </form>
  );
}
