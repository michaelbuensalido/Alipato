export type Project = (typeof projects)[number];

// Class names are written out in full so Tailwind can detect them.
export const projects = [
  {
    title: "Aura Platform",
    category: "Fintech / Web Application",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Lumina Health",
    category: "Brand Identity / Digital Experience",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Kroma Studio",
    category: "E-Commerce / Creative Direction",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop",
    wrapper: "",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
  {
    title: "Vanguard Logistics",
    category: "Corporate Website / UI System",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop",
    wrapper: "md:mt-24",
    overlay: "bg-accent/10",
    titleHover: "group-hover:text-fg",
    categoryColor: "text-accent",
    arrowHover: "group-hover:text-accent",
  },
];
