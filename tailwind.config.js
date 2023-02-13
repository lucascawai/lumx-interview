/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#ffffff",
          200: "#fcfcfc",
          300: "#eff0f6",
          400: "#d9dbe9",
          500: "#6e7191",
          600: "#4e4b66",
          700: "#262338",
          800: "#14142b",
        },
        brand: {
          gradientBegin: "#a71a6b",
          gradientEnd: "#7b209b",
          primary: "#8775d0",
          secondary: "#98bbaf",
          tertiary: "#80ccf4",
        },
        support: {
          red: "#d03025",
          green: "#4dbc19"
        }
      }
    },
  },
  plugins: [],
}
