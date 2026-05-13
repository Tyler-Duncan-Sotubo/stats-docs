// docusaurus.config.ts
import type { Config } from "@docusaurus/types";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "TooXclusive API",
  tagline: "Music data infrastructure for Afrobeats and beyond",
  favicon: "img/favicon.ico",
  url: "https://developers.tooxclusive.com",
  baseUrl: "/",

  organizationName: "tooxclusive",
  projectName: "tooxclusive-docs",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          tooxclusive: {
            specPath: "https://api.tooxclusive.com/api/docs-json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            downloadUrl: "https://api.tooxclusive.com/api/docs-json",
            hideSendButton: false,
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "TooXclusive API",
      logo: {
        alt: "TooXclusive Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          label: "API Reference",
          position: "left",
          to: "/docs/category/api-reference",
        },
        {
          label: "Get API Key",
          position: "right",
          to: "/get-api-key",
        },
        {
          href: "https://tooxclusive.com/stats",
          label: "Stats Platform",
          position: "right",
        },
        {
          href: "https://tooxclusive.com",
          label: "TooXclusive",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "/docs/intro" },
            { label: "API Reference", to: "/docs/category/api-reference" },
            { label: "Authentication", to: "/docs/authentication" },
            { label: "Rate Limits", to: "/docs/rate-limits" },
          ],
        },
        {
          title: "TooXclusive",
          items: [
            {
              label: "Stats Platform",
              href: "https://tooxclusive.com/stats",
            },
            { label: "Editorial", href: "https://tooxclusive.com" },
            { label: "Twitter", href: "https://twitter.com/tooxclusive" },
          ],
        },
        {
          title: "API",
          items: [
            { label: "Request API Key", to: "/docs/get-api-key" },
            { label: "Changelog", to: "/docs/changelog" },
            { label: "Status", href: "https://tooxclusive.com/status" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TooXclusive. All rights reserved.`,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer").themes.github,
      darkTheme: require("prism-react-renderer").themes.dracula,
      additionalLanguages: [
        "bash",
        "json",
        "javascript",
        "typescript",
        "python",
      ],
    },
  },
};

export default config;
