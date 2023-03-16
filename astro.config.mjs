import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import partytown from "@astrojs/partytown";
const site = `https://${process.env.DOMAIN}`;
// https://astro.build/config
export default defineConfig({
  output: "static",
  site,
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
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
      lastmod: new Date()
    }),
    robotsTxt({
      host: site
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      },
    })
  ]
});