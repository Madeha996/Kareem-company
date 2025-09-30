import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1DA1F2",
        black: {
          DEFAULT: "#000",
          100: "#000333",
        },
      },
    },
  },
  plugins: [],
};

export default config;
