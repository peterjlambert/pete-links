import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [NetlifyCMS({
    config: {
      backend: {
        name: "git-gateway",
        branch: "main",
        repo: "peterjlambert/pete-links"
      },
      display_url: "https://links.petelambertmusic.com",
      media_folder: "public/assets",
      public_folder: "/assets",
      collections: [{
        name: "Sections",
        label: "sections",
        folder: "src/pages/sections",
        create: true,
        delete: true,
        preview_path: "{{ slug }}",
        layout: "../../layouts/Section.astro",
        fields: [{
          label: "Show Header",
          name: "showHeader",
          widget: "boolean",
          default: true
        }, {
          label: "Title",
          name: "title",
          widget: "string"
        }, {
          label: "Color",
          name: "color",
          widget: "color",
          allowInput: true,
          default: "#00DD00"
        }, {
          label: "Description",
          name: "description",
          widget: "string",
          required: false
        }, {
          label: "Links",
          name: "links",
          widget: "list",
          summary: "Links in this section",
          required: false,
          fields: [{
            label: "Label",
            name: "label",
            widget: "string",
            default: "Check out my new album"
          }, {
            label: "Description",
            name: "description",
            widget: "string",
            required: false
          }, {
            label: "URL",
            name: "url",
            widget: "string",
            default: "https://"
          }]
        }, {
          label: "Sort Order",
          name: "sortOrder",
          widget: "number",
          default: "1",
          required: false
        }]
      }, {
        name: "Socials",
        label: "socials",
        folder: "src/pages/socials",
        create: true,
        delete: true,
        preview_path: "{{ slug }}",
        layout: "../../layouts/Socials.astro",
        fields: [{
          label: "Title",
          name: "title",
          widget: "string"
        }, {
          label: "Links",
          name: "links",
          widget: "list",
          summary: "Social links",
          required: false,
          fields: [{
            label: "Platform",
            name: "platform",
            widget: "select",
            options: ["mastodon", "facebook", "twitter", "instagram", "youtube", "spotify", "apple", "bandcamp", "soundcloud", "tiktok", "twitch", "pinterest", "linkedin", "github", "gitlab", "reddit", "tumblr", "snapchat", "whatsapp", "telegram", "discord", "email", "rss", "other"]
          }, {
            label: "URL",
            name: "url",
            widget: "string",
            default: "https://"
          }]
        }]
      }]
    }
  }), image()]
});