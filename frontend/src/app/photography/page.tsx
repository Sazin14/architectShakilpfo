import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { gallery } from "@/data/content";

export const metadata: Metadata = { title: "Photography" };

export default function Photography() {
  return (
    <>
      <PageHero eyebrow="02 — Photography" title="Photography" icon="photography"
        intro="Looking closely at buildings, people and places." />
      <Section label="Selected frames" title="Gallery">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={(i % 3) * 0.08}>
              <div className="group break-inside-avoid"><ImagePlaceholder label={g.title} ratio={g.ratio} tone={i % 2 ? "g200" : "g300"} className="group-hover:grayscale-0" /></div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand title="Need images?" text="Architectural, editorial and travel photography commissions." />
    </>
  );
}
