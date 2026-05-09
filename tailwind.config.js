/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1120",
          surface: "rgba(15, 23, 42, 0.7)",
          line: "rgba(148, 163, 184, 0.18)",
          text: "#E2E8F0",
          muted: "#94A3B8",
          primary: "#60A5FA",
          secondary: "#8B5CF6",
          glow: "#38BDF8",
        },
      },
      boxShadow: {
        glass: "0 20px 50px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(circle at top, rgba(96, 165, 250, 0.16), transparent 35%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.14), transparent 28%)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
