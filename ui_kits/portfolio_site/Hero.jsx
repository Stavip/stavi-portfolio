/* Hero — name + role + intro line + two CTAs + layered portrait card */

function Hero({ onNav, showHeroCtas }) {
  useLucide();
  return (
    <Section id="home" py="140px" screenLabel="01 Home">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.15fr 0.95fr",
        gap: 56,
        alignItems: "center",
      }}>
        {/* Left — text */}
        <div>
          <Eyebrow style={{ marginBottom: 22 }}>
            Portfolio &middot; 2026
          </Eyebrow>

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
              items={["Stanford MS&E", "D1 Basketball Captain", "Chania, GR \u2194 Palo Alto"]}
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
            I came from Chania, Greece to play basketball at Stanford. Four years later I was a team captain, not because I was the loudest in the room, but because I genuinely believed in my teammates before they could see it in themselves.
          </p>

          {showHeroCtas && (
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <Button onClick={() => onNav("leadership")} icon="quote">Read the essay</Button>
              <Button variant="secondary" onClick={() => onNav("work")} icon="arrow-up-right">See the work</Button>
            </div>
          )}
        </div>

        {/* Right, layered typographic card stack (no photos) */}
        <div style={{ position: "relative", height: 540 }}>

          {/* Back cream card, tilted, with credentials list */}
          <Card radius={26} padding={28} tilt={-1.6} shadow={2} style={{
            position: "absolute",
            top: 30, left: 6,
            width: 270,
          }}>
            <Eyebrow style={{ marginBottom: 14 }}>Currently</Eyebrow>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 26,
              lineHeight: 1.1,
              color: "var(--ink-900)",
              letterSpacing: "-0.015em",
            }}>
              Senior at Stanford. <em style={{ fontWeight: 400 }}>Graduating June 2026.</em>
            </div>
            <div style={{
              marginTop: 14,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.55,
              color: "var(--ink-500)",
            }}>
              MS&amp;E with a focus on Finance &amp; Decision Analysis, and Technology &amp; Engineering Management.
            </div>
          </Card>

          {/* Main wine card, big, with the leadership line */}
          <WineCard radius={32} padding={36} shadow={4} style={{
            position: "absolute",
            top: 0, right: 0,
            width: 330,
          }}>
            <Eyebrow color="var(--wine-100)" style={{ marginBottom: 18 }}>How I lead</Eyebrow>
            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1.25,
              color: "var(--cream-50)",
              letterSpacing: "-0.005em",
            }}>
              "I believe in people before they believe in themselves."
            </div>
            <div style={{
              marginTop: 22, paddingTop: 16,
              borderTop: "1px solid rgba(247,239,224,.18)",
              display: "flex", flexWrap: "wrap", gap: 8,
            }}>
              <Tag variant="deep">Stanford D1</Tag>
              <Tag variant="deep">Greek National</Tag>
              <Tag variant="deep">Captain</Tag>
            </div>
          </WineCard>

          {/* Small overlapping cream card, summer plans */}
          <Card radius={20} padding={20} tilt={2} shadow={3} style={{
            position: "absolute",
            bottom: 18, left: 70,
            width: 280,
          }}>
            <div style={{
              fontFamily: "var(--font-display-alt)",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--wine-500)",
              marginBottom: 6,
            }}>Summer 2026</div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 22,
              lineHeight: 1.1,
              color: "var(--ink-900)",
              letterSpacing: "-0.01em",
            }}>
              Joining <em style={{ fontWeight: 400 }}>Pump</em> as a BDR
            </div>
            <div style={{
              marginTop: 8,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              lineHeight: 1.5,
              color: "var(--ink-500)",
            }}>
              Helping startups cut cloud costs with group buying and AI.
            </div>
          </Card>

          {/* Tiny monogram badge floating in corner */}
          <div style={{
            position: "absolute",
            top: 8, right: -16,
            transform: "rotate(8deg)",
          }}>
            <Monogram size={56} variant="cream"/>
          </div>
        </div>
      </div>
    </Section>
  );
}

window.Hero = Hero;
