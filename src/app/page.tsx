import { Header, Hero, StatsStrip, Research, ResearchTrends, ResearchFeed, Projects, Team, Publications, Join, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Research />
        <section id="radar">
          <ResearchTrends />
          <ResearchFeed />
        </section>
        <Projects />
        <Team />
        <Publications />
        <Join />
      </main>
      <Footer />
    </>
  );
}
