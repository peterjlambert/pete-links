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
            label: "sections",
            folder: "src/pages/sections",
            create: true,
            delete: true,
            preview_path: "{{ slug }}",
            layout: "../../layouts/Section.astro",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Color",
                name: "color",
                widget: "color",
                allowInput: true,
                default: "#00DD00",
              },
              {
                label: "Description",
                name: "description",
                widget: "string",
              },
              {
                label: "Links",
                name: "links",
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
                    label: "Description",
                    name: "description",
                    widget: "string",
                  },
                  {
                    label: "URL",
                    name: "url",
                    widget: "string",
                    default: "https://",
                  },
                ],
              },
              {
                label: "Sort Order",
                name: "sortOrder",
                widget: "number",
                default: "1",
              },
            ],
          },
        ],
      },
    }),
  ],
});
