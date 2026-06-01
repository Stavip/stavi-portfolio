/* Rally — featured project */

import { FeaturedProjectCard, ProjectEyebrow } from "./FeaturedProject.jsx";

export const RALLY_SLUG = "rally";

export const rallyProject = {
  slug: RALLY_SLUG,
  coverSrc: "/assets/rally-cover.png?v=1",
  coverAlt: "Rally logo — cream wordmark with flag emblem on navy blue",
  mediaTone: "photo",
  course: "MS&E 265",
  courseLabel: "Product Management",
  title: "Rally",
  tagline: "A mobile app turning freshman dorm identity into Stanford Athletics culture",
  modalDuration: "10 weeks (ongoing)",
  modalTitle: "Rally",
  lead: "A mobile app turning freshman dorm identity into Stanford Athletics culture",
  presentationUrl: null,
  meta: {
    length: "10 weeks (ongoing)",
    tools: "Figma, Firebase, React Native",
    skills:
      "User research, product strategy, MVP design, behavioral design, go-to-market, product roadmap",
  },
  sections: [
    {
      title: "Background",
      paragraphs: [
        "This project was built as part of a product management course at Stanford, working in a team of four over the course of a quarter. Our client was Stanford DAPER — the Department of Athletics, Physical Education, and Recreation — specifically the Marketing and Fan Experience staff responsible for driving student attendance across 36 varsity sports. I served as the de facto team lead, running our weekly meetings, coordinating with our mentor, and driving us from problem definition through a working MVP design.",
      ],
    },
    {
      title: "The Problem",
      paragraphs: [
        "The numbers were striking. Across three football seasons, the average Stanford student attended fewer than two games per season. Seventy-three percent of students who attended a game in FY24 did not return the following year. Non-marquee games drew as little as 2-5% student representation in scanned attendance. The student fanbase was not compounding over time.",
        "What made this hard was that the problem had nothing to do with access. Tickets are free. The stadium is walkable. Students know games exist. The real problem was behavioral: students attended transactionally rather than habitually. The existing marketing infrastructure — Eloqua campaigns, Meta Ads, campus flyering, giveaways — could generate a one-time spike but could not build a sustained culture. It also had no way to distinguish a student who had attended two games last season from one who had never engaged at all.",
      ],
      quotes: [
        {
          intro: "One DAPER staff member put it directly:",
          text: "Before a game, an hour before the game, the number of students who will go down when doors open, get food, and then leave is embarrassing, to be honest.",
        },
        {
          intro: "Another said:",
          text: "I would rather develop a culture here at Stanford where students want to come to a game because they want to come to a game.",
        },
      ],
    },
    {
      title: "The Insight",
      paragraphs: [
        "Our interviews with students and DAPER staff kept returning to the same thing: students attend games when they know their friends are going. Not because of promotions, not because of free food, but because attendance felt like a shared decision rather than an individual one. The problem was not a demand problem. It was an infrastructure problem. There was no system that made showing up feel social.",
        "Freshmen were the highest-leverage target. They arrive on campus looking for ways to build friendships, with no prior habits competing with attendance, and no established social structure yet. If the habit does not form in the first year, it almost never forms at all.",
      ],
    },
    {
      title: "The Product",
      paragraphs: [
        "Rally is a mobile app that organizes freshmen into dorm-based teams competing on a live leaderboard across the quarter. The mechanic is simple: attend a Stanford home game, verify you were there, earn points for your dorm. Verification requires two things — your phone must be within the geofenced stadium boundary, and you must enter a secret word announced during the fourth quarter. You cannot show up and leave.",
        "The dorm with the most points at the end of the quarter wins a shared social experience — a Warriors game, a Giants game, a concert — where the whole floor goes together. Individual qualification requires 1000 points, roughly five games per quarter. Five games is enough to build a habit. And because the prize only lands if the dorm wins collectively, every student has a reason to show up that goes beyond personal reward.",
        "RAs get a lightweight dashboard showing their floor's current rank and which residents are close to the qualification threshold. Before each game, they receive a push notification with something concrete to say: \"We're third, we need eight more check-ins to move up.\"",
        "The cold start problem that kills most social apps does not apply here. Every freshman arrives at the same time, with no prior habits, and encounters the app in the same first week.",
      ],
    },
    {
      title: "Where We Are",
      paragraphs: [
        "We are currently transitioning from problem definition to solution development and have completed a full MVP design, economics model, and phased product roadmap. One thing our team surfaced mid-quarter: the product was originally called The Cardinal, which is deeply Stanford-specific. As we thought about expanding to other NCAA programs — and the broader market is roughly 350 Division I programs facing the same problem — we recognized the name needed to change. That kind of sensing, noticing a signal before it becomes a problem, is something we are still working through as a team.",
      ],
    },
  ],
};

export function RallyProjectCard() {
  return (
    <FeaturedProjectCard
      to={`/projects/${RALLY_SLUG}`}
      coverSrc={rallyProject.coverSrc}
      coverAlt={rallyProject.coverAlt}
      eyebrow={<ProjectEyebrow course={rallyProject.course} label={rallyProject.courseLabel} />}
      title={rallyProject.title}
      tagline={rallyProject.tagline}
      mediaTone={rallyProject.mediaTone}
    />
  );
}
