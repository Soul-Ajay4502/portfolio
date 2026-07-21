"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Play,
  ArrowUpRight,
  Lock,
  ChevronDown,
} from "lucide-react";
import { projectsData, type Project } from "@/lib/data";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import { BorderBeam } from "./magicui/border-beam";
import SectionHeading from "./section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type PlayVideo = (url: string) => void;

function TechBadge({ tech }: { tech: string }) {
  return (
    <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
      {tech}
    </span>
  );
}

/** Demo action used in the large featured cards (pill button). */
function FeaturedDemo({
  project,
  onPlayVideo,
}: {
  project: Project;
  onPlayVideo: PlayVideo;
}) {
  if (!project.showDemo || !project.demo) return null;

  if (project.demoType === "video") {
    return (
      <button
        type="button"
        onClick={() => onPlayVideo(project.demo)}
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Play className="h-3.5 w-3.5" />
        {project.demoLabel ?? "Video Walkthrough"}
      </button>
    );
  }

  if (project.demoType === "login") {
    return (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        title={project.demoNote ?? "Login required"}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent"
      >
        <Lock className="h-3.5 w-3.5" />
        {project.demoLabel ?? "Login required"}
      </a>
    );
  }

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      <ExternalLink className="h-3.5 w-3.5" />
      {project.demoLabel ?? "Live Demo"}
    </a>
  );
}

function FeaturedProject({
  project,
  onPlayVideo,
}: {
  project: Project;
  onPlayVideo: PlayVideo;
}) {
  return (
    <MagicCard className="overflow-hidden">
      <BorderBeam size={260} duration={14} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="group relative aspect-video overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[340px]">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </>
          ) : (
            // Branded placeholder for confidential products with no public screenshot
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/25 via-brand/5 to-transparent">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
                  {project.title.charAt(0)}
                </span>
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                  Proprietary product
                </span>
              </div>
            </div>
          )}
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
          <div className="flex items-center gap-2 pt-2">
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
            <FeaturedDemo project={project} onPlayVideo={onPlayVideo} />
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

/** Demo action used in the compact grid cards (text link). */
function CardDemo({
  project,
  onPlayVideo,
}: {
  project: Project;
  onPlayVideo: PlayVideo;
}) {
  if (!project.showDemo || !project.demo) return null;

  if (project.demoType === "video") {
    return (
      <button
        type="button"
        onClick={() => onPlayVideo(project.demo)}
        className="inline-flex items-center gap-1.5 font-medium text-brand transition-colors hover:text-brand-soft"
      >
        <Play className="h-3.5 w-3.5" />
        {project.demoLabel ?? "Video"}
      </button>
    );
  }

  if (project.demoType === "login") {
    return (
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        title={project.demoNote ?? "Login required"}
        className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <Lock className="h-3.5 w-3.5" />
        {project.demoLabel ?? "Login required"}
      </a>
    );
  }

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-medium text-brand transition-colors hover:text-brand-soft"
    >
      <ExternalLink className="h-3.5 w-3.5" />
      {project.demoLabel ?? "Live"}
    </a>
  );
}

function ProjectCard({
  project,
  onPlayVideo,
}: {
  project: Project;
  onPlayVideo: PlayVideo;
}) {
  // Top-right quick-open arrow only makes sense for real link-outs, not raw videos
  const showQuickLink =
    project.showDemo && project.demo && project.demoType !== "video";

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
          {showQuickLink && (
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
          <CardDemo project={project} onPlayVideo={onPlayVideo} />
        </div>
      </div>
    </MagicCard>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showEarly, setShowEarly] = useState(false);

  const featured = projectsData.filter((p) => p.tier === "featured");
  const main = projectsData.filter((p) => p.tier === "main");
  const early = projectsData.filter((p) => p.tier === "early");

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="A selection of products and experiments — from production SaaS to focused builds."
        />

        {/* Featured (large) cards */}
        <div className="mb-6 space-y-6">
          {featured.map((project, index) => (
            <BlurFade key={project.id} delay={0.05 * index} inView>
              <FeaturedProject project={project} onPlayVideo={setActiveVideo} />
            </BlurFade>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((project, index) => (
            <BlurFade key={project.id} delay={0.05 * index} inView>
              <ProjectCard project={project} onPlayVideo={setActiveVideo} />
            </BlurFade>
          ))}
        </div>

        {/* Other projects / early work (collapsed) */}
        {early.length > 0 && (
          <div className="mt-10">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowEarly((v) => !v)}
                aria-expanded={showEarly}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                {showEarly ? "Hide" : "Show"} other projects &amp; early work
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    showEarly && "rotate-180",
                  )}
                />
              </button>
            </div>

            {showEarly && (
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {early.map((project, index) => (
                  <BlurFade key={project.id} delay={0.05 * index} inView>
                    <ProjectCard
                      project={project}
                      onPlayVideo={setActiveVideo}
                    />
                  </BlurFade>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Video walkthrough lightbox */}
      <Dialog
        open={!!activeVideo}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      >
        <DialogContent className="max-w-3xl overflow-hidden p-0 sm:rounded-xl">
          <DialogTitle className="sr-only">
            Project video walkthrough
          </DialogTitle>
          {activeVideo && (
            <video
              key={activeVideo}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="aspect-video h-full w-full bg-black"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
