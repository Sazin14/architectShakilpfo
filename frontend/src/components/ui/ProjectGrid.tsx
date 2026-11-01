import type { Project } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";
import Reveal from "./Reveal";

export default function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
      {items.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 3) * 0.08}>
          <article className="group">
            <ImagePlaceholder label="Project image" ratio="aspect-[4/5]" className="group-hover:grayscale-0 transition duration-700" />
            <div className="mt-4 flex justify-between items-baseline border-b border-g200 pb-3">
              <h3 className="font-display text-3xl text-ink">{p.title}</h3>
              <span className="text-xs tracking-widest text-g500">{p.year}</span>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-g500">{p.type} — {p.location}</p>
            <p className="mt-2 text-sm">{p.summary}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
