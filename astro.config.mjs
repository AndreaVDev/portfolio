import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://chuskito.com',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We manage Tailwind directives in global.css
    }),
  ],
});
