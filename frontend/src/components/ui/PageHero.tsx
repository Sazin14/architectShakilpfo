import SplitHeading from "./SplitHeading";
import FieldIcon from "../icons/FieldIcon";
import type { Field } from "@/types";

export default function PageHero({ eyebrow, title, intro, icon }: {
  eyebrow: string; title: string; intro: string; icon?: Field["icon"];
}) {
  return (
    <section className="relative px-6 md:px-12 pt-40 md:pt-52 pb-20 md:pb-28 border-b border-g200 overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative max-w-[1500px] mx-auto grid md:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-g500 mb-6">{eyebrow}</p>
          <SplitHeading as="h1" text={title} immediate className="text-[clamp(3.5rem,13vw,13rem)] text-ink" />
          <p className="font-light-h text-2xl md:text-4xl text-g600 max-w-3xl mt-8 leading-tight">{intro}</p>
        </div>
        {icon && <FieldIcon icon={icon} size={140} className="hidden md:block text-g400" />}
      </div>
    </section>
  );
}
