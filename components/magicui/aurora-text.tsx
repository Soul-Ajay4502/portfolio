"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

/**
 * Subtle animated gradient text. Tuned for the monochrome + subtle-blue theme:
 * it drifts between the foreground color and the blue brand accent so it reads
 * premium, not flashy.
 */
export function AuroraText({
  children,
  className = "",
  colors = [
    "hsl(var(--foreground))",
    "hsl(var(--brand))",
    "hsl(var(--foreground))",
    "hsl(var(--brand-soft))",
  ],
  speed = 1,
}: AuroraTextProps) {
  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    backgroundSize: "300% 100%",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="sr-only">{children}</span>
      <span
        className="relative animate-gradient bg-clip-text"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}

export default AuroraText;
