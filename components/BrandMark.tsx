"use client";

import type { MouseEvent, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BrandMark.module.css";

export function BrandMark({ compact = false, contrast = false, visual, onClick }: { compact?: boolean; contrast?: boolean; visual?: ReactNode; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  function goHome(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.history.replaceState(window.history.state, "", "/");
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }

  return (
    <Link className={`brand-mark ${styles.brand} ${contrast ? styles.contrast : ""}`} data-compact={compact} data-custom-visual={Boolean(visual)} href="/" scroll aria-label="Primapox — voltar à página inicial" onClick={goHome}>
      <span className={styles.plate}>
        {visual ?? <>
        {contrast && (
          <svg className={styles.cloud} viewBox="0 0 767 325" aria-hidden="true" focusable="false">
            {/* Interior traced from the official PNG, not a second cloud silhouette. */}
            <path d="M399 26L406 22L424 18L435 18L448 21L461 27L467 31L468 34L471 34L483 49L502 43L514 43L532 49L537 52L539 56L543 57L546 62L548 62L555 75L560 73L566 67L588 58L608 57L618 59L633 65L652 79L658 86L658 89L665 101L672 100L673 98L680 96L691 96L704 101L710 111L729 110L736 113L748 124L752 131L754 138L754 157L747 171L735 180L734 184L736 184L738 191L738 203L729 228L706 247L686 253L661 252L644 246L637 241L633 241L634 244L631 251L619 264L603 274L580 279L565 278L551 274L534 264L526 256L508 261L496 257L489 252L488 255L484 257L483 260L467 274L467 276L465 276L465 278L462 278L443 289L417 296L393 296L372 291L362 285L359 285L353 280L350 280L335 264L325 245L322 245L310 253L297 257L267 256L258 253L245 245L236 235L234 235L230 227L227 227L225 230L217 234L202 237L175 235L158 226L152 218L142 210L138 201L135 199L135 169L137 169L143 176L148 176L148 149L141 149L135 156L135 122L152 103L169 93L184 88L203 87L229 93L235 81L248 73L264 72L272 75L280 57L282 57L282 55L296 42L310 34L327 31L350 34L359 38L373 49L385 34L388 34L399 26Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )}
        <Image
          className={styles.logo}
          src="/primapox-logo-oficial.png"
          alt="Primapox"
          width={767}
          height={325}
          sizes={compact ? "(max-width: 800px) 116px, 136px" : contrast ? "260px" : "188px"}
          priority={compact}
          unoptimized
        />
        </>}
      </span>
      {!compact && <span className="brand-mark__descriptor">Pintura eletrostática a pó</span>}
    </Link>
  );
}
