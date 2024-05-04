import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

function handleAboutRoute() {
  console.log('Estás en la página de "Acerca de"');
  // Código para la página de "Acerca de"
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: vercel()
});

