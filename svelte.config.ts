import type { Config } from "@sveltejs/kit";

import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import adapter from "@sveltejs/adapter-static";

export default {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			fallback: "404.html",
		}),
	},
	extensions: [".svelte", ".svx"],
} satisfies Config;
