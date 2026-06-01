/* Breedj — featured project */

import { FeaturedProjectCard, ProjectEyebrow } from "./FeaturedProject.jsx";

export const BREEDJ_SLUG = "breedj";

export const BREEDJ_PRESENTATION =
  "https://docs.google.com/presentation/d/1seP6nToCu_BlbGYiGQOWBQAzd9Ej_BuaE0u2lAxCUEg/edit?usp=sharing";

export const breedjProject = {
  slug: BREEDJ_SLUG,
  coverSrc: "/assets/breedj-cover.png",
  coverAlt: "Breedj logo on a blue gradient — 1st social bridging platform",
  mediaTone: "photo",
  course: "MS&E 108",
  courseLabel: "Capstone",
  title: "Breedj: GTM & Expansion Strategy",
  tagline: "Capstone consulting project for a global Employer of Record platform",
  modalDuration: "10 weeks",
  modalTitle: "Breedj: GTM & Expansion Strategy",
  lead: "Capstone consulting project for a global Employer of Record platform",
  presentationUrl: BREEDJ_PRESENTATION,
  meta: {
    length: "10 weeks",
    tools: "Excel, Google Slides, World Bank Data360, Python for data analysis",
    skills:
      "Market segmentation, country scoring frameworks, competitive analysis, go-to-market strategy, data modeling, EOR/HR tech industry research",
  },
  sections: [
    {
      title: "Background",
      paragraphs: [
        "This was my capstone project at Stanford, completed as part of a team of four. Our client was Breedj, a global Employer of Record platform that connects companies in developed markets — primarily France, Belgium, and the US — with talent in emerging markets, handling contracts, payroll, and compliance on their behalf. The company had an ambitious goal: grow from $10M to $96M in annual recurring revenue by 2030. Our job was to tell them where to expand and how to sell.",
      ],
    },
    {
      title: "The Problem",
      paragraphs: [
        "Breedj had a striking gap in their data. They had 38,100 registered professionals across 185 countries — and only about 300 active placements. That is a conversion rate of roughly 0.8%. The core issue was structural: Breedj could only legally employ talent in the 9 countries where they had local subsidiaries. In every other market, professionals either worked as freelancers or did not work through Breedj at all. They had built an enormous talent network they could not fully activate.",
        "The question we were brought in to answer: which countries should Breedj open subsidiaries in next, and what go-to-market strategy would actually move the needle?",
      ],
    },
    {
      title: "Our Approach",
      paragraphs: [
        "We built two things. First, a country prioritization framework that evaluated 17 candidate markets across two tracks. \"Activate\" markets were countries where Breedj already had significant registered talent but no subsidiary — opening there would convert an existing pipeline into near-term revenue. \"Build\" markets were countries with strong fundamentals but low current talent density — longer horizon opportunities requiring investment before a subsidiary made sense.",
        "We developed two separate scoring models, each with weighted dimensions including GTM fit, talent supply quality, operational feasibility, and macro stability. We also mapped four hiring corridors — Francophone West Africa, Anglophone Africa, East Africa, and an indirect US channel — to show how expansion decisions compound rather than operate in isolation. A subsidiary in Nigeria is far more valuable if South Africa follows, because together they create a credible Anglophone Africa offering.",
        "Second, we developed a go-to-market strategy that treated Breedj's two client channels as fundamentally separate problems. Their direct channel — French and Belgian mid-market companies — needed corridor-specific content, a structured LinkedIn presence, and targeted outbound to founder-led firms. Their indirect channel — US-based EOR platforms like Deel and Oyster who subcontract African placements — needed something different entirely: not marketing, but business development positioning Breedj as the African specialist that global platforms cannot replicate internally.",
      ],
    },
    {
      title: "Key Recommendations",
      paragraphs: [
        "Four immediate expansion targets: Nigeria and South Africa in the Anglophone Africa corridor, Rwanda in East Africa, and the Philippines and Colombia as Build markets for the US indirect channel. A phased roadmap sequenced by corridor strength rather than individual country scores. A lean three-person GTM team with clear channel ownership. A target to increase conversion from 0.8% to 1.5% within 12 months — which would add roughly 270 active placements without acquiring a single new registered talent.",
      ],
    },
    {
      title: "Outcome",
      paragraphs: [
        "We delivered a full written report, a scoring spreadsheet with transparent methodology, and a presentation to the Breedj team. Working directly with the founder and CEO throughout the project pushed the analysis to be operationally grounded rather than theoretically clean — he challenged our assumptions in real time and shaped several of our final recommendations.",
      ],
    },
  ],
};

export function BreedjProjectCard() {
  return (
    <FeaturedProjectCard
      to={`/projects/${BREEDJ_SLUG}`}
      coverSrc={breedjProject.coverSrc}
      coverAlt={breedjProject.coverAlt}
      eyebrow={<ProjectEyebrow course={breedjProject.course} label={breedjProject.courseLabel} />}
      title={breedjProject.title}
      tagline={breedjProject.tagline}
      mediaTone={breedjProject.mediaTone}
    />
  );
}
