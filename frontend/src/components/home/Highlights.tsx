import Link from "next/link";
import { projects } from "@/data/content";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Reveal from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";

export default function Highlights() {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40">
      <div className="max-w-[1500px] mx-auto">
        <Reveal className="mb-14 flex items-end justify-between border-b border-g200 pb-6">
          <h2 className="font-light-h text-4xl md:text-6xl text-ink">Selected work</h2>
          <Link href="/architecture" className="link-sweep text-[11px] uppercase tracking-[0.3em] text-ink">All projects →</Link>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i % 2 ? "md:mt-24" : ""}>
              <Link href="/architecture" className="group block">
                <ImagePlaceholder label="Project image" ratio="aspect-[4/5]" className="transition-all duration-700 group-hover:grayscale-0" />
                <div className="mt-4 flex justify-between items-baseline">
                  <h3 className="font-display text-3xl text-ink">{p.title}</h3>
                  <span className="text-xs tracking-widest text-g500">{p.year}</span>
                </div>
                <p className="text-sm text-g500">{p.type} — {p.location}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-24 flex justify-center">
          <ButtonLink href="/hire" variant="accent">Work with me</ButtonLink>
        </div>
      </div>
    </section>
  );
}
