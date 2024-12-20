import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: "./public/manifest.json",
      registerType: "autoUpdate",
    }),
  ],
  server: {
    port: 3001,
  },
});
