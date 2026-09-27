"use client";

import { useState } from "react";

export function BeforeAfter() {
  const [position, setPosition] = useState(48);

  return (
    <div className="before-after">
      <div className="before-after__canvas" style={{ "--position": `${position}%` } as React.CSSProperties}>
        <div className="before-after__before">
          <span>Superfície sem tratamento</span>
        </div>
        <div className="before-after__after">
          <span>Representação após revestimento</span>
        </div>
        <div className="before-after__divider" aria-hidden="true">
          <i>↔</i>
        </div>
        <input
          type="range"
          min="4"
          max="96"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Comparar superfície sem tratamento e representação revestida"
        />
      </div>
      <p className="before-after__caption">
        <span>Visualização educativa</span>
        Esta simulação demonstra o papel do revestimento; não representa um case específico da Primapox.
      </p>
    </div>
  );
}
