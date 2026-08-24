import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  size: number;
  delay: number;
};

const COLORS = ["#ffd23f", "#ff9a70", "#fff6e8", "#7ce0a3", "#e8503c"];
const SIZES = [4, 6, 8];

export default function App() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clicked, setClicked] = useState(false);
  const idRef = useRef(0);
  const clickTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(clickTimer.current), []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = e.clientX > 0 ? e.clientX : rect.left + rect.width / 2;
    const cy = e.clientY > 0 ? e.clientY : rect.top + rect.height / 2;

    const burst: Particle[] = Array.from({ length: 14 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 46 + Math.random() * 92;
      return {
        id: idRef.current++,
        x: cx,
        y: cy,
        dx: Math.round((Math.cos(angle) * dist) / 2) * 2,
        dy: Math.round((Math.sin(angle) * dist - 26) / 2) * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
        delay: Math.floor(Math.random() * 60),
      };
    });

    setParticles((prev) => [...prev.slice(-56), ...burst]);
    const ids = new Set(burst.map((b) => b.id));
    window.setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !ids.has(p.id)));
    }, 950);

    setClicked(true);
    window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => setClicked(false), 480);
  };

  return (
    <main className="stage">
      <div className="bobber">
        <button
          type="button"
          className={`pixel-btn${clicked ? " is-hit" : ""}`}
          onClick={handleClick}
        >
          <svg
            className="cursor-arrow"
            viewBox="0 0 4 7"
            shapeRendering="crispEdges"
            aria-hidden="true"
          >
            <path d="M0 0h1v7H0z M1 1h1v5H1z M2 2h1v3H2z M3 3h1v1H3z" />
          </svg>
          <span className="btn-label">
            <span className="lbl lbl-main">APERTAR!</span>
            <span className="lbl lbl-alt" aria-hidden="true">
              UHUL!
            </span>
          </span>
        </button>
      </div>

      <div className="particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="pixel-particle"
            style={
              {
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: p.color,
                "--dx": `${p.dx}px`,
                "--dy": `${p.dy}px`,
                "--delay": `${p.delay}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="scanlines" aria-hidden="true" />
    </main>
  );
}
