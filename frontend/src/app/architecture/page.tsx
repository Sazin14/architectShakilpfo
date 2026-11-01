import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/ui/ProjectGrid";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { kolpoProjects, projects } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Architecture" };

export default function Architecture() {
  return (
    <>
      <PageHero eyebrow="01 — Architecture" title="Architecture" icon="architecture"
        intro="Spaces shaped by light, material and silence." />
      <Section label="Solo" title="Independent projects"><ProjectGrid items={projects} /></Section>
      <Section dark label={`Studio ${site.firm}`} title={`Studio ${site.firm}`}>
        <Reveal className="grid md:grid-cols-[1fr_2fr] gap-10 mb-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-g500">Architecture firm</p>
          <p className="font-light-h text-2xl md:text-4xl text-g300 leading-tight">
            {site.firm} is the architecture practice founded to carry design from first sketch to finished building.
            Placeholder text — replace with the firm&apos;s story, team and philosophy.
          </p>
        </Reveal>
        <div className="[&_h3]:!text-paper [&_.font-display]:!text-paper"><ProjectGrid items={kolpoProjects} /></div>
      </Section>
      <CtaBand title="Planning a building?" text="Design fees and engagement stages are listed on the hire page." />
    </>
  );
}
