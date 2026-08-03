import type { Config } from "tailwindcss";

// Pico design system tokens.
// Colors are derived directly from the Pico logo: warm cream/peach base,
// confident blue as the primary brand color, coral as a sparse "alive" accent.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBEFDD",
        peach: {
          DEFAULT: "#F3D3A6",
          soft: "#F7DFBB",
        },
        blue: {
          DEFAULT: "#2E8FD1",
          dark: "#1D6FAE",
          deep: "#0F4E80",
        },
        coral: {
          DEFAULT: "#E86A52",
          soft: "#F2B4A4",
        },
        ink: {
          DEFAULT: "#2B241D",
          soft: "#6B6055",
          faint: "#9C9184",
        },
        surface: "#FFFCF7",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "28px",
        md: "18px",
        sm: "12px",
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        "content-pulse": {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(1.12)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
      },
      animation: {
        "content-pulse": "content-pulse 3.2s ease-in-out infinite",
        bob: "bob 4.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
