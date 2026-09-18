import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gc: {
          ivory: "#F6F2E9",
          ink: "#20201D",
          muted: "#6F6A61",
          border: "#DCD6CB",
          cotton: "#EEE8DD",
          sand: "#D8C9AF",
          green: "#365846",
          rose: "#9A3F59",
          white: "#FCFBF8",
          dark: "#19251F",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Cinzel", "Georgia", "serif"],
        sans: ["Manrope", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
