import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import VideoCard from "@/components/ui/VideoCard";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { videos } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Travel" };

export default function Travel() {
  return (
    <>
      <PageHero eyebrow="04 — Travel" title="Travel" icon="travel" intro="Cities and landscapes, documented as vlogs." />
      <Section label="Vlogs" title="Journeys">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((v, i) => <Reveal key={v.id} delay={(i % 3) * 0.1}><VideoCard video={v} /></Reveal>)}
        </div>
        <div className="mt-20 flex justify-center">
          <a href={site.youtube} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.2em] font-bold border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-500">
            Watch all on YouTube <span aria-hidden>↗</span>
          </a>
        </div>
      </Section>
    </>
  );
}
