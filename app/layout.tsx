import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { GA_TRACKING_ID } from "@/lib/gtag"; // or wherever you saved it
import Script from "next/script";



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AJAYRAJ A R - Full Stack Developer",
  description:
    "Portfolio of AJAYRAJ A R, a passionate Full Stack Developer with 2+ years of experience in React, Next.js, and modern web technologies.",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Node.js, Portfolio,RoadE Labs,Beurokrat",
  authors: [{ name: "AJAYRAJ A R" }],
  openGraph: {
    title: "AJAYRAJ A R - Full Stack Developer",
    description: "Portfolio of AJAYRAJ A R, a passionate Full Stack Developer with 2+ years of experience.",
    type: "website",
    siteName: "Ajay Portfolio",
    locale: "en_US",
    url: "https://portfolio-ajay-psi.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg",
        width: 1200,
        height: 630,
        alt: "Ajay Portfolio",
      },
    ],
  },
  generator: 'Ajayraj A R',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
