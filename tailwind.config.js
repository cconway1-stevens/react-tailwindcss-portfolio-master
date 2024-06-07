module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        waveAnimation: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(30deg)" },
          "20%": { transform: "rotate(-30deg)" },
          "30%": { transform: "rotate(35deg)" },
          "40%": { transform: "rotate(-35deg)" },
          "50%": { transform: "rotate(40deg)" },
          "60%": { transform: "rotate(-40deg)" },
          "70%": { transform: "rotate(20deg)" },
          "80%": { transform: "rotate(-20deg)" },
          "90%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(236, 173, 41, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(236, 173, 41, 1)" },
        },
      },
      animation: {
        waveAnimation: "waveAnimation 2s ease-in-out infinite", // Slower and more dramatic
        slideInLeft: "slideInLeft 1s ease",
        slideInRight: "slideInRight 1s ease",
        glow: "glow 1.5s infinite alternate",
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to right, #004d00, #00b300)',
        'blue-gradient': 'linear-gradient(to right, #003366, #0066cc)',
        'gray-gradient': 'linear-gradient(to right, #2d2d2d, #808080)',
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
