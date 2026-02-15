"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const CLIENTS = [
  "R Sanchez Abogados",
  "Pizzon Pizza",
  "AB Consulting",
  "Data SEO",
  "Sin Vello",
  "TechStart",
  "DigitalBoost",
  "GrowthLab",
] as const;

export function TrustMarkers() {
  const t = useTranslations("trust");

  return (
    <section className="relative overflow-hidden py-16">
      {/* Metal plate background */}
      <Image
        src="/trust-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.06 0.02 145 / 75%) 0%, oklch(0.06 0.02 145 / 65%) 50%, oklch(0.06 0.02 145 / 75%) 100%)",
        }}
      />

      {/* Noise texture */}
      <div className="noise-texture pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="stencil-text text-sm text-primary">{t("title")}</p>
        </div>

        {/* Carousel container */}
        <div className="relative overflow-hidden">
          {/* Left fade mask */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
            style={{
              background:
                "linear-gradient(to right, oklch(0.08 0.02 145 / 90%), transparent)",
            }}
          />

          {/* Right fade mask */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
            style={{
              background:
                "linear-gradient(to left, oklch(0.08 0.02 145 / 90%), transparent)",
            }}
          />

          {/* Scrolling container */}
          <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
            {/* First set */}
            <div className="flex shrink-0 gap-6">
              {CLIENTS.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="border-gold group whitespace-nowrap rounded-full bg-card/60 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    boxShadow: "0 0 0px oklch(0.81 0.17 83 / 0%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px oklch(0.81 0.17 83 / 15%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0px oklch(0.81 0.17 83 / 0%)";
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {client}
                  </span>
                </div>
              ))}
            </div>

            {/* Second set (duplicate for seamless loop) */}
            <div className="ml-6 flex shrink-0 gap-6">
              {CLIENTS.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="border-gold group whitespace-nowrap rounded-full bg-card/60 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    boxShadow: "0 0 0px oklch(0.81 0.17 83 / 0%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px oklch(0.81 0.17 83 / 15%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0px oklch(0.81 0.17 83 / 0%)";
                  }}
                >
                  <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
