"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useForm } from "@formspree/react";
import BlurFade from "./magicui/blur-fade";
import { MagicCard } from "./magicui/magic-card";
import SectionHeading from "./section-heading";
import Toast from "./toas-by-me";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rajay5767@gmail.com",
    href: "mailto:rajay5767@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9846027693",
    href: "tel:+919846027693",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kochi, Kerala, India",
    href: null,
  },
];

const socials = [
  { icon: Github, href: "https://github.com/Soul-Ajay4502", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ajayraj-a-r/",
    label: "LinkedIn",
  },
];

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function Contact() {
  const [formState, handleSubmit] = useForm("mpwdvowg");

  return (
    <section id="contact" className="section-padding">
      <div className="container-max max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Contact Information */}
          <BlurFade delay={0.1} inView className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <MagicCard className="flex items-center gap-4 p-4 transition-colors hover:border-brand/40">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </MagicCard>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              <div className="mt-auto pt-2">
                <p className="mb-3 text-sm font-medium text-foreground">
                  Follow me
                </p>
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
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:border-brand/40 hover:bg-accent hover:text-brand"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Contact Form */}
          <BlurFade delay={0.2} inView className="lg:col-span-3">
            <MagicCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  autoComplete="off"
                  aria-hidden="true"
                  tabIndex={-1}
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {formState.submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </MagicCard>
          </BlurFade>
        </div>
      </div>

      {formState.succeeded && (
        <Toast message="Message sent successfully!" type="success" />
      )}
    </section>
  );
}
