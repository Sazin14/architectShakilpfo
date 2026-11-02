"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Architect", "Photographer", "Filmmaker", "Traveller", "Author", "Entrepreneur"];

/** Roles slide through in a loop, drawn as outline (stroke-only) lettering. */
export default function RoleSlider({ start }: { start: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!start) return;
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [start]);

  return (
    <div className="flex flex-col gap-2" aria-live="off">
      <span className="text-[11px] uppercase tracking-[0.35em] text-g500">
        {String(i + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")} — I am an
      </span>
      <div className="relative overflow-hidden h-[1.1em] text-[clamp(2.75rem,8.5vw,8rem)] font-display" style={{ lineHeight: 1.1 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={roles[i]} className="block whitespace-nowrap outline-text"
            initial={{ y: "105%", rotate: 2 }} animate={{ y: "0%", rotate: 0 }} exit={{ y: "-105%", rotate: -2 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
            {roles[i]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
