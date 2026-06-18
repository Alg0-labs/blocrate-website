import React from "react";

interface BrandLogoProps {
  /** word color: "ink" for light surfaces, "white" for dark surfaces */
  variant?: "ink" | "white";
  /** mark height in px (wordmark scales with it) */
  size?: number;
  showWord?: boolean;
  className?: string;
}

/**
 * Blocrate brand mark — electric-indigo rounded square with the holographic
 * chevron glyph, plus the wordmark. Rebuilt as inline SVG (matches figma/ kit)
 * so it renders crisply on light surfaces.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "ink",
  size = 30,
  showWord = true,
  className = "",
}) => {
  const word = variant === "white" ? "#ffffff" : "#0a0a0c";
  const r = size * 0.27;
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: size * 0.36 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        style={{ display: "block", flex: "none" }}
      >
        <rect width="34" height="34" rx={9} fill="#4b3bff" />
        <path
          d="M13 9 L23 17 L13 25"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWord && (
        <span
          style={{
            color: word,
            fontWeight: 700,
            fontSize: size * 0.66,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Blocrate
        </span>
      )}
    </span>
  );
};
