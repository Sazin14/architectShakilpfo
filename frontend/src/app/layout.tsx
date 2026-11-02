import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroProvider from "@/components/layout/IntroProvider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: `${site.fullName} — Architect, Photographer, Filmmaker`, template: `%s — ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <IntroProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </IntroProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
