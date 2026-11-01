"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Large statement whose words darken as the reader scrolls through it. */
const text = "I design buildings, frame photographs, cut films, walk unfamiliar cities and write about all of it. Different tools, one habit: looking carefully, then making something honest.";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(" ");
  return (
    <section ref={ref} className="px-6 md:px-12 py-28 md:py-48 bg-g50">
      <p className="text-[11px] uppercase tracking-[0.35em] text-g500 mb-10 max-w-[1500px] mx-auto">Approach</p>
      <p className="font-light-h text-[clamp(2rem,5vw,4.75rem)] leading-[1.1] max-w-[1500px] mx-auto">
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
        ))}
      </p>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: ReturnType<typeof useScroll>["scrollYProgress"]; range: [number, number] }) {
  const color = useTransform(progress, range, ["#c4c4c4", "#0a0a0a"]);
  return <motion.span style={{ color }} className="inline-block mr-[0.28em]">{children}</motion.span>;
}
