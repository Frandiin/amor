import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Bea&Well",
        short_name: "Bea&Well",
        start_url: "/",

        icons: [
          {
            src: "/coracao.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/coracao.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/coracao.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
      },
    }),
  ],
});