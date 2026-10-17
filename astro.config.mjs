// @ts-check
import { defineConfig } from 'astro/config';

// Static output, deployed on Vercel. Set `site` once the new domain is confirmed.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
});
