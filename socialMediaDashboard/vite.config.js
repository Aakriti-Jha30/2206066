import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://20.244.56.144/evaluation-service",
        changeOrigin: true,
        secure: false,  // 🔹 Disable SSL verification (sometimes needed)
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
