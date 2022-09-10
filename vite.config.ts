import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// https://zenn.dev/sprout2000/articles/98145cf2a807b1
export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [react()],
});
