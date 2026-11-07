import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0D0A12", // deep obsidian-plum background
        surface: "#16111F", // elevated dark plum-charcoal cards/sections
        line: "#2A2139", // subtle violet-charcoal borders
        fg: "#F8F5FA", // crisp warm off-white primary text
        muted: "#A59BB8", // soft lavender-slate secondary text
        accent: "#FF5E1A", // logo base: vibrant flame orange
        flame: "#F21368", // logo core: crimson magenta
        violet: "#9B23B6", // logo crown: royal purple
      },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
