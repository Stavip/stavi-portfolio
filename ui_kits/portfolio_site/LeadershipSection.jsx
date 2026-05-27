/* Leadership section — purpose quote + conditions / operating + links to essay + one-pager */

function LeadershipSection({ onOpenEssay }) {
  useLucide();
  return (
    <Section id="leadership" py="120px" screenLabel="03 Leadership">
      <Eyebrow style={{ marginBottom: 14 }}>Leadership</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: "clamp(40px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: "var(--ink-900)",
        margin: 0,
        maxWidth: 880,
      }}>
        I believe in <em style={{ fontWeight: 400 }}>people</em><br/>
        before they believe in themselves.
      </h2>

      {/* The big wine quote card + side cream card */}
      <div style={{
        marginTop: 64,
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 28,
      }}>
        <WineCard radius={36} padding={48} shadow={4} style={{ position: "relative" }}>
          <Eyebrow color="var(--wine-100)" style={{ marginBottom: 22 }}>
            Purpose
          </Eyebrow>

          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.25,
            color: "var(--cream-50)",
            letterSpacing: "-0.01em",
          }}>
            "I never thought of myself as the loudest or most dominant player. But I cared a lot about my teammates and what they were capable of, sometimes more than they did themselves."
          </div>

          <div style={{
            marginTop: 32, paddingTop: 22,
            borderTop: "1px solid rgba(247,239,224,.2)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14,
          }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Tag variant="deep">Optimizer</Tag>
              <Tag variant="deep">Emotional leader</Tag>
              <Tag variant="deep">Lead without authority</Tag>
            </div>
            <Button variant="onWine" icon="arrow-up-right" onClick={onOpenEssay}>Read the essay</Button>
          </div>
        </WineCard>

        {/* One-pager preview card */}
        <Card radius={28} padding={28} shadow={2} style={{ display: "flex", flexDirection: "column" }}>
          <Eyebrow style={{ marginBottom: 12 }}>One-pager</Eyebrow>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 28,
            lineHeight: 1.1,
            color: "var(--ink-900)",
            margin: 0,
          }}>
            Leadership profile
          </h3>
          <div style={{
            marginTop: 16,
            background: "var(--cream-200)",
            borderRadius: 14,
            padding: "18px 16px",
            flex: 1,
            display: "flex", flexDirection: "column", gap: 8,
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: "var(--ink-700)",
            lineHeight: 1.5,
          }}>
            <div style={{ fontFamily: "var(--font-display-alt)", fontSize: 10, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--wine-500)" }}>Conditions where I do my best work</div>
            <div>&middot; I feel trusted, and my judgment is respected</div>
            <div>&middot; The purpose is clear and genuinely matters</div>
            <div>&middot; I have space to prepare</div>
            <div>&middot; The stakes are real</div>
            <div style={{ fontFamily: "var(--font-display-alt)", fontSize: 10, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--wine-500)", marginTop: 6 }}>How I operate on teams</div>
            <div>&middot; Prepare behind the scenes</div>
            <div>&middot; Notice what people need before they say it</div>
            <div>&middot; Drive toward clarity on direction and roles</div>
            <div>&middot; Hold space, and let people arrive at their answers</div>
          </div>
          <div style={{ marginTop: 16 }}>
            <Button variant="secondary" size="sm" icon="download" href="../../uploads/stavi_leadership_onepager_v6.pdf">Download PDF</Button>
          </div>
        </Card>
      </div>

      {/* Three leadership-example cards */}
      <div style={{
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 22,
      }}>
        <LeadershipExample
          eyebrow="2022 to 2026"
          title="Stanford NCAA D1 Basketball"
          role="Team Captain"
          body="Led a 15+ person roster through demanding seasons. Built trust by holding difficult conversations and creating an environment where people felt believed in."
          metric="Pac-12 Championship · 2023 + 2024"
        />
        <LeadershipExample
          eyebrow="2021"
          title="U18 Greek Championship"
          role="Underdog captain at 16"
          body="Competed at sixteen in an under-eighteen league with no expectation to lead. Stepped up when the team needed direction, and we finished third nationally."
          metric="3rd place · Top-5 athlete"
        />
        <LeadershipExample
          eyebrow="Spring 2026"
          title="Product Management · Stanford Athletics"
          role="Team lead, 4 people"
          body="Applied leadership without formal authority. Designed intentional team gatherings, coordinated with AI as a planning partner, and built shared direction around a real problem."
          metric="Product class · final project"
        />
      </div>
    </Section>
  );
}

function LeadershipExample({ eyebrow, title, role, body, metric }) {
  const [hover, setHover] = useState(false);
  return (
    <Card
      radius={22}
      padding={26}
      shadow={hover ? 3 : 2}
      style={{
        cursor: "pointer",
        transform: hover ? "translateY(-3px)" : undefined,
        display: "flex", flexDirection: "column", gap: 10,
        height: "100%",
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 24,
          lineHeight: 1.1,
          color: "var(--ink-900)",
          margin: 0,
        }}>{title}</h3>
        <div style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: 16,
          color: "var(--wine-500)",
        }}>{role}</div>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.6,
          color: "var(--ink-700)",
          margin: 0,
        }}>{body}</p>
        <div style={{
          marginTop: "auto", paddingTop: 12,
          borderTop: "1px solid var(--border-soft)",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "var(--fg-muted)",
          letterSpacing: "0.04em",
        }}>{metric}</div>
      </div>
    </Card>
  );
}

window.LeadershipSection = LeadershipSection;
