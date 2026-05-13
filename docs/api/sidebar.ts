import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tooxclusive-api",
    },
    {
      type: "category",
      label: "Artists",
      items: [
        {
          type: "doc",
          id: "api/v-1-artists-controller-browse",
          label: "Browse artists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-artists-controller-get-history",
          label: "Get artist stream history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-artists-controller-get-by-slug",
          label: "Get artist by slug",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Songs",
      items: [
        {
          type: "doc",
          id: "api/v-1-songs-controller-search",
          label: "Search songs by title",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-songs-controller-get-history",
          label: "Get song stream history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-songs-controller-get-artist-songs",
          label: "Get all songs by artist slug",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-songs-controller-get-by-slug",
          label: "Get song by slug",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Milestones",
      items: [
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-recent",
          label: "Get recent milestones",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-artist-tier",
          label: "V1MilestonesController_getArtistTier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-song-tier",
          label: "Get songs by milestone tier",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-timeline",
          label: "Get artist milestone timeline",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-artist-stream-fact",
          label: "Get artist stream milestone fact",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-artist-listener-fact",
          label: "Get artist listener milestone fact",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-milestones-controller-get-song-stream-fact",
          label: "V1MilestonesController_getSongStreamFact",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Leaderboard",
      items: [
        {
          type: "doc",
          id: "api/v-1-leaderboard-controller-get-streams",
          label: "Top artists by total streams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-leaderboard-controller-get-listeners",
          label: "Top artists by monthly listeners",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-leaderboard-controller-get-songs",
          label: "Top songs by total streams",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Trending",
      items: [
        {
          type: "doc",
          id: "api/v-1-trending-controller-get-artists",
          label: "Trending artists by momentum score",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-trending-controller-get-songs",
          label: "Trending songs by momentum score",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Albums",
      items: [
        {
          type: "doc",
          id: "api/v-1-albums-controller-browse",
          label: "Browse albums",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-albums-controller-get-by-slug",
          label: "Get album by slug",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Charts",
      items: [
        {
          type: "doc",
          id: "api/v-1-charts-controller-get-available",
          label: "Get available charts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/v-1-charts-controller-get-chart",
          label: "Get chart entries",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
