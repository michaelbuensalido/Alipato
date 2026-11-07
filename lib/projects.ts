export type Project = (typeof projects)[number];

// Class names are written out in full so Tailwind can detect them.
export const projects = [
  {
    title: "Nexus Architect",
    category: "Portfolio Website",
    image: "/images/architecture.png",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Bull's Restaurant",
    category: "Business Website",
    image: "/images/restaurant.png",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Kroma Studio",
    category: "Portfolio Website",
    image: "/images/interior.png",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Vanguard Logistics",
    category: "Business Website",
    image: "/images/electric.png",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
];
