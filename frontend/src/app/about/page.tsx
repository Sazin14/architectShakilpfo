import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

const timeline = [
  ["20XX", "Graduated in Architecture"],
  ["20XX", "Started independent practice"],
  ["20XX", `Founded ${site.firm}`],
  ["20XX", "Began travel & film content"],
  ["20XX", "Published first book"],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="About" intro="An architect who kept following his curiosity." />
      <Section>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-24">
          <Reveal><ImagePlaceholder label="Portrait" ratio="aspect-[4/5]" tone="g300" /></Reveal>
          <Reveal delay={0.1}>
            <p className="font-light-h text-3xl md:text-5xl text-ink leading-tight">
              Placeholder biography. Write the story here: training, the move from buildings to cameras and books, and what ties it together.
            </p>
            <p className="mt-8 max-w-xl">Replace with the real biography supplied by the client. Based in {site.location}, working worldwide.</p>
          </Reveal>
        </div>
      </Section>
      <Section dark label="Timeline" title="Milestones">
        {timeline.map(([y, t], i) => (
          <Reveal key={i}><div className="flex gap-10 py-6 border-b border-g800"><span className="font-display text-3xl text-g600 w-28">{y}</span><span className="text-xl text-g300">{t}</span></div></Reveal>
        ))}
      </Section>
      <CtaBand title="Let's work together" text="Browse services and fees, or get in touch directly." />
    </>
  );
}
