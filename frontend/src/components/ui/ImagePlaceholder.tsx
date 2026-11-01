import { cn } from "@/lib/utils";

/** Grey stand-in until real photography/video is supplied. Pass `src` to show a real image. */
export default function ImagePlaceholder({ label, ratio = "aspect-[4/5]", src, className, tone = "g200" }: {
  label?: string; ratio?: string; src?: string; className?: string; tone?: "g100" | "g200" | "g300" | "g800";
}) {
  const bg = { g100: "bg-g100", g200: "bg-g200", g300: "bg-g300", g800: "bg-g800" }[tone];
  return (
    <div className={cn("relative overflow-hidden grayscale", ratio, bg, className)}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={label ?? ""} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
      ) : (
        <>
          <div className="absolute inset-0 grid-paper opacity-60" />
          {label && <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] text-g600">{label}</span>}
        </>
      )}
    </div>
  );
}
