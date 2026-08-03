"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

type PicoCharacterProps = {
  size?: number;
  interactive?: boolean;
  className?: string;
};

/**
 * Pico's illustrated form: a rounded mouse-shaped body with a blue
 * "cap," a coral accent, and a black face patch — no eyes. His single
 * expressive feature is his mouth, which shifts subtly toward the
 * cursor when `interactive` is true (used in the hero), and gives a
 * gentle content pulse on an idle timer either way.
 */
export function PicoCharacter({
  size = 220,
  interactive = false,
  className = "",
}: PicoCharacterProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [mouthOffset, setMouthOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!interactive || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const range = 3;
    setMouthOffset({ x: relX * range, y: relY * range * 0.6 });
  }

  function handleMouseLeave() {
    setMouthOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        className="animate-bob cursor-pointer"
        whileHover={{ y: -6, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <svg width={size} height={size} viewBox="0 0 280 280" role="img" aria-label="Pico, an AI companion shaped like a mouse, with an expressive mouth">
          <ellipse cx="140" cy="222" rx="86" ry="12" fill="rgba(43,36,29,0.08)" />

          <path
            d="M36 168 C36 96 92 48 152 48 C208 48 244 88 244 132 C244 182 200 210 148 210 C86 210 36 208 36 168 Z"
            fill="#FFFCF7"
          />

          <path
            d="M56 132 C60 78 104 48 152 48 C206 48 240 84 244 126 C214 100 176 84 140 84 C104 84 74 102 56 132 Z"
            fill="#2E8FD1"
          />

          <ellipse cx="205" cy="82" rx="24" ry="18" fill="#E86A52" transform="rotate(24 205 82)" />

          <ellipse cx="108" cy="158" rx="40" ry="30" fill="#2B241D" />

          <g
            style={{
              transform: `translate(${mouthOffset.x}px, ${mouthOffset.y}px)`,
              transition: "transform 0.12s ease-out",
            }}
          >
            <path
              d="M90 156 Q99 168 108 156 Q117 168 126 156"
              fill="none"
              stroke="#F4B942"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-content-pulse origin-[108px_160px]"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
