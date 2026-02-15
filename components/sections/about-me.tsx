"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, type ElementRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { MedalIcon, HelicopterIcon } from "@/components/ui/military-icons";

const CREDENTIAL_KEYS = ["google", "wordpress", "projects", "trainer"] as const;

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
    },
  },
} as const;

export function AboutMe() {
  const t = useTranslations("about");
  const sectionRef = useRef<ElementRef<"section">>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-4"
    >
      {/* Classified desk background */}
      <Image
        src="/aboutme-bg.jpg"
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

      {/* TOP SECRET watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center"
      >
        <span
          className="stencil-text whitespace-nowrap text-[10rem] font-black leading-none text-foreground opacity-[0.035] md:text-[14rem] lg:text-[18rem]"
          style={{ transform: "rotate(-12deg)" }}
        >
          TOP SECRET
        </span>
      </div>

      {/* Helicopter silhouette - bottom left decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-16 opacity-[0.04]"
        style={{
          maskImage: "linear-gradient(to right, white 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, white 40%, transparent)",
        }}
      >
        <HelicopterIcon className="h-auto w-[350px] text-primary lg:w-[500px]" />
      </div>

      {/* Vignette effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.04 0.02 145 / 65%) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="noise-texture pointer-events-none absolute inset-0 z-10 opacity-[0.06]"
      />

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ ...springTransition, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Animated Gold Gradient Border */}
              <div className="absolute -inset-1 animate-pulse-gold rounded-3xl bg-gradient-gold opacity-75" />

              {/* Photo Container - Warm grayscale (military sepia) */}
              <div className="relative size-80 overflow-hidden rounded-3xl bg-muted">
                <Image
                  src="/jose-gilarte.png"
                  alt="Jose Gilarte - Estratega Digital"
                  width={885}
                  height={897}
                  className="size-full object-cover object-top grayscale sepia-[0.25] contrast-[1.05] brightness-[0.9]"
                  priority
                />
                {/* Dark gradient bottom fade to blend with section */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.12 0.02 260) 0%, oklch(0.12 0.02 260 / 40%) 25%, transparent 55%)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Badge - Red classified stamp (PROMINENT) */}
            <motion.div variants={itemVariants}>
              <span className="stencil-text inline-flex -rotate-6 items-center rounded-sm border-4 border-destructive/30 bg-destructive/20 px-6 py-3 text-2xl text-destructive ring-2 ring-destructive/30 shadow-lg md:text-3xl">
                {t("badge")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold leading-tight text-foreground lg:text-5xl"
            >
              {t("title")}
            </motion.h2>

            {/* Bio Paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-lg leading-relaxed text-muted-foreground"
            >
              <p>{t("bio1")}</p>
              <p>{t("bio2")}</p>
              <p>{t("bio3")}</p>
            </motion.div>

            {/* Credentials Title */}
            <motion.h3
              variants={itemVariants}
              className="stencil-text text-lg text-primary"
            >
              {t("credentialsTitle")}
            </motion.h3>

            {/* Credentials Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {CREDENTIAL_KEYS.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    ...springTransition,
                    delay: 0.8 + index * 0.1,
                  }}
                  className="flex items-center gap-3 rounded-xl border-military bg-card p-4"
                >
                  <MedalIcon className="size-6 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">
                    {t(`credentials.${key}`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="/cv-jose-gilarte.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={springTransition}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-gold px-8 py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:glow-gold"
              >
                <Download className="size-5" />
                <span>{t("ctaCV")}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
