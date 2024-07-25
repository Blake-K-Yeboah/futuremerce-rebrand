import { defineConfig } from "astro/config";

// Plugins
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import min from "astro-min";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://www.futuremerce.com",
    integrations: [sitemap(), icon(), robotsTxt(), min()],
});
