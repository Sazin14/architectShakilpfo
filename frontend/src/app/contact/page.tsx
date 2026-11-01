import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact" intro="Questions, collaborations, press — write anytime." />
      <Section>
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          <div className="space-y-3">
            <a href={`mailto:${site.email}`} className="link-sweep font-light-h text-3xl text-ink">{site.email}</a>
            <p>{site.location}</p>
          </div>
          <ContactForm subjects={["General", "Architecture", "Photography", "Film", "Press"]} />
        </div>
      </Section>
    </>
  );
}
