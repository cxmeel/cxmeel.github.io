import type { Config } from "tailwindcss";

import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import animated from "tailwindcss-animated";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontFamily: {
			sans: ["Outfit Variable", "Inter", "sans-serif"],
		},
		extend: {
			colors: {
				accent: {
					"50": "#fcf5f4",
					"100": "#fae9e9",
					"200": "#f5d6d7",
					"300": "#ecb5b7",
					"400": "#e18b90",
					"500": "#d56c75",
					"600": "#bc4253",
					"700": "#9e3244",
					"800": "#842d3e",
					"900": "#722939",
					"950": "#3f121b",
				},
				onAccent: {
					"50": "#000000",
					"100": "#000000",
					"200": "#000000",
					"300": "#000000",
					"400": "#000000",
					"500": "#ffffff",
					"600": "#ffffff",
					"700": "#ffffff",
					"800": "#ffffff",
					"900": "#ffffff",
					"950": "#ffffff",
				},
			},
		},
	},
	plugins: [typography, containerQueries, aspectRatio, animated],
} satisfies Config;
