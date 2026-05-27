/* Footer — minimal cream card with monogram + meta */

function Footer() {
  useLucide();
  return (
    <footer style={{ padding: "0 var(--space-8) var(--space-12)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Card radius={28} padding={28} shadow={1}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Monogram size={42}/>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 18,
                  color: "var(--ink-900)",
                  fontWeight: 500,
                }}>Stavroula Papadaki</div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--fg-muted)",
                  letterSpacing: "0.04em",
                  marginTop: 2,
                }}>
                  Stanford MS&amp;E · Class of 2026
                </div>
              </div>
            </div>

            <MetaDot
              items={[
                <a key="m" href="mailto:stavip8@stanford.edu" style={{ color: "var(--ink-700)", textDecoration: "none" }}>stavip8@stanford.edu</a>,
                <a key="l" href="https://www.linkedin.com/in/stavroula-papadaki/" target="_blank" style={{ color: "var(--ink-700)", textDecoration: "none" }}>LinkedIn</a>,
                "Palo Alto · Chania",
              ]}
              style={{ fontSize: 13 }}
            />

            <div style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 14,
              color: "var(--fg-muted)",
            }}>
              MMXXVI
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}

window.Footer = Footer;
