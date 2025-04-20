/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // You can customize your color palette here
      },
      fontFamily: {
        // Font configurations will use variables from layout.js
      },
    },
  },
  plugins: [],
  darkMode: 'media', // or 'class' for manual dark mode toggle
} 