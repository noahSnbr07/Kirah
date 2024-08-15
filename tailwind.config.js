/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#7FFFFFFF',
        'background': 'rgba(15, 15, 15, 1)',
        'stack-10': 'rgba(255, 255, 255, 10%)',
        'stack-25': 'rgba(255, 255, 255, 25%)',
        'stack-50': 'rgba(255, 255, 255, 50%)',
      },
      fontFamily: {
        'bold': ['Quicksand-Bold', 'sans-serif'],
        'regular': ['Quicksand-Regular', 'sans-serif'],
        'header-bold': ['Teko-Bold', 'sans-serif'],
        'header-regular': ['Teko-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}