import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#070506", // warm near-black ground (Molten Outline)
        surface: "#100C0D", // raised dark panels, nav bar, cards
        line: "#2A2224", // hairline rules and borders
        fg: "#F8F5F2", // warm off-white primary text
        muted: "#A39A95", // warm grey secondary text
        accent: "#FF5E1A", // logo base: vibrant flame orange (the action colour)
        blaze: "#FF3F3A", // midpoint of the orange→crimson molten gradient
        flame: "#F21368", // logo core: crimson magenta
        violet: "#9B23B6", // logo crown: royal purple (logo only)
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-archivo)", "Archivo", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        rise: "rise 1s cubic-bezier(.22,1,.36,1) both",
        "fade-in": "fade-in 1.6s ease-out .15s both",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
