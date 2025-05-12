/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D9488', // Example Teal
        'brand-light': '#99F6E4',  // Lighter Teal
        'brand-accent': '#DB71AC', // Pink Accent
        'brand-magenta': '#D54D99', // Updated Magenta
      },
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        'varela-round': ['"Varela Round"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
