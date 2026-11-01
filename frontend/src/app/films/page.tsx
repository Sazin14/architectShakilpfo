import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import VideoCard from "@/components/ui/VideoCard";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { videos } from "@/data/content";

export const metadata: Metadata = { title: "Films" };

export default function Films() {
  return (
    <>
      <PageHero eyebrow="03 — Films" title="Films" icon="film" intro="Moving image as another way to draw." />
      <Section label="Reel" title="Content & films">
        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((v, i) => <Reveal key={v.id} delay={(i % 2) * 0.1}><VideoCard video={v} /></Reveal>)}
        </div>
      </Section>
      <CtaBand title="A story to tell?" text="Brand films, architectural walkthroughs and travel content." />
    </>
  );
}
