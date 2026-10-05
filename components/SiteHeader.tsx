"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navigation } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const quoteHref = pathname === "/" ? "#orcamento" : "/contato#orcamento";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavigation = useRef<HTMLDetailsElement>(null);

  const closeMenu = useCallback(() => {
    if (mobileNavigation.current) mobileNavigation.current.open = false;
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !mobileNavigation.current?.open) return;
      closeMenu();
      mobileNavigation.current?.querySelector("summary")?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 1100px)");
    const onResize = () => { if (!mobile.matches) closeMenu(); };
    mobile.addEventListener("change", onResize);
    return () => mobile.removeEventListener("change", onResize);
  }, [closeMenu]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 32);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-header__inner shell">
        <BrandMark compact onClick={closeMenu} />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-cta" href={quoteHref}>
          Solicitar orçamento <span className="icon icon--north-east" aria-hidden="true" />
        </a>
        <details
          className="mobile-navigation"
          ref={mobileNavigation}
          onToggle={(event) => setOpen(event.currentTarget.open)}
        >
          <summary className="menu-button" role="button" aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
            <span />
            <span />
          </summary>
          <div className="mobile-menu" id="mobile-menu">
            <nav aria-label="Navegação mobile">
              {navigation.map((item, index) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  <span>0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
              <a className="mobile-menu__cta" href={quoteHref} onClick={closeMenu}>
                <span>{String(navigation.length + 1).padStart(2, "0")}</span>
                Solicitar orçamento
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
