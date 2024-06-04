module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(236, 173, 41, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(236, 173, 41, 1)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        glow: "glow 1.5s infinite alternate",
        fadeOut: "fadeOut 3s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
