/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
         'Red': "hsl(var(--clr-red) / <alpha-value>)",
         'Green': "hsl(var(--clr-green) / <alpha-value>)",
         'Rose50': "hsl(var(--clr-rose-50) / <alpha-value>)",
         'Rose100': "hsl(var(--clr-rose-100) / <alpha-value>)",
         'Rose300': "hsl(var(--clr-rose-300) / <alpha-value>)",
         'Rose400': "hsl(var(--clr-rose-400) / <alpha-value>)",
         'Rose500': "hsl(var(--clr-rose-500) / <alpha-value>)",
         'Rose900': "hsl(var(--clr-rose-900) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

