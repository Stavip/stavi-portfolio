/* A1Zap — featured project */

import { FeaturedProjectCard, ProjectEyebrow } from "./FeaturedProject.jsx";

export const A1ZAP_SLUG = "a1zap";

export const A1ZAP_PRESENTATION =
  "https://docs.google.com/presentation/d/18V6_4t7Yb9QPCU5S9gcLyKGDDUKfKkLaBmQi8OfJWQ8/edit?usp=sharing";

export const a1zapProject = {
  slug: A1ZAP_SLUG,
  coverSrc: "/assets/a1zap-cover.png?v=2",
  coverAlt: "A1Zap logo — wordmark and lightning bolt",
  mediaTone: "brand",
  course: "MS&E 271",
  courseLabel: "Global Entrepreneurial Marketing",
  title: "A1Zap: GTM Strategy",
  tagline: "Go-to-market strategy for a YC-backed AI messaging platform",
  modalDuration: "10 weeks",
  modalTitle: "A1Zap: GTM Strategy",
  lead: "Go-to-market strategy for a YC-backed AI messaging platform",
  presentationUrl: A1ZAP_PRESENTATION,
  meta: {
    length: "10 weeks",
    tools: "Figma, Google Slides, spreadsheets",
    skills:
      "Market segmentation, competitive analysis, go-to-market strategy, market sizing, demand creation, platform business model analysis",
  },
  sections: [
    {
      title: "Background",
      paragraphs: [
        "This project was part of a Global Entrepreneurial Marketing course at Stanford — a class focused on applying real GTM frameworks to early-stage companies. Our team of five was paired with A1Zap, a YC-backed startup building an AI-native messaging platform where anyone can create, share, and monetize AI agents directly inside their chats. I led the target market analysis, competitive positioning, and market sizing for our final presentation.",
      ],
    },
    {
      title: "The Product",
      paragraphs: [
        "A1Zap sits at an interesting intersection: messaging platforms like WhatsApp and Discord have billions of users but no native AI creation layer, while AI tools like ChatGPT are powerful but isolated and non-social. A1Zap's bet is that the next wave of AI adoption happens inside chat — not in separate apps. Their no-code builder lets non-technical users spin up agents and deploy them in group conversations, with built-in monetization for creators.",
      ],
      quoteIntro: "The founders described their vision simply:",
      quote:
        "YouTube for AI agents. Anyone can build, anyone can use, and the platform takes a cut when agents generate value.",
    },
    {
      title: "The Challenge",
      paragraphs: [
        "The strategic question we kept coming back to was a hard one: how do you compete against messaging platforms that already have billions of users and near-impossible network effects? Slack, Discord, WhatsApp, and iMessage are not just products — they are habits. And AI tools like ChatGPT have strong brand trust and distribution. A1Zap needed a position that did not require beating any of them head-on.",
      ],
    },
    {
      title: "Our Approach",
      paragraphs: [
        "We worked through market segmentation, competitive intelligence, platform vs. linear business model analysis, and demand creation strategy. My section focused on mapping the competitive landscape — identifying what each incumbent does well, where the gaps are, and where A1Zap could own a defensible position.",
        "The gap we identified: no platform combines AI creation, social distribution, and monetization in one place designed for non-technical users. Slack is for work. Discord is for communities. ChatGPT is for solo productivity. None of them let an ADHD coach build a tool, share it with her followers, and earn from it — without writing a single line of code.",
        "That framing shaped our GTM recommendation: go narrow first. Start with college campuses where social behavior and AI curiosity overlap. Find the builders — the student entrepreneur, the campus influencer, the indie developer — and give them a \"magic moment\" early. Everything else follows from creator traction.",
      ],
    },
    {
      title: "Outcome",
      paragraphs: [
        "We delivered a full GTM presentation to the A1Zap team including target market definition, competitive positioning, a phased demand creation strategy, and pricing recommendations. The founders pushed back on several of our assumptions in real time, which made the process feel less like a class project and more like the actual work.",
      ],
    },
  ],
};

export function A1ZapProjectCard() {
  return (
    <FeaturedProjectCard
      to={`/projects/${A1ZAP_SLUG}`}
      coverSrc={a1zapProject.coverSrc}
      coverAlt={a1zapProject.coverAlt}
      eyebrow={<ProjectEyebrow course={a1zapProject.course} label={a1zapProject.courseLabel} />}
      title={a1zapProject.title}
      tagline={a1zapProject.tagline}
      mediaTone={a1zapProject.mediaTone}
    />
  );
}
