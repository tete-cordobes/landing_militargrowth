"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MilitaryStarIcon, CrosshairIcon } from "@/components/ui/military-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
} as const;

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const crosshairVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

export function NotFoundContent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Noise texture overlay */}
      <div className="noise-texture pointer-events-none absolute inset-0 z-10 opacity-60" />

      {/* Scanlines overlay */}
      <div className="scanlines pointer-events-none absolute inset-0 z-10 opacity-30" />

      {/* Radar sweep background - very subtle */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="radar-sweep h-[800px] w-[800px] rounded-full opacity-[0.07]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 2 }}
        />
      </div>

      {/* Concentric radar rings - decorative */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[200, 320, 440].map((size) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-border"
            style={{ width: size, height: size }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, delay: size * 0.002 }}
          />
        ))}
      </div>

      {/* Subtle crosshair rotating in background */}
      <motion.div
        className="pointer-events-none absolute opacity-[0.04]"
        variants={crosshairVariants}
        animate="animate"
      >
        <CrosshairIcon className="h-[500px] w-[500px] text-primary" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-20" />

      {/* Main content */}
      <motion.div
        className="relative z-20 flex flex-col items-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top star */}
        <motion.div variants={itemVariants}>
          <MilitaryStarIcon className="mb-4 h-10 w-10 text-primary opacity-70" />
        </motion.div>

        {/* 404 number */}
        <motion.div variants={itemVariants} className="relative">
          <motion.h1
            className="text-gradient-gold text-[8rem] font-black leading-none tracking-tight sm:text-[10rem] md:text-[12rem]"
            variants={pulseVariants}
            animate="animate"
            style={{ textShadow: "0 0 80px oklch(0.81 0.17 83 / 15%)" }}
          >
            404
          </motion.h1>

          {/* Decorative corner brackets around 404 */}
          <div className="pointer-events-none absolute -left-6 -top-4 h-8 w-8 border-l-2 border-t-2 border-primary opacity-40" />
          <div className="pointer-events-none absolute -right-6 -top-4 h-8 w-8 border-r-2 border-t-2 border-primary opacity-40" />
          <div className="pointer-events-none absolute -bottom-4 -left-6 h-8 w-8 border-b-2 border-l-2 border-primary opacity-40" />
          <div className="pointer-events-none absolute -bottom-4 -right-6 h-8 w-8 border-b-2 border-r-2 border-primary opacity-40" />
        </motion.div>

        {/* Title - stencil style */}
        <motion.h2
          variants={itemVariants}
          className="stencil-text mt-6 text-xl text-foreground sm:text-2xl md:text-3xl"
        >
          Objetivo no localizado
        </motion.h2>

        {/* Separator line */}
        <motion.div
          variants={itemVariants}
          className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          La ruta solicitada no existe en nuestra base de datos.
          <br />
          <span className="opacity-60">
            The requested route does not exist in our database.
          </span>
        </motion.p>

        {/* Status indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-destructive" />
          <span className="stencil-text text-[0.65rem]">
            Signal lost &mdash; Target not found
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg border border-primary/30 bg-primary/10 px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_0_30px_oklch(0.81_0.17_83/20%)]"
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <MilitaryStarIcon className="relative h-4 w-4" />
            <span className="stencil-text relative text-xs">
              Volver a la base
            </span>
          </Link>
        </motion.div>

        {/* Bottom decorative stars */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center gap-4 opacity-30"
        >
          <div className="h-px w-12 bg-primary/40" />
          <MilitaryStarIcon className="h-4 w-4 text-primary" />
          <MilitaryStarIcon className="h-3 w-3 text-primary" />
          <MilitaryStarIcon className="h-4 w-4 text-primary" />
          <div className="h-px w-12 bg-primary/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
