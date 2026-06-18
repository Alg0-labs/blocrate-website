import React from "react";
import animation1 from "@/assets/Animation 1.mp4";
import animation2 from "@/assets/Animation 2.mp4";
import animation3 from "@/assets/Animation 3.mp4";
import { LazyVideo } from "@/components/shared/LazyVideo";
import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "@/components/shared/Eyebrow";

const SECTIONS = [
  {
    id: "connect",
    step: "01",
    label: "Connect your wallet",
    content: (
      <>
        Link your wallet securely to start building your credit profile. Your
        on-chain activity is read to understand repayment behaviour, usage
        patterns and financial reliability — not just collateral or net worth.
      </>
    ),
    video: animation2,
    order: "reverse",
  },
  {
    id: "verification",
    step: "02",
    label: "Private credit verification",
    content: (
      <>
        Blocrate verifies creditworthiness using encrypted financial signals.
        Personal data is never shared — a score is generated, locked and used by
        lenders while identity stays private unless a default occurs.
      </>
    ),
    video: animation3,
    order: "normal",
  },
  {
    id: "route",
    step: "03",
    label: "Route the loans",
    content: (
      <>
        Borrowers, lenders and platforms connect through one shared credit layer.
        Blocrate is neutral infrastructure that helps crypto platforms assess
        risk and route credit — without holding funds or issuing loans.
      </>
    ),
    video: animation1,
    order: "reverse",
  },
];

export const HowBlocrateWorks: React.FC = () => (
  <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-20">
    <div className="bk-aurora" />
    <div className="relative z-10 mx-auto max-w-7xl">
      <Reveal className="mx-auto mb-16 max-w-[640px] text-center sm:mb-20">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-5 text-[clamp(30px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.035em] text-blocrate-ink">
          From wallet to credit, in three steps
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[clamp(15px,1.4vw,17px)] leading-[1.55] text-blocrate-ink-soft">
          Infrastructure that lets crypto platforms assess borrower risk, set
          credit limits and route loans to third-party capital — using
          privacy-locked identity and real-world enforcement, without holding
          funds or issuing loans.
        </p>
      </Reveal>

      <div className="space-y-20 sm:space-y-28 lg:space-y-32">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              className={`flex justify-center ${
                section.order === "reverse" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div
                className="w-full max-w-[560px] rounded-[26px] border border-blocrate-hairline bg-blocrate-paper p-2.5"
                style={{ boxShadow: "0 1px 2px rgba(10,10,12,.04), 0 24px 50px -28px rgba(10,10,12,.25)" }}
              >
                <LazyVideo
                  src={section.video}
                  loop
                  muted
                  playsInline
                  className="h-[200px] w-full rounded-[18px] object-contain sm:h-[260px] lg:h-[300px]"
                />
              </div>
            </Reveal>

            <Reveal
              delay={1}
              className={`text-center lg:text-left ${
                section.order === "reverse" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="font-num text-[15px] font-semibold text-blocrate-accent">
                  {section.step}
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-blocrate-ink-faint">
                  {section.label}
                </span>
              </div>
              <h3 className="mx-auto mt-4 max-w-[520px] text-[clamp(19px,2vw,28px)] font-medium leading-[1.32] tracking-[-0.02em] text-blocrate-ink lg:mx-0">
                {section.content}
              </h3>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);
