import React from "react";
import { BrandLogo } from "@/components/shared/BrandLogo";

const NAV_LINKS = [
  { href: "https://docs.blocrate.com", label: "How it works" },
  { href: "/features", label: "Features" },
  { href: "/docs", label: "Docs" },
];

interface NavbarProps {
  navOpen: boolean;
  onNavToggle: () => void;
  onJoinWaitlist: () => void | Promise<void>;
  waitlistInView: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  navOpen,
  onNavToggle,
  onJoinWaitlist,
  waitlistInView,
}) => {
  const linkClass =
    "text-blocrate-ink/[0.88] text-[15px] font-medium tracking-[-0.01em] hover:text-blocrate-ink transition-opacity whitespace-nowrap";

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 sm:pt-5">
      <div
        className="pointer-events-auto flex w-full max-w-[820px] items-center justify-between rounded-full border px-3 py-2 pl-4 sm:px-4 sm:pl-5"
        style={{
          background: "rgba(245,245,247,0.78)",
          backdropFilter: "saturate(180%) blur(14px)",
          WebkitBackdropFilter: "saturate(180%) blur(14px)",
          borderColor: "rgba(0,0,0,0.05)",
          boxShadow:
            "0 1px 2px rgba(10,10,12,.04), 0 8px 24px rgba(10,10,12,.05)",
        }}
      >
        <a href="/" className="flex items-center" aria-label="Blocrate home">
          <BrandLogo size={26} />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {!waitlistInView && (
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="btn btn-primary hidden lg:inline-flex"
              style={{ fontSize: 14, padding: "9px 18px" }}
            >
              Join waitlist
            </button>
          )}
          <button
            type="button"
            onClick={onNavToggle}
            className="p-2 text-blocrate-ink hover:opacity-70 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={navOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {navOpen && (
        <div
          className="absolute left-4 right-4 top-[72px] space-y-1 rounded-2xl border px-4 py-3 lg:hidden"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderColor: "rgba(0,0,0,0.06)",
            boxShadow: "0 12px 30px rgba(10,10,12,.10)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block py-2.5 text-[15px] font-medium text-blocrate-ink hover:opacity-70"
              onClick={onNavToggle}
            >
              {link.label}
            </a>
          ))}
          {!waitlistInView && (
            <button
              type="button"
              onClick={() => {
                onJoinWaitlist();
                onNavToggle();
              }}
              className="btn btn-primary mt-2 w-full"
              style={{ fontSize: 15, padding: "12px 18px" }}
            >
              Join waitlist
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
