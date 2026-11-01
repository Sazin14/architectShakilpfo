"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import SplitHeading from "../ui/SplitHeading";

/** Landing: counter intro -> curtain lifts -> faded portrait fades in behind the name. */
export default function Hero() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro-seen");
    if (seen) { setCount(100); setDone(true); return; }
    document.documentElement.classList.add("lenis-stopped");
    const start = performance.now(); const dur = 2200; let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => { setDone(true); sessionStorage.setItem("intro-seen", "1"); document.documentElement.classList.remove("lenis-stopped"); }, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.documentElement.classList.remove("lenis-stopped"); };
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-paper">
      <AnimatePresence>
        {!done && (
          <motion.div key="curtain" className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col justify-between p-6 md:p-12"
            exit={{ y: "-100%" }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}>
            <span className="text-[11px] uppercase tracking-[0.35em] text-g500">{site.firm} — Portfolio</span>
            <div className="flex items-end justify-between">
              <span className="font-light-h text-2xl md:text-4xl text-g400">{site.fullName}</span>
              <span className="font-display text-[clamp(5rem,18vw,16rem)] leading-none tabular-nums">{String(count).padStart(2, "0")}</span>
            </div>
            <div className="absolute left-0 bottom-0 h-px bg-paper" style={{ width: `${count}%` }} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 grid-paper opacity-40" />
      <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 1.08 }} animate={done ? { opacity: 0.16, scale: 1 } : {}}
        transition={{ duration: 2.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.heroImage} alt="" className="h-full w-full max-w-[1100px] object-cover object-top grayscale
          [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 max-w-[1700px] mx-auto">
        {done && (
          <>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
              className="text-[11px] uppercase tracking-[0.35em] text-g500 mb-6">{site.location}</motion.p>
            <SplitHeading as="h1" text={site.name.toUpperCase()} immediate delay={0.2}
              className="text-ink text-[clamp(5rem,26vw,30rem)] -ml-[0.04em]" />
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }}
                className="font-light-h text-2xl md:text-4xl text-g600 max-w-2xl leading-tight">
                Architect · Photographer · Filmmaker · Traveller · Author · Entrepreneur
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
                className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-g500">
                <span className="relative block h-12 w-px bg-g300 overflow-hidden">
                  <motion.span className="absolute inset-x-0 top-0 h-4 bg-ink" animate={{ y: [-16, 48] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
                </span>
                Scroll
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}
