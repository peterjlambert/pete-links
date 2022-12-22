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
            name: "Sections",
            label: "Sections",
            folder: "src/pages/sections",
            create: true,
            delete: true,
            preview_path: "{{ slug }}",
            layout: "../../layouts/Section.astro",
            fields: [
              { name: "Section Title", widget: "string", label: "Title" },
              {
                label: "Color",
                name: "color",
                widget: "color",
                allowInput: true,
                default: "#00DD00",
              },
              { name: "description", widget: "string", label: "Description" },
              {
                label: "Links",
                name: "Links",
                widget: "list",
                summary: "Links in this seciton",
                fields: [
                  {
                    label: "Label",
                    name: "label",
                    widget: "string",
                    default: "Check out my new album",
                  },
                  {
                    label: "URL",
                    name: "url",
                    widget: "string",
                    default: "https://petelambertmusic.com",
                  },
                ],
              },
              {
                name: "sortOrder",
                widget: "number",
                label: "Sort Order",
                default: "1",
              },
            ],
          },
        ],
      },
    }),
  ],
});
