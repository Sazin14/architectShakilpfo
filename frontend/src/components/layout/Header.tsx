"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.documentElement.classList.toggle("lenis-stopped", open); }, [open]);

  const light = open; // text turns white over the black menu
  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500",
        scrolled && !open ? "py-4 bg-paper/85 backdrop-blur border-b border-g200" : "py-7")}>
        <Link href="/" className={cn("font-display text-2xl tracking-wider transition-colors", light ? "text-paper" : "text-ink")}>
          {site.name}<span className="text-g400">.</span>
        </Link>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"
          className={cn("group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold transition-colors", light ? "text-paper" : "text-ink")}>
          <span>{open ? "Close" : "Menu"}</span>
          <span className="relative block h-3 w-8">
            <span className={cn("absolute left-0 h-px w-full bg-current transition-all duration-500", open ? "top-1/2 rotate-45" : "top-0 group-hover:w-5")} />
            <span className={cn("absolute left-0 h-px w-full bg-current transition-all duration-500", open ? "top-1/2 -rotate-45" : "bottom-0")} />
          </span>
        </button>
        <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-ink" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div key="menu" className="fixed inset-0 z-40 bg-ink text-paper overflow-y-auto"
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
            <div className="min-h-full px-6 md:px-12 pt-28 pb-10 grid md:grid-cols-[1fr_auto] gap-12 items-end max-w-[1500px] mx-auto">
              <nav className="flex flex-col">
                {nav.map((n, i) => (
                  <div key={n.href} className="overflow-hidden border-b border-g800">
                    <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                      transition={{ duration: 0.8, delay: 0.25 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}>
                      <Link href={n.href} className={cn("group flex items-baseline gap-5 py-3 font-display text-[clamp(2rem,5.2vw,4.5rem)] transition-colors duration-300",
                        pathname === n.href ? "text-paper" : "text-g600 hover:text-paper")}>
                        <span className="text-xs font-body tracking-widest text-g600 w-8">{String(i + 1).padStart(2, "0")}</span>
                        <span className="transition-transform duration-500 group-hover:translate-x-4">{n.label}</span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.7 }}
                className="text-sm text-g500 space-y-2 md:text-right">
                <p className="font-light-h text-2xl text-g300">{site.tagline.split(" · ").slice(0, 3).join(" / ")}</p>
                <a href={`mailto:${site.email}`} className="link-sweep text-paper">{site.email}</a>
                <p>{site.location}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
