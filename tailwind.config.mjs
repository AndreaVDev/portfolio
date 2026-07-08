import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        portfolio: {
          background: '#000000',
          surface: '#111111',
          border: '#333333',
          accent: '#22d3ee',
          text: {
            main: '#ffffff',
            muted: '#888888',
          },
        },
      },
    },
  },
  plugins: [typography],
};
