import type { Book, Project, Service, Venture, Video } from "@/types";

export const projects: Project[] = [
  { slug: "p1", title: "House of Quiet Light", year: "2024", location: "Dhaka", type: "Residential · Solo", summary: "A courtyard house that follows the sun through the day." },
  { slug: "p2", title: "Riverside Pavilion", year: "2023", location: "Sylhet", type: "Hospitality · Solo", summary: "A timber and concrete pavilion that sits lightly on the water's edge." },
  { slug: "p3", title: "Brick Library", year: "2022", location: "Chattogram", type: "Public · Solo", summary: "A reading house built from reclaimed brick and filtered daylight." },
  { slug: "p4", title: "Studio Annex", year: "2021", location: "Dhaka", type: "Workplace · Solo", summary: "A compact creative studio with a single, generous room." },
];

export const kolpoProjects: Project[] = [
  { slug: "k1", title: "Kolpo Residence 01", year: "2025", location: "Dhaka", type: "Residential · Kolpo", summary: "Placeholder for a firm project." },
  { slug: "k2", title: "Kolpo Commons", year: "2024", location: "Cox's Bazar", type: "Mixed-use · Kolpo", summary: "Placeholder for a firm project." },
  { slug: "k3", title: "Kolpo Workplace", year: "2023", location: "Dhaka", type: "Commercial · Kolpo", summary: "Placeholder for a firm project." },
];

export const videos: Video[] = [
  { id: "v1", title: "Placeholder Vlog — City One", place: "Country", youtubeId: "dQw4w9WgXcQ" },
  { id: "v2", title: "Placeholder Vlog — City Two", place: "Country", youtubeId: "dQw4w9WgXcQ" },
  { id: "v3", title: "Placeholder Vlog — City Three", place: "Country", youtubeId: "dQw4w9WgXcQ" },
];

export const books: Book[] = [
  { slug: "b1", title: "Book Title One", subtitle: "A subtitle", summary: "A short description of the book — what it explores and who it is for. Replace with the real blurb.", pages: 180, language: "English", priceUsd: 9 },
  { slug: "b2", title: "Book Title Two", subtitle: "A subtitle", summary: "A short description of the book — what it explores and who it is for. Replace with the real blurb.", pages: 140, language: "Bangla", priceUsd: 7 },
];

export const services: Service[] = [
  { slug: "architecture", title: "Architectural Design", description: "Concept to construction for residential, commercial and cultural projects, through studio Kolpo.", priceFromUsd: 50, unit: "per sq. ft. (design fee)", includes: ["Site study & brief", "Concept design", "Detailed drawings", "Site visits"] },
  { slug: "photography", title: "Photography", description: "Architectural, travel and editorial photography.", priceFromUsd: 300, unit: "per half-day", includes: ["Pre-shoot planning", "Edited high-res images", "Usage licence"] },
  { slug: "video", title: "Video & Content", description: "Travel films, brand stories and architectural walkthroughs.", priceFromUsd: 800, unit: "per project", includes: ["Script & storyboard", "Shoot & edit", "Colour grade", "Social cut-downs"] },
  { slug: "consulting", title: "Consulting & Talks", description: "Design consulting, workshops and speaking engagements.", priceFromUsd: 150, unit: "per hour", includes: ["Discovery call", "Written recommendations"] },
];

export const ventures: Venture[] = [
  { name: "Kolpo", role: "Founder · Principal Architect", description: "Architecture and design studio.", since: "20XX" },
  { name: "Venture Two", role: "Co-founder", description: "Placeholder description of a business venture.", since: "20XX" },
  { name: "Venture Three", role: "Investor", description: "Placeholder description of a business venture.", since: "20XX" },
];

export const gallery = Array.from({ length: 9 }, (_, i) => ({ id: i + 1, title: `Frame ${String(i + 1).padStart(2, "0")}`, ratio: i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]" }));
