/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
	mode: "jit",
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		backgroundImage: {
			"pack-train": "url('../src/assets/img-artikel.svg')",
		},
		screens: {
			mobile: { min: "375px", max: "639px" },
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			// default ui colors
			colors: {
				textDefault: "#24324F",
				"btn-secondary-blue": "#1B3E66",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
