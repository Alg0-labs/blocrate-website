import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** stagger delay step: 1 | 2 | 3 | 4 */
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  threshold?: number;
}

/**
 * Standard scroll-reveal: starts faded + translated down, adds `.in` when it
 * enters the viewport (matches the .reveal-up convention in global.css).
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as = "div",
  className = "",
  threshold = 0.18,
}) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const Tag = as as any;
  const d = delay ? ` d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal-up${d} ${className}`.trim()}>
      {children}
    </Tag>
  );
};
