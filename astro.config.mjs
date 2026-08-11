import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(content-stage): replace with the real domain before deploy
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru' },
      },
    }),
  ],
});
