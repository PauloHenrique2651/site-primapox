import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { IndustrialGallery } from "@/components/IndustrialGallery";
import { ProtectionExplorer } from "@/components/ProtectionExplorer";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";
import { applications, benefits, processSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/media/primapox-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__grid shell">
          <div className="hero__content">
            <p className="hero__eyebrow"><span /> Pintura eletrostática a pó · Rio de Janeiro</p>
            <h1>Proteção que adere.<br /><em>Qualidade que permanece.</em></h1>
            <p className="hero__copy">Revestimento técnico para componentes metálicos, com cobertura uniforme, alta resistência e acabamento de alto padrão.</p>
            <div className="hero__actions">
              <Link className="button button--red" href="/contato">Solicitar orçamento <span className="icon icon--north-east" aria-hidden="true" /></Link>
              <Link className="button button--ghost" href="/galeria">Ver trabalhos <span className="icon" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <div className="hero__footer shell">
          <span><b>+20 anos</b> de experiência</span>
          <p><b>Controle técnico</b> em cada etapa</p>
          <span><b>Vigário Geral</b> · Rio de Janeiro</span>
        </div>
      </section>

      <section className="evidence-strip" aria-label="Informações da Primapox">
        <div className="shell evidence-strip__grid">
          <div><strong>+20</strong><span>Anos de atuação</span></div>
          <div><strong>02</strong><span>Famílias de resina</span></div>
          <div><strong>04</strong><span>Etapas controladas</span></div>
          <div className="evidence-strip__location"><strong>RJ</strong><span>Vigário Geral</span></div>
        </div>
      </section>

      <section className="section solution-intro">
        <div className="shell">
          <SectionHeading
            eyebrow="01 — Competência central"
            title={<>Não é só cor.<br />É desempenho sobre o metal.</>}
            aside={<p>A tinta em pó forma uma película contínua sobre a peça. A aplicação eletrostática favorece a cobertura de geometrias complexas, enquanto a cura consolida resistência e acabamento.</p>}
          />
          <div className="solution-intro__body">
            <div className="solution-intro__diagram" aria-hidden="true">
              <div className="layer-stack">
                <span className="layer-stack__coat"><i>Camada de acabamento</i></span>
                <span className="layer-stack__bond"><i>Aderência</i></span>
                <span className="layer-stack__metal"><i>Substrato metálico</i></span>
              </div>
            </div>
            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <div key={benefit}><span>0{index + 1}</span><p>{benefit}</p></div>
              ))}
              <Link className="text-link" href="/solucoes/pintura-eletrostatica-a-po">Ver solução completa <span className="icon icon--north-east" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <SectionHeading
            eyebrow="02 — Processo"
            title={<>Quatro etapas.<br />Uma superfície preparada.</>}
            light
            aside={<p>O resultado final começa muito antes da cor. Cada fase cria a condição necessária para a próxima.</p>}
          />
          <div className="process-rail">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div className="process-rail__marker"><i /></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <Link className="text-link text-link--light process-section__link" href="/processo">Acompanhar o processo completo <span className="icon icon--north-east" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section applications-section">
        <div className="shell">
          <SectionHeading
            eyebrow="03 — Aplicações"
            title={<>Onde o acabamento<br />precisa trabalhar.</>}
            aside={<p>Da arquitetura ao equipamento industrial, cada peça pede uma leitura própria de material, geometria e ambiente de uso.</p>}
          />
          <div className="application-mosaic">
            {applications.map((application, index) => (
              <article className={`application-card application-card--${application.tone}`} key={application.code}>
                <div className="application-card__visual" aria-hidden="true">
                  <span>{application.code}</span>
                  <i />
                  <b>{index + 1}</b>
                </div>
                <div className="application-card__copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-preview-section">
        <div className="shell">
          <SectionHeading
            eyebrow="04 — Acervo real"
            title={<>A superfície<br />depois do processo.</>}
            aside={<p>Uma seleção do acervo histórico da Primapox: linha produtiva, componentes e aplicações finalizadas.</p>}
          />
          <IndustrialGallery preview />
          <Link className="text-link gallery-preview-section__link" href="/galeria">Explorar as 46 fotos <span className="icon icon--north-east" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="shell">
          <SectionHeading
            eyebrow="05 — Visualização"
            title={<>A camada muda<br />a relação com o ambiente.</>}
            aside={<p>Arraste o controle para visualizar uma representação da transição entre a superfície exposta e o acabamento revestido.</p>}
          />
          <BeforeAfter />
        </div>
      </section>

      <section className="section explorer-section">
        <div className="shell">
          <SectionHeading
            eyebrow="06 — Leitura do projeto"
            title={<>O que você<br />precisa proteger?</>}
            light
            aside={<p>Selecione um tipo de peça para entender como organizamos a conversa técnica inicial.</p>}
          />
          <ProtectionExplorer />
        </div>
      </section>

      <section className="section quote-section" id="orcamento">
        <div className="shell">
          <div className="quote-section__intro">
            <p className="eyebrow">07 — Novo projeto</p>
            <h2>Traga a peça.<br /><em>Nós pensamos a superfície.</em></h2>
            <p>Envie dimensões, quantidade, fotos ou desenhos. Quanto melhor o escopo, mais objetiva será a análise.</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
