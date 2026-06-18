import React, { useEffect, useRef, useState } from "react";

interface ScoreGaugeProps {
  score?: number;
  max?: number;
  label?: string;
  size?: number;
  className?: string;
}

/**
 * 0–900 credit-score gauge — indigo ring on a hairline track with a count-up
 * number, drawn when it scrolls into view. A Blocrate signature motif.
 */
export const ScoreGauge: React.FC<ScoreGaugeProps> = ({
  score = 810,
  max = 900,
  label = "Prime tier",
  size = 152,
  className = "",
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(0);

  const stroke = size * 0.072;
  const r = (size - stroke) / 2 - 2;
  const c = 2 * Math.PI * r;
  const frac = Math.min(score / max, 1);
  const offset = active ? c * (1 - frac) : c;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(score);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * score));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, score]);

  const cx = size / 2;

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`.trim()}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <defs>
          <linearGradient id="gaugeIndigo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6f62ff" />
            <stop offset="1" stopColor="#4b3bff" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cx} r={r} stroke="#eceef4" strokeWidth={stroke} />
        <circle
          cx={cx}
          cy={cx}
          r={r}
          stroke="url(#gaugeIndigo)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${cx} ${cx})`}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.22,.61,.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-num text-blocrate-ink"
          style={{ fontSize: size * 0.2, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          {display}
        </span>
        <span
          className="text-blocrate-accent"
          style={{
            fontSize: size * 0.066,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginTop: size * 0.03,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
