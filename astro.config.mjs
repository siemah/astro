import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import purgecss from "astro-purgecss";
// import fonts from "astro-fonts-next";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: `https://${process.env.DOMAIN}`,
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
    // fonts({
    //   url: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
    // }),
    /**
     * please add this at the end 
     * @see https://github.com/codiume/orbit/tree/main/packages/astro-purgecss#-configuration
     */
    purgecss()
  ]
});