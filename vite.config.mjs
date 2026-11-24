import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        about: './about.html',
        catalog: './catalog.html',
        card: './card.html'
      },
    },
  },
});

