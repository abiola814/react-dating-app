/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#730075",
				"primary-dark": "#4B164C",
			},
			textColor: {
				primary: "#3B3237",
				"primary-light": "#29252E",
			},
			borderColor: {
				primary: "#9B139D",
			},
		},
	},
	plugins: [],
};
