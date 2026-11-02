"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fields, site } from "@/data/site";

const IntroContext = createContext({ done: true });
export const useIntro = () => useContext(IntroContext);

const PER_FIELD = 700; // ms per field of work
const DURATION = PER_FIELD * fields.length;
const easeInOut = (p: number) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Landing intro. A quiet, editorial index: the six fields of work sit in a single column,
 * the list glides upward so the current field is always on the centre line, and a fine
 * counter + hairline progress keeps time. No bounce, blur or zoom.
 *
 * Lives in the root layout (outside app/template.tsx) so the page transition can't hide it.
 * Plays on every fresh load that lands on Home; clicking Home inside the site doesn't replay it.
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
      setCount(Math.round(100 * easeInOut(p)));
      setIndex(Math.min(fields.length - 1, Math.floor(elapsed / PER_FIELD)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => setDone(true), 600);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); root.classList.remove("lenis-stopped"); };
  }, [done]);

  return (
    <IntroContext.Provider value={{ done }}>
      <AnimatePresence>
        {!done && (
          <motion.div key="curtain" className="fixed inset-0 z-[100] bg-ink text-paper overflow-hidden"
            exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}>
            {/* Architectural hairlines */}
            <div className="absolute inset-y-0 left-6 md:left-12 w-px bg-g800" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-g900" />

            {/* Top bar */}
            <div className="absolute top-6 md:top-10 inset-x-6 md:inset-x-12 flex items-start justify-between text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-g500">
              <span className="pl-5 md:pl-8">{site.fullName}</span>
              <span className="hidden sm:block">{site.firm} — Portfolio</span>
            </div>

            {/* Field index: the list glides so the current field rests on the centre line */}
            <div className="absolute inset-0 [--row:clamp(3.25rem,8vw,7rem)]"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 8%, black 34%, black 66%, transparent 92%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 8%, black 34%, black 66%, transparent 92%)",
              }}>
              <ul className="absolute left-6 md:left-12 top-1/2 pl-5 md:pl-8"
                style={{
                  transform: `translateY(calc(var(--row) * ${-(index + 0.5)}))`,
                  transition: "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)",
                }}>
                {fields.map((f, i) => (
                  <li key={f.slug} className="flex items-center gap-5 md:gap-8 leading-none"
                    style={{
                      height: "var(--row)",
                      opacity: i === index ? 1 : 0.16,
                      transition: "opacity 900ms cubic-bezier(0.65, 0, 0.35, 1)",
                    }}>
                    <span className="w-6 text-[10px] md:text-xs tracking-[0.3em] text-g500 tabular-nums">{pad(i + 1)}</span>
                    <span className="font-light-h text-[clamp(2.25rem,7vw,6.5rem)] tracking-[-0.03em]">{f.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Counter + progress */}
            <div className="absolute bottom-6 md:bottom-10 inset-x-6 md:inset-x-12 flex items-end justify-between">
              <span className="pl-5 md:pl-8 text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-g500">{site.location}</span>
              <span className="font-light-h text-[clamp(3.5rem,9vw,8rem)] leading-[0.8] tabular-nums text-g300">
                {pad(count)}<span className="text-g700 text-[0.3em] align-top ml-1 tracking-widest">%</span>
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-g900">
              <div className="h-full bg-accent" style={{ width: `${count}%` }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
