import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0B1220", // page background
        surface: "#111A2E", // cards / alternate sections
        line: "#1E293B", // borders
        fg: "#F1F5F9", // primary text
        muted: "#94A3B8", // secondary text
        accent: "#38BDF8", // single accent (CTAs, links, focus)
      },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
