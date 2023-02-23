/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          50: "#FDE7D6",
          100: "#FCD7BB",
          200: "#FAC39A",
          300: "#F8AE78",
          400: "#F79A56",
          500: "#F58634",
          600: "#CC702B",
          700: "#A35923",
          800: "#7B431A",
          900: "#522D11",
          DEFAULT: "#F58634",
          dark: "#311B0A",
        },
        secondary: {
          dark: "#030F1B",
          DEFAULT: "#114986"
        },
      },
    },
  },
  plugins: [],
}
