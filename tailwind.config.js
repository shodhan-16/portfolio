/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#04060d',
          900: '#070b16',
          850: '#0a0f1f',
          800: '#0d1426',
          700: '#141d36',
          600: '#1c2745',
          500: '#283356',
        },
        electric: {
          50: '#eaf6ff',
          100: '#d0ebff',
          200: '#a3d6ff',
          300: '#6bbaff',
          400: '#389dff',
          500: '#0b82ff',
          600: '#0066e0',
          700: '#0050b3',
        },
        aurora: {
          300: '#7df0ff',
          400: '#34d6e6',
          500: '#0bb8d4',
        },
      },
      animation: {
        'grid-pan': 'gridPan 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'scan': 'scan 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'blink': 'blink 1s steps(1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'flicker': 'flicker 4s linear infinite',
        'glitch-shift': 'glitchShift 3s infinite linear alternate',
        'scanline-sweep': 'scanlineSweep 8s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        gridPan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        scan: {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(100vh)', opacity: '0.6' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        blink: {
          '0%,49%': { opacity: '1' },
          '50%,100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%,18%,22%,25%,53%,57%,100%': { opacity: '1' },
          '20%,24%,55%': { opacity: '0.4' },
        },
        glitchShift: {
          '0%,100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(2px, -1px)' },
        },
        scanlineSweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(56,157,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,157,255,0.06) 1px, transparent 1px)',
        'hex-grid':
          'linear-gradient(60deg, rgba(56,157,255,0.04) 25%, transparent 25.5%, transparent 75%, rgba(56,157,255,0.04) 75%), linear-gradient(-60deg, rgba(56,157,255,0.04) 25%, transparent 25.5%, transparent 75%, rgba(56,157,255,0.04) 75%)',
      },
    },
  },
  plugins: [],
};
