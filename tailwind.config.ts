import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4m": "425px",
        "3m": "375px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        ultimateCourseCover: "url('/assets/images/ultimate.jpg')",
        advnacedCourseCover: "url('/assets/images/advanced.jpg')",
        tintCourseCover: "url('/assets/images/tint.jpg')",
        ultimateCourseCover1: "url('/assets/images/ultimate1.jpg')",
        "blog-page-bg": "url('/assets/images/blog-bg.png')",
        contactusCover: "url('/assets/images/contactus/cover.png')",
      },
      boxShadow: {
        "navbar-dropdown": "0px 0px 16px #929292",
        "search-ipt-box": "0px 0px 4px rgba(58, 58, 58, 0.25)",
      },
      colors: {
        "main-dark": "#111116",
        "main-light": "#FFFDFE",
        "btn-primary": "#F9DFDF",
        "btn-hover": "#E4C5C5",
        "main-text": "#262623",
        "blog-bg": "#FEF6FA",
        "blog-border": "#FCE0EF",
        "blog-poster-bg": "#FFFAFC",
        "review-bg": "#212124",
        "review-border": "#4B4B4E",
        link: "#46B1FF",
        "course-square-board": "#202020",
        "story-title-border": "#FF92E7",
        "story-bg": "#FF92E7",
        "ipt-bg": "#FEF4FA",
        "ipt-border": "#FCE0EF",
        "navbar-dark": {
          100: "#191919",
          200: "#222222",
        },
        "ctrl-btn": {
          DEFAULT: "#212124",
          hover: "#494955",
        },
      },
      maxWidth: {
        1440: "1440px",
        "terms-conditions": "730px",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        newyork: ["var(--font-newyork)"],
        "abhaya-libre": ["var(--font-abhaya)"],
        "bebas-neue": ["var(--font-bebas)"],
      },
      fontSize: {
        primary: "16px",
        "mobile-primary": "14px",
      },
    },
  },
  plugins: [],
};
export default config;
