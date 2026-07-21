"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { DotPattern } from "./magicui/dot-pattern";
import { Particles } from "./magicui/particles";
import BlurFade from "./magicui/blur-fade";
import { AuroraText } from "./magicui/aurora-text";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { ShimmerButton } from "./magicui/shimmer-button";
import { cn } from "@/lib/utils";

const DELAY = 0.15;

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#3f3f46");
  }, [resolvedTheme]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Background layers */}
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(560px_circle_at_center,white,transparent)]",
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={90}
        ease={80}
        color={color}
        refresh
      />
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <BlurFade delay={DELAY} inView>
          <button
            onClick={() => scrollTo("projects")}
            className="group mx-auto mb-6 inline-flex items-center rounded-full border border-border bg-muted/40 px-1 py-1 backdrop-blur-sm transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
              <Sparkles className="h-3 w-3 text-brand" />
              Open to opportunities
            </span>
            <AnimatedShinyText className="inline-flex items-center px-3 text-xs">
              See my work
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </button>
        </BlurFade>

        <BlurFade delay={DELAY * 2} inView>
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <AuroraText>AJAYRAJ A R</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={DELAY * 3} inView>
          <p className="mx-auto mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            Full-Stack &amp; AI Product Developer
          </p>
        </BlurFade>

        <BlurFade delay={DELAY * 4} inView>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build AI-powered products end to end — from{" "}
            <span className="font-medium text-foreground">Raydian</span>, an AI
            project-execution engine, to{" "}
            <span className="font-medium text-foreground">Pickbid</span>, a live
            cricket-auction platform I designed and shipped solo. Full-stack
            engineer, 3+ years.
          </p>
        </BlurFade>

        <BlurFade delay={DELAY * 5} inView>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ShimmerButton
              onClick={() => scrollTo("projects")}
              shimmerColor="hsl(var(--brand-soft))"
              className="w-full shadow-lg sm:w-auto"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </ShimmerButton>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-accent sm:w-auto"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
            className="h-2 w-1 rounded-full bg-muted-foreground"
          />
        </div>
      </motion.button>
    </section>
  );
}
