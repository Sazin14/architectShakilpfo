"use client";
import Link from "next/link";
import { useState } from "react";
import { fields } from "@/data/site";
import FieldIcon from "../icons/FieldIcon";
import Reveal from "../ui/Reveal";
import { cn } from "@/lib/utils";

/** Index of the six fields of work. Hovering a row draws its symbol on the right. */
export default function FieldsList() {
  const [active, setActive] = useState(0);
  return (
    <section className="px-6 md:px-12 py-28 md:py-40">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-16">
        <div>
          <Reveal className="mb-12 flex justify-between border-b border-g200 pb-6">
            <h2 className="font-light-h text-4xl md:text-6xl text-ink">Fields of work</h2>
            <span className="text-[11px] uppercase tracking-[0.35em] text-g500 self-end">06</span>
          </Reveal>
          {fields.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.05}>
              <Link href={f.href} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 md:py-8 border-b border-g200">
                <span className="text-xs tracking-widest text-g400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className={cn("block font-display text-5xl md:text-7xl transition-colors duration-500", active === i ? "text-ink" : "text-g300")}>{f.title}</span>
                  <p className={cn("max-w-xl overflow-hidden transition-all duration-700 text-g600", active === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0")}>{f.blurb}</p>
                </div>
                <span className="text-2xl text-g400 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-ink">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="hidden lg:flex sticky top-32 h-[480px] items-center justify-center border border-g200 text-ink bg-g50">
          <div className="absolute inset-0 grid-paper opacity-50" />
          {fields.map((f, i) => (
            <div key={f.slug} className={cn("absolute transition-opacity duration-500", active === i ? "opacity-100" : "opacity-0")}>
              <FieldIcon icon={f.icon} size={240} active={active === i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
