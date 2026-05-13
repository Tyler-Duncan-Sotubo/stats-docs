// src/pages/index.tsx
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.badge}>V1 — Now Live</div>
        <h1 className={styles.heroTitle}>
          The Afrobeats
          <br />
          Data API
        </h1>
        <p className={styles.heroSubtitle}>
          Streaming stats, milestones, charts and more for 20,000+ artists and
          1.2 million songs. Built on the infrastructure powering TooXclusive
          Stats.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={styles.secondaryButton}
            to="/docs/category/api-reference"
          >
            API Reference
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.statsInner}>
        <div className={styles.stat}>
          <div className={styles.statValue}>20K+</div>
          <div className={styles.statLabel}>Artists</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>1.2M</div>
          <div className={styles.statLabel}>Songs</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>90K+</div>
          <div className={styles.statLabel}>Milestones</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>1,000</div>
          <div className={styles.statLabel}>Free req/day</div>
        </div>
      </div>
    </div>
  );
}

const endpoints = [
  {
    method: "GET",
    path: "/v1/artists/wizkid",
    description: "Full artist profile — streams, listeners, charts, awards",
  },
  {
    method: "GET",
    path: "/v1/milestones/recent?isAfrobeats=true",
    description: "Latest Afrobeats streaming milestones",
  },
  {
    method: "GET",
    path: "/v1/leaderboard/streams?isAfrobeats=true",
    description: "Top Afrobeats artists by total streams",
  },
  {
    method: "GET",
    path: "/v1/trending/artists",
    description: "Trending artists ranked by momentum score",
  },
  {
    method: "GET",
    path: "/v1/charts/official_afrobeats_chart/UK",
    description: "Official Afrobeats Chart UK — latest entries",
  },
];

function Endpoints() {
  return (
    <div className={styles.endpoints}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Explore the API</h2>
        <p className={styles.sectionSubtitle}>
          Every endpoint returns live data updated daily.
        </p>
        <div className={styles.endpointList}>
          {endpoints.map((ep) => (
            <div key={ep.path} className={styles.endpoint}>
              <div className={styles.endpointLeft}>
                <span className={styles.method}>{ep.method}</span>
                <code className={styles.path}>{ep.path}</code>
              </div>
              <p className={styles.endpointDesc}>{ep.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.endpointsCta}>
          <Link
            className={styles.primaryButton}
            to="/docs/category/api-reference"
          >
            View all endpoints →
          </Link>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "🎵",
    title: "Artists & Songs",
    description:
      "Stream counts, daily deltas, monthly listeners, chart history, awards and certifications for 20K+ artists and 1.2M songs.",
  },
  {
    icon: "🏆",
    title: "Milestones",
    description:
      "Every time an artist or song crosses a streaming threshold — 100M, 500M, 1B streams and beyond. 90K+ events tracked.",
  },
  {
    icon: "📊",
    title: "Charts",
    description:
      "Official Afrobeats Chart UK, Spotify Daily NG, Apple Music NG and more. Updated daily with position, delta and trend.",
  },
  {
    icon: "🚀",
    title: "Trending",
    description:
      "Momentum-scored artists and songs updated daily. Know who is rising before everyone else.",
  },
  {
    icon: "🌍",
    title: "Pan-African",
    description:
      "Deep coverage of Nigerian, Ghanaian, South African and East African artists alongside global superstars.",
  },
  {
    icon: "⚡",
    title: "Fast & Cached",
    description:
      "Redis-cached responses, sub-100ms p99 latency. Built on the same infrastructure as TooXclusive Stats.",
  },
];

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.sectionInner}>
        <h2 className={styles.sectionTitle}>Everything you need</h2>
        <p className={styles.sectionSubtitle}>
          One API for the full picture of African music data.
        </p>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className={styles.cta}>
      <div className={styles.sectionInner}>
        <h2 className={styles.ctaTitle}>Ready to build?</h2>
        <p className={styles.ctaSubtitle}>
          Free tier includes 1,000 requests per day. No credit card required.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/get-api-key">
            Get your API key
          </Link>
          <Link
            className={styles.secondaryButton}
            to="https://tooxclusive.com/stats"
          >
            See it in action
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>Afrobeats Music Data API | TooXclusive</title>
        <meta
          name="description"
          content="Streaming stats, milestones, charts and more for 20,000+ artists and 1.2M songs."
        />
      </Head>
      <main>
        <Hero />
        <Stats />
        <Endpoints />
        <Features />
        <CTA />
      </main>
    </Layout>
  );
}
