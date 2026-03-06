/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e6734c",
        "background-light": "#f8f6f6",
        "background-dark": "#211511",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        softFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.2, 0.65, 0.2, 1) both",
        "fade-down": "fadeDown 500ms cubic-bezier(0.2, 0.65, 0.2, 1) both",
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate",
        "soft-float": "softFloat 5s ease-in-out infinite",
      },
      boxShadow: {
        "hero-glow": "0 20px 50px rgba(230, 115, 76, 0.18)",
      },
    },
  },
  plugins: [],
};
