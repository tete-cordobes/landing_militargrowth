"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MilitaryStarIcon } from "@/components/ui/military-icons";

const BOOT_LINES = [
  { text: "> INITIALIZING SYSTEM...", delay: 300, isGold: false },
  { text: "> LOADING TACTICAL DATABASE...", delay: 500, isGold: false },
  { text: "> ESTABLISHING SECURE CONNECTION...", delay: 400, isGold: false },
  { text: "> VERIFYING CREDENTIALS...", delay: 300, isGold: false },
  { text: "> ACCESS GRANTED", delay: 400, isGold: true },
  { text: "> WELCOME, COMMANDER", delay: 0, isGold: true },
] as const;

const SESSION_KEY = "boot-shown" as const;

const EXIT_DELAY_MS = 500;

export function BootScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    setIsVisible(true);
    sessionStorage.setItem(SESSION_KEY, "true");
  }, []);

  useEffect(() => {
    if (!isVisible || currentLine >= BOOT_LINES.length) return;

    const nextLine = BOOT_LINES[currentLine];
    if (!nextLine) return;

    const timer = setTimeout(() => {
      setCurrentLine((prev) => prev + 1);
    }, nextLine.delay);

    return () => clearTimeout(timer);
  }, [isVisible, currentLine]);

  useEffect(() => {
    if (currentLine < BOOT_LINES.length) return;

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, EXIT_DELAY_MS);

    return () => clearTimeout(timer);
  }, [currentLine]);

  const handleExitComplete = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="boot-screen"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center font-mono"
          style={{ background: "oklch(0.06 0.02 260)" }}
        >
          {/* Scanline overlay */}
          <div className="scanlines absolute inset-0 z-10 opacity-40" />

          {/* Military star */}
          <div className="relative z-20 mb-8">
            <MilitaryStarIcon
              className="h-10 w-10"
              style={{ color: "var(--gold)" }}
            />
          </div>

          {/* Terminal lines */}
          <div className="relative z-20 w-full max-w-md space-y-2 px-6">
            {BOOT_LINES.slice(0, currentLine).map((line, index) => (
              <p
                key={index}
                className="text-sm tracking-wider"
                style={{
                  color: line.isGold ? "var(--gold)" : "var(--teal)",
                  fontWeight: line.isGold ? 700 : 400,
                }}
              >
                {line.text}
              </p>
            ))}

            {/* Blinking cursor on current line being "typed" */}
            {currentLine < BOOT_LINES.length && (
              <p
                className="text-sm tracking-wider"
                style={{ color: "var(--teal)" }}
              >
                <span className="animate-pulse">█</span>
              </p>
            )}
          </div>

          {/* System label at bottom */}
          <p
            className="absolute bottom-6 z-20 text-xs tracking-[0.2em] uppercase opacity-30"
            style={{ color: "var(--teal)" }}
          >
            GILARTE TACTICAL SYSTEMS v2.0
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
