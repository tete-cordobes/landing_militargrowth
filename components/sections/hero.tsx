"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Award } from "lucide-react";
import { MilitaryStarIcon } from "@/components/ui/military-icons";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
} as const;

const statCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
} as const;

const STATS = [
  { icon: TrendingUp, valueKey: "projects", labelKey: "projectsLabel" },
  { icon: Users, valueKey: "clients", labelKey: "clientsLabel" },
  { icon: BarChart3, valueKey: "traffic", labelKey: "trafficLabel" },
  { icon: Award, valueKey: "years", labelKey: "yearsLabel" },
] as const;

const SPARKLE_CONFIGS = [
  { top: "15%", left: "10%", size: 3, delay: 0 },
  { top: "25%", right: "15%", size: 4, delay: 1.5 },
  { top: "60%", left: "20%", size: 2, delay: 0.8 },
  { top: "70%", right: "25%", size: 3, delay: 2.2 },
  { top: "40%", left: "5%", size: 2, delay: 3 },
  { top: "80%", right: "10%", size: 3, delay: 1 },
] as const;

export function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Tank background photo */}
      <Image
        src="/tank-hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_65%] sm:object-center"
        priority
        quality={85}
      />

      {/* Primary dark overlay - balanced for tank visibility + text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.06 0.02 260 / 65%) 0%, oklch(0.06 0.02 260 / 35%) 35%, oklch(0.06 0.02 260 / 40%) 65%, oklch(0.06 0.02 260 / 75%) 100%)",
        }}
      />

      {/* Vignette - cinematic dark edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.04 0.02 260 / 55%) 100%)",
        }}
      />

      {/* Noise texture overlay - subtle grain */}
      <div className="noise-texture pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* Gold sparkle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {SPARKLE_CONFIGS.map((sparkle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              top: sparkle.top,
              left: "left" in sparkle ? sparkle.left : undefined,
              right: "right" in sparkle ? sparkle.right : undefined,
              width: sparkle.size,
              height: sparkle.size,
              background: "oklch(0.87 0.17 83)",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar + Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-5 flex flex-col items-center gap-3 sm:mb-8 sm:gap-4"
          >
            {/* Circular avatar with duotone navy/gold (multiply+lighten) */}
            <div className="relative">
              <div className="absolute -inset-1 animate-pulse-gold rounded-full bg-gradient-gold opacity-50" />
              <div className="relative size-20 overflow-hidden rounded-full bg-muted">
                <Image
                  src="/jose-gilarte.png"
                  alt="Jose Gilarte"
                  width={885}
                  height={897}
                  className="size-full object-cover object-top grayscale sepia-[0.25] contrast-[1.05] brightness-[0.9]"
                />
              </div>
            </div>

            <div className="border-gold glass-military-strong stencil-text inline-flex items-center rounded-full px-5 py-2.5">
              <MilitaryStarIcon className="mr-2 size-4 text-primary" />
              <span className="text-xs font-bold text-primary">
                {t("badge")}
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-[2rem] font-extrabold uppercase leading-[1.1] tracking-wider text-foreground sm:mb-6 sm:text-6xl sm:leading-tight lg:text-8xl"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-gradient-gold">{chunks}</span>
              ),
            })}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-xl"
            style={{ textShadow: "0 2px 8px oklch(0.06 0.02 260 / 80%)" }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col justify-center gap-3 sm:mb-20 sm:flex-row sm:gap-4"
          >
            <a
              href="#centro-de-mando"
              className="bg-gradient-gold glow-gold inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
              style={{
                boxShadow: "0 0 30px oklch(0.81 0.17 83 / 20%)",
              }}
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#misiones"
              className="border-gold inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-base"
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
              {t("ctaSecondary")}
            </a>
          </motion.div>

          {/* Stats / Intel cards with staggered spring animations */}
          <motion.div
            variants={statsContainerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.valueKey}
                className="group rounded-2xl p-4 backdrop-blur-md transition-all duration-300 sm:p-6"
                style={{
                  background: "oklch(0.17 0.04 260 / 80%)",
                  border: "1px solid oklch(0.81 0.17 83 / 40%)",
                }}
                variants={statCardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex items-center gap-2">
                    <MilitaryStarIcon className="size-5 text-primary" />
                    <stat.icon className="size-5 text-primary" />
                  </div>
                  <div className="mb-1 text-2xl font-bold text-primary sm:text-3xl">
                    {t(`stats.${stat.valueKey}`)}
                  </div>
                  <div className="stencil-text text-[0.65rem] text-muted-foreground">
                    {t(`stats.${stat.labelKey}`)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
