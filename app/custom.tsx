"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";

export default function Custom404() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-foreground">
      <DotPattern
        width={22}
        height={22}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(480px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <motion.h1
        className="relative text-7xl font-bold tracking-tight sm:text-8xl"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AuroraText>404</AuroraText>
      </motion.h1>

      <motion.p
        className="relative mb-8 mt-4 max-w-md text-center text-base text-muted-foreground"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
