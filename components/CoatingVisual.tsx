export function CoatingVisual() {
  const particles = Array.from({ length: 32 }, (_, index) => index);

  return (
    <div className="coating-visual" aria-hidden="true">
      <div className="coating-visual__measure coating-visual__measure--top">60 μm</div>
      <div className="coating-visual__measure coating-visual__measure--side">SUBSTRATO</div>
      <div className="coating-visual__gun">
        <span className="coating-visual__gun-body" />
        <span className="coating-visual__gun-ring coating-visual__gun-ring--one" />
        <span className="coating-visual__gun-ring coating-visual__gun-ring--two" />
        <span className="coating-visual__gun-nozzle" />
      </div>
      <div className="coating-visual__particles">
        {particles.map((particle) => (
          <i key={particle} style={{ "--i": particle } as React.CSSProperties} />
        ))}
      </div>
      <div className="coating-visual__plate">
        <span className="coating-visual__layer" />
        <span className="coating-visual__shine" />
      </div>
      <div className="coating-visual__axis">
        <span>APLICAÇÃO</span>
        <i />
      </div>
    </div>
  );
}
