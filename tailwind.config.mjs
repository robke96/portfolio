import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'white': "#fff",
			'red': "#CF3F3F",
			'yellow': "#E3D74F",
			'blue': "#4396DB",
			'purple': "#9248CA",
			'green': "#4AB64A",
			'gray-light': "#898989",
			'gray-dark': "#1E1E1F",
			'card-bg': "#0F0F10",
			'card-outline': "#1C1C1D",
			'bg-dark': "#0D0C0D",
		},
		extend: {
			fontFamily: {
				"geist": ['Geist', ...defaultTheme.fontFamily.sans],
				"zodiak": ["Zodiak", ...defaultTheme.fontFamily.serif],
			}
		},
	},
	
	plugins: [],
}
