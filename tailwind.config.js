/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: { 
        primary: {
          DEFAULT: "#152C5B",
           100: "#3252DF",
          200:"#183369",
        },
        secondary: {
          DEFAULT: "#B0B0B0",
          100: "#E5E5E5",
          200: "#FF498B",
          300: "#F5F6F8",
          400: "#B2B2B2",
        },
      green: {
           DEFAULT: "#1ABC9C"
      }
     
       
      },
    },
  },
  plugins: [],
}