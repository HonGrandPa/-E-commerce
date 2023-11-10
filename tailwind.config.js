/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        herobgA: "rgb(255, 251, 245)",
        herobgB: "rgb(255, 223, 223)"

      },
      height: {
        'screen/90': '90vh'
      }
    }
  },
  plugins: []
}