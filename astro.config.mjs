import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: process.env.DOMAIN,
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
  ]
});