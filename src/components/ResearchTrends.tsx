import { researchAreasData, accentColors } from "@/data/research-areas";

// Import JSON paper data directly (server component)
import ontologyPapers from "../../research_area/ontology/results_ontology.json";
import kgPapers from "../../research_area/knowlede_graph/kg_construction_papers.json";
import graphRagPapers from "../../research_area/reasoning_retrieval/graph_rag_papers.json";
import domainBizPapers from "../../research_area/domain_application/domain_business.json";

type Paper = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  citation_count: number;
  abstract: string | null;
  url: string;
};

type TaggedPaper = Paper & { areaId: number; areaColor: string };

function getTopPapers(): TaggedPaper[] {
  const sources: { areaId: number; papers: Paper[] }[] = [
    { areaId: 1, papers: ontologyPapers.papers as Paper[] },
    { areaId: 2, papers: kgPapers.papers as Paper[] },
    { areaId: 3, papers: graphRagPapers.papers as Paper[] },
    { areaId: 4, papers: domainBizPapers.papers as Paper[] },
  ];

  const allPapers: TaggedPaper[] = [];

  for (const source of sources) {
    const area = researchAreasData.find((a) => a.id === source.areaId);
    const color = area ? accentColors[area.color] : "#000000";
    for (const paper of source.papers) {
      allPapers.push({ ...paper, areaId: source.areaId, areaColor: color });
    }
  }

  // Sort by citation count descending, take top 12
  allPapers.sort((a, b) => b.citation_count - a.citation_count);
  return allPapers.slice(0, 12);
}

function formatAuthors(authors: string[]): string {
  if (authors.length <= 3) return authors.join(", ");
  return `${authors.slice(0, 3).join(", ")} et al.`;
}

export default function ResearchTrends() {
  const papers = getTopPapers();

  return (
    <section id="trends" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Research Trends
          </h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Our field&apos;s most cited and influential papers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {papers.map((paper) => {
            const area = researchAreasData.find((a) => a.id === paper.areaId);
            return (
              <a
                key={paper.id}
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
                style={{ borderLeftWidth: "6px", borderLeftColor: paper.areaColor }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-sm sm:text-base text-black leading-snug flex-1">
                    {paper.title}
                  </h3>
                  <span className="flex-shrink-0 inline-flex items-center bg-[#FFDE59] border-2 border-black px-2 py-0.5 text-xs font-black">
                    {paper.citation_count.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-black/60 mb-1">
                  {formatAuthors(paper.authors)}
                </p>
                <div className="flex items-center gap-2 text-xs text-black/50">
                  <span className="italic">{paper.venue || "—"}</span>
                  <span>·</span>
                  <span>{paper.year}</span>
                  {area && (
                    <>
                      <span>·</span>
                      <span
                        className="font-bold uppercase text-[10px] px-1.5 py-0.5 border border-black"
                        style={{ backgroundColor: paper.areaColor + "33" }}
                      >
                        {area.title}
                      </span>
                    </>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
