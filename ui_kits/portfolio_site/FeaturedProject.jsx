/* Featured project card + full project page */

import { Link } from "react-router-dom";
import { Card, Button, useLucide } from "./components.jsx";

export function ProjectEyebrow({ course, label }) {
  return (
    <div className="project-eyebrow">
      <strong>{course}</strong>: {label}
    </div>
  );
}

export function ProjectModalEyebrow({ course, duration }) {
  return (
    <div className="project-eyebrow project-eyebrow--modal">
      <strong>{course}</strong> · {duration}
    </div>
  );
}

export function FeaturedProjectCard({
  to,
  coverSrc,
  coverAlt,
  eyebrow,
  title,
  tagline,
  mediaTone = "photo",
}) {
  const mediaClass =
    mediaTone === "brand"
      ? "project-card__media project-card__media--brand"
      : "project-card__media";

  return (
    <Card radius={22} padding={0} shadow={2} style={{ overflow: "hidden", height: "100%" }}>
      <Link to={to} className="project-card" aria-label={`Read more about ${title}`}>
        <div className={mediaClass}>
          <img src={coverSrc} alt={coverAlt} loading="lazy" />
        </div>
        <div className="project-card__body">
          <div style={{ marginBottom: 8 }}>{eyebrow}</div>
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__tagline">{tagline}</p>
          <div className="project-card__actions">
            <span className="project-card__cta">
              Read more
              <i data-lucide="arrow-up-right" style={{ width: 15, height: 15 }} />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}

export function FeaturedProjectDetailPage({
  coverSrc,
  coverAlt = "",
  eyebrow,
  title,
  lead,
  sections,
  meta,
  presentationUrl,
  mediaTone = "photo",
}) {
  useLucide();

  const heroClass =
    mediaTone === "brand"
      ? "project-detail-page__hero project-detail-page__hero--brand"
      : "project-detail-page__hero";
  const coverClass =
    mediaTone === "brand"
      ? "project-detail-page__cover project-detail-page__cover--brand"
      : "project-detail-page__cover";

  return (
    <article className="project-detail-page__article">
      <div className={heroClass}>
        <img src={coverSrc} alt={coverAlt} className={coverClass} />
      </div>

      <div className="project-detail-page__intro">
        <div style={{ marginBottom: 12 }}>{eyebrow}</div>
        <h1 className="project-detail-page__title">{title}</h1>
        <p className="project-detail-page__lead">{lead}</p>
      </div>

      <div className="project-detail-page__content">
        {sections.map((section) => (
          <section key={section.title} className="project-detail-page__section">
            <h2 className="project-detail-page__section-title">{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
            {(section.quotes || (section.quote ? [{ intro: section.quoteIntro, text: section.quote }] : [])).map(
              (q) => (
                <div key={q.text.slice(0, 40)}>
                  {q.intro ? <p>{q.intro}</p> : null}
                  <blockquote className="project-detail-page__quote">{q.text}</blockquote>
                </div>
              ),
            )}
          </section>
        ))}
      </div>

      <dl className="project-detail-page__meta">
        <div>
          <dt>Length</dt>
          <dd>{meta.length}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{meta.tools}</dd>
        </div>
        <div className="project-detail-page__meta-wide">
          <dt>Skills</dt>
          <dd>{meta.skills}</dd>
        </div>
      </dl>

      {presentationUrl ? (
        <div className="project-detail-page__footer">
          <Button
            variant="secondary"
            icon="arrow-up-right"
            href={presentationUrl}
            target="_blank"
            rel="noreferrer"
          >
            View presentation
          </Button>
        </div>
      ) : null}
    </article>
  );
}
