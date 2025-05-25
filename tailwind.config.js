/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'gray': '#1C1D1F',
      'white': '#fff',
      'green': '#127E00',
      'blue': '#003F79',
      'offwhite': '#E6E1D3',
      'textg': '#A9A9A9',
      'lblu': '#00A8FF'
    },
    fontFamily: {
      'porter': 'Porter Sans Block',
      'sans': 'Open Sans',
      'osw': 'Oswald',
      'stok': 'Istok Web'
    }
  },
  plugins: [],
}

