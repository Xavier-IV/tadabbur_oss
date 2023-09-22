
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-opacity': {
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-primary': {
          background: 'linear-gradient(to top, rgba(25, 22, 33, 1), rgba(0, 0, 0, 0))',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-primary-to-r': {
          background: 'linear-gradient(to right, rgba(25, 22, 33, 1), rgba(0, 0, 0, 0))',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
export default config
