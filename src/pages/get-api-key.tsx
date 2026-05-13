import React, { useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import styles from "./get-api-key.module.css";

type FormState = "idle" | "loading" | "success" | "error";

export default function GetApiKey() {
  const [apiKey, setApiKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [intendedUse, setIntendedUse] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://api.tooxclusive.com/api/public/api-keys/request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, website, intendedUse }),
        },
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message ?? "Something went wrong");
      }

      const data = await res.json();
      setApiKey(data.key);
      setState("success");
    } catch (err: any) {
      setErrorMsg(err.message ?? "Something went wrong. Please try again.");
      setState("error");
    }
  }

  return (
    <Layout>
      <Head>
        <title>Get an API Key | TooXclusive API</title>
        <meta
          name="description"
          content="Request your free TooXclusive API key. 1,000 requests per day, no credit card required."
        />
      </Head>
      <div className={styles.page}>
        <div className={styles.container}>
          {state === "success" ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>🎉</div>
              <h2 className={styles.successTitle}>Your API key is ready</h2>
              <p className={styles.successText}>
                Copy your key now — it will not be shown again.
              </p>
              <div className={styles.keyBox}>
                <code className={styles.keyValue}>{apiKey}</code>
                <button
                  className={styles.copyButton}
                  onClick={() => {
                    navigator.clipboard.writeText(apiKey);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>
              <div className={styles.successNote}>
                <p>Pass it as the Authorization header on every request:</p>
                <pre className={styles.codeBlock}>
                  {`curl https://api.tooxclusive.com/api/v1/artists/wizkid \\
  -H "Authorization: Bearer ${apiKey}"`}
                </pre>
              </div>
              <a href="/docs/quickstart" className={styles.button}>
                Go to Quickstart →
              </a>
            </div>
          ) : (
            <>
              <div className={styles.header}>
                <h1 className={styles.title}>Get your free API key</h1>
                <p className={styles.subtitle}>
                  1,000 requests per day. No credit card required. Your key will
                  be emailed to you instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    placeholder="Your name or app name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="website">
                    Website <span className={styles.optional}>(optional)</span>
                  </label>
                  <input
                    id="website"
                    type="url"
                    className={styles.input}
                    placeholder="https://yourapp.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="intendedUse">
                    What are you building?{" "}
                    <span className={styles.optional}>(optional)</span>
                  </label>
                  <textarea
                    id="intendedUse"
                    className={styles.textarea}
                    placeholder="e.g. An Afrobeats stats dashboard, a music discovery app..."
                    value={intendedUse}
                    onChange={(e) => setIntendedUse(e.target.value)}
                    rows={3}
                  />
                </div>

                {state === "error" && (
                  <div className={styles.error}>{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className={styles.button}
                  disabled={state === "loading"}
                >
                  {state === "loading" ? "Sending..." : "Get my API key →"}
                </button>
              </form>

              <div className={styles.footer}>
                <p>
                  Already have a key? Jump to the{" "}
                  <a href="/docs/quickstart">Quickstart</a> or browse the{" "}
                  <a href="/docs/category/api-reference">API Reference</a>.
                </p>
                <p>
                  Need more than 1,000 requests/day?{" "}
                  <a href="mailto:api@tooxclusive.com">Email us</a>.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
