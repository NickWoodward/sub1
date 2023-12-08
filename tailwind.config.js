
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js, jsx, ts, tsx}"],
  mode:'jit',
  
  // content: ['./*.html'],
  theme: {
    screens: {
      xxs: '400px',
      xs: '480px',
      sm: '768px',
      md: '950px',
      lg: '1150px',
      xl: '1440px',
      "xxs-v": {raw: '(max-height: 580px)'},    
      "xs-v": {raw: '(max-height: 660px)'},    

    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xs: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        alata: ['Alata'],
      },
      colors: {
        primary: 'hsl(178, 61%, 49%)',
        primaryDark: 'hsl(178, 61%, 28%)',
        primaryLight: 'hsl(178, 61%, 60%)',
        primaryVLight: 'hsla(178, 61%, 72%, 1)',
        // secondary: 'hsl(212, 76%, 18%)',
        secondary: 'hsl(250, 96%, 13%)',
        // secondary: 'hsl(195, 100%, 31%)',
        tertiary: 'hsl(193, 26% 93%)',

        // tertiary: 'hsl(197, 20%, 86%)',
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',

        error:'firebrick',
        shark: {
          50: "#EEEFF2",
          100: "#DCDFE4",
          200: "#BDC2CC",
          300: "#9AA2B1",
          400: "#788297",
          500: "#5B6476",
          600: "#434956",
          700: "#282C34",
          800: "#1F2228",
          900: "#181B20",
          950: "#14161A",
        },
      },
      height: {
        header: 'var(--header-height)',
        section: 'var(--hero-height)'
      },
      minHeight: {
        section: 'var(--hero-height)'
      },
      width: {
        login: '28rem'
      },
      maxWidth: {
        largest: '1700px'
      },
      inset: {
        header: 'var(--header-height)'
      },
      scale: {
        '-100': '-1',
      },
      scrollPadding: {
        'header': 'var(--header-height)',
      },
      scrollMargin: {
        header: 'var(--header-height)',
        small: 'calc(var(--header-height)*.75)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')

  ],
}


