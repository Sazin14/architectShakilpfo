"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fields, site } from "@/data/site";

const IntroContext = createContext({ done: true });
export const useIntro = () => useContext(IntroContext);

const PER_WORD = 620; // ms each field name stays on screen
const DURATION = PER_WORD * fields.length;
const easeInOutSine = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2;
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Landing intro: counter 00 -> 100 while the fields of work flash by one at a time.
 * Lives in the root layout (outside app/template.tsx) so the page transition can't hide it
 * and the header can't show through it. Plays on every fresh page load that lands on the
 * home page; clicking back to Home inside the site does not replay it.
 */
export default function IntroProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [done, setDone] = useState(pathname !== "/");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (done) return;
    const root = document.documentElement;
    root.classList.add("lenis-stopped");
    let raf = 0; let timer: ReturnType<typeof setTimeout>;
    const start = performance.now();
    const tick = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / DURATION);
      setCount(Math.round(100 * easeInOutSine(p)));
      setIndex(Math.min(fields.length - 1, Math.floor(elapsed / PER_WORD)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => setDone(true), 500);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); root.classList.remove("lenis-stopped"); };
  }, [done]);

  return (
    <IntroContext.Provider value={{ done }}>
      <AnimatePresence>
        {!done && (
          <motion.div key="curtain" className="fixed inset-0 z-[100] bg-ink text-paper overflow-hidden"
            exit={{ y: "-100%" }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}>
            <span className="absolute top-6 left-6 md:top-12 md:left-12 text-[11px] uppercase tracking-[0.35em] text-g500">{site.firm} — Portfolio</span>
            <span className="absolute top-6 right-6 md:top-12 md:right-12 text-[11px] uppercase tracking-[0.35em] text-g500">
              {String(index + 1).padStart(2, "0")} / {String(fields.length).padStart(2, "0")}
            </span>

            {/* Flashing field names: each digs in from depth, pops to size, then recedes. */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:900px]">
              <AnimatePresence mode="popLayout">
                <motion.span key={index}
                  className="font-display text-[clamp(3.5rem,13vw,13rem)] text-center px-4 will-change-transform"
                  initial={{ opacity: 0, scale: 0.55, z: -300, filter: "blur(14px)" }}
                  animate={{ opacity: 1, scale: 1, z: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.35, z: 200, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: EASE }}>
                  {fields[index].title}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex items-end justify-between">
              <span className="font-light-h text-xl md:text-3xl text-g400">{site.fullName}</span>
              <span className="font-display text-[clamp(3rem,9vw,8rem)] leading-none tabular-nums text-g300">{String(count).padStart(2, "0")}</span>
            </div>
            <div className="absolute left-0 bottom-0 h-px bg-paper" style={{ width: `${count}%` }} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
