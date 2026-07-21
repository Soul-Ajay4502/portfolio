"use client";

import BlurFade from "./magicui/blur-fade";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-14 max-w-2xl text-center", className)}>
      <BlurFade inView>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </BlurFade>
      {description && (
        <BlurFade delay={0.15} inView>
          <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}
