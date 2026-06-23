import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blocrate.css";
import { DATA } from "./blocrate-assets-1";

/**
 * Shared top navigation — the floating pill nav from the landing page.
 * Used on the landing and on the Coming Soon pages so the navbar is identical
 * everywhere. On phones it collapses the section links into a hamburger menu
 * (logo stays on the left). Links point at the landing sections (e.g. "/#how"):
 * on the landing that's a same-page hash change (smooth scroll, no reload); on
 * other routes it navigates home and scrolls to the section.
 */

// Blocrate black wordmark — the same asset the landing nav renders, pulled from
// the inlined asset blob so the logo matches exactly.
const LOGO_BLACK: string = (() => {
  try {
    return (JSON.parse(DATA) as { blocrate_black?: string }).blocrate_black ?? "";
  } catch {
    return "";
  }
})();

const LINKS = [
  { href: "/#how", label: "How it works" },
  { href: "/#who", label: "Who it's for" },
  { href: "/#trust", label: "Security" },
];

export default function BlocrateNav() {
  const [open, setOpen] = useState(false);

  // close the mobile menu on Escape or when the viewport grows past phone width
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 560) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="nav-wrap">
      <nav className="nav">
        <Link className="brand" to="/" aria-label="Blocrate home" onClick={() => setOpen(false)}>
          <img src={LOGO_BLACK} alt="Blocrate" />
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && <div className="nav-scrim" onClick={() => setOpen(false)} />}
      <div className={"nav-menu" + (open ? " open" : "")}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
