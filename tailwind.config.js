/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        galgo: ["Galgo", "sans-serif"],
      },
    },
  },
};
