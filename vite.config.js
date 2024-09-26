import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: './index.html'
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    }
  },

  plugins: [
    handlebars({
      partialDirectory: './src/html/templates',
      helpers: {}
    })
  ],

  base: '/WalterHouse/'
});
