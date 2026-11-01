import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Section({ label, title, children, dark = false, className }: {
  label?: string; title?: string; children: ReactNode; dark?: boolean; className?: string;
}) {
  return (
    <section className={cn("px-6 md:px-12 py-24 md:py-36", dark ? "bg-ink text-g300" : "bg-paper", className)}>
      <div className="max-w-[1500px] mx-auto">
        {(label || title) && (
          <Reveal className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b pb-6 border-current/20">
            {title && <h2 className={cn("font-light-h text-4xl md:text-6xl", dark ? "text-paper" : "text-ink")}>{title}</h2>}
            {label && <span className="text-[11px] uppercase tracking-[0.35em] text-g500">{label}</span>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
