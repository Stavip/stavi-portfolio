/* Work section — chronological cards, each a horizontal row */

const WORK = [
  {
    year: "2026",
    when: "Summer 2026 · Upcoming",
    org: "Pump",
    role: "Business Development Representative",
    where: "Cloud cost savings for startups · group buying + AI · free to use",
    body: "Joining Pump this summer to help startups discover and adopt their cloud-cost platform. Pump uses group buying and AI to bring down cloud bills, and it is completely free for the companies that use it.",
    tags: ["BD", "Startups", "AI"],
    accent: true,
  },
  {
    year: "2025",
    when: "Sep to Dec",
    org: "A1Zap",
    role: "GTM Strategy · Academic Project",
    where: "Stanford · Global Entrepreneurial Marketing",
    body: "Worked on a go-to-market for a YC-backed AI messaging platform. Market and audience analysis, competitive positioning against Slack and Discord, freemium model with partnership-led growth.",
    tags: ["Strategy", "Competitive analysis", "Pricing"],
    accent: false,
  },
  {
    year: "2025",
    when: "Jun to Dec",
    org: "Goalsetter",
    role: "Intern · Product &amp; User Insights",
    where: "Fintech · Financial literacy for student-athletes",
    body: "Reviewed NIL course content for clarity, tone, and structure. Recommended features by synthesising student-athlete feedback, and supported go-to-market by driving early adoption.",
    tags: ["User research", "Content review", "GTM"],
    accent: false,
  },
  {
    year: "2025",
    when: "Apr to Jun",
    org: "Refugee Youth Inclusion · Greece",
    role: "Cofounder &amp; Product Lead",
    where: "Stanford · Entrepreneurship Without Borders",
    body: "Conducted 20+ interviews with NGOs and camp operators. Led a strategic pivot from an in-person league to an AI-powered mentorship platform. Built financial and product roadmaps, and validated pricing through A/B testing.",
    tags: ["Founder", "Discovery", "Pivot"],
    accent: false,
  },
  {
    year: "2022 +",
    when: "Present",
    org: "Stanford Women's Basketball",
    role: "Team Captain · NCAA D1",
    where: "20 to 30 hrs/wk, alongside accelerated MS&amp;E plan",
    body: "Manage schedules, prepare game plans, and review team strategy. Represent Stanford at NCAA tournaments and FIBA U20 European Championships. Pac-12 Championship teams in 2023 and 2024.",
    tags: ["Leadership", "Team strategy"],
    accent: false,
  },
];

function WorkSection() {
  return (
    <Section id="work" py="120px" screenLabel="04 Work">
      <Eyebrow style={{ marginBottom: 14 }}>Work · Experience</Eyebrow>
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
        Recent and <em style={{ fontWeight: 400 }}>relevant.</em>
      </h2>

      <div style={{
        marginTop: 56,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}>
        {WORK.map((w, i) => <WorkRow key={i} {...w}/>)}
      </div>

      {/* footer note */}
      <div style={{
        marginTop: 32,
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14,
        paddingTop: 22,
        borderTop: "1px solid var(--border-soft)",
      }}>
        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "var(--fg-muted)",
          fontStyle: "italic",
        }}>
          Honors: Pac-12 Academic Honor Roll · U20 EuroBasket Division B Top 25 Scorer
        </div>
        <Button variant="secondary" icon="download" size="sm" href="../../uploads/SP_Resume.pdf">Full resume</Button>
      </div>
    </Section>
  );
}

function WorkRow({ year, when, org, role, where, body, tags, accent }) {
  const [hover, setHover] = useState(false);
  const Wrapper = accent ? WineCard : Card;
  return (
    <Wrapper
      radius={22}
      padding={32}
      shadow={hover ? 3 : 2}
      style={{
        transform: hover ? "translateY(-2px)" : undefined,
        transition: "transform var(--dur-med) var(--ease-out-quart), box-shadow var(--dur-med) var(--ease-out-quart)",
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr",
          gap: 28,
          alignItems: "start",
        }}>
        {/* Year column */}
        <div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 36,
            lineHeight: 1,
            color: accent ? "var(--cream-50)" : "var(--ink-900)",
            letterSpacing: "-0.02em",
          }}>{year}</div>
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            color: accent ? "var(--wine-100)" : "var(--fg-muted)",
            marginTop: 6,
            letterSpacing: "0.04em",
          }}>{when}</div>
        </div>

        {/* Title + meta */}
        <div>
          <div style={{
            fontFamily: "var(--font-display-alt)",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: accent ? "var(--wine-100)" : "var(--fg-muted)",
            marginBottom: 6,
          }}>{org}</div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 24,
            lineHeight: 1.15,
            color: accent ? "var(--cream-50)" : "var(--ink-900)",
            margin: 0,
            letterSpacing: "-0.01em",
          }} dangerouslySetInnerHTML={{ __html: role }}/>
          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 15,
            color: accent ? "var(--wine-100)" : "var(--wine-500)",
            marginTop: 6,
          }} dangerouslySetInnerHTML={{ __html: where }}/>
        </div>

        {/* Body */}
        <div>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.6,
            color: accent ? "var(--wine-50)" : "var(--ink-700)",
            margin: 0,
          }} dangerouslySetInnerHTML={{ __html: body }}/>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
            {tags.map((t, i) => (
              <Tag key={i} variant={accent ? "deep" : "outline"}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

window.WorkSection = WorkSection;
