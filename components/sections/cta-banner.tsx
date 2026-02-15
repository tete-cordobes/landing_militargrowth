"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, type ElementRef } from "react";
import Image from "next/image";
import { MilitaryStarIcon, CrosshairIcon } from "@/components/ui/military-icons";

export function CtaBanner() {
  const t = useTranslations("ctaBanner");
  const sectionRef = useRef<ElementRef<"section">>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/sniper-cta.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay - heavy for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.06 0.02 260 / 70%) 0%, oklch(0.06 0.02 260 / 50%) 40%, oklch(0.06 0.02 260 / 50%) 60%, oklch(0.06 0.02 260 / 75%) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.04 0.02 260 / 60%) 100%)",
        }}
      />

      {/* Scanlines */}
      <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />

      {/* Noise */}
      <div className="noise-texture pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
        {/* Decorative crosshairs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <CrosshairIcon className="size-5 text-primary opacity-60" />
          <MilitaryStarIcon className="size-6 text-primary" />
          <CrosshairIcon className="size-5 text-primary opacity-60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-wider text-foreground sm:text-5xl lg:text-6xl"
          style={{ textShadow: "0 4px 20px oklch(0.06 0.02 260 / 90%)" }}
        >
          {t.rich("title", {
            highlight: (chunks) => (
              <span className="text-gradient-gold">{chunks}</span>
            ),
          })}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          style={{ textShadow: "0 2px 10px oklch(0.06 0.02 260 / 80%)" }}
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
        >
          <a
            href="#centro-de-mando"
            className="bg-gradient-gold glow-gold inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:text-lg"
            style={{
              boxShadow: "0 0 40px oklch(0.81 0.17 83 / 25%)",
            }}
          >
            <CrosshairIcon className="size-5" />
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
