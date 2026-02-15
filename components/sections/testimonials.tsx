"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, type ElementRef } from "react";
import { Quote } from "lucide-react";
import { MilitaryStarIcon } from "@/components/ui/military-icons";
import Image from "next/image";

const TESTIMONIAL_KEYS = ["t1", "t2", "t3"] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
} as const;

export function Testimonials() {
  const t = useTranslations("testimonials");
  const sectionRef = useRef<ElementRef<"section">>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="reportes-de-campo"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Military base background */}
      <Image
        src="/testimonials-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.08 0.02 145 / 90%) 0%, oklch(0.08 0.02 145 / 82%) 50%, oklch(0.08 0.02 145 / 92%) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, oklch(0.04 0.02 145 / 65%) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="noise-texture pointer-events-none absolute inset-0 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-gold px-4 py-2"
          >
            <MilitaryStarIcon className="size-4 text-primary" />
            <span className="stencil-text text-sm text-primary">
              {t("badge")}
            </span>
            <MilitaryStarIcon className="size-4 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TESTIMONIAL_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-military bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_30px_-5px_oklch(0.81_0.17_83_/_20%)]">
                {/* Gold top line accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />

                {/* Field Report stamp header */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="stencil-text text-xs text-primary/70">
                    {t("fieldReport")}
                  </span>
                  <span className="stencil-text rounded-sm border border-destructive/40 bg-destructive/15 px-2 py-0.5 text-[10px] text-destructive">
                    {t("classification")}
                  </span>
                </div>

                {/* Date badge */}
                <div className="mb-6 inline-flex self-start rounded-full border border-primary/20 bg-muted px-3 py-1">
                  <span className="font-mono text-xs text-primary">
                    {t(`items.${key}.date`)}
                  </span>
                </div>

                {/* Quote icon */}
                <Quote className="mb-4 size-8 text-primary/20" />

                {/* Testimonial text */}
                <p className="mb-8 flex-grow text-base leading-relaxed text-muted-foreground">
                  &ldquo;{t(`items.${key}.quote`)}&rdquo;
                </p>

                {/* Divider line */}
                <div className="mb-6 h-px w-full bg-border/60" />

                {/* Client info */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="stencil-text text-[10px] text-primary/50">
                      {t("codename")}:
                    </span>
                    <span className="font-bold text-foreground">
                      {t(`items.${key}.name`)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`items.${key}.role`)} — {t(`items.${key}.company`)}
                  </p>
                </div>

                {/* Result metric badge */}
                <div className="mb-2 inline-flex self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <span className="text-xs font-bold text-primary">
                    {t(`items.${key}.result`)}
                  </span>
                </div>

                {/* VERIFIED / VERIFICADO stamp */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-6 right-6 select-none"
                >
                  <span
                    className="stencil-text text-2xl text-primary/[0.07]"
                    style={{ transform: "rotate(-12deg)", display: "block" }}
                  >
                    {t("verified")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
