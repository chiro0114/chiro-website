import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(0deg, #FF6383 0%, #4C9FC4 100%)',
      },
      colors: {
        mainRed: '#FF2F2F',
        mainBlack: '#0F0F0F',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
