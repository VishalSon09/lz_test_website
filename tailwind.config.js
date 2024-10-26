/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        gray:{DEFAULT:'#86868b', 100: '#94928d', 200: '#D5DAE1', 300: '#42424570'},
        zinc: {DEFAULT:'#101010'},
        black:{DEFAULT: '#000', 200:'#0E0E10',  300: '#1C1C21', 500:'#1D2235', 600: '#1A1A1A'},
        blue:{DEFAULT: '#2997FF', 500: '#2b77e7'},
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },        
      },

      fontFamily:{
        worksans: ['Work Sand', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif'],
        generalsans: ['General Sans', 'sans-serif'],
      },

      boxShadow:{
        card: '0px 1px 2px 0px rgba(0,0,0,0.05)'
      }
    },
  },
  plugins: [],
}

