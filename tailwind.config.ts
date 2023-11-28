import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        homeBg1: "url('/images/HomeBG1.png')",
        homeBg2: "url('/images/FONDO_1.jpg')",
        business: "url('/images/business_bg.png')",
        mision:"linear-gradient(0deg, rgba(3,5,17,0.6), rgba(3,5,17,0.6)), url('/images/cityu_foto.png')",
        vision:"linear-gradient(0deg, rgba(3,5,17,0.6), rgba(3,5,17,0.6)), url('/images/inside_foto.png')",
        contact: "url('/images/CONTACTO_05.png')",
        fachadaCity:"url('/images/cityu_foto.png')",
        fachadaInside:"url('/images/inside_foto.png')",
        BgCity:"url('/images/cityu-bg.png')",
        BgInside:"url('/images/inside-bg.png')",
        studentHousing: "url('/images/STUDENT_HOUSING.jpg')",
        hospitality:"url('/images/HOSPITALITY.jpg')",
        coworking:"url('/images/COWORKING.jpg')",
        seniorHousing:"url('/images/SENIOR_HOUSING.jpg')",
        coliving:"url('/images/COLIVING.jpg')",
      },
      colors: {
        current: 'currentColor',
        lightblue: '#3AACFF',
        darkblue: '#283470',
        plainblue: '#374D8C',
        purple: '#6F2576',
        subtle: '#BFBFBD',
        lightGray: '#EFEFEF',
        red: '#C91E21',
        modal: 'rgba(31, 31, 31, 0.9)',
        green: {
          DEFAULT: '#0FBB59',
          100: '#2DCE8919',
        },
        black: {
          default: '#000000',
          100: '#09090A',
          200: '#1D1D1D',
          300: '#282828',
        },
        grey: {
          100: '#333333',
          200: '#4F4F4F',
          300: '#828282',
          400: '#BDBDBD',
          500: '#E0E0E0',
        },
      },
      boxShadow: {
        sm: '10px 20px 60px rgba(0, 0, 0, 0.04);',
        md: '10px 20px 50px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
export default config
