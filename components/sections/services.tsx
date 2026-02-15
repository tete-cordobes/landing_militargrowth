"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, type ElementRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  BinocularsIcon,
  CrosshairIcon,
  CompassIcon,
  RadioIcon,
  RadarIcon,
  CodeTerminalIcon,
  DroneIcon,
  GuidedMissileIcon,
  ArmoredVehicleIcon,
  SatelliteAntennaIcon,
  SpyPlaneIcon,
  CargoPlaneIcon,
} from "@/components/ui/military-icons";
import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const SERVICE_KEYS: readonly {
  key: string;
  icon: IconComponent;
  vehicle: IconComponent;
}[] = [
  { key: "seo", icon: BinocularsIcon, vehicle: DroneIcon },
  { key: "sem", icon: CrosshairIcon, vehicle: GuidedMissileIcon },
  { key: "webDesign", icon: CompassIcon, vehicle: ArmoredVehicleIcon },
  { key: "socialMedia", icon: RadioIcon, vehicle: SatelliteAntennaIcon },
  { key: "analytics", icon: RadarIcon, vehicle: SpyPlaneIcon },
  { key: "webDev", icon: CodeTerminalIcon, vehicle: CargoPlaneIcon },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

export function Services() {
  const t = useTranslations("services");
  const sectionRef = useRef<ElementRef<"section">>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="operaciones"
      ref={sectionRef}
      className="relative overflow-hidden py-24"
    >
      {/* Military wall map background */}
      <Image
        src="/services-map.jpg"
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
            "linear-gradient(to bottom, oklch(0.10 0.02 145 / 88%) 0%, oklch(0.10 0.02 145 / 80%) 50%, oklch(0.10 0.02 145 / 90%) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.06 0.02 145 / 60%) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-texture pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border-gold px-4 py-2"
          >
            <span className="stencil-text text-sm text-primary">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-gradient-gold">{chunks}</span>
              ),
            })}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICE_KEYS.map((service) => {
            const Icon = service.icon;
            const Vehicle = service.vehicle;

            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-military bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_30px_-5px_oklch(0.81_0.17_83_/_20%)] hover:glow-gold">
                  {/* Gold top line - width transition on hover */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />

                  {/* Vehicle silhouette - decorative background */}
                  <Vehicle className="pointer-events-none absolute -bottom-2 -right-4 h-auto w-32 text-primary opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12]" />

                  {/* Icon container */}
                  <div className="mb-6 inline-flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-muted text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-8" />
                  </div>

                  {/* Operation title */}
                  <h3 className="mb-1 text-2xl font-bold text-foreground">
                    {t(`items.${service.key}.title`)}
                  </h3>

                  {/* Subtitle */}
                  <p className="mb-4 text-sm text-muted-foreground">
                    {t(`items.${service.key}.subtitle`)}
                  </p>

                  {/* Description */}
                  <p className="mb-6 flex-grow leading-relaxed text-muted-foreground">
                    {t(`items.${service.key}.description`)}
                  </p>

                  {/* CTA */}
                  <a
                    href="#centro-de-mando"
                    className="flex items-center font-semibold text-foreground transition-colors duration-300 group-hover:text-primary"
                  >
                    <span>{t("cta")}</span>
                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
