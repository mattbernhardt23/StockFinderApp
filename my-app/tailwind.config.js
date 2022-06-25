

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './pages/**/*.{html,js, jsx}',
    './components/**/*.{html,js, jsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["aqua"]
  }
}