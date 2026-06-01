/* Work section — Stanford projects */

import { Section, Eyebrow } from "./components.jsx";
import { ChampionProjectCard } from "./ChampionProject.jsx";
import { A1ZapProjectCard } from "./A1ZapProject.jsx";
import { BreedjProjectCard } from "./BreedjProject.jsx";
import { RallyProjectCard } from "./RallyProject.jsx";

export default function WorkSection() {
  return (
    <Section id="work" py="120px" screenLabel="04 Work">
      <Eyebrow size="section" style={{ marginBottom: 16 }}>Work</Eyebrow>

      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "clamp(32px, 4vw, 48px)",
        lineHeight: 1.08,
        letterSpacing: "-0.02em",
        color: "var(--ink-900)",
        margin: "40px 0 14px",
      }}>
        Stanford Projects
      </h2>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: 1.65,
        color: "var(--ink-700)",
        maxWidth: 720,
        margin: "0 0 28px",
      }}>
        A few things I have built or led alongside class and basketball, where the problem mattered as much as the deck.
      </p>
      <div className="projects-grid">
        <ChampionProjectCard />
        <A1ZapProjectCard />
        <BreedjProjectCard />
        <RallyProjectCard />
      </div>
    </Section>
  );
}
