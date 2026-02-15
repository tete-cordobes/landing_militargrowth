"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BulletHole = {
  id: number;
  x: number;
  y: number;
};

const HOLE_LIFETIME_MS = 3000;
const MAX_HOLES = 12;

let nextId = 0;

export function BulletHoles() {
  const [holes, setHoles] = useState<BulletHole[]>([]);

  const addHole = useCallback((e: MouseEvent) => {
    const hole: BulletHole = {
      id: nextId++,
      x: e.clientX,
      y: e.clientY,
    };

    setHoles((prev) => {
      const next = [...prev, hole];
      return next.length > MAX_HOLES ? next.slice(-MAX_HOLES) : next;
    });

    setTimeout(() => {
      setHoles((prev) => prev.filter((h) => h.id !== hole.id));
    }, HOLE_LIFETIME_MS);
  }, []);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad, not touch)
    const hasFineCursor = window.matchMedia("(pointer: fine)").matches;
    if (!hasFineCursor) return;

    document.addEventListener("click", addHole);
    return () => document.removeEventListener("click", addHole);
  }, [addHole]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      <AnimatePresence>
        {holes.map((hole) => (
          <BulletImpact key={hole.id} x={hole.x} y={hole.y} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function BulletImpact({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Muzzle flash / spark on impact */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: [0, 1.8, 0], opacity: [1, 0.8, 0] }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Radial spark lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const innerR = 4;
            const outerR = 14 + Math.random() * 6;
            return (
              <line
                key={angle}
                x1={20 + Math.cos(rad) * innerR}
                y1={20 + Math.sin(rad) * innerR}
                x2={20 + Math.cos(rad) * outerR}
                y2={20 + Math.sin(rad) * outerR}
                stroke="#d4a017"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity={0.6 + Math.random() * 0.4}
              />
            );
          })}
          {/* Center flash */}
          <circle cx="20" cy="20" r="5" fill="#d4a017" opacity="0.7" />
          <circle cx="20" cy="20" r="2" fill="#fff" opacity="0.9" />
        </svg>
      </motion.div>

      {/* Bullet hole */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.15, ease: "easeOut", delay: 0.05 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Outer crack ring */}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="oklch(0.30 0.03 260)"
            strokeWidth="1"
            opacity="0.5"
            strokeDasharray="3 5"
          />
          {/* Dark hole */}
          <circle cx="12" cy="12" r="5" fill="oklch(0.05 0.01 260)" />
          {/* Burn ring around hole */}
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke="oklch(0.25 0.04 83)"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          {/* Inner highlight (metallic reflection) */}
          <circle
            cx="11"
            cy="11"
            r="2"
            fill="oklch(0.40 0.03 260)"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Smoke puff */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 30,
          height: 30,
          background:
            "radial-gradient(circle, oklch(0.50 0.02 260 / 30%) 0%, transparent 70%)",
        }}
        initial={{ scale: 0.5, opacity: 0.6 }}
        animate={{ scale: 2.5, opacity: 0, y: -15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
