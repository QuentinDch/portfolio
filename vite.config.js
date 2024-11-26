import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@variables": path.resolve(__dirname, "src/sass/utils/variables.scss"),
      "@mixins": path.resolve(__dirname, "src/sass/utils/mixins.scss"),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @use "@variables" as *;
          @use "@mixins" as *;
        `,
      },
    },
  },
});
