import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: [resolve(__dirname, 'tsconfig.json')] }) 
  ],
  build: {
    outDir: resolve(__dirname, '../24Days.ReactIslands.Web/wwwroot/demo-assets'),
    rollupOptions: {
      input: resolve(__dirname, 'src/scripts/main.tsx'),
      output: {
        entryFileNames: 'main.min.js'
      },
    },
  },
});
