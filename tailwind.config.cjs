/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pureBlack: "#000000",
        lightGrey: "#DFDFDF",
        pureWhite: "#FFFFFF",
        bgGradiant1: "#FFC593",
        bgGradiant2: "#BC7198",
        bgGradiant3: "#5A77FF",
      },
    },
  },
  plugins: [],
};
