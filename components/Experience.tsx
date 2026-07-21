"use client";

import { MapPin, Briefcase } from "lucide-react";
import { experienceData } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-max max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Work Experience"
          description="Roles where I've shipped real products and grown as an engineer."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[15px] top-2 w-px bg-border md:left-[19px]" />

          <div className="space-y-6">
            {experienceData.map((experience, index) => (
              <BlurFade key={experience.id} delay={index * 0.1} inView>
                <div className="relative flex gap-5 md:gap-6">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background md:h-10 md:w-10">
                      <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-brand">
                        {index === 0 && (
                          <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-brand opacity-75" />
                        )}
                      </span>
                    </span>
                  </div>

                  {/* Card */}
                  <MagicCard className="mb-2 flex-1 p-5 sm:p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.position}
                      </h3>
                      <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {experience.duration}
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                      <span className="inline-flex items-center gap-1.5 font-medium text-brand">
                        <Briefcase className="h-3.5 w-3.5" />
                        {experience.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location || "Kochi, Kerala, India"}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </MagicCard>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
