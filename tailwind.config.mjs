import defaultTheme from 'tailwindcss/defaultTheme'
import colors from "tailwindcss/colors"
import { createThemes } from 'tw-colors'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	screens: {
    		sm: '480px',
    		md: '768px',
    		lg: '976px',
    		xl: '1440px'
    	},
    	colors: {
			green: colors.green,
    		'gray-light': '#898989',
    		'gray-dark': '#1E1E1F',
    		'card-bg': '#0F0F10',
    		'card-outline': '#1C1C1D',
    		'bg-dark': '#0D0C0D',
    	},
    	extend: {
    		keyframes: {
    			marquee: {
    				'0%': {
    					transform: 'translateX(0%)'
    				},
    				'100%': {
    					transform: 'translateX(-100%)'
    				},
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		},
    		fontFamily: {
    			geist: ['Geist', ...defaultTheme.fontFamily.sans],
    			zodiak: ["Zodiak", ...defaultTheme.fontFamily.serif]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
				primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    		}
    	}
    },
	
	plugins: [require('tailwindcss-motion'), 
		createThemes({
			theme_red: {
				'primary-100': '#f9cdd3',
				'primary-200': '#f3a3aa',
				'primary-300': '#ec7981',
				'primary-400': '#e64f59',
				'primary-500': '#e63946',
				'primary-600': '#cf2f3d',
				'primary-700': '#b82534',
				'primary-800': '#a01b2b',
				'primary-900': '#891321',
			},
			theme_blue: {
				'primary-100': "#bbdefb",
				'primary-200': "#90caf9",
				'primary-300': "#64b5f6",
				'primary-400': "#42a5f5",
				'primary-500': "#2196f3",
				'primary-600': "#1e88e5",
				'primary-700': "#1976d2",
				'primary-800': "#1565c0",
				'primary-900': "#0d47a1",
			},
			theme_purple: {
				"primary-100": "#e1bee7",
				"primary-200": "#ce93d8",
				"primary-300": "#ba68c8",
				"primary-400": "#ab47bc",
				"primary-500": "#9c27b0",
				"primary-600": "#8e24aa",
				"primary-700": "#7b1fa2",
				"primary-800": "#6a1b9a",
				"primary-900": "#4a148c",
			},
			theme_green: {
				"primary-100": "#e8f5e9",
				"primary-200": "#c8e6c9",
				"primary-300": "#a5d6a7",
				"primary-400": "#81c784",
				"primary-500": "#66bb6a",
				"primary-600": "#4caf50",
				"primary-700": "#43a047",
				"primary-800": "#388e3c",
				"primary-900": "#2e7d32",
			},
			theme_yellow: {
				"primary-100": "#fff9c4",
				"primary-200": "#fff59d",
				"primary-300": "#fff176",
				"primary-400": "#ffee58",
				"primary-500": "#ffeb3b",
				"primary-600": "#fdd835",
				"primary-700": "#fbc02d",
				"primary-800": "#f9a825",
				"primary-900": "#f57f17",
			}
		})
	],
}
