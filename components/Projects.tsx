"use client";

import Image from "next/image";
import { ExternalLink, Github, Play, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";
import SectionHeading from "./section-heading";
import { cn } from "@/lib/utils";

type Project = (typeof projectsData)[number];

const isVideo = (url: string) => url.toLowerCase().endsWith(".mp4");

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
      {tech}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2">
      {project.showCode && project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
        >
          <Github className="h-4 w-4" />
        </a>
      )}
      {project.showDemo && project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {isVideo(project.demo) ? (
            <>
              <Play className="h-3.5 w-3.5" />
              Watch Demo
            </>
          ) : (
            <>
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </>
          )}
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <MagicCard className="overflow-hidden">
      <BorderBeam size={260} duration={14} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="group relative aspect-video overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[340px]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            ★ Featured Project
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className="pt-2">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <MagicCard className="flex h-full flex-col overflow-hidden">
      <div className="group relative h-44 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground">
            {project.title}
          </h3>
          {project.showDemo && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-4 mt-auto flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1 py-0.5 text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-4 text-sm">
          {project.showCode && project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-muted-foreground/40">
              <Github className="h-4 w-4" />
              Private
            </span>
          )}
          {project.showDemo && project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-brand transition-colors hover:text-brand-soft"
            >
              {isVideo(project.demo) ? (
                <>
                  <Play className="h-3.5 w-3.5" />
                  Demo
                </>
              ) : (
                <>
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </MagicCard>
  );
}

export default function Projects() {
  const [featured, ...rest] = projectsData;

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="A selection of products and experiments — from production SaaS to focused builds."
        />

        <BlurFade inView>
          <div className="mb-6">
            <FeaturedProject project={featured} />
          </div>
        </BlurFade>

        <div
          className={cn(
            "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {rest.map((project, index) => (
            <BlurFade key={project.id} delay={0.05 * index} inView>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
