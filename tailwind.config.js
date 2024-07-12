/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      flexBasis:{
        md: 'calc((100% - 2 * 16px) / 2)',
        lg: 'calc((100% - 2 * 16px) / 3)',
      },
      colors: {
        rose : {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
        fmred : 'hsl(14, 86%, 42%)',
        fmreddark : 'hsl(14, 86%, 30%)',
        fmgreen : 'hsl(159, 69%, 38%)',
        fmbg : '#FCF8F5',
      }
    }
  },
  plugins: [],
};
