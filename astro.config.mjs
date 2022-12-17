import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'github',
          branch: 'main',
          repo: 'peterjlambert/pete-links'
        },
        media_folder: 'public/assets',
        public_folder: '/assets',
        collections: [
          {
            name: 'links',
            label: 'Links',
            folder: 'src/pages/links',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Title' },
              { name: 'url', widget: 'string', label: 'URL' },
              { name: 'description', widget: 'string', label: 'Description' },
              {
                name: 'type', widget: 'select', label: 'Link Type', options:
                  [
                    { label: "Link", value: "link" },
                    { label: "Player", value: "player" }
                  ]
              },
            ],
          },
        ],
      }
    }),
  ],
});