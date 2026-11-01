"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Word-by-word masked reveal. Wrap a word in [brackets] to highlight it in the accent colour. */
export default function SplitHeading({ text, as: Tag = "h2", className, delay = 0, immediate = false }: {
  text: string; as?: "h1" | "h2" | "h3"; className?: string; delay?: number; immediate?: boolean;
}) {
  const words = text.split(" ");
  const viewProps = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <Tag className={cn("font-display", className)} aria-label={text.replace(/[\[\]]/g, "")}>
      {words.map((w, i) => {
        const hl = w.startsWith("[") && w.endsWith("]");
        const word = hl ? w.slice(1, -1) : w;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.25em]" aria-hidden>
            <motion.span className={cn("inline-block", hl && "text-accent")} initial="hide" {...viewProps}
              variants={{ hide: { y: "110%" }, show: { y: 0 } }}
              transition={{ duration: 1, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
