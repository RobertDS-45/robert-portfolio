/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        brand: {
          primary: "#3B82F6",
          secondary: "#232347",
          bg: "#EEF3F8",
          surface: "#FFFFFF",
          text: "#1E293B",
          muted: "#64748B",
          border: "#DCE7F3",
          light: "#F5F7FA",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        hover: "0 20px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-soft":
          "linear-gradient(180deg, #F5F7FA 0%, #EAF1F8 100%)",
        "blob-primary":
          "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.12), transparent 50%)",
        "blob-secondary":
          "radial-gradient(circle at 80% 20%, rgba(35, 35, 71, 0.08), transparent 50%)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
