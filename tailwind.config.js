module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/img/images/bg.png')",
        'appointment-bg': "url('/src/img/images/appointment.png')",
        'footer-bg': "url('/src/img/images/footer.png')"
      }
    },
  },
  daisyui: {
    themes: [
      {
        doctheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
