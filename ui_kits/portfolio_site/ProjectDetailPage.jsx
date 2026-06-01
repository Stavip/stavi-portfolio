/* Full-page project case study */

import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "./Header.jsx";
import {
  FeaturedProjectDetailPage,
  ProjectModalEyebrow,
} from "./FeaturedProject.jsx";
import { getProject } from "./projects/registry.js";
import { useLucide } from "./components.jsx";

export default function ProjectDetailPage({ onNav }) {
  const { slug } = useParams();
  const project = getProject(slug);
  useLucide();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const {
    coverSrc,
    coverAlt,
    course,
    modalDuration,
    modalTitle,
    lead,
    sections,
    meta,
    presentationUrl,
    mediaTone,
  } = project;

  return (
    <>
      <Header active="work" onNav={onNav} />
      <main className="rise project-detail-page" style={{ paddingTop: 90, position: "relative", zIndex: 2 }}>
        <Link to="/" className="project-detail-back" onClick={() => onNav("work")}>
          <i data-lucide="arrow-left" style={{ width: 16, height: 16 }} />
          Back to Work
        </Link>
        <FeaturedProjectDetailPage
          coverSrc={coverSrc}
          coverAlt={coverAlt}
          mediaTone={mediaTone}
          eyebrow={<ProjectModalEyebrow course={course} duration={modalDuration} />}
          title={modalTitle}
          lead={lead}
          sections={sections}
          meta={meta}
          presentationUrl={presentationUrl}
        />
      </main>
    </>
  );
}
