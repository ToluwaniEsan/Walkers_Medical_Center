// @ts-check
import { defineConfig } from 'astro/config';

// Static output. SITE_URL and BASE_PATH are set by the hosting build
// (GitHub Pages serves the site from /<repo>/); both default to the root.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
});
