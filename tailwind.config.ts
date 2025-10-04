import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors:{
        highDark:'#232931',
        lowDark:'#393E46',
        pureBlack:'#1B1B1B	',
        primary:'#11998e',
        secondary:'#38ef7d',
        lowWhite:'#EEEEEE'
      }
    }
  },
  plugins: [],
} satisfies Config;
