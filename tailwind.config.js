module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        canvas: "hsl(216deg 28% 7%)",
        header: "hsl(215deg 21% 11%)",
        search: {
          border: "hsl(212deg 12% 21%)",
          accent: "hsl(216deg 84% 52%)",
        },
        border: {
          muted: "hsl(215deg 15% 15%)",
        },
        text: {
          primary: "hsl(210deg 17% 82%)",
        },
        nav: {
          selected: "hsl(11deg 90% 68%)",
          unselected: "hsl(215deg 8% 47% / 40%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
