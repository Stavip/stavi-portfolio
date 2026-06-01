/* Champion — featured project */

import { FeaturedProjectCard, ProjectEyebrow } from "./FeaturedProject.jsx";

export const CHAMPION_SLUG = "champion";

export const CHAMPION_PRESENTATION =
  "https://docs.google.com/presentation/d/1nifwF_dtZeHxMnLImrAx2hqfTPyBSgVo1O-FDmHUPFs/edit?usp=sharing";

export const championProject = {
  slug: CHAMPION_SLUG,
  mediaTone: "photo",
  coverSrc: "/assets/champion-cover.png",
  coverAlt:
    "Champion app illustration — athlete on a track with bold yellow and purple graphics",
  course: "MS&E 272",
  courseLabel: "Entrepreneurship without borders",
  title: "Champion",
  tagline: "An AI-powered platform connecting refugee youth through sports",
  modalDuration: "10 weeks",
  modalTitle: "Champion",
  lead: "An AI-powered platform connecting refugee youth through sports",
  presentationUrl: CHAMPION_PRESENTATION,
  meta: {
    length: "10 weeks",
    tools: "Figma, Viber, Firebase, survey tools, spreadsheets, Zoom",
    skills:
      "User research, customer discovery, product strategy, financial modeling, go-to-market, market sizing, competitive analysis",
  },
  sections: [
    {
      title: "Background",
      paragraphs: [
        "Champion was built as part of MS&E 272: Entrepreneurship Without Borders at Stanford, a course that challenges students to apply entrepreneurial thinking to real-world problems aligned with the UN Sustainable Development Goals. Working in a team of three, I served as Cofounder and Product Lead across ten weeks of research, design, and iteration.",
        "I chose this problem because it was personal. I have roots in Greece, and Greece sits at the center of major European migration routes — it receives more refugees than most people realize. Over 100,000 refugees currently live in Greece, and nearly half of them are children. We chose to focus on them.",
      ],
    },
    {
      title: "The Problem",
      paragraphs: [
        "Refugee youth face a specific and often invisible kind of pain: not just displacement, but disconnection. Many are deeply traumatized by what they have experienced, and that trauma causes them to close off socially. Existing sports programs in Greece are fragmented, hard to access, and not designed to create the kind of belonging these kids actually need. Legal barriers prevent many from joining formal leagues. Geographic distance makes attending programs nearly impossible. And even when they do show up, many still feel psychologically invisible.",
      ],
      quoteIntro: "One NGO staff member we interviewed put it simply:",
      quote:
        "These kids don't need a league. They need someone to say 'Let's go play.'",
    },
    {
      title: "The Pivot",
      paragraphs: [
        "Our original idea was a physical youth sports league run by college athletes. We reached out to 50 students to test interest — and fewer than five signed up. Instead of pushing forward, we went back to our interview data. What we found was consistent across every conversation: what young people want is not a formal program. They want a friend to play with and someone older who understands.",
        "That insight completely changed our product. We pivoted from an in-person league to a digital platform, and from a nonprofit structure to a freemium model that keeps core features free for refugee and underserved youth while generating revenue from middle-income users.",
      ],
    },
    {
      title: "The Product",
      paragraphs: [
        "Champion is an app that connects kids geographically so they can arrange pickup games and build friendships through sport — without distinguishing between refugee and non-refugee. It also gives users access to college athlete mentors: people who can inspire them, answer their questions, and show them what is possible. The mentorship layer is built around the insight that belonging is emotional, not structural. One coach saying \"you belong here\" can change everything.",
        "We ran a second experiment pairing five Stanford athletes with five students in Greece. Mentor usefulness was rated 4.5 out of 5. Likelihood of meeting a local peer was rated 4 out of 5. Our second sign-up round drew over 50 students — clear validation that we were now solving the right problem.",
      ],
    },
    {
      title: "Process",
      paragraphs: [
        "Our work moved through three phases. First, we conducted over 20 interviews with refugee youth, coaches, NGO staff, mental health professionals, and student-athletes to understand the real barriers and emotional needs at play. Second, we designed and tested our pivot — running two rounds of experiments that helped us move from a failed concept to a validated product direction. Third, we built out the business: financial modeling, market sizing, a freemium pricing model, and a go-to-market strategy built around NGO partnerships and athlete ambassadors in Greece and the US.",
      ],
    },
    {
      title: "Outcome",
      paragraphs: [
        "Champion was presented in front of industry experts as our final deliverable. We also produced a full CHI-style research paper documenting our process, findings, and design implications. The project taught me what it actually means to do product work — not starting with a solution, but sitting with a problem long enough to understand it.",
      ],
    },
  ],
};

export function ChampionProjectCard() {
  return (
    <FeaturedProjectCard
      to={`/projects/${CHAMPION_SLUG}`}
      coverSrc={championProject.coverSrc}
      coverAlt={championProject.coverAlt}
      eyebrow={
        <ProjectEyebrow course={championProject.course} label={championProject.courseLabel} />
      }
      title={championProject.title}
      tagline={championProject.tagline}
      mediaTone={championProject.mediaTone}
    />
  );
}
