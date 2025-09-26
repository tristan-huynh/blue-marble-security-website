// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with actual site URL
  site: 'https://example.com', 
  integrations: [sitemap()]
});