"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { site } from "@/data/site";

const IntroContext = createContext({ done: true });
export const useIntro = () => useContext(IntroContext);

const DURATION = 3200; // ms for 00 -> 100
const easeInOutSine = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2;

/**
 * Landing intro. Lives in the root layout (outside app/template.tsx) so the page
 * transition can't hide it and the header can't show through it.
 * Plays once per browser session, only when the visitor lands on the home page.
 */
export default function IntroProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [done, setDone] = useState(pathname !== "/");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (done) return;
    if (sessionStorage.getItem("intro-seen")) { setDone(true); return; }
    const root = document.documentElement;
    root.classList.add("lenis-stopped");
    let raf = 0; let timer: ReturnType<typeof setTimeout>;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setCount(Math.round(100 * easeInOutSine(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => { sessionStorage.setItem("intro-seen", "1"); setDone(true); }, 450);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); root.classList.remove("lenis-stopped"); };
  }, [done]);

  return (
    <IntroContext.Provider value={{ done }}>
      <AnimatePresence>
        {!done && (
          <motion.div key="curtain" className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col justify-between p-6 md:p-12"
            exit={{ y: "-100%" }} transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}>
            <span className="text-[11px] uppercase tracking-[0.35em] text-g500">{site.firm} — Portfolio</span>
            <div className="flex items-end justify-between">
              <span className="font-light-h text-2xl md:text-4xl text-g400">{site.fullName}</span>
              <span className="font-display text-[clamp(6rem,22vw,20rem)] leading-none tabular-nums">{String(count).padStart(2, "0")}</span>
            </div>
            <div className="absolute left-0 bottom-0 h-px bg-paper" style={{ width: `${count}%` }} />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
