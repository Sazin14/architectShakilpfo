import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ventures } from "@/data/content";

export const metadata: Metadata = { title: "Ventures" };

export default function Ventures() {
  return (
    <>
      <PageHero eyebrow="06 — Ventures" title="Ventures" icon="business" intro="Building businesses with the discipline of building buildings." />
      <Section label="Business" title="Companies & roles">
        {ventures.map((v, i) => (
          <Reveal key={v.name} delay={i * 0.05}>
            <div className="grid md:grid-cols-[3rem_1fr_1fr_auto] gap-4 md:gap-10 items-baseline py-8 border-b border-g200">
              <span className="text-xs tracking-widest text-g400">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-4xl md:text-5xl text-ink">{v.name}</h3>
              <div><p className="text-ink">{v.role}</p><p className="text-sm">{v.description}</p></div>
              <span className="text-xs tracking-widest text-g500">Since {v.since}</span>
            </div>
          </Reveal>
        ))}
      </Section>
    </>
  );
}
