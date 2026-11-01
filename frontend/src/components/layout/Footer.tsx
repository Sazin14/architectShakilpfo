import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-g500 px-6 md:px-12 pt-24 pb-10">
      <div className="max-w-[1500px] mx-auto">
        <Link href="/contact" className="group block border-b border-g800 pb-12 mb-12">
          <span className="text-[11px] uppercase tracking-[0.35em]">Have a project in mind?</span>
          <span className="block font-display text-[clamp(3rem,11vw,11rem)] text-paper group-hover:text-g500 transition-colors duration-700">
            Let&apos;s talk <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">→</span>
          </span>
        </Link>
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div><p className="font-light-h text-3xl text-paper mb-3">{site.name}</p><p>{site.tagline}</p></div>
          <ul className="space-y-1">{nav.slice(0, 4).map((n) => <li key={n.href}><Link className="link-sweep hover:text-paper" href={n.href}>{n.label}</Link></li>)}</ul>
          <ul className="space-y-1">{nav.slice(4).map((n) => <li key={n.href}><Link className="link-sweep hover:text-paper" href={n.href}>{n.label}</Link></li>)}</ul>
          <ul className="space-y-1">
            <li><a className="link-sweep hover:text-paper" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="link-sweep hover:text-paper" href={site.youtube}>YouTube</a></li>
            <li><a className="link-sweep hover:text-paper" href={site.instagram}>Instagram</a></li>
            <li><a className="link-sweep hover:text-paper" href={site.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
        <p className="mt-16 text-xs text-g600">© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
