"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

type PicoCharacterProps = {
  size?: number;
  interactive?: boolean;
  className?: string;
};

/**
 * Pico's illustrated form: a mouse-shaped body with a light-based
 * dot-eye face. When `interactive` is true (used in the hero), the eyes
 * track the cursor within the parent stage. He also blinks and bobs
 * gently on his own idle timers whether or not the user interacts.
 */
export function PicoCharacter({
  size = 220,
  interactive = false,
  className = "",
}: PicoCharacterProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!interactive || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const range = 3.5;
    setPupil({ x: relX * range, y: relY * range });
  }

  function handleMouseLeave() {
    setPupil({ x: 0, y: 0 });
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
        <svg width={size} height={size} viewBox="0 0 280 280" role="img" aria-label="Pico, an AI companion shaped like a mouse">
          <path
            d="M40 160 C40 100 90 60 150 60 C205 60 235 95 235 130 C235 175 195 200 150 200 C90 200 40 200 40 160 Z"
            fill="#2E8FD1"
          />
          <ellipse
            cx="215"
            cy="90"
            rx="26"
            ry="20"
            fill="#E86A52"
            transform="rotate(30 215 90)"
          />
          <circle cx="105" cy="130" r="20" fill="#FFFCF7" />
          <circle cx="165" cy="130" r="20" fill="#FFFCF7" />
          <g className="origin-[105px_130px] animate-blink">
            <circle
              cx={105 + pupil.x}
              cy={130 + pupil.y}
              r="9"
              fill="#2B241D"
              style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }}
            />
          </g>
          <g className="origin-[165px_130px] animate-blink [animation-delay:0.1s]">
            <circle
              cx={165 + pupil.x}
              cy={130 + pupil.y}
              r="9"
              fill="#2B241D"
              style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
