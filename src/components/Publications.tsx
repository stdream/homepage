"use client";

import { useState, useMemo } from "react";
import { publications, PublicationType, typeLabels } from "@/data/publications";

const typeColors: Record<PublicationType, string> = {
  journal: "bg-[#00D4FF] border-2 border-black text-black",
  conference: "bg-[#FFDE59] border-2 border-black text-black",
  workshop: "bg-white border-2 border-black text-black",
};

export default function Publications() {
  const [typeFilter, setTypeFilter] = useState<"all" | PublicationType>("all");
  const [yearFilter, setYearFilter] = useState<number | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(publications.map((p) => p.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesType = typeFilter === "all" || pub.type === typeFilter;
      const matchesYear = yearFilter === "all" || pub.year === yearFilter;
      return matchesType && matchesYear;
    });
  }, [typeFilter, yearFilter]);

  const displayedPublications = showAll ? filteredPublications : filteredPublications.slice(0, 10);

  const stats = useMemo(() => ({
    total: publications.length,
    journals: publications.filter((p) => p.type === "journal").length,
    conferences: publications.filter((p) => p.type === "conference").length,
  }), []);

  return (
    <section id="publications" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">Publications</h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4 mb-8">연구 논문 및 학술 발표</p>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <div className="bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.total}</span>
              <p className="text-xs font-bold uppercase text-black">Total</p>
            </div>
            <div className="bg-[#00D4FF] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.journals}</span>
              <p className="text-xs font-bold uppercase text-black">Journals</p>
            </div>
            <div className="bg-[#FFDE59] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.conferences}</span>
              <p className="text-xs font-bold uppercase text-black">Conferences</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(typeLabels) as Array<"all" | PublicationType>).map((type) => (
              <button
                key={type}
                onClick={() => { setTypeFilter(type); setShowAll(false); }}
                className={`px-4 py-2 text-sm font-bold uppercase transition-colors border-2 border-black ${
                  typeFilter === type
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>

          <select
            value={yearFilter}
            onChange={(e) => { setYearFilter(e.target.value === "all" ? "all" : Number(e.target.value)); setShowAll(false); }}
            className="px-4 py-2 bg-white text-black border-2 border-black font-bold text-sm appearance-none cursor-pointer focus:outline-none"
          >
            <option value="all">ALL YEARS</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-center text-black/60 text-sm font-medium mb-6">
          {filteredPublications.length}개의 논문
          {!showAll && filteredPublications.length > 10 && ` (${displayedPublications.length}개 표시 중)`}
        </p>

        {/* Publications List */}
        <div className="space-y-4">
          {displayedPublications.map((pub) => (
            <div
              key={pub.id}
              className="p-4 sm:p-5 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-bold ${typeColors[pub.type]}`}>
                      {typeLabels[pub.type]}
                    </span>
                    <span className="text-black/50 text-xs font-medium">{pub.year}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1.5 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-black/60 text-xs sm:text-sm mb-1">{pub.authors}</p>
                  <p className="text-black/40 text-xs italic">{pub.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        {filteredPublications.length > 10 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border-2 border-black bg-white text-black font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <span>접기</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  <span>더 보기 ({filteredPublications.length - 10}개)</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}


      </div>
    </section>
  );
}
