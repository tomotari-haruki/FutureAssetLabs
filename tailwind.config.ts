import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        midnight: "#050816",
        cyanGlow: "#22d3ee",
        emeraldSignal: "#10b981",
        solarGold: "#f59e0b",
      },
      boxShadow: {
        lift: "0 18px 40px rgba(15, 23, 42, 0.14)",
        "lift-dark": "0 18px 42px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "lab-grid":
          "linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)",
      },
      keyframes: {
        "slow-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slow-shift": "slow-shift 18s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
