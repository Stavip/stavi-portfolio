/* Leadership — wine essay card + linen leadership profile document */

import { Section, Eyebrow, WineCard, Button, useLucide } from "./components.jsx";

const MEDIUM_ESSAY =
  "https://medium.com/@stavip8/i-lead-by-believing-in-people-before-they-believe-in-themselves-c723e5f6777b";

const CONDITIONS = [
  "I feel trusted, and my judgment is respected",
  "The purpose is clear and genuinely matters",
  "I have space to prepare",
  "The stakes are real",
];

const OPERATE = [
  "Prepare behind the scenes",
  "Notice what people need before they say it",
  "Drive toward clarity on direction and roles",
  "Hold space, and let people arrive at their answers",
];

export default function LeadershipSection() {
  useLucide();

  return (
    <Section id="leadership" py="120px" screenLabel="03 Leadership">
      <Eyebrow size="section" style={{ marginBottom: 16 }}>Leadership</Eyebrow>

      <WineCard radius={36} padding={48} shadow={4} style={{ marginTop: 40 }}>
        <div className="leadership-wine-copy">
          <p className="leadership-doc__purpose">
            I have been an athlete and a captain for most of my life, but I never really sat down to think carefully about what kind of leader I was until this year. What I found out is that I lead with a lot of care and a lot of structure at the same time. I prepare carefully, I pay close attention, and I tend to believe in people before they are sure they should believe in themselves.{" "}
            <strong>
              I want to build environments where people can be more of themselves walking out than they were when they walked in.
            </strong>
          </p>
        </div>
        <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(247,239,224,.2)" }}>
          <Button
            variant="onWine"
            icon="arrow-up-right"
            href={MEDIUM_ESSAY}
            target="_blank"
            rel="noreferrer"
          >
            Read the essay on Medium
          </Button>
        </div>
      </WineCard>

      <article className="leadership-doc" aria-labelledby="leadership-profile-title">
        <header className="leadership-doc__header">
          <h3 id="leadership-profile-title" className="leadership-doc__title">
            Leadership Profile
          </h3>
        </header>

        <section className="leadership-doc__block">
          <h4 className="leadership-doc__label">Purpose</h4>
          <p className="leadership-doc__purpose">
            I believe in people before they believe in themselves.
          </p>
        </section>

        <div className="leadership-doc__columns">
          <section className="leadership-doc__block">
            <h4 className="leadership-doc__label">Conditions where I do my best work</h4>
            <ul className="leadership-doc__list">
              {CONDITIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="leadership-doc__block">
            <h4 className="leadership-doc__label">How I operate on teams</h4>
            <ul className="leadership-doc__list">
              {OPERATE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </Section>
  );
}
