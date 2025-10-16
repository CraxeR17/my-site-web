 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // ensures PostCSS still works
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    // Improve reliability of file watching on Windows / network or synced folders (e.g., OneDrive)
    watch: {
      usePolling: true,
      interval: 300,
    },
    // Optional: HMR tweaks if behind proxies/odd networks
    hmr: {
      overlay: true,
    },
  },
});
