/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rgb: "rgbFlow 3s linear infinite", // Add RGB animation
      },
      keyframes: {
        rgbFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'), // Keep daisyUI for your other components
  ],
};

