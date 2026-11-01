import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import BuyButton from "@/components/ui/BuyButton";
import { books } from "@/data/content";

export const metadata: Metadata = { title: "Writing" };

export default function Writing() {
  return (
    <>
      <PageHero eyebrow="05 — Writing" title="Writing" icon="writing" intro="Books on design, place and a life in motion." />
      <Section label="Books · PDF" title="Library">
        <div className="space-y-24">
          {books.map((b, i) => (
            <Reveal key={b.slug}>
              <article className={`grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="max-w-sm w-full mx-auto"><ImagePlaceholder label="Book cover" ratio="aspect-[2/3]" tone="g300" className="shadow-[20px_20px_0_#eeeeee]" /></div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-g500 mb-4">{b.language} · {b.pages} pages · PDF</p>
                  <h3 className="font-display text-5xl md:text-7xl text-ink">{b.title}</h3>
                  {b.subtitle && <p className="font-light-h text-2xl text-g600 mt-2">{b.subtitle}</p>}
                  <p className="mt-6 max-w-xl">{b.summary}</p>
                  <div className="mt-8"><BuyButton price={b.priceUsd} /></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
