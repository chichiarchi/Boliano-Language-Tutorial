/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#005f73',
        'sea-blue-dark': '#001219',
        'sand-beige': '#e9d8a6',
        'coral': '#ee6c4d',
        'teal-muted': '#94d2bd',
        'ocean-teal': '#0a9396',
      },
      fontFamily: {
        'heritage': ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
