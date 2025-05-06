/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3bf',
          300: '#8ecf97',
          400: '#5eb46a',
          500: '#3a9748',
          600: '#2a7b37',
          700: '#23622e',
          800: '#1e4f27',
          900: '#1a4122',
          950: '#0c2412',
        },
        earth: {
          50: '#f9f7f1',
          100: '#f1ece0',
          200: '#e3d9c1',
          300: '#d1bf9a',
          400: '#bda476',
          500: '#b09160',
          600: '#94764a',
          700: '#795e3d',
          800: '#654e35',
          900: '#544231',
          950: '#2d211a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}