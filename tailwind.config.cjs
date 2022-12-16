module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xl: { "max": "1280px" },
      lg: { "max": "1024px" },
      md: { "max": "768px" },
      sm: { "max": "640px" },
      xs: { "max": "428px" }
    },
  },
  plugins: [],
}