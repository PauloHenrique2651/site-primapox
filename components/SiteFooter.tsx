import Link from "next/link";
import { FooterBrand } from "@/components/FooterBrand";
import { company, navigation } from "@/data/site";
import { whatsappLink } from "@/data/whatsapp";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={`site-footer ${styles.footer}`} id="rodape">
      <div className="shell site-footer__top">
        <div className="site-footer__brand">
          <FooterBrand />
          <p>Pintura eletrostática a pó com preparação controlada, cobertura uniforme e acabamento de alto padrão.</p>
        </div>
        <div>
          <p className="footer-label">Navegação</p>
          <nav className="footer-links" aria-label="Navegação do rodapé">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/central-tecnica">Central técnica</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">Contato</p>
          <div className="footer-links">
            <a href="tel:+552134487320">{company.phoneMain}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp · {company.whatsappLabel}</a>
            <span>{company.address}</span>
          </div>
        </div>
      </div>
      <div className="shell site-footer__location">
        <div className="site-footer__location-copy">
          <p className="footer-label">Onde estamos</p>
          <h2>Visite a Primapox</h2>
          <p>{company.address}</p>
          <a href={company.mapsUrl} target="_blank" rel="noreferrer">
            Traçar rota <span className="icon icon--north-east" aria-hidden="true" />
          </a>
        </div>
        <iframe
          src={company.mapsEmbedUrl}
          title="Localização da Primapox no Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Primapox</span>
        <span>Rio de Janeiro · RJ · Brasil</span>
        <Link href="/politica-de-privacidade">Privacidade</Link>
      </div>
    </footer>
  );
}
