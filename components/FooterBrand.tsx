import Image from "next/image";
import { BrandMark } from "./BrandMark";
import styles from "./FooterBrand.module.css";

export function FooterBrand() {
  return (
    <div className={styles.brand}>
      <BrandMark contrast visual={
        <Image
          className={styles.logo}
          src="/brand/primapox-logo-rodape.png"
          alt="Primapox"
          width={1672}
          height={941}
          sizes="(max-width: 520px) 90vw, 340px"
          unoptimized
        />
      } />
    </div>
  );
}
