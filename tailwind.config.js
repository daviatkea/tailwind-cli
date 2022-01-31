module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5000ca",
        secondary: "#72f1b8",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
