import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GA_TRACKING_ID } from "@/lib/gtag"; // or wherever you saved it
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ajay-psi.vercel.app"),
  title: "AJAYRAJ A R — Full Stack & AI Product Developer | Kochi, India",
  description:
    "AJAYRAJ A R is a full-stack & AI product developer in Kochi, India with 3+ years of experience. Core engineer on Raydian, an AI project-execution engine, and solo builder of Pickbid, a live cricket-auction SaaS. React, Next.js, Node.js.",
  keywords:
    "Full Stack Developer, AI Product Developer, React Developer, Next.js Developer, Node.js Engineer, TypeScript, Ajayraj, Ajayraj A R, Ajayraj Portfolio, Raydian, Pickbid, Kochi Kerala, SaaS, real-time applications, RoadE Labs",
  authors: [{ name: "AJAYRAJ A R" }],
  openGraph: {
    title: "AJAYRAJ A R — Full Stack & AI Product Developer",
    description:
      "Full-stack & AI product developer in Kochi, India. Core engineer on Raydian (AI project-execution engine) and solo builder of Pickbid, a live cricket-auction SaaS.",
    type: "website",
    siteName: "Ajay Portfolio",
    locale: "en_US",
    url: "https://portfolio-ajay-psi.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg",
        width: 1200,
        height: 630,
        alt: "Ajayraj A R's Portfolio - Full Stack & AI Product Developer (React, Next.js, Node.js)",
      },
    ],
  },
  generator: "Ajayraj A R",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Search engine verification */}
        <meta
          name="google-site-verification"
          content="3moN3lXZUR5pkwm4iHcCn26-PcVdlL02nFrsTAGgHbU"
        />
        <meta name="msvalidate.01" content="ADA4E1CA403C1AD914B96224CC2B501B" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />

        {/* Structured data: Person schema */}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ajayraj A R",
              url: "https://portfolio-ajay-psi.vercel.app/",
              jobTitle: "Full Stack & AI Product Developer",
              description:
                "Full-stack & AI product developer with 3+ years of experience. Core engineer on Raydian, an AI project-execution engine, and solo builder of Pickbid, a live cricket-auction SaaS.",
              worksFor: {
                "@type": "Organization",
                name: "Raydian",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kochi",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Full Stack Development",
                "AI Product Development",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
              ],
              image:
                "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg",
              sameAs: [
                "https://github.com/Soul-Ajay4502",
                "https://www.linkedin.com/in/ajayraj-a-r/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
