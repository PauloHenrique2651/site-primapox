import Link from "next/link";
import Image from "next/image";
import styles from "./BrandMark.module.css";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-mark ${styles.brand}`} data-compact={compact} href="/" aria-label="Primapox — página inicial">
      <span className={styles.plate}>
        <Image
          className={styles.logo}
          src="/primapox-logo-oficial.png"
          alt="Primapox"
          width={767}
          height={325}
          sizes={compact ? "(max-width: 800px) 116px, 136px" : "188px"}
          priority={compact}
          unoptimized
        />
      </span>
      {!compact && <span className="brand-mark__descriptor">Pintura eletrostática a pó</span>}
    </Link>
  );
}
