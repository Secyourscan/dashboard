// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://secyourscan.github.io',
  base: 'dashboard',
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  }), partytown()]
});