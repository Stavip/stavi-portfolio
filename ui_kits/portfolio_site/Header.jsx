/* Header — sticky capsule nav, monogram + sections + CTA */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Monogram, Button, useLucide } from "./components.jsx";

export default function Header({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useLucide();

  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "leadership", label: "Leadership" },
    { id: "work", label: "Work" },
  ];

  return (
    <div style={{
      position: "fixed",
      top: 18,
      left: 0, right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 100,
      pointerEvents: "none",
    }}>
      <div style={{
        pointerEvents: "auto",
        display: "flex",
        alignItems: "center",
        gap: 22,
        background: scrolled ? "rgba(247,239,224,.92)" : "rgba(247,239,224,.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderRadius: 999,
        padding: "10px 14px 10px 18px",
        boxShadow: scrolled
          ? "0 6px 16px rgba(58,10,12,.16)"
          : "0 2px 8px rgba(58,10,12,.10)",
        transition: "all var(--dur-med) var(--ease-out-quart)",
      }}>
        <Link to="/" onClick={() => onNav("home")} style={{ display: "inline-flex" }}>
          <Monogram size={34}/>
        </Link>
        <nav style={{ display: "flex", gap: 20 }}>
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a key={it.id}
                 href={it.id === "home" ? "/" : `/#${it.id}`}
                 onClick={(e) => { e.preventDefault(); onNav(it.id); }}
                 style={{
                   fontFamily: "var(--font-body)",
                   fontSize: 13,
                   fontWeight: isActive ? 600 : 500,
                   color: isActive ? "var(--wine-500)" : "var(--ink-700)",
                   textDecoration: "none",
                   borderBottom: isActive ? "1px solid var(--wine-500)" : "1px solid transparent",
                   paddingBottom: 2,
                   transition: "color var(--dur-fast)",
                   cursor: "pointer",
                 }}>
                {it.label}
              </a>
            );
          })}
        </nav>
        <Button size="sm" onClick={() => onNav("contact")} icon="mail">Get in touch</Button>
      </div>
    </div>
  );
}
