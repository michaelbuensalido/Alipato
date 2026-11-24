export type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  href: string;
  /** Pastel backdrop behind the screenshot. */
  tint: string;
};

export const projects: Project[] = [
  {
    title: "Nexus Architect",
    category: "Portfolio Website",
    summary: "A portfolio site for an architecture studio, built around full-bleed project imagery.",
    image: "/images/architecture.png",
    href: "#",
    tint: "#DCD6F7",
  },
  {
    title: "Bull's Restaurant",
    category: "Business Website",
    summary: "A restaurant website with the menu, location and reservations a tap away.",
    image: "/images/restaurant.png",
    href: "#",
    tint: "#D7F3DA",
  },
  {
    title: "Linea Architects",
    category: "Portfolio Website",
    summary: "A minimal interior and architecture portfolio with a calm, editorial layout.",
    image: "/images/interior.png",
    href: "#",
    tint: "#FBEFD9",
  },
  {
    title: "Electria",
    category: "Business Website",
    summary: "A service business website that turns visitors into quote requests.",
    image: "/images/electric.png",
    href: "#",
    tint: "#FFDCCB",
  },
];
