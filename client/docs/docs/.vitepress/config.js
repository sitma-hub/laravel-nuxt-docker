export default {
  title: "VitePress Test",
  titleTemplate: "Vite & Vue powered static site generator",
  description: "Just playing around.",
  lang: "de-DE",
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "Dropdown Menu",
        items: [
          {
            // Title for the section.
            text: "Section A Title",
            items: [
              { text: "Section A Item A", link: "/guide/one" },
              { text: "Section B Item B", link: "/guide/two" },
            ],
          },
        ],
      },
      {
        text: "Dropdown Menu",
        items: [
          {
            // You may also omit the title.
            items: [
              { text: "Section A Item A", link: "/config/three" },
              { text: "Section B Item B", link: "/config/four" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            // This shows `/guide/index.md` page.
            { text: "Index", link: "/guide/" }, // /guide/index.md
            { text: "One", link: "/guide/one" }, // /guide/one.md
            { text: "Two", link: "/guide/two" }, // /guide/two.md
          ],
        },
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      "/config/": [
        {
          text: "Config",
          items: [
            // This shows `/guide/index.md` page.
            { text: "Index", link: "/config/" }, // /config/index.md
            { text: "Three", link: "/config/three" }, // /config/three.md
            { text: "Four", link: "/config/four" }, // /config/four.md
          ],
        },
      ],
    },
    siteTitle: "Hello World",

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022 by Markus Petershofen",
    },
  },
};
