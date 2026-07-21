"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/Soul-Ajay4502", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ajayraj-a-r/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:rajay5767@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document
      .getElementById(href.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                A
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                Ajayraj A R
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Full-Stack &amp; AI Product Developer building products end to end.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ajayraj A R. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              Built with Next.js, Tailwind CSS &amp; Magic UI
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
