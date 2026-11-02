import type { Field, NavItem } from "@/types";

// All content below is placeholder. The backend (NestJS) will later serve this.
export const site = {
  name: "Shakil",
  fullName: "AR. Shakhaouth Hossain Shakil",
  tagline: "Architect · Photographer · Filmmaker · Traveller · Author · Entrepreneur",
  email: "hello@example.com",
  location: "Dhaka, Bangladesh",
  firm: "Kolpo",
  heroImage: "/images/hero-portrait.jpg", // swap for the real portrait (jpg/png/webp)
  youtube: "https://youtube.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

export const nav: NavItem[] = [
  { label: "Architecture", href: "/architecture" },
  { label: "Photography", href: "/photography" },
  { label: "Films", href: "/films" },
  { label: "Travel", href: "/travel" },
  { label: "Writing", href: "/writing" },
  { label: "Ventures", href: "/ventures" },
  { label: "About", href: "/about" },
  { label: "Hire", href: "/hire" },
];

export const fields: Field[] = [
  { slug: "architecture", title: "Architecture", href: "/architecture", icon: "architecture",
    blurb: "Spaces shaped by light, material and silence — solo projects and the work of studio Kolpo." },
  { slug: "photography", title: "Photography", href: "/photography", icon: "photography",
    blurb: "Looking closely at buildings, people and places, one frame at a time." },
  { slug: "films", title: "Films", href: "/films", icon: "film",
    blurb: "Moving image as another way to draw — stories told in motion and sound." },
  { slug: "travel", title: "Travel", href: "/travel", icon: "travel",
    blurb: "Journeys across cities and landscapes, documented as travel vlogs." },
  { slug: "writing", title: "Writing", href: "/writing", icon: "writing",
    blurb: "Books and essays on design, place and a life in motion. Available as PDF." },
  { slug: "ventures", title: "Ventures", href: "/ventures", icon: "business",
    blurb: "Building businesses with the same discipline as buildings." },
];
