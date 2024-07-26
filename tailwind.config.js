/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#000000",
        darkSecondary: "#14213D",
        neutral: "#FFFFFF",
        lightPrimary: "#FCA311",
        lightSecondary: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
