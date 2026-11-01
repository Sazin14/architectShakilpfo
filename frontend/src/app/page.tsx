import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FieldsList from "@/components/home/FieldsList";
import Statement from "@/components/home/Statement";
import Highlights from "@/components/home/Highlights";
import CtaBand from "@/components/ui/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FieldsList />
      <Statement />
      <Highlights />
      <CtaBand title="Available for commissions" text="Architecture, photography, film and consulting — see what I offer and what it costs." />
    </>
  );
}
