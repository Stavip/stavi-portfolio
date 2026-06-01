/* Hero — intro copy + portrait */

import { Section, MetaDot, Button, useLucide } from "./components.jsx";

export default function Hero({ onNav, showHeroCtas }) {
  useLucide();
  return (
    <Section id="home" py="140px" screenLabel="01 Home">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.05fr",
        gap: 56,
        alignItems: "center",
      }}>
        <div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(56px, 7vw, 104px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "var(--ink-900)",
            margin: 0,
          }}>
            Hi, I'm <em style={{ fontWeight: 400 }}>Stavi.</em>
          </h1>

          <div style={{ marginTop: 28, marginBottom: 24 }}>
            <MetaDot
              items={["Stanford MS&E", "D1 Basketball", "Chania, GR \u2194 San Francisco, California"]}
              style={{ fontSize: 14, color: "var(--ink-500)" }}
            />
          </div>

          <p style={{
            maxWidth: 560,
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.7,
            color: "var(--ink-700)",
            margin: 0,
          }}>
            Scroll through to learn more about my journey, how I lead, and what I care about!
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Button
              variant="secondary"
              size="sm"
              icon="linkedin"
              href="https://www.linkedin.com/in/stavroula-papadaki/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon="download"
              href="/uploads/SP_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Button>
          </div>

          {showHeroCtas && (
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <Button onClick={() => onNav("leadership")} icon="quote">Read the essay</Button>
              <Button variant="secondary" onClick={() => onNav("work")} icon="arrow-up-right">See the work</Button>
            </div>
          )}
        </div>

        <figure className="hero-portrait">
          <div className="hero-portrait__frame">
            <img
              className="hero-portrait__img"
              src="/assets/stavi-hero.jpg?v=2"
              alt="Stavroula Papadaki in Stanford basketball uniform, number 24"
              width={683}
              height={1024}
              loading="eager"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </Section>
  );
}
