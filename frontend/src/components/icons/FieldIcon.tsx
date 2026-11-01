"use client";
import { motion } from "framer-motion";
import type { Field } from "@/types";

// Simple line-drawn symbols. Paths "draw" themselves when `active` or in view.
const paths: Record<Field["icon"], string[]> = {
  architecture: ["M6 54V22L32 8l26 14v32", "M2 54h60", "M24 54V36h16v18", "M14 30h6M44 30h6"],
  photography: ["M4 18h12l4-6h24l4 6h12v36H4z", "M32 46a12 12 0 1 0 0-24 12 12 0 0 0 0 24z", "M32 38a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  film: ["M4 14h56v36H4z", "M26 24l14 8-14 8z", "M12 14v36M52 14v36"],
  travel: ["M32 60S10 38 10 24a22 22 0 0 1 44 0c0 14-22 36-22 36z", "M32 32a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"],
  writing: ["M10 8h30l14 14v34H10z", "M40 8v14h14", "M18 32h28M18 40h28M18 48h18"],
  business: ["M6 54h52", "M10 54V34h10v20M27 54V22h10v32M44 54V10h10v44", "M10 28l17-10 17-8"],
};

export default function FieldIcon({ icon, active = true, size = 64, className }: {
  icon: Field["icon"]; active?: boolean; size?: number; className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth={1.2} strokeLinecap="square" strokeLinejoin="miter" className={className} aria-hidden>
      {paths[icon].map((d, i) => (
        <motion.path key={i} d={d} initial={false}
          animate={{ pathLength: active ? 1 : 0.0001, opacity: active ? 1 : 0.35 }}
          transition={{ duration: 1.1, delay: active ? i * 0.12 : 0, ease: [0.16, 1, 0.3, 1] }} />
      ))}
    </svg>
  );
}
