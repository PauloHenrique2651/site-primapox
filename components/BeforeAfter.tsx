"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BeforeAfter.module.css";

export function BeforeAfter() {
  const [position, setPosition] = useState(48);

  return (
    <div className="before-after">
      <div className={styles.canvas} style={{ "--position": `${position}%` } as React.CSSProperties}>
        <div className={styles.layer}>
          <Image src="/surfaces/untreated-rust.png" alt="Gabinete de aço com ferrugem superficial, antes da preparação" fill sizes="(max-width: 768px) 100vw, 90vw" className={styles.photo} />
        </div>
        <div className={`${styles.layer} ${styles.after}`}>
          <Image src="/surfaces/powder-coated.png" alt="O mesmo gabinete após preparação e revestimento azul acetinado, em imagem ilustrativa" fill sizes="(max-width: 768px) 100vw, 90vw" className={styles.photo} />
        </div>
        <span className={`${styles.label} ${styles.beforeLabel}`}>Antes · sem tratamento</span>
        <span className={`${styles.label} ${styles.afterLabel}`}>Depois · preparado e revestido</span>
        <div className={`before-after__divider ${styles.divider}`} aria-hidden="true">
          <i className="before-after__arrows" aria-hidden="true" />
        </div>
        <span className={styles.hint} aria-hidden="true">Arraste para comparar</span>
        <input
          className={styles.range}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Comparar gabinete enferrujado e gabinete preparado e revestido"
          aria-valuetext={`${position}% da imagem antes do tratamento`}
        />
      </div>
      <p className="before-after__caption">
        <span>Demonstração ilustrativa</span>
        Imagens geradas por IA para ilustrar a preparação e o revestimento. Não representam um trabalho específico da Primapox.
      </p>
    </div>
  );
}
