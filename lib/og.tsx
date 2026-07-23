import { ImageResponse } from "next/og";
import { PROFILE_IMAGE_URL } from "@/lib/constants";

// Shared config + renderer for the dynamically generated social image.
// Consumed by app/opengraph-image.tsx and app/twitter-image.tsx so the
// Open Graph and Twitter cards always stay in sync.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Ajayraj A R — Full Stack & AI Product Developer (React, Next.js, Node.js)";

const BRAND = "#3b82f6"; // hsl(217 91% 60%) — site brand accent
const BRAND_SOFT = "#60a5fa"; // hsl(213 94% 68%)
const BG = "#09090b";
const FG = "#fafafa";
const MUTED = "#a1a1aa";

const STACK = ["React", "Next.js", "Node.js", "PostgreSQL"];

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "64px",
          padding: "80px",
          backgroundColor: BG,
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(59,130,246,0.32), transparent 46%), radial-gradient(circle at 8% 92%, rgba(96,165,250,0.16), transparent 42%)",
          color: FG,
          fontFamily: "sans-serif",
        }}
      >
        {/* Left column: eyebrow, name, role, stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            flex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "26px",
              letterSpacing: "6px",
              color: MUTED,
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                backgroundColor: BRAND,
              }}
            />
            KOCHI, INDIA
          </div>

          {/* Name + role */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "84px",
                fontWeight: 800,
                letterSpacing: "-2px",
                lineHeight: 1.05,
              }}
            >
              AJAYRAJ A R
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "18px",
                fontSize: "42px",
                fontWeight: 600,
                color: BRAND_SOFT,
              }}
            >
              Full-Stack &amp; AI Product Developer
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ display: "flex", gap: "16px" }}>
            {STACK.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  paddingLeft: "26px",
                  paddingRight: "26px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(250,250,250,0.14)",
                  backgroundColor: "rgba(250,250,250,0.04)",
                  fontSize: "28px",
                  color: FG,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div
          style={{
            display: "flex",
            width: "380px",
            height: "380px",
            flexShrink: 0,
            borderRadius: "9999px",
            border: `6px solid ${BRAND}`,
            boxShadow: "0 0 0 12px rgba(59,130,246,0.14)",
            overflow: "hidden",
          }}
        >
          <img
            src={PROFILE_IMAGE_URL}
            alt=""
            width={380}
            height={380}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
