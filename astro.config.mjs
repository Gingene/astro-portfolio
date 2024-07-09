import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { remarkModifiedTime } from './src/utils/remark-modified-time';
import { siteConfig } from './src/config';
import { fileURLToPath, URL } from 'node:url';

import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  base: process.env.NODE_ENV === 'production' ? '/astro-portfolio' : '/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro',
      },
    },
    remarkPlugins: [remarkModifiedTime],
  },
  devToolbar: {
    enabled: false,
  },
});
