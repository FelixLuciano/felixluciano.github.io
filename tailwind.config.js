const colors = require("tailwindcss/colors")
const config = require("tailwindcss/defaultConfig")


module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  separator: "_",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: "#111",
        gray: colors.trueGray,
        light: "#EEE"
      },
      minHeight: {
        "32": config.theme.spacing["32"]
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    }
  }
}