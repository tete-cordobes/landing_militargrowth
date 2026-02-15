"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  Calendar,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

const CONTACT_INFO = [
  { icon: Mail, labelKey: "info.emailLabel", valueKey: "info.email", isEmail: true },
  { icon: Phone, labelKey: "info.phoneLabel", valueKey: "info.phone", isEmail: false },
  { icon: MapPin, labelKey: "info.locationLabel", valueKey: "info.location", isEmail: false },
  { icon: Clock, labelKey: "info.scheduleLabel", valueKey: "info.schedule", isEmail: false },
] as const;

const SERVICE_OPTIONS = [
  { value: "seo", key: "form.serviceOptions.seo" },
  { value: "sem", key: "form.serviceOptions.sem" },
  { value: "web-design", key: "form.serviceOptions.webDesign" },
  { value: "social-media", key: "form.serviceOptions.socialMedia" },
  { value: "analytics", key: "form.serviceOptions.analytics" },
  { value: "web-dev", key: "form.serviceOptions.webDev" },
] as const;

const INPUT_CLASSES =
  "w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none";

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

export function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="centro-de-mando"
      className="relative overflow-hidden py-24"
    >
      {/* Command center background */}
      <Image
        src="/contact-bg.jpg"
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
            "linear-gradient(to bottom, oklch(0.06 0.02 245 / 88%) 0%, oklch(0.06 0.02 245 / 80%) 50%, oklch(0.06 0.02 245 / 90%) 100%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, oklch(0.03 0.01 245 / 65%) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-texture pointer-events-none absolute inset-0 z-[2] opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="stencil-text mb-6 inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-sm text-primary-foreground shadow-lg"
          >
            {t("badge")}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form Card - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border-gold bg-card p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-muted-foreground"
                    >
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t("form.namePlaceholder")}
                      className={INPUT_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-muted-foreground"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className={INPUT_CLASSES}
                    />
                  </div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-muted-foreground"
                    >
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={t("form.phonePlaceholder")}
                      className={INPUT_CLASSES}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-muted-foreground"
                    >
                      {t("form.service")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={INPUT_CLASSES}
                    >
                      <option value="">{t("form.servicePlaceholder")}</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {t(option.key)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-muted-foreground"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={20}
                    maxLength={500}
                    placeholder={t("form.messagePlaceholder")}
                    className={`${INPUT_CLASSES} resize-none`}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold py-4 font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:glow-gold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      {t("form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      {t("form.submit")}
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={springTransition}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[oklch(0.55_0.15_170_/_40%)] bg-[oklch(0.55_0.15_170_/_8%)] px-4 py-3"
                  >
                    <CheckCircle className="size-5 text-[oklch(0.73_0.14_170)]" />
                    <p className="text-sm font-medium text-[oklch(0.73_0.14_170)]">
                      {t("form.success")}
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={springTransition}
                    className="flex items-center justify-center gap-2 rounded-xl border border-destructive/40 bg-destructive/8 px-4 py-3"
                  >
                    <AlertTriangle className="size-5 text-destructive" />
                    <p className="text-sm font-medium text-destructive">
                      {t("form.error")}
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Side Cards - 40% */}
          <div className="space-y-6 lg:col-span-2">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="rounded-2xl border-military bg-card p-6 shadow-xl"
            >
              <h3 className="mb-6 text-xl font-bold text-foreground">
                {t("infoTitle")}
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.valueKey} className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold">
                      <item.icon className="size-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {t(item.labelKey)}
                      </p>
                      {item.isEmail ? (
                        <a
                          href={`mailto:${t(item.valueKey)}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {t(item.valueKey)}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {t(item.valueKey)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Calendly Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="rounded-2xl bg-gradient-gold p-6 text-primary-foreground shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-white/20">
                  <Calendar className="size-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{t("calendly.title")}</h3>
              </div>
              <p className="mb-6 leading-relaxed text-primary-foreground/90">
                {t("calendly.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl bg-card py-3 font-semibold text-primary transition-all duration-200 hover:glow-gold"
              >
                {t("calendly.cta")}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
