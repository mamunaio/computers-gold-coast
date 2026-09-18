import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cctvgoldcoast.com.au',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
