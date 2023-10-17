/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#1ed7eb',
      },
      backgroundImage: {
        siteup: "url('./assets/bgup.png')",
        site: "url('./assets/blur.jpg')",
        about: "url('./assets/rem.png')",
        services: "url('./assets/red.jpg')",
      },
      // backdropBlur: {
      //   xs: '32px',
      // }
    },
    
  },
  plugins: [],
}

