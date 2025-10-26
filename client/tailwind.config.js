/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "Inter", "system-ui", "sans-serif"],
        primary: ["Gilroy", "Inter", "system-ui", "sans-serif"],
        secondary: ["Gilroy", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
