/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // Keep Tailwind's base reset OFF so it never clashes with the
  // Bootstrap / on3step framework theme used across the site.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      // Match the original module breakpoints so the UI/UX is identical.
      screens: { sm: "576px", md: "768px", lg: "992px" },
      colors: {
        ctblue: "var(--primary-color)",
        ctamber: "var(--secondary-color)",
        ctink: "#0a1730",
        ctline: "#e7ecf5",
        ctmuted: "#5b6b85",
        ctsoft: "#f4f7fc",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulsering: {
          "0%": { boxShadow: "0 0 0 0 rgba(74,210,120,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(74,210,120,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74,210,120,0)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        pulsering: "pulsering 1.8s infinite",
        floatY: "floatY 4.5s ease-in-out infinite",
        floatYdelayed: "floatY 4.5s ease-in-out 0.8s infinite",
        rise: "rise 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
