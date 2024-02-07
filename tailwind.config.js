/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(255, 255, 255, 0.25) 0px 5px 20px;",
      },
    },
  },
};
