/* Contact — single cream card with form + social row */

import { useState } from "react";
import { Section, Eyebrow, Card, Button, useLucide } from "./components.jsx";

export default function ContactSection() {
  useLucide();
  const [focused, setFocused] = useState(null);
  const [vals, setVals] = useState({ name: "", email: "", msg: "" });

  return (
    <Section id="contact" py="120px" screenLabel="05 Contact">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.25fr",
        gap: 56,
        alignItems: "stretch",
      }}>
        <div style={{ paddingTop: 12 }}>
          <Eyebrow style={{ marginBottom: 14 }}>Contact</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--ink-900)",
            margin: 0,
          }}>
            Interested in my work, my story, or just want to chat? Feel free to reach out!
          </h2>
          <p style={{
            marginTop: 22,
            fontFamily: "var(--font-body)",
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--ink-700)",
            maxWidth: 460,
          }}>
            I'd genuinely love to hear from you. I'm graduating in June 2026 and joining Pump as a BDR shortly after.
          </p>

          <div style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <ContactLink icon="mail" label="staviipp@gmail.com" href="mailto:staviipp@gmail.com"/>
            <ContactLink icon="external-link" label="linkedin.com/in/stavroula-papadaki" href="https://www.linkedin.com/in/stavroula-papadaki/"/>
            <ContactLink icon="map-pin" label="San Francisco, CA"/>
          </div>
        </div>

        <Card radius={32} padding={44} shadow={3}>
          <Eyebrow style={{ marginBottom: 22 }}>Send a note</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <FieldRow label="Your name" placeholder="Eleanor M." value={vals.name} focused={focused === "name"}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              onChange={(v) => setVals({ ...vals, name: v })}/>
            <FieldRow label="Email" placeholder="you@somewhere.com" value={vals.email} focused={focused === "email"}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              onChange={(v) => setVals({ ...vals, email: v })}/>
            <FieldRow label="What you're working on" placeholder="A note about your work, interests or a coffee in SF" value={vals.msg} focused={focused === "msg"} multiline
              onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
              onChange={(v) => setVals({ ...vals, msg: v })}/>
          </div>
          <div style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <Button icon="arrow-up-right" onClick={() => alert("(prototype) Message would be sent.")}>Send note</Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function FieldRow({ label, placeholder, value, focused, onChange, onFocus, onBlur, multiline }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: focused ? "var(--wine-500)" : "var(--fg-muted)",
        marginBottom: 8,
        transition: "color var(--dur-fast)",
      }}>{label}</div>
      <Tag
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={multiline ? 3 : undefined}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: focused
            ? "2px solid var(--wine-500)"
            : "1px solid rgba(94,71,51,.3)",
          padding: "8px 0",
          fontFamily: "var(--font-body)",
          fontSize: 17,
          color: "var(--ink-900)",
          outline: "none",
          resize: "none",
          transition: "border-color var(--dur-fast)",
        }}
      />
    </div>
  );
}

function ContactLink({ icon, label, href }) {
  const [hover, setHover] = useState(false);
  const C = href ? "a" : "div";
  return (
    <C
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noreferrer" : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        color: hover ? "var(--wine-700)" : "var(--ink-700)",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        textDecoration: "none",
        cursor: href ? "pointer" : "default",
        transition: "color var(--dur-fast)",
      }}>
      <i data-lucide={icon} style={{ width: 18, height: 18, color: "var(--wine-500)", flex: "0 0 auto" }}></i>
      <span>{label}</span>
    </C>
  );
}
