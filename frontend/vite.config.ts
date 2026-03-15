import { defineConfig } from "https://esm.sh/v135/vite@8.0.0/dist/node/index.js";
import vue from "https://esm.sh/v135/@vitejs/plugin-vue@5.0.4/dist/node/index.js";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist"
  },
  server: {
    port: 5173
  }
});
