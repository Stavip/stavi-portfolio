import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AboutSection from "./AboutSection.jsx";
import LeadershipSection from "./LeadershipSection.jsx";
import WorkSection from "./WorkSection.jsx";
import ContactSection from "./ContactSection.jsx";

export default function HomePage({ active, onNav }) {
  return (
    <>
      <Header active={active} onNav={onNav} />
      <main className="rise" style={{ paddingTop: 90, position: "relative", zIndex: 2 }}>
        <Hero onNav={onNav} />
        <AboutSection />
        <LeadershipSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
}
