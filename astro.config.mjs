import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import purgecss from "astro-purgecss";
import fonts from "astro-fonts-next";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
const site = `https://${process.env.DOMAIN}`;
export default defineConfig({
  output: "static",
  site,
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    fonts({
      url: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
    }),
    /**
     * please add this at the end 
     * @see https://github.com/codiume/orbit/tree/main/packages/astro-purgecss#-configuration
     */
    purgecss(),
    sitemap({
      entryLimit: 450000,
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date(),
    }),
    robotsTxt({
      host: site
    }),
  ]
});