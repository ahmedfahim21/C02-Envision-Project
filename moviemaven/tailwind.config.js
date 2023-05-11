/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212426",
        gold: "#ffdd6e",
        dark: "#1f2123",
        dimBrown: "#672c1a",
        dimMaroon: "#89352a"
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
  },
    },
  },
  plugins: [],
}