import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "dark" | "ghost";
const styles: Record<Variant, string> = {
  accent: "bg-accent text-ink hover:bg-ink hover:text-paper",
  dark: "bg-ink text-paper hover:bg-g700",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-paper",
};
const base = "inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-500";

export function ButtonLink({ href, children, variant = "dark", className }: {
  href: string; children: ReactNode; variant?: Variant; className?: string;
}) {
  return <Link href={href} className={cn(base, styles[variant], className)}>{children}<span aria-hidden>→</span></Link>;
}

export function Button({ variant = "dark", className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button {...rest} className={cn(base, styles[variant], className)}>{children}</button>;
}
