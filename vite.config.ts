import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ivan-krupik-portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    port: 3000,
    host: true,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
