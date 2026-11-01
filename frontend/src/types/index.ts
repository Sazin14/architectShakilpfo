export interface NavItem { label: string; href: string }

export interface Field {
  slug: string;
  title: string;
  href: string;
  blurb: string;
  icon: "architecture" | "photography" | "film" | "travel" | "writing" | "business";
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  location: string;
  type: string;
  summary: string;
  image?: string;
}

export interface Video { id: string; title: string; place: string; youtubeId: string }

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  pages: number;
  language: string;
  priceUsd: number;
  cover?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  priceFromUsd: number;
  unit: string;
  includes: string[];
}

export interface Venture { name: string; role: string; description: string; since: string }
