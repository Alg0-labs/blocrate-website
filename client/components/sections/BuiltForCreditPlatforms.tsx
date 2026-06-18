import React from "react";
import mobileMockupVid from "@/assets/mobile-mockup.mp4";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

const FEATURES = [
  {
    title: "Underwriting",
    body: "Price risk precisely with one portable 0–900 score read across every lending protocol.",
    icon: (
      <path
        d="M4 14l4-4 3 3 5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Private verification",
    body: "Encrypted financial signals confirm creditworthiness — identity stays private unless a default occurs.",
    icon: (
      <path
        d="M11 2l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5l7-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Capital routing",
    body: "Route loans to third-party capital through a neutral layer — without holding funds or issuing loans.",
    icon: (
      <path
        d="M3 11h11M10 6l5 5-5 5M19 4v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export const BuiltForCreditPlatforms: React.FC = () => (
  <section className="relative overflow-hidden bg-blocrate-paper px-5 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-20">
    <div className="bk-aurora" />
    <div className="relative z-10 mx-auto max-w-7xl">
      <Reveal className="mx-auto mb-12 max-w-[680px] text-center sm:mb-16">
        <Eyebrow>For protocols &amp; lenders</Eyebrow>
        <h2 className="mt-5 text-[clamp(30px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.035em] text-blocrate-ink">
          Built for credit platforms
        </h2>
        <p className="mx-auto mt-5 max-w-[600px] text-[clamp(15px,1.4vw,17px)] leading-[1.55] text-blocrate-ink-soft">
          Infrastructure for platforms that want to offer credit without becoming
          lenders. We power underwriting, privacy-preserving verification and
          capital routing for the next generation of crypto-native credit products.
        </p>
      </Reveal>

      <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {FEATURES.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i + 1) as 1 | 2 | 3}
            className="rounded-[22px] border border-blocrate-hairline bg-white p-6 text-left"
          >
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[13px] bg-[rgba(75,59,255,0.08)] text-blocrate-accent">
              <svg width="22" height="22" viewBox="0 0 22 22">{f.icon}</svg>
            </span>
            <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-blocrate-ink">
              {f.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-blocrate-ink-soft">
              {f.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative flex justify-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[560px] w-[560px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(closest-side, rgba(75,59,255,.12), rgba(120,150,255,.05) 45%, transparent 72%)",
          }}
        />
        <video
          src={mobileMockupVid}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-[1] h-[60vh] w-full max-w-5xl object-contain sm:h-[70vh] lg:h-[80vh]"
        />
      </Reveal>
    </div>
  </section>
);
