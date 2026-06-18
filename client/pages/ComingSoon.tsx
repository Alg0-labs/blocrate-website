import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    setNavOpen(false);
    navigate("/");
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pt-[120px]">
      <div className="bk-aurora" />
      <div className="bk-dotgrid" />

      <Navbar
        navOpen={navOpen}
        onNavToggle={() => setNavOpen((o) => !o)}
        onJoinWaitlist={goHome}
        waitlistInView={false}
      />

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 text-center">
        <div className="flex max-w-2xl flex-col items-center gap-5">
          <Eyebrow>{title}</Eyebrow>
          <h1 className="text-[clamp(28px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.035em] text-blocrate-ink">
            This page is coming soon
          </h1>
          <p className="max-w-[44ch] text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-blocrate-ink-soft">
            We're preparing {title.toLowerCase()} for you. Please check back later.
          </p>
          <Link to="/" className="btn btn-primary mt-2">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
