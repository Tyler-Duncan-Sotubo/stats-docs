// sidebars.ts
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    { type: "doc", id: "intro", label: "Introduction" },
    { type: "doc", id: "quickstart", label: "Quickstart" },
    { type: "doc", id: "authentication", label: "Authentication" },
    { type: "doc", id: "rate-limits", label: "Rate Limits" },
    { type: "doc", id: "pagination", label: "Pagination" },
    { type: "doc", id: "filtering", label: "Filtering" },
    { type: "doc", id: "errors", label: "Errors" },
    { type: "doc", id: "changelog", label: "Changelog" },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "doc",
          id: "guides/build-artist-dashboard",
          label: "Build an Artist Dashboard",
        },
        {
          type: "doc",
          id: "guides/track-milestones",
          label: "Track Milestones",
        },
        {
          type: "doc",
          id: "guides/afrobeats-charts",
          label: "Afrobeats Charts",
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "API Reference",
        description: "Full reference for all TooXclusive API endpoints.",
      },
      items: require("./docs/api/sidebar.ts"),
    },
  ],
};

export default sidebars;
