/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['active'],
      backgroundImage: {
        'hero-pattern': "url('./src/components/Home/banner.jpg')",
      }
    },
  },
  plugins: [],
}

