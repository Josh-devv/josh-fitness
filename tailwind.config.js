/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa1e0",
        "primary-500": "#ffe1e0",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["Outfit", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        evolvetext: "url('./assets/Evo.png')",
        abstractwaves: "url('./assets/Evo.png')",
        sparkles: "url('./assets/Evo.png')",
        circles: "url('./assets/Evo.png')",
        
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "900px",
      lg: "1060px",
      xsm: "380px"
    }
  },
  plugins: [

  ],
}

