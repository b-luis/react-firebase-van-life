/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#4D4D4D",
        active: "#161616",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
