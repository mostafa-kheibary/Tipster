import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$utils: 'src/utils',
			$components: 'src/lib/components',
			$assets: 'src/assets'
		},
		adapter: adapter()
	}
};

export default config;
