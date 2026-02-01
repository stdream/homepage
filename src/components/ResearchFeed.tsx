"use client";

import { useState, useEffect } from "react";

interface FeedItem {
  id: string;
  type: "featured" | "regular";
  title: string;
  description: string;
  source: string;
  sourceColor?: string;
  time: string;
  link?: string;
  authors?: string;
  tags?: string[];
  isHot?: boolean;
}

const skeletonItems: FeedItem[] = [
  { id: "skeleton-1", type: "featured", title: "", description: "", source: "", time: "" },
  { id: "skeleton-2", type: "regular", title: "", description: "", source: "", time: "" },
  { id: "skeleton-3", type: "regular", title: "", description: "", source: "", time: "" },
  { id: "skeleton-4", type: "regular", title: "", description: "", source: "", time: "" },
];

export default function ResearchFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchFeed = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/feed");
      const result = await response.json();

      if (result.success) {
        setFeedItems(result.data);
        setLastUpdated(new Date().toLocaleTimeString("ko-KR"));
      } else {
        setError("데이터를 불러오는데 실패했습니다");
      }
    } catch (err) {
      setError("네트워크 오류가 발생했습니다");
      console.error("Feed fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
    const interval = setInterval(fetchFeed, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const displayItems = isLoading ? skeletonItems : feedItems;

  return (
    <section id="live-feed" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <span className={`w-3 h-3 ${isLoading ? "bg-[#FFDE59]" : "bg-[#00D4FF]"} live-dot`} />
              <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-black">
                {isLoading ? "Loading..." : "Live from arXiv"}
              </span>
              {lastUpdated && !isLoading && (
                <span className="text-black/50 text-xs font-medium">
                  (업데이트: {lastUpdated})
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">
              Latest Research Papers
            </h2>
            <p className="text-black/60 mt-2 text-sm sm:text-base font-medium">
              arXiv에서 가져온 최신 지식공학 연구 논문
            </p>
          </div>
          <button
            onClick={fetchFeed}
            disabled={isLoading}
            className="px-4 py-2 border-2 border-black bg-white text-black font-bold text-sm uppercase hover:bg-[#00D4FF] transition-colors disabled:opacity-50 flex items-center gap-2 self-start"
          >
            <svg className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            새로고침
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-12 border-2 border-black bg-white">
            <p className="text-black font-bold">{error}</p>
            <button
              onClick={fetchFeed}
              className="mt-4 px-4 py-2 border-2 border-black bg-[#FFDE59] font-bold text-sm uppercase hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              다시 시도
            </button>
          </div>
        )}

        {/* Feed Grid */}
        {!error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Featured Item */}
            {displayItems
              .filter((item) => item.type === "featured")
              .map((item) => (
                <div
                  key={item.id}
                  className="lg:row-span-2 border-4 border-black bg-[#FFDE59] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-7"
                >
                  {isLoading ? (
                    <div className="animate-pulse">
                      <div className="h-4 bg-black/20 w-20 mb-4" />
                      <div className="h-8 bg-black/20 w-full mb-3" />
                      <div className="h-8 bg-black/20 w-3/4 mb-4" />
                      <div className="h-4 bg-black/20 w-full mb-2" />
                      <div className="h-4 bg-black/20 w-full mb-2" />
                      <div className="h-4 bg-black/20 w-2/3" />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        {item.isHot && (
                          <span className="px-2 py-1 bg-black text-white text-xs font-bold uppercase flex items-center gap-1">
                            <span className="w-2 h-2 bg-[#FF6B9D] live-dot" />
                            New
                          </span>
                        )}
                        <span className="text-black/60 text-xs sm:text-sm font-medium">{item.time}</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-black text-black mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      {item.authors && (
                        <p className="text-black/70 text-sm font-bold mb-2">{item.authors}</p>
                      )}
                      <p className="text-black/60 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-4">
                        {item.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-black/50 text-xs sm:text-sm font-bold uppercase">{item.source}</span>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors text-sm border-2 border-black bg-white inline-flex items-center gap-1"
                          >
                            Read paper &rarr;
                          </a>
                        )}
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border-2 border-black px-2 py-0.5 text-xs font-bold uppercase bg-white text-black"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

            {/* Regular Items */}
            {displayItems
              .filter((item) => item.type === "regular")
              .map((item) => (
                <a
                  key={item.id}
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 block"
                >
                  {isLoading ? (
                    <div className="animate-pulse flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 bg-gray-200 border-2 border-black" />
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 w-24 mb-2" />
                        <div className="h-4 bg-gray-200 w-full mb-2" />
                        <div className="h-3 bg-gray-200 w-3/4" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 border-2 border-black bg-[#00D4FF] flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-black/50 text-xs font-bold uppercase">{item.source}</span>
                          <span className="text-black/30">&bull;</span>
                          <span className="text-black/50 text-xs font-medium">{item.time}</span>
                        </div>
                        <h4 className="text-black font-bold mb-1 line-clamp-2 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        {item.authors && (
                          <p className="text-black/50 text-xs truncate">{item.authors}</p>
                        )}
                      </div>
                    </div>
                  )}
                </a>
              ))}
          </div>
        )}

        {/* arXiv Link */}
        <div className="text-center mt-10">
          <a
            href="https://arxiv.org/list/cs.CL/recent"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-black bg-white text-black font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 inline-flex items-center gap-2"
          >
            View more on arXiv
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
