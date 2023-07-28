import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: cloudflare(),
  integrations: [
    mdx(),
    NetlifyCMS({
      config: {
        backend: {
          name: "github",
          branch: "main",
        },
        collections: [
          {
            name: "hero",
            label: "hero section",
            folder: "src/content/home/hero",
            create: true,
            delete: false,
            extension: "mdx",
            format: "frontmatter",
            fields: [
              { name: "title", widget: "string", label: "File Title" },
              {
                widget: "string",
                name: "firstLine",
                label: "First Line",
                required: true,
              },
            ],
          },
        ],
      },
    }),
  ],
});
