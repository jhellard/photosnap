/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pureBlack: "#000000",
        lightGrey: "#DFDFDF",
        pureWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
