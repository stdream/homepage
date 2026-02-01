export type ResearchAreaData = {
  id: number;
  title: string;
  titleKr: string;
  description: string;
  color: string;
  href: string;
};

export const researchAreasData: ResearchAreaData[] = [
  {
    id: 1,
    title: "Ontology Engineering",
    titleKr: "온톨로지 공학",
    description: "How do we formally represent domain knowledge so machines can reason about it?",
    color: "cyan",
    href: "/research/ontology",
  },
  {
    id: 2,
    title: "Knowledge Graph",
    titleKr: "지식 그래프",
    description: "How do we structure real-world knowledge into queryable graph databases?",
    color: "yellow",
    href: "/research/knowledge-graph",
  },
  {
    id: 3,
    title: "Reasoning & Retrieval",
    titleKr: "추론 및 검색",
    description: "How do we make AI systems retrieve and reason over structured knowledge?",
    color: "magenta",
    href: "/research/reasoning-retrieval",
  },
  {
    id: 4,
    title: "Application Domains",
    titleKr: "응용 도메인",
    description: "Where does knowledge engineering create real-world impact?",
    color: "black",
    href: "/research/application-domains",
  },
];

export const accentColors: Record<string, string> = {
  cyan: "#00D4FF",
  yellow: "#FFDE59",
  magenta: "#FF6B9D",
  black: "#000000",
};
