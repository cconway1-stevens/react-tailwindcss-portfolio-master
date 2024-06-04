module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 0, 1)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out",
        fadeOut: "fadeOut 3s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
