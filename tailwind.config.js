const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      ...colors,
      darkGray: "#111111"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
