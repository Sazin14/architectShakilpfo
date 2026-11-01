import { ButtonLink } from "./Button";
import Reveal from "./Reveal";

export default function CtaBand({ title, text, href = "/hire", label = "See services & fees" }: { title: string; text: string; href?: string; label?: string }) {
  return (
    <section className="bg-g900 px-6 md:px-12 py-24 text-g400">
      <Reveal className="max-w-[1500px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div><h2 className="font-light-h text-4xl md:text-6xl text-paper">{title}</h2><p className="mt-3 max-w-xl">{text}</p></div>
        <ButtonLink href={href} variant="ghost" className="!border-paper !text-paper hover:!bg-paper hover:!text-ink">{label}</ButtonLink>
      </Reveal>
    </section>
  );
}
