"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { NumberTicker } from "./magicui/number-ticker";
import { BorderBeam } from "./magicui/border-beam";
import SectionHeading from "./section-heading";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 5, suffix: "+", label: "Core Technologies" },
];

const highlights = [
  "AI-native product development",
  "Real-time, data-heavy systems",
  "End-to-end: schema to shipped UI",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title="I build and ship AI-powered products — end to end"
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Portrait */}
          <BlurFade delay={0.1} inView className="lg:col-span-2">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border">
                <Image
                  src="https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg"
                  alt="AJAYRAJ A R"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                <BorderBeam size={160} duration={12} />
              </div>
              {/* floating chip */}
              <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border border-border bg-background/90 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:-right-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Available for work
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Copy */}
          <BlurFade delay={0.2} inView className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a full-stack engineer who builds and ships AI-powered
                products, not just features. At{" "}
                <span className="font-medium text-foreground">Raydian</span>,
                I&apos;m a core engineer on an AI-powered project-execution
                engine, working across Next.js, Node.js, and PostgreSQL and
                helping grow the product from concept to public launch.
              </p>
              <p>
                Outside of that, I designed and built{" "}
                <span className="font-medium text-foreground">Pickbid</span>{" "}
                from scratch — a live cricket-auction and league-management SaaS
                — end to end, from database schema to real-time bidding UI. My
                stack spans React, Next.js, TypeScript, and Node.js, with
                production experience across PostgreSQL, Supabase, MySQL, and
                MongoDB.
              </p>
              <p>
                I care about the parts most portfolios skip: what happens after
                the demo — performance, data integrity, and whether a real user
                would actually trust the product.
              </p>

              <ul className="grid gap-2.5 pt-1 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.1 * i} inView>
              <MagicCard className="p-6">
                <div className="flex items-baseline text-4xl font-bold tracking-tight text-foreground">
                  <NumberTicker value={stat.value} />
                  <span className="text-brand">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
