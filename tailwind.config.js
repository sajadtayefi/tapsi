/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {


    extend: {
      backgroundImage: {
        'banner': "url('./Assetes/picture/banner.webp')",
        'parallax': "url('./Assetes/picture/parallax.jpg')",
        'iran': "url('./Assetes/picture/download.svg')",
      },
      colors: {
        primary: '#ff5722',
        secndry: '#0065dc',
        white: "#f8f8f8",
        blue: "rgb(0 101 220)",
        sliver: "#f8f8f9",
        backgroundcolor: "ffffff",
        liner1: "rgba(23,26,60,.7)",
        liner2: "rgba(23,26,60,.3)",
      },
      fontFamily: {
        'iranyekan': 'iranyekan'
      }

    },
  },
  plugins: [],
}
