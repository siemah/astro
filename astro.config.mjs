import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: `https://${process.env.DOMAIN}`,
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    /**
     * please add this at the end 
     * @see https://github.com/codiume/orbit/tree/main/packages/astro-purgecss#-configuration
     */
    purgecss()
  ]
});