/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D9488', // Example Teal
        'brand-light': '#99F6E4',  // Lighter Teal
        'brand-accent': '#F97316', // Example Orange
        'brand-magenta': '#D54D99', // Updated Magenta
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
