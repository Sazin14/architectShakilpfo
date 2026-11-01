const words = ["Architecture", "Photography", "Film", "Travel", "Writing", "Enterprise"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="bg-ink text-paper py-6 overflow-hidden border-y border-ink" aria-hidden>
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-4xl md:text-6xl text-g700">
            <span className={i % 6 === 1 ? "text-paper" : ""}>{w}</span><span className="text-g800">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
