import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "../../colors_and_type.css";
import "./app.css";

import { Eyebrow, Button, useLucide } from "./components.jsx";
import HomePage from "./HomePage.jsx";
import ProjectDetailPage from "./ProjectDetailPage.jsx";

function EssayModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  useLucide();

  return (
    <div className="essay-overlay" onClick={onClose}>
      <div className="essay-modal" onClick={(e) => e.stopPropagation()}>
        <button className="essay-close" onClick={onClose}>
          <i data-lucide="x" style={{ width: 16, height: 16 }}></i>
        </button>
        <Eyebrow style={{ marginBottom: 18 }}>Essay · Medium · 2026</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 44,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--ink-900)",
          margin: 0,
        }}>
          On <em style={{ fontWeight: 400 }}>believing in people</em> before they believe in themselves.
        </h2>
        <div style={{
          marginTop: 16,
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--fg-muted)",
          letterSpacing: "0.04em",
        }}>By Stavroula Papadaki · 8 min read</div>

        <div style={{
          marginTop: 28,
          fontFamily: "var(--font-body)",
          fontSize: 16,
          lineHeight: 1.75,
          color: "var(--ink-700)",
        }}>
          <p style={{ marginTop: 0 }}>
            The first time I captained a national team, I was sixteen, the youngest player on a U18 roster, and nobody had asked me to lead anything. We finished third in Greece that year as underdogs, and the lesson I took home wasn't about strategy or shots. It was about the quiet decision a captain makes, the one no one sees, to believe in a teammate <em>before</em> she believes in herself.
          </p>
          <p>
            I grew up in Chania, Greece, and from a young age I was surrounded by teams. Basketball became my world pretty early on, and I quickly realized that what makes a team great is not always talent, but whether people believe in each other. That is something I carried with me to Stanford, where I played Division I basketball and eventually became a captain.
          </p>
          <p>
            I never thought of myself as the loudest or most dominant player, but I cared a lot about my teammates and what they were capable of, sometimes more than they did themselves. Looking back, that is probably the clearest thing I can say about how I lead. I believe in people before they believe in themselves.
          </p>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.45,
            color: "var(--ink-900)",
            margin: "28px 0",
            borderLeft: "3px solid var(--wine-500)",
            paddingLeft: 18,
          }}>
            The captain on the floor and the analyst in the seminar room turn out to be the same person, asking the same question. What does this team need to move forward together?
          </p>
          <p>
            The full essay continues on Medium. This is a preview drop-in; click the close button or press Escape to return.
          </p>
        </div>

        <div style={{
          marginTop: 28, paddingTop: 22,
          borderTop: "1px solid var(--border-soft)",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14,
        }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: 15,
            color: "var(--fg-muted)",
          }}>Yours, Stavi</div>
          <Button icon="arrow-up-right" href="#" onClick={(e) => { e.preventDefault(); alert("(prototype) Would open the full essay on Medium."); }}>Continue on Medium</Button>
        </div>
      </div>
    </div>
  );
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function AppRoutes() {
  const [active, setActive] = useState("home");
  const [essayOpen, setEssayOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onNav = useCallback((id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 120);
      return;
    }
    scrollToSection(id);
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash.replace("#", "");
    if (hash) {
      const t = setTimeout(() => scrollToSection(hash), 80);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = ["home", "about", "leadership", "work", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname]);

  useLucide();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage active={active} onNav={onNav} />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage onNav={onNav} />} />
      </Routes>
      {essayOpen ? <EssayModal onClose={() => setEssayOpen(false)} /> : null}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
