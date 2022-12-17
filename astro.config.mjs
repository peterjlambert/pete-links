import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
          repo: "peterjlambert/pete-links",
        },
        display_url: "https://links.petelambertmusic.com",
        media_folder: "public/assets",
        public_folder: "/assets",
        collections: [
          {
            name: "links",
            label: "Links",
            folder: "src/pages/links",
            create: true,
            delete: true,
            preview_path: "{{ slug }}",
            layout: "../../layouts/Link.astro",
            sortable_fields: ["order", "title"],
            fields: [
              { name: "title", widget: "string", label: "Title" },
              { name: "url", widget: "string", label: "URL" },
              { name: "description", widget: "string", label: "Description" },
              {
                name: "type",
                widget: "select",
                label: "Link Type",
                options: [
                  { label: "Link", value: "link" },
                  { label: "Player", value: "player" },
                ],
              },
              {
                name: "sortOrder",
                widget: "number",
                label: "Sort Order",
                default: "1",
                options: [
                  { label: "1", value: "1" },
                  { label: "2", value: "2" },
                  { label: "3", value: "3" },
                  { label: "4", value: "4" },
                  { label: "5", value: "5" },
                  { label: "6", value: "6" },
                  { label: "7", value: "7" },
                  { label: "8", value: "8" },
                  { label: "9", value: "9" },
                  { label: "10", value: "10" },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
