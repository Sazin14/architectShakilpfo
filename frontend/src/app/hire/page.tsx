import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ui/ContactForm";
import { services } from "@/data/content";
import { usd } from "@/lib/utils";

export const metadata: Metadata = { title: "Hire" };

export default function Hire() {
  return (
    <>
      <PageHero eyebrow="Services" title="Hire" intro="Services and starting fees. Final quotes depend on scope." />
      <Section label="Fees" title="What I offer">
        <div className="grid md:grid-cols-2 gap-px bg-g200 border border-g200">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08} className="bg-paper">
              <article className="p-8 md:p-12 h-full group hover:bg-g50 transition-colors duration-500">
                <h3 className="font-display text-4xl md:text-5xl text-ink">{s.title}</h3>
                <p className="mt-4 max-w-md">{s.description}</p>
                <p className="mt-8 font-light-h text-5xl text-ink">
                  <span className="text-xs font-body tracking-[0.25em] uppercase text-g500 mr-3">From</span>{usd(s.priceFromUsd)}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-g500 mt-1">{s.unit}</p>
                <ul className="mt-6 space-y-1 text-sm">{s.includes.map((x) => <li key={x} className="flex gap-3"><span className="text-g400">—</span>{x}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-g500">All fees are placeholders and will be confirmed by the client.</p>
      </Section>
      <Section label="Enquire" title="Start a conversation" className="bg-g50">
        <div className="max-w-3xl"><ContactForm subjects={services.map((s) => s.title)} /></div>
      </Section>
    </>
  );
}
