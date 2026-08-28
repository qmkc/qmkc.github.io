import adapter from '@sveltejs/adapter-static';

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: '404.html',
    }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
};
