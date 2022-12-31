
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx}"],
  mode:'jit',
  
  // content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        alata: ['Alata'],
      },
      colors: {
        primary: 'hsl(178, 61%, 49%)',
        primaryDark: 'hsl(178, 61%, 45%)',
        primaryLight: 'hsl(178, 61%, 90%)',
        // secondary: 'hsl(212, 76%, 18%)',
        secondary: 'hsl(250, 96%, 13%)',
        // secondary: 'hsl(195, 100%, 31%)',
        tertiary: 'hsl(193, 26% 93%)',
        menuSelected: 'hsl(178, 61%, 49%)',

        // tertiary: 'hsl(197, 20%, 86%)',
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      height: {
        header: 'var(--header-height)',
        section: 'var(--hero-height)'
      },
      inset: {
        header: 'var(--header-height)'
      },
      scale: {
        '-100': '-1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}
