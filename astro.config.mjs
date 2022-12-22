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
                label: "List of Links",
                name: "List of Links",
                widget: "list",
                summary: "List of links",
                fields: [
                  {
                    label: Quote,
                    name: quote,
                    widget: string,
                    default: "Everything is awesome!",
                  },
                  {
                    label: Author,
                    name: author,
                    widget: object,
                    fields: [
                      {
                        label: Name,
                        name: name,
                        widget: string,
                        default: "Emmet",
                      },
                      {
                        label: Avatar,
                        name: avatar,
                        widget: image,
                        default: "/img/emmet.jpg",
                      },
                    ],
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
