import React from "react";

interface PassportCardProps {
  holder?: string;
  score?: number;
  max?: number;
  className?: string;
  /** floating idle animation */
  float?: boolean;
}

const HOLO = "linear-gradient(100deg,#8fd9ff 0%,#a99bff 55%,#ffd9a0 100%)";

/**
 * The Blocrate Credit Passport — gunmetal card, gold chip, holographic score,
 * faint chevron pattern and a slow foil sheen. The brand's signature object.
 */
export const PassportCard: React.FC<PassportCardProps> = ({
  holder = "vas2.eth",
  score = 810,
  max = 900,
  className = "",
  float = false,
}) => (
  <div
    className={`relative overflow-hidden ${float ? "animate-float" : ""} ${className}`.trim()}
    style={{
      width: "100%",
      maxWidth: 380,
      aspectRatio: "380 / 240",
      borderRadius: 24,
      border: "1px solid #2a2c36",
      background:
        "linear-gradient(140deg,#23252f 0%,#15161d 46%,#0b0c11 80%,#181a22 100%)",
      boxShadow:
        "0 2px 6px rgba(10,10,12,.18), 0 30px 60px -20px rgba(10,10,12,.55), inset 0 1px 0 rgba(255,255,255,.05)",
    }}
  >
    {/* faint chevron pattern, top-right */}
    <svg
      className="absolute right-0 top-0"
      width="42%"
      viewBox="0 0 160 200"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.5 }}
    >
      <path d="M40 40 L90 100 L40 160" stroke="rgba(255,255,255,0.10)" strokeWidth="2.4" />
      <path d="M90 40 L140 100 L90 160" stroke="rgba(160,180,255,0.22)" strokeWidth="2.4" />
      <path d="M130 40 L180 100 L130 160" stroke="rgba(255,255,255,0.10)" strokeWidth="2.4" />
    </svg>

    {/* moving foil sheen */}
    <span className="passport-sheen" />

    <div className="relative z-[2] flex h-full flex-col justify-between p-[6.8%]">
      {/* top row */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
                background: HOLO,
                transform: "rotate(8deg)",
                display: "block",
              }}
            />
            <span className="text-white font-bold tracking-[-0.02em]" style={{ fontSize: 19 }}>
              Blocrate
            </span>
          </div>
          <div
            className="mt-1.5 font-semibold"
            style={{ fontSize: 9, letterSpacing: "0.22em", color: "rgba(255,255,255,0.42)" }}
          >
            CREDIT PASSPORT
          </div>
        </div>
        {/* gold chip */}
        <div
          className="relative"
          style={{
            width: "14.2%",
            aspectRatio: "54 / 40",
            borderRadius: 7,
            background: "linear-gradient(135deg,#e6cd92 0%,#b8985a 48%,#f0dca6 100%)",
          }}
        >
          <span className="absolute inset-y-0 left-1/3 w-px bg-black/20" />
          <span className="absolute inset-x-0 top-1/2 h-px bg-black/20" />
        </div>
      </div>

      {/* bottom row */}
      <div className="flex items-end justify-between">
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.42)", fontWeight: 600 }}>
            HOLDER
          </div>
          <div className="mt-1 font-num font-semibold text-[#f2f3f8]" style={{ fontSize: 18 }}>
            {holder}
          </div>
        </div>
        <div className="text-right">
          <div style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.42)", fontWeight: 600 }}>
            SCORE
          </div>
          <div className="mt-1 font-num" style={{ fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>
            <span
              style={{
                fontSize: 30,
                background: HOLO,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {score}
            </span>
            <span style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>/{max}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
