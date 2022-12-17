import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({postcss: true,}),
	css: css => {
        css.write('public/bundle.css')
      },
	kit: {
		adapter: adapter({
			pages: 'dist', 
			assets: 'dist',
			fallback: 'index.html',
		}),
		paths: {
            // change below to your repo name
            base: "/christmas-screen",
        },
		appDir: 'internal',
	}
};

export default config;
