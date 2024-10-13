/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors:{
        primary: '#05d3f8',
        secondary: '#009ddd',
        tertiary: '#386dbd',
        quaternary: '#0f4571',
        quinary: '#232323',
      },
      fontFamily: {
        outfit: ["Outfit", 'sans-serif'],
      },
    },
  },
  plugins: [],
}