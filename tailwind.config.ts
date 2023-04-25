import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      //Primary
      "lime-green": "hsl(163, 72%, 41%)",
      "bright-red": "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      youtube: "hsl(348, 97%, 39%)",

      //Dark Theme
      "bg-very-dark-blue": "hsl(230, 17%, 14%)",
      "topBg-very-dark-blue": "hsl(232, 19%, 15%)",
      "dark-desaturated-blue": "hsl(228, 28%, 20%)",
      "desaturated-blue": "hsl(228, 34%, 66%)",
      white: "hsl(0, 0%, 100%)",

      //Light Theme
      "bg-white:": "hsl(0, 0%, 100%)",
      "very pale blue": "hsl(225, 100%, 98%)",
      "light grayish blue": "hsl(227, 47%, 96%)",
      "dark grayish blue": "hsl(228, 12%, 44%)",
      "very dark blue": "hsl(230, 17%, 14%)",
      "toggle-light": "hsl(230, 22%, 74%)",
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
