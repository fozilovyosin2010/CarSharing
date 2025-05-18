/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1040px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
