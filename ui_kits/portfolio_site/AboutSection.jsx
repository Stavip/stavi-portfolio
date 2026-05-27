/* About section — two-column split with image + first-person body */

function AboutSection() {
  return (
    <Section id="about" py="120px" screenLabel="02 About">
      <Eyebrow style={{ marginBottom: 14 }}>About</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: "clamp(40px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: "var(--ink-900)",
        margin: 0,
        maxWidth: 820,
      }}>
        So, the <em style={{ fontWeight: 400 }}>long version.</em>
      </h2>

      <div style={{
        marginTop: 56,
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        gap: 48,
        alignItems: "start",
      }}>
        {/* Left, typographic card stack instead of photos */}
        <div style={{ position: "relative", minHeight: 520 }}>
          {/* Big wine card with the timeline */}
          <WineCard radius={32} padding={36} shadow={3} style={{ width: "100%" }}>
            <Eyebrow color="var(--wine-100)" style={{ marginBottom: 18 }}>The arc</Eyebrow>
            <div style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "8px 18px",
              alignItems: "baseline",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 56, lineHeight: 1, color: "var(--cream-50)", letterSpacing: "-0.025em" }}>2018</div>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--wine-100)", lineHeight: 1.4 }}>Greek National Team Captain</div>

              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 56, lineHeight: 1, color: "var(--cream-50)", letterSpacing: "-0.025em" }}>2022</div>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--wine-100)", lineHeight: 1.4 }}>Stanford D1 Basketball, then Captain</div>

              <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 56, lineHeight: 1, color: "var(--cream-50)", letterSpacing: "-0.025em" }}>2026</div>
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 18, color: "var(--wine-100)", lineHeight: 1.4 }}>Stanford MS&amp;E, graduating June</div>
            </div>
            <div style={{
              marginTop: 28, paddingTop: 18,
              borderTop: "1px solid rgba(247,239,224,.18)",
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "var(--wine-100)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}>
              Chania &middot; Athens &middot; Palo Alto
            </div>
          </WineCard>

          {/* Small cream card overlapping bottom-right */}
          <Card radius={20} padding={22} tilt={2.2} shadow={3} style={{
            position: "absolute",
            right: -24, bottom: -28,
            width: 240,
          }}>
            <div style={{
              fontFamily: "var(--font-display-alt)",
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--wine-500)",
            }}>Honors</div>
            <div style={{
              marginTop: 10,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 17,
              lineHeight: 1.4,
              color: "var(--ink-900)",
            }}>
              Pac-12 Academic Honor Roll. U20 EuroBasket Top 25 Scorer.
            </div>
          </Card>
        </div>

        {/* Right, copy stacked in a cream card */}
        <Card radius={28} padding={44} shadow={2}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.4,
            color: "var(--ink-900)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}>
            I grew up in Chania, Greece, and from a young age I was surrounded by teams.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--ink-700)",
            marginTop: 22,
          }}>
            Basketball became my world pretty early on, and I quickly realized that what makes a team great is not always talent, but whether people believe in each other. That is something I carried with me to Stanford, where I played Division I basketball and eventually became a captain.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--ink-700)",
            marginTop: 16,
          }}>
            I never thought of myself as the loudest or most dominant player, but I cared a lot about my teammates and what they were capable of, sometimes more than they did themselves. Looking back, that is probably the clearest thing I can say about how I lead.
          </p>

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--ink-700)",
            marginTop: 16,
          }}>
            At Stanford I studied Management Science and Engineering, with a focus on Finance and Decision Analysis, and on Technology and Engineering Management. I also spent a lot of time learning how to work with people, how to move a team forward, and how to show up as a leader in situations where I had no formal title to do so.
          </p>

          <div style={{
            marginTop: 28, paddingTop: 22,
            borderTop: "1px solid var(--border-soft)",
            display: "flex", flexWrap: "wrap", gap: 8,
          }}>
            <Tag variant="cream">Stanford MS&amp;E '26</Tag>
            <Tag variant="cream">Finance &amp; Decision Analysis</Tag>
            <Tag variant="cream">Tech &amp; Engineering Management</Tag>
            <Tag variant="outline">Greek &amp; English</Tag>
          </div>
        </Card>
      </div>
    </Section>
  );
}

window.AboutSection = AboutSection;
