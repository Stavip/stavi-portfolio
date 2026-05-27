/* ============================================================
   Portfolio site — components.jsx
   Primitives shared across the portfolio. Loaded as a Babel script.
   Components attach to window at the bottom so other JSX files can use them.
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* ------------------------------------------------------------
   Eyebrow — small all-caps placard tag above section titles
   ------------------------------------------------------------ */
function Eyebrow({ children, color = "var(--fg-muted)", style = {} }) {
  return (
    <div style={{
      fontFamily: "var(--font-display-alt)",
      fontSize: "12px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------
   Card — the default cream content card
   ------------------------------------------------------------ */
function Card({ children, radius = 28, padding = 36, tilt = 0, shadow = 2, style = {}, onClick }) {
  const shadows = {
    1: "0 1px 2px rgba(58,10,12,.06), 0 2px 6px rgba(58,10,12,.05)",
    2: "0 2px 4px rgba(58,10,12,.08), 0 8px 18px rgba(58,10,12,.10)",
    3: "0 4px 8px rgba(58,10,12,.10), 0 16px 32px rgba(58,10,12,.14)",
    4: "0 8px 14px rgba(58,10,12,.12), 0 28px 56px rgba(58,10,12,.18)",
  };
  return (
    <div onClick={onClick} style={{
      background: "var(--surface-card)",
      borderRadius: `${radius}px`,
      padding: `${padding}px`,
      boxShadow: shadows[shadow],
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      transition: "transform var(--dur-med) var(--ease-out-quart), box-shadow var(--dur-med) var(--ease-out-quart)",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------
   WineCard — burgundy accent card
   ------------------------------------------------------------ */
function WineCard({ children, radius = 28, padding = 36, tilt = 0, shadow = 3, style = {} }) {
  const shadows = {
    2: "0 2px 4px rgba(58,10,12,.12), 0 8px 18px rgba(58,10,12,.18)",
    3: "0 6px 12px rgba(58,10,12,.16), 0 22px 44px rgba(58,10,12,.24)",
    4: "0 10px 18px rgba(58,10,12,.2), 0 32px 64px rgba(58,10,12,.28)",
  };
  return (
    <div style={{
      background: "var(--bg-accent)",
      color: "var(--fg-on-wine)",
      borderRadius: `${radius}px`,
      padding: `${padding}px`,
      boxShadow: shadows[shadow] || shadows[3],
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      transition: "transform var(--dur-med) var(--ease-out-quart), box-shadow var(--dur-med) var(--ease-out-quart)",
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------
   Button — primary wine pill (default), secondary, or text link
   ------------------------------------------------------------ */
function Button({ children, variant = "primary", size = "md", icon, onClick, href, style = {} }) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 22px", fontSize: 14 },
    lg: { padding: "14px 26px", fontSize: 15 },
  };
  const variants = {
    primary: {
      background: hover ? "var(--wine-700)" : "var(--wine-500)",
      color: "var(--cream-50)",
      border: "none",
      boxShadow: hover ? "0 4px 12px rgba(58,10,12,.24)" : "0 2px 6px rgba(58,10,12,.18)",
    },
    secondary: {
      background: hover ? "var(--cream-50)" : "var(--cream-100)",
      color: "var(--wine-500)",
      border: "1px solid rgba(122,26,26,.22)",
      boxShadow: "none",
    },
    onWine: {
      background: hover ? "var(--cream-50)" : "transparent",
      color: hover ? "var(--wine-700)" : "var(--cream-50)",
      border: "1px solid rgba(247,239,224,.4)",
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: "var(--wine-500)",
      border: "none",
      boxShadow: "none",
      borderBottom: `1px solid ${hover ? "var(--wine-500)" : "rgba(122,26,26,.4)"}`,
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: sizes[size].padding,
        fontFamily: "var(--font-body)",
        fontSize: sizes[size].fontSize,
        fontWeight: 500,
        letterSpacing: "0.02em",
        borderRadius: variant === "ghost" ? 0 : 999,
        cursor: "pointer",
        textDecoration: "none",
        transition: "all var(--dur-fast) var(--ease-out-quart)",
        ...variants[variant],
        ...style,
      }}>
      {icon && <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>}
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------
   Tag — small pill (wine, cream, or outlined)
   ------------------------------------------------------------ */
function Tag({ children, variant = "wine", style = {} }) {
  const variants = {
    wine:    { background: "var(--wine-500)", color: "var(--cream-50)", border: "none" },
    cream:   { background: "var(--cream-100)", color: "var(--wine-500)", border: "1px solid rgba(122,26,26,.18)" },
    outline: { background: "transparent", color: "var(--fg-muted)", border: "1px solid rgba(94,71,51,.3)" },
    deep:    { background: "var(--wine-900)", color: "var(--wine-100)", border: "none" },
  };
  return (
    <span style={{
      display: "inline-block",
      padding: "5px 13px",
      borderRadius: 999,
      fontFamily: "var(--font-body)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      ...variants[variant],
      ...style,
    }}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------
   MetaDot — middle-dot separated meta line
   ------------------------------------------------------------ */
function MetaDot({ items, color = "var(--fg-muted)", sep = "·", style = {} }) {
  return (
    <div style={{
      display: "inline-flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color,
      ...style,
    }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ opacity: 0.55 }}>{sep}</span>}
          <span>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   Section — vertical rhythm container
   ------------------------------------------------------------ */
function Section({ id, children, py = "var(--space-20)", style = {}, screenLabel }) {
  return (
    <section
      id={id}
      data-screen-label={screenLabel}
      style={{
        padding: `${py} var(--space-8)`,
        maxWidth: 1200,
        margin: "0 auto",
        ...style,
      }}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------
   PhotoCard — rounded photo with optional grain overlay
   ------------------------------------------------------------ */
function PhotoCard({ src, alt = "", radius = 28, aspect = "3/4", tilt = 0, shadow = 3, grain = true, caption, style = {} }) {
  const shadows = {
    2: "0 4px 10px rgba(58,10,12,.12), 0 12px 24px rgba(58,10,12,.14)",
    3: "0 8px 14px rgba(58,10,12,.14), 0 24px 48px rgba(58,10,12,.18)",
    4: "0 10px 18px rgba(58,10,12,.2), 0 32px 64px rgba(58,10,12,.24)",
  };
  return (
    <div style={{
      position: "relative",
      borderRadius: `${radius}px`,
      overflow: "hidden",
      aspectRatio: aspect,
      boxShadow: shadows[shadow] || shadows[3],
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style,
    }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
      {grain && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(../../assets/grain.svg)",
          backgroundSize: "300px",
          mixBlendMode: "multiply",
          opacity: 0.18,
          pointerEvents: "none",
        }}/>
      )}
      {caption && (
        <div style={{
          position: "absolute", left: 14, bottom: 12,
          fontFamily: "var(--font-display-alt)",
          fontSize: 11, letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--cream-50)",
          textShadow: "0 1px 4px rgba(0,0,0,.5)",
        }}>{caption}</div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------
   Monogram — SP italic, configurable size/variant
   ------------------------------------------------------------ */
function Monogram({ size = 32, variant = "filled" }) {
  const styles = {
    filled: { background: "var(--wine-500)", color: "var(--cream-50)", border: "none" },
    outline: { background: "transparent", color: "var(--wine-500)", border: "1.5px solid var(--wine-500)" },
    cream: { background: "var(--cream-100)", color: "var(--wine-500)", border: "none" },
  };
  return (
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: size * 0.5,
      letterSpacing: "-0.02em",
      flex: "0 0 auto",
      ...styles[variant],
    }}>
      <span style={{ marginTop: -size * 0.04 }}>SP</span>
    </div>
  );
}

/* ------------------------------------------------------------
   Re-render Lucide icons whenever new ones land in the DOM.
   ------------------------------------------------------------ */
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [dep]);
}

Object.assign(window, {
  Eyebrow, Card, WineCard, Button, Tag, MetaDot, Section, PhotoCard, Monogram, useLucide,
});
