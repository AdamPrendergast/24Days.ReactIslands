/** @type {import('tailwindcss').Config} */

export default {
	prefix: 'tw-', // To avoid clash with Clean Starter Kit styles for demo purposes. See: https://tailwindcss.com/docs/configuration#prefix
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'../24Days.ReactIslands.Web/**/*.cshtml'
	],
	theme: {
		// your existing config
		extend: {
		  animation: {
			"meteor-effect": "meteor 5s linear infinite",
		  },
		  keyframes: {
			meteor: {
			  "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
			  "70%": { opacity: "1" },
			  "100%": {
				transform: "rotate(215deg) translateX(-500px)",
				opacity: "0",
			  },
			},
		  },
		},
	  },
	plugins: [],
}
