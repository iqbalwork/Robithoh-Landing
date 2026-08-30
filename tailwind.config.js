/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        merah: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#CE1126', // Merah Merdeka Indonesia
          600: '#b10e1f',
          700: '#7A0914', // Deep Crimson Marun
          800: '#5c050d',
          900: '#410002',
        },
        emas: {
          50: '#fdfbf2',
          100: '#faecc1',
          200: '#f6dc8c',
          300: '#f0c74f',
          400: '#e5bc35',
          DEFAULT: '#D4AF37', // Emas Khidmat
          500: '#D4AF37',
          600: '#b39023',
          700: '#8c6d14',
          800: '#694f10',
          900: '#443208',
        },
        canvas: {
          dark: '#111113',
          surface: '#1A1D20',
          card: '#16181B',
          'card-border': '#2A2E33',
          elevated: '#22262B',
        },
        putih: {
          bersih: '#FFFFFF',
          abu: '#F8F9FA',
          muted: '#E4E4E7',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Amiri', '"Amiri Quran"', '"Scheherazade New"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #CE1126 0%, #7A0914 100%)',
        'dark-glass': 'linear-gradient(145deg, rgba(26, 29, 32, 0.85) 0%, rgba(17, 17, 19, 0.95) 100%)',
        'gold-glass': 'linear-gradient(145deg, rgba(212, 175, 55, 0.08) 0%, rgba(206, 17, 38, 0.04) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'crimson-glow': '0 0 25px -5px rgba(206, 17, 38, 0.4)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
