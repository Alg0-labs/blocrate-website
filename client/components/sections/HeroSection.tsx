import React from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/layout/HeroBanner";
import { PassportCard } from "@/components/shared/PassportCard";

interface HeroSectionProps {
  waitlistSectionRef: React.RefObject<HTMLDivElement | null>;
  waitlistInView: boolean;
  navOpen: boolean;
  onNavToggle: () => void;
  onScrollToWaitlist: () => void;
  email: string;
  emailError: string | null;
  isSubmitting?: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJoinWaitlist: () => void | Promise<void>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  waitlistSectionRef,
  waitlistInView,
  navOpen,
  onNavToggle,
  onScrollToWaitlist,
  email,
  emailError,
  isSubmitting = false,
  onEmailChange,
  onJoinWaitlist,
}) => (
  <section className="relative flex min-h-screen flex-col overflow-hidden bg-white pt-[120px] pb-12 sm:pt-[132px]">
    {/* backdrop: soft indigo aurora + engineered dot grid */}
    <div className="bk-aurora" />
    <div className="bk-dotgrid" />

    <Navbar
      navOpen={navOpen}
      onNavToggle={onNavToggle}
      onJoinWaitlist={onScrollToWaitlist}
      waitlistInView={waitlistInView}
    />

    <div
      ref={waitlistSectionRef}
      id="waitlist-section"
      className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center sm:px-6"
    >
      <div className="flex w-full max-w-[820px] flex-col items-center">
        {/* announcement pill */}
        <span
          className="mb-7 inline-flex animate-rise items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[13.5px] font-medium tracking-[-0.01em] opacity-0"
          style={{
            background: "rgba(75,59,255,0.06)",
            border: "1px solid rgba(75,59,255,0.16)",
            color: "#3d30d4",
            animationDelay: "0.02s",
          }}
        >
          <span className="live-dot" />
          Now onboarding launch partners
        </span>

        <h1
          className="max-w-[16ch] animate-rise text-[clamp(40px,7vw,84px)] font-semibold leading-[1.02] tracking-[-0.045em] text-blocrate-ink opacity-0"
          style={{ animationDelay: "0.12s", textWrap: "balance" } as React.CSSProperties}
        >
          Credit infrastructure <br className="hidden sm:block" />
          for <span className="text-blocrate-accent">crypto</span>.
        </h1>

        <p
          className="mt-6 max-w-[44ch] animate-rise text-[clamp(16px,1.5vw,20px)] font-normal leading-[1.5] tracking-[-0.01em] text-blocrate-ink-soft opacity-0"
          style={{ animationDelay: "0.24s" }}
        >
          We help crypto platforms assess credit risk and route loans — one
          portable onchain score, read from every lending protocol and delivered
          per query via API.
        </p>

        <div className="mt-9 w-full animate-rise opacity-0" style={{ animationDelay: "0.34s" }}>
          <WaitlistForm
            email={email}
            error={emailError}
            isSubmitting={isSubmitting}
            onEmailChange={onEmailChange}
            onJoin={onJoinWaitlist}
          />
          <p className="mt-3 text-[13px] text-blocrate-ink-faint">
            Join the waitlist — no spam, just early access.
          </p>
        </div>

        {/* signature showcase: the Credit Passport */}
        <div
          className="relative mt-14 flex w-full animate-fadein justify-center opacity-0 sm:mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(closest-side, rgba(75,59,255,.12), rgba(120,150,255,.05) 45%, transparent 72%)",
            }}
          />
          <PassportCard float className="relative z-[1] w-[340px] sm:w-[380px]" />
        </div>
      </div>
    </div>

    <HeroBanner />
  </section>
);
