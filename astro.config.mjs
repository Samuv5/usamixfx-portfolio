// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://samuv5.github.io",
  base: "/usamixfx-portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
