"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MilitaryStarIcon, FighterJetIcon } from "@/components/ui/military-icons";
import Image from "next/image";

type Project = {
  id: number;
  name: string;
  logo: string;
  categories: string[];
  result: string;
  url: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "CEDEU",
    logo: "/logos/cedeu.png",
    categories: ["SEM"],
    result: "+60K€/día en Ads",
    url: "https://cedeu.es",
    gradient: "from-[oklch(0.32_0.08_260)] to-[oklch(0.45_0.10_260)]",
  },
  {
    id: 2,
    name: "UMILES Group",
    logo: "/logos/umiles.svg",
    categories: ["SEO", "Desarrollo Web", "Automatización"],
    result: "Ecosistema integrado",
    url: "https://umilesgroup.com",
    gradient: "from-[oklch(0.28_0.06_260)] to-[oklch(0.40_0.08_260)]",
  },
  {
    id: 3,
    name: "SinVello!",
    logo: "/logos/sinvello.png",
    categories: ["SEO", "Automatización"],
    result: "Organic growth",
    url: "https://sinvelloporlaser.es",
    gradient: "from-[oklch(0.40_0.10_83)] to-[oklch(0.55_0.12_83)]",
  },
  {
    id: 4,
    name: "Pizzon Pizza",
    logo: "/logos/pizzon.png",
    categories: ["SEO", "Automatización"],
    result: "SEO Local + Reseñas",
    url: "https://pizzonpizza.com",
    gradient: "from-[oklch(0.30_0.07_260)] to-[oklch(0.45_0.10_83)]",
  },
  {
    id: 5,
    name: "Iberfurgo",
    logo: "/logos/iberfurgo.png",
    categories: ["SEO", "Desarrollo Web"],
    result: "SEO + Web nueva",
    url: "https://iberfurgo.com",
    gradient: "from-[oklch(0.30_0.06_260)] to-[oklch(0.42_0.08_170)]",
  },
  {
    id: 6,
    name: "Ratpanat",
    logo: "/logos/ratpanat.png",
    categories: ["Desarrollo Web", "Automatización"],
    result: "Web + Flujos IA",
    url: "https://ratpanat.com",
    gradient: "from-[oklch(0.35_0.08_170)] to-[oklch(0.45_0.09_260)]",
  },
  {
    id: 7,
    name: "La Formica Edile",
    logo: "/logos/formica.png",
    categories: ["SEO", "Automatización"],
    result: "Growth + Procesos",
    url: "https://laformicaedile.it",
    gradient: "from-[oklch(0.28_0.07_145)] to-[oklch(0.42_0.10_145)]",
  },
  {
    id: 8,
    name: "Belair Sedie",
    logo: "/logos/belair.png",
    categories: ["Desarrollo Web", "Automatización"],
    result: "Web + Sistemas",
    url: "https://belairsedie.it",
    gradient: "from-[oklch(0.32_0.06_200)] to-[oklch(0.44_0.08_200)]",
  },
  {
    id: 9,
    name: "Vigar",
    logo: "/logos/vigar.svg",
    categories: ["Desarrollo Web"],
    result: "Web corporativa",
    url: "https://vigar.com",
    gradient: "from-[oklch(0.35_0.09_83)] to-[oklch(0.48_0.11_83)]",
  },
  {
    id: 10,
    name: "Alicia Bravo",
    logo: "/logos/aliciabravo.png",
    categories: ["Desarrollo Web"],
    result: "Web desde cero",
    url: "https://aliciabravo.es",
    gradient: "from-[oklch(0.30_0.08_300)] to-[oklch(0.44_0.10_300)]",
  },
];

const FILTER_MAP = {
  filterAll: null,
  filterSEO: "SEO",
  filterSEM: "SEM",
  filterWeb: "Desarrollo Web",
  filterAuto: "Automatización",
} as const;

const FILTER_KEYS = [
  "filterAll",
  "filterSEO",
  "filterSEM",
  "filterWeb",
  "filterAuto",
] as const;

type FilterKey = (typeof FILTER_KEYS)[number];

const springTransition = { type: "spring" as const, stiffness: 260, damping: 20 };

export function Portfolio() {
  const t = useTranslations("portfolio");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("filterAll");

  const filterValue = FILTER_MAP[activeFilter];
  const filteredProjects = filterValue
    ? PROJECTS.filter((p) => p.categories.includes(filterValue))
    : [...PROJECTS];

  return (
    <section id="misiones" className="relative overflow-hidden py-24">
      {/* Cork board background */}
      <Image
        src="/portfolio-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.08 0.02 145 / 88%) 0%, oklch(0.08 0.02 145 / 80%) 50%, oklch(0.08 0.02 145 / 90%) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, oklch(0.04 0.02 145 / 65%) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-texture pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* Fighter jet silhouette - top right decoration */}
      <div
        className="pointer-events-none absolute -right-10 top-12 opacity-[0.04]"
        style={{
          maskImage: "linear-gradient(to left, white, transparent)",
          WebkitMaskImage: "linear-gradient(to left, white, transparent)",
        }}
      >
        <FighterJetIcon className="h-auto w-[400px] text-primary lg:w-[550px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-gold px-4 py-2"
          >
            <MilitaryStarIcon className="h-4 w-4 text-primary" />
            <span className="stencil-text text-sm text-primary">
              {t("badge")}
            </span>
            <MilitaryStarIcon className="h-4 w-4 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-5xl font-bold text-foreground md:text-6xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-xl text-muted-foreground"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 flex flex-wrap justify-center gap-3"
        >
          {FILTER_KEYS.map((key, index) => (
            <motion.button
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(key)}
              className={cn(
                "rounded-full px-6 py-3 font-semibold transition-all duration-300",
                activeFilter === key
                  ? "bg-gradient-gold text-primary-foreground glow-gold"
                  : "border-gold text-muted-foreground hover:text-primary"
              )}
            >
              {t(key)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  ...springTransition,
                  delay: index * 0.08,
                  layout: { type: "spring", stiffness: 300, damping: 25 },
                }}
                whileHover={{
                  y: -8,
                  transition: springTransition,
                }}
                className="group overflow-hidden rounded-2xl border-military bg-card transition-all duration-300 hover:border-gold hover:glow-gold"
              >
                {/* Gradient Header */}
                <div
                  className={cn(
                    "flex aspect-video items-center justify-center bg-gradient-to-br relative overflow-hidden",
                    project.gradient
                  )}
                >
                  {/* "MISION COMPLETADA" watermark */}
                  <span className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
                    <span
                      className="stencil-text whitespace-nowrap text-3xl tracking-[0.25em] text-[oklch(0.93_0.01_260)] opacity-[0.08] md:text-4xl"
                      style={{ transform: "rotate(-25deg)" }}
                    >
                      MISION COMPLETADA
                    </span>
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={springTransition}
                    className="relative z-10"
                  >
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={120}
                      height={60}
                      className="h-12 w-auto object-contain brightness-0 invert drop-shadow-lg"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-[oklch(0_0_0/0.1)] transition-colors duration-300 group-hover:bg-[oklch(0_0_0/0.05)]" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 block text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary"
                  >
                    {project.name}
                  </a>

                  <div className="mb-4 text-2xl font-bold text-gradient-gold">
                    {project.result}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
