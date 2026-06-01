/* About section — centered story card + reading list */

import { Section, Eyebrow, Card } from "./components.jsx";

const BOOKS_2026 = [
  { title: "The Alchemist", cover: "/assets/book-alchemist.png" },
  { title: "Happy Place", cover: "/assets/book-happy-place.png" },
  { title: "An Offer from a Gentleman", cover: "/assets/book-offer-gentleman.png" },
  { title: "Once and Again", cover: "/assets/book-once-and-again.png" },
  { title: "Hello Beautiful", cover: "/assets/book-hello-beautiful.png" },
];

const bodyStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 21,
  lineHeight: 1.75,
  color: "var(--ink-700)",
};

export default function AboutSection() {
  return (
    <Section id="about" py="120px" screenLabel="02 About">
      <div className="about-story-header">
        <Eyebrow size="section" style={{ marginBottom: 16 }}>About</Eyebrow>
      </div>
      <h2 className="about-story-title" style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: "clamp(40px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: "var(--ink-900)",
        margin: "0 0 56px",
      }}>
        My <em style={{ fontWeight: 400 }}>story</em>
      </h2>

      <div className="about-story-wrap">
        <Card radius={28} padding={56} shadow={2} style={{ padding: "56px 60px" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.4,
            color: "var(--ink-900)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}>
            I grew up in Chania, Greece, and from a young age I was surrounded by teams.
          </p>

          <p style={{ ...bodyStyle, marginTop: 22 }}>
            Basketball became my world pretty early on, and I quickly realized that what makes a team great is not always talent, but whether people believe in each other. That is something I carried with me to Stanford, where I played Division I basketball and eventually became a captain.
          </p>

          <p style={{ ...bodyStyle, marginTop: 16 }}>
            At Stanford I got my Bachelor and Master degree in Management Science and Engineering. I also spent a lot of time learning how to work with people, how to move a team forward, and how to show up as a leader in situations where I had no formal title to do so.
          </p>

          <p style={{ ...bodyStyle, marginTop: 16 }}>
            I am very interested in women&apos;s sports, and passionate about beauty, and fashion! In my free time I love to read. I strive to read a book every month. Here are the books I&apos;ve read this year thus far:
          </p>

          <ol className="about-books">
            {BOOKS_2026.map((book, i) => (
              <li key={book.title} className="about-books__item">
                <img
                  className="about-books__cover"
                  src={book.cover}
                  alt={`${book.title} cover`}
                  width={140}
                  height={210}
                  loading="lazy"
                />
                <span className="about-books__num">{i + 1}.</span>
                <span className="about-books__title">{book.title}</span>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </Section>
  );
}
