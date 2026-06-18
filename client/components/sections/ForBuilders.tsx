import React from "react";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { PassportCard } from "@/components/shared/PassportCard";
import { ScoreGauge } from "@/components/shared/ScoreGauge";

const POINTS = [
  {
    title: "Private by default",
    body: "Creditworthiness is proven with encrypted signals. Your personal data is never shared or sold.",
  },
  {
    title: "Identity stays locked",
    body: "Your score is generated and locked. Identity is only ever revealed if a default occurs.",
  },
  {
    title: "Reputation that travels",
    body: "One passport works across every app — borrow more, lock less, and carry your reputation with you.",
  },
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" className="text-blocrate-accent">
      <circle cx="10" cy="10" r="10" fill="rgba(75,59,255,0.1)" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ForBuilders: React.FC = () => (
  <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-28 md:px-10 lg:px-20">
    <div className="bk-aurora" />
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
      {/* copy */}
      <Reveal>
        <Eyebrow>For borrowers</Eyebrow>
        <h2 className="mt-5 text-[clamp(30px,4.2vw,52px)] font-semibold leading-[1.06] tracking-[-0.04em] text-blocrate-ink">
          Your data isn't our business.{" "}
          <span className="text-blocrate-accent">Keeping it safe is.</span>
        </h2>
        <p className="mt-5 max-w-[48ch] text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-blocrate-ink-soft">
          Complete encryption and privacy for your personal data and
          transactions — built with meticulous attention to every potential risk.
        </p>

        <ul className="mt-8 space-y-5">
          {POINTS.map((p) => (
            <li key={p.title} className="flex gap-3.5">
              <span className="mt-0.5 shrink-0">
                <Check />
              </span>
              <div>
                <p className="text-[16px] font-semibold tracking-[-0.01em] text-blocrate-ink">
                  {p.title}
                </p>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-blocrate-ink-soft">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* showcase */}
      <Reveal delay={1} className="relative flex justify-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[460px] w-[460px] max-w-[110vw] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(closest-side, rgba(75,59,255,.12), rgba(120,150,255,.05) 45%, transparent 72%)",
          }}
        />
        <div className="relative z-[1] w-full max-w-[420px]">
          <PassportCard float className="w-full" />
          {/* floating score gauge */}
          <div
            className="absolute -bottom-10 -left-6 rounded-[22px] border border-blocrate-hairline bg-white p-3 sm:-left-10"
            style={{ boxShadow: "0 1px 2px rgba(10,10,12,.05), 0 24px 50px -24px rgba(10,10,12,.3)" }}
          >
            <ScoreGauge size={120} />
          </div>
          {/* floating activity chip */}
          <div
            className="absolute -right-3 -top-8 rounded-2xl border border-blocrate-hairline bg-white px-4 py-3 sm:-right-8"
            style={{ boxShadow: "0 1px 2px rgba(10,10,12,.05), 0 18px 40px -22px rgba(10,10,12,.3)" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blocrate-ink-faint">
              Repayment
            </p>
            <p className="font-num mt-1 text-[18px] font-semibold text-blocrate-ink">
              100% <span className="text-blocrate-accent">on time</span>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
