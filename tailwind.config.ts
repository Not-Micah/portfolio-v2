import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nerd: ['"Fira Code Nerd Font"', 'monospace'],
      },
      colors: {
        primary: '#9A9498', 
      },
    },
  },
  plugins: [],
};

export default config;
