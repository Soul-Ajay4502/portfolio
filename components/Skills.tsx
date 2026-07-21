"use client";

import { Palette, Server, Database, Sparkles } from "lucide-react";
import { skillsData } from "@/lib/data";
import Marquee from "./magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import SectionHeading from "./section-heading";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI/Tools": <Sparkles className="h-5 w-5" />,
  Frontend: <Palette className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
};

const marqueeTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "React Native",
  "Firebase",
  "Redux",
  "Framer Motion",
  "Docker",
  "Git",
  "Figma",
  "AWS",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Technologies"
          description="The tools I reach for to take products from idea to production."
        />

        {/* Tech marquee */}
        <BlurFade inView>
          <div className="relative mb-12 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:35s]">
              {marqueeTech.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
                  {tech}
                </div>
              ))}
            </Marquee>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted/30 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted/30 to-transparent" />
          </div>
        </BlurFade>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => (
            <BlurFade key={category.category} delay={index * 0.1} inView>
              <MagicCard className="h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-brand">
                    {categoryIcons[category.category] ?? (
                      <span className="text-lg">{category.icon}</span>
                    )}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
