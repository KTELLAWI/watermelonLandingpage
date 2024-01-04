import type { Config } from 'tailwindcss'
const {fontFamily} = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        ttu: "url('/public/bannerbackground.png')",
      },
      colors: {
        primary: "#00040f",
        primaryOne:"#0F9887",
        primarTwo:"#D31152",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        tajawal: ["var(--font-tajwal)", ...fontFamily.sans],
         mono: ['var(--font-tajwal)'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      'text':'text 5s ease infinite',
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
  },
  keyframes: {
      'text': {
          '0%, 100%': {
             'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
             'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
  

  },
  plugins: [require("tailwindcss-animate")],
}
export default config
