// arXiv API를 사용하여 최신 논문 가져오기

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  published: string;
  link: string;
  categories: string[];
}

// KELAB 연구 키워드
const SEARCH_QUERIES = [
  "ontology engineering",
  "knowledge graph construction",
  "formal concept analysis",
  "retrieval augmented generation knowledge graph",
  "ontology learning",
  "graph based retrieval",
  "knowledge representation reasoning",
];

export async function fetchArxivPapers(maxResults: number = 10): Promise<ArxivPaper[]> {
  // 랜덤하게 검색어 선택
  const query = SEARCH_QUERIES[Math.floor(Math.random() * SEARCH_QUERIES.length)];

  const searchQuery = encodeURIComponent(`all:${query}`);
  const url = `https://export.arxiv.org/api/query?search_query=${searchQuery}&start=0&max_results=${maxResults}&sortBy=submittedDate&sortOrder=descending`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1시간마다 재검증
    });

    if (!response.ok) {
      throw new Error(`arXiv API error: ${response.status}`);
    }

    const xmlText = await response.text();
    return parseArxivXml(xmlText);
  } catch (error) {
    console.error("Failed to fetch arXiv papers:", error);
    return [];
  }
}

function parseArxivXml(xmlText: string): ArxivPaper[] {
  const papers: ArxivPaper[] = [];

  // Simple XML parsing without external dependencies
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xmlText)) !== null) {
    const entry = match[1];

    const id = extractTag(entry, "id")?.split("/abs/")[1] || "";
    const title = extractTag(entry, "title")?.replace(/\s+/g, " ").trim() || "";
    const summary = extractTag(entry, "summary")?.replace(/\s+/g, " ").trim() || "";
    const published = extractTag(entry, "published") || "";

    // Extract authors
    const authors: string[] = [];
    const authorRegex = /<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/g;
    let authorMatch;
    while ((authorMatch = authorRegex.exec(entry)) !== null) {
      authors.push(authorMatch[1].trim());
    }

    // Extract link
    const linkMatch = entry.match(/<link[^>]*href="([^"]*)"[^>]*type="text\/html"/);
    const link = linkMatch ? linkMatch[1] : `https://arxiv.org/abs/${id}`;

    // Extract categories
    const categories: string[] = [];
    const categoryRegex = /<category[^>]*term="([^"]*)"/g;
    let catMatch;
    while ((catMatch = categoryRegex.exec(entry)) !== null) {
      categories.push(catMatch[1]);
    }

    if (title && id) {
      papers.push({
        id,
        title,
        summary,
        authors,
        published,
        link,
        categories,
      });
    }
  }

  return papers;
}

function extractTag(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
  const match = xml.match(regex);
  return match ? match[1] : null;
}

// 시간을 상대적으로 표시 (예: "2시간 전")
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전`;
  } else if (diffMins > 0) {
    return `${diffMins}분 전`;
  } else {
    return "방금 전";
  }
}
