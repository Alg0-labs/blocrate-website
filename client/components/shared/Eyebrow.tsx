import React from "react";

/** Eyebrow label: short accent bar + uppercase indigo text. */
export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <span className={`eyebrow ${className}`.trim()}>{children}</span>;
