"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIntro } from "../layout/IntroProvider";
import { site } from "@/data/site";
import SplitHeading from "../ui/SplitHeading";
import RoleSlider from "./RoleSlider";

/** Landing: (intro curtain lives in IntroProvider) -> faded portrait fades in behind the name. */
export default function Hero() {
  const { done } = useIntro();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-paper">
      <div className="absolute inset-0 grid-paper opacity-40" />
      <motion.div style={{ y: imgY }} initial={{ opacity: 0, scale: 1.08 }} animate={done ? { opacity: 0.42, scale: 1 } : {}}
        transition={{ duration: 2.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.heroImage} alt="" className="h-full w-full max-w-[1100px] object-cover object-top grayscale"
          style={{
            maskImage: "linear-gradient(to bottom, black 55%, transparent), linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }} />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20 max-w-[1700px] mx-auto">
        {done && (
          <>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
              className="text-[11px] uppercase tracking-[0.35em] text-g500 mb-6">{site.location}</motion.p>
            <SplitHeading as="h1" text={site.name.toUpperCase()} immediate delay={0.2}
              className="text-ink text-[clamp(4rem,20.8vw,24rem)] -ml-[0.04em]" />
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }}>
                <RoleSlider start={done} />
              </motion.div>
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
