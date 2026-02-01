import { NextResponse } from "next/server";
import { fetchArxivPapers, getRelativeTime } from "@/lib/fetchArxiv";

export const revalidate = 3600; // 1시간마다 재검증

export async function GET() {
  try {
    const papers = await fetchArxivPapers(8);

    const feedItems = papers.map((paper, index) => ({
      id: paper.id,
      type: index === 0 ? "featured" : "regular",
      title: paper.title,
      description: paper.summary.slice(0, 200) + "...",
      source: "arXiv",
      sourceColor: "orange",
      time: getRelativeTime(paper.published),
      link: paper.link,
      authors: paper.authors.slice(0, 3).join(", ") + (paper.authors.length > 3 ? " et al." : ""),
      tags: paper.categories.slice(0, 3),
      isHot: index === 0,
    }));

    return NextResponse.json({
      success: true,
      data: feedItems,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Feed API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch feed" },
      { status: 500 }
    );
  }
}
