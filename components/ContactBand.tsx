import Link from "next/link";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band__inner">
        <p>Tem uma peça ou um lote para avaliar?</p>
        <h2>Envie o escopo.<br />Começamos pela superfície.</h2>
        <Link className="button button--red" href="/contato">Solicitar análise <span className="icon icon--north-east" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
