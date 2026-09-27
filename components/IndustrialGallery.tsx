"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { galleryItems, galleryPreviewIds, type GalleryItem } from "@/data/gallery";

const filters = ["Todos", "Processo", "Acabamentos", "Arquitetura", "Componentes", "Institucional"] as const;

export function IndustrialGallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = useMemo(() => {
    if (preview) return galleryPreviewIds.map((id) => galleryItems[id - 1]);
    return filter === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  }, [filter, preview]);

  const move = useCallback((direction: number) => {
    if (!selected) return;
    const currentIndex = items.findIndex((item) => item.id === selected.id);
    setSelected(items[(currentIndex + direction + items.length) % items.length]);
  }, [items, selected]);

  useEffect(() => {
    if (!selected) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [move, selected]);

  return (
    <>
      {!preview && (
        <div className="gallery-filters" role="group" aria-label="Filtrar galeria">
          {filters.map((option) => (
            <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>
          ))}
        </div>
      )}
      <div className={`industrial-gallery ${preview ? "industrial-gallery--preview" : ""}`}>
        {items.map((item, index) => (
          <button
            className={`industrial-gallery__item industrial-gallery__item--${index % 7}`}
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            aria-label={`Abrir imagem: ${item.alt}`}
          >
            <Image src={item.src} alt={item.alt} fill sizes={preview ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 50vw, 25vw"} />
            <span><i>{String(item.id).padStart(2, "0")}</i>{item.category}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button className="gallery-lightbox__close" type="button" onClick={() => setSelected(null)} aria-label="Fechar imagem" />
          <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Imagem anterior" />
          <div className="gallery-lightbox__image" onClick={(event) => event.stopPropagation()}>
            <Image src={selected.src} alt={selected.alt} fill sizes="95vw" priority />
          </div>
          <div className="gallery-lightbox__caption"><span>{String(selected.id).padStart(2, "0")} / {selected.category}</span><p>{selected.alt}</p></div>
          <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Próxima imagem" />
        </div>
      )}
    </>
  );
}
