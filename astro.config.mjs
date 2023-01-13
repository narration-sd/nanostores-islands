import { defineConfig } from 'astro/config';
// import { defineConfig } from 'astro';

// https://astro.build/config
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte"
import solid from "@astrojs/solid-js"

// https://astro.build/config
// https://docs.astro.build/en/guides/content-collections/

export default defineConfig({
  experimental: {
    contentCollections: true,
  },
  integrations: [vue(), solid(), svelte()]
});