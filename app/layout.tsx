import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GA_TRACKING_ID } from "@/lib/gtag"; // or wherever you saved it
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AJAYRAJ A R - Full Stack Developer",
  description:
    "Portfolio of AJAYRAJ A R, a passionate Full Stack Developer with 2+ years of experience in React, Next.js, and modern web technologies.",
  keywords:
    "Full Stack Developer, React.js, Next.js, TypeScript, Node.js, Ajayraj Portfolio,Ajayraj,Ajayraj a r, RoadE Labs, Beurokrat",
  authors: [{ name: "AJAYRAJ A R" }],
  openGraph: {
    title: "AJAYRAJ A R - Full Stack Developer",
    description:
      "Portfolio of AJAYRAJ A R, a passionate Full Stack Developer with 2+ years of experience.",
    type: "website",
    siteName: "Ajay Portfolio",
    locale: "en_US",
    url: "https://portfolio-ajay-psi.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg",
        width: 1200,
        height: 630,
        alt: "Ajay Raj's Portfolio Homepage - Full Stack Developer in React.js, Next.js, Node.js",
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
        {/* Google Analytics */}
        <meta
          name="google-site-verification"
          content="3moN3lXZUR5pkwm4iHcCn26-PcVdlL02nFrsTAGgHbU"
        />
        <meta name="msvalidate.01" content="ADA4E1CA403C1AD914B96224CC2B501B" />
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

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ajayraj A R",
              url: "https://portfolio-ajay-psi.vercel.app/",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Beurokrat",
              },
              image:
                "https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg",
              sameAs: [
                "https://github.com/Soul-Ajay4502",
                "https://www.linkedin.com/in/ajayraj-a-r/",
              ],
            }),
          }}
        />
        <Script>
          {`
        const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';
    const TRACKING_ID = 'XS_1758201283';

        const SESSION_COOKIE_NAME = '_xenseo_session';
        const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function getCookie(name) {
            const nameEQ = name + '=';
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * ONE_DAY_IN_MS));
            const expires = '; expires=' + date.toUTCString();
            document.cookie = name + '=' + value + expires + '; path=/';
        }

        function sendToAPI(data) {
            try {
                const mutation = 
                    mutation TrackEvent($input: TrackEventInput!) {
                        trackEvent(input: $input) {
                            success
                            message
                        }
                    }
                ;
               
                const variables = {
                    input: {
                        websiteId: data.website_id,
                        sessionId: data.session_id,
                        eventType: data.event_type,
                        url: data.url,
                        referrer: data.referrer,
                        userAgent: data.user_agent,
                        eventData: JSON.stringify(data.event_data)
                    }
                };
               
                const payload = JSON.stringify({
                    query: mutation,
                    variables: variables
                });
               
                if (navigator.sendBeacon) {
                    const blob = new Blob([payload], { type: 'application/json' });
                    navigator.sendBeacon(GRAPHQL_ENDPOINT, blob);
                } else {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', GRAPHQL_ENDPOINT, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(payload);
                }
            } catch (e) {
                console.error('Analytics failed to send event:', e);
            }
        }

        let sessionId = getCookie(SESSION_COOKIE_NAME);
        if (!sessionId) {
            sessionId = generateUUID();
            setCookie(SESSION_COOKIE_NAME, sessionId, 1);
        }

        window.xenseo = window.xenseo || {};

        window.xenseo.trackEvent = function(eventType, eventData = {}) {
            const data = {
                website_id: TRACKING_ID,
                session_id: sessionId,
                event_type: eventType,
                url: window.location.href,
                referrer: document.referrer,
                user_agent: navigator.userAgent,
                event_data: eventData
            };
            sendToAPI(data);
        };

        window.xenseo.trackEvent('page_view', {
            page_title: document.title
        });

        document.addEventListener('DOMContentLoaded', function() {
            document.addEventListener('click', function(e) {
                const target = e.target.closest('a');
                if (target) {
                    window.xenseo.trackEvent('link_click', {
                        href: target.href,
                        link_text: target.innerText.trim() || 'N/A'
                    });
                }
            });
        });
       
        window.xenseo.trackProductView = function(productDetails) {
            window.xenseo.trackEvent('product_viewed', {
                product: productDetails
            });
        };

        window.xenseo.trackAddToCart = function(itemDetails) {
            window.xenseo.trackEvent('add_to_cart', {
                item: itemDetails
            });
        };

        window.xenseo.trackCheckoutStart = function(total) {
            window.xenseo.trackEvent('checkout_started', {
                total_value: total
            });
        };

        window.xenseo.trackPurchase = function(orderDetails) {
            window.xenseo.trackEvent('purchase_completed', {
                order: orderDetails
            });
        };

        window.xenseo.trackSignup = function(userId) {
            window.xenseo.trackEvent('user_signup', {
                user_id: userId
            });
        };
    
            `}
        </Script>
      </head>
      <body className={inter.className}>
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
