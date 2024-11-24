import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

import adapter from "@sveltejs/adapter-static";

export default {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "404.html",
		}),
	},
	extensions: [".svelte", ".svx"],
};
