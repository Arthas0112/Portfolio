module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        fadeInDelay200: "fadeIn 1s ease-out forwards 0.2s",
        fadeInDelay400: "fadeIn 1s ease-out forwards 0.4s",
        fadeInDelay600: "fadeIn 1s ease-out forwards 0.6s",
        bounceSlow: "bounceSlow 6s infinite",
      },
    },
  },
  plugins: [],
};
