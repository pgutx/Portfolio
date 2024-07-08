/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Titillium Web", ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--background-foreground) / <alpha-value>)',
				muted: 'hsl(var(--muted) / <alpha-value>)',
				mutedforeground: 'hsl(var(--muted-foreground) / <alpha-value>)',
				popover: 'hsl(var(--popover) / <alpha-value>)',
				popoverforeground: 'hsl(var(--popover-foreground) / <alpha-value>)',
				card: 'hsl(var(--card) / <alpha-value>)',
				cardforeground: 'hsl(var(--card-foreground) / <alpha-value>)',
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				primary: 'hsl(var(--primary) / <alpha-value>)',
				primaryforeground: 'hsl(var(--primary-foreground) / <alpha-value>)',
				secondary: 'hsl(var(--secondary) / <alpha-value>)',
				secondaryforeground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
				accent: 'hsl(var(--accent) / <alpha-value>)',
				accentforeground: 'hsl(var(--accent-foreground) / <alpha-value>)',
				destructive: 'hsl(var(--destructive) / <alpha-value>)',
				destructiveforeground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				radius: 'hsl(var(--radius) / <alpha-value>)',
			},
		},
		variants: {
			fill: ['hover', 'focus'],
		  },
	},
	plugins: [],
}
