export type Project = (typeof projects)[number];

// Class names are written out in full so Tailwind can detect them.
export const projects = [
  {
    title: "Aura Platform",
    category: "Fintech / Web Application",
    image: "/images/architecture.png",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Lumina Health",
    category: "Brand Identity / Digital Experience",
    image: "/images/restaurant.png",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Kroma Studio",
    category: "E-Commerce / Creative Direction",
    image: "/images/interior.png",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Vanguard Logistics",
    category: "Corporate Website / UI System",
    image: "/images/electric.png",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
];
