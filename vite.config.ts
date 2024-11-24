import { defineConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";
import yaml from "unplugin-yaml/vite";

export default defineConfig({
	plugins: [sveltekit(), yaml()],
});
