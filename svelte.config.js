import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import postcss from 'postcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({postcss: true,}),
	css: css => {
        css.write('public/bundle.css')
      },
	kit: {
		adapter: adapter()
	}
};

export default config;
