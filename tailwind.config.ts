import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        limegreen: "hsl(163, 72%, 41%)",
        brightred: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        instagram: {
          from: "hsl(37, 97%, 70%)",
          to: "hsl(329, 70%, 58%)",
        },
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
      },
      neutral: {
        dark: {
          verydarkblue: {
            bg: "hsl(230, 17%, 14%)",
            topbgpattern: "hsl(232, 19%, 15%)",
          },
          darkdesaturatedblue: "hsl(228, 28%, 20%)",
          desaturatedblue: "hsl(228, 34%, 66%)",
          white: "hsl(0, 0%, 100%)",
        },
        light: {
          white: "hsl(0, 0%, 100%)",
          verypaleblue: "hsl(225, 100%, 98%)",
          lightgrayishblue: "hsl(227, 47%, 96%)",
          darkgrayishblue: "hsl(228, 12%, 44%)",
          verydarkblue: "hsl(230, 17%, 14%)",
        },
      },
      toggle: {
        dark: {
          from: "hsl(210, 78%, 56%)",
          to: "hsl(146, 68%, 55%)",
        },
        light: "hsl(230, 22%, 74%)",
      },
    },

    extend: {
      fontSize: {
        overviewCardHeadingfont: "14px",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
