import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B1538', // Deep maroon from banner
          dark: '#6B0F2A',
          light: '#A91D47',
        },
        'primary-blue': '#003366',
        'primary-maroon': '#800000',
        secondary: {
          DEFAULT: '#00A9CE', // Cyan blue from logo
          dark: '#008CAD',
          light: '#00C4E8',
        },
        silver: {
          DEFAULT: '#c0c0c0',
          light: '#e0e0e0',
          dark: '#a0a0a0',
          metallic: '#b8b8b8',
        },
        accent: {
          gold: '#d4af37',
          blue: '#00A9CE',
          maroon: '#8B1538',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(192, 192, 192, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(192, 192, 192, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-metal': 'linear-gradient(135deg, #c0c0c0 0%, #e0e0e0 50%, #a0a0a0 100%)',
        'gradient-primary': 'linear-gradient(135deg, #8B1538 0%, #A91D47 100%)',
        'gradient-maroon': 'linear-gradient(135deg, #8B1538 0%, #6B0F2A 50%, #A91D47 100%)',
        'gradient-accent': 'linear-gradient(135deg, #8B1538 0%, #00A9CE 100%)',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'inner-premium': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(192, 192, 192, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
