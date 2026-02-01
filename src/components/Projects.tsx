"use client";

import { useState, useMemo } from "react";
import { projects, ProjectStatus, statusLabels } from "@/data/projects";

const statusColors: Record<ProjectStatus, string> = {
  ongoing: "bg-[#00D4FF] border-2 border-black text-black",
  completed: "bg-gray-200 border-2 border-black text-black",
};

export default function Projects() {
  const [statusFilter, setStatusFilter] = useState<"all" | ProjectStatus>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return statusFilter === "all" || project.status === statusFilter;
    });
  }, [statusFilter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  const stats = useMemo(() => ({
    total: projects.length,
    ongoing: projects.filter((p) => p.status === "ongoing").length,
    completed: projects.filter((p) => p.status === "completed").length,
  }), []);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Research Projects
          </h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4 mb-8">연구 과제 및 산학협력 프로젝트</p>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6">
            <div className="bg-[#FFDE59] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.total}</span>
              <p className="text-xs font-bold uppercase text-black">Total</p>
            </div>
            <div className="bg-[#00D4FF] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.ongoing}</span>
              <p className="text-xs font-bold uppercase text-black">진행 중</p>
            </div>
            <div className="bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-6 py-3">
              <span className="text-2xl sm:text-3xl font-black text-black block">{stats.completed}</span>
              <p className="text-xs font-bold uppercase text-black">완료</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-8 sm:mb-12">
          {(Object.keys(statusLabels) as Array<"all" | ProjectStatus>).map((status) => (
            <button
              key={status}
              onClick={() => { setStatusFilter(status); setShowAll(false); }}
              className={`px-4 py-2 text-sm font-bold uppercase transition-colors border-2 border-black ${
                statusFilter === status
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {statusLabels[status]}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-black/60 text-sm font-medium mb-6">
          {filteredProjects.length}개의 프로젝트
          {!showAll && filteredProjects.length > 8 && ` (${displayedProjects.length}개 표시 중)`}
        </p>

        {/* Projects List */}
        <div className="space-y-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-6 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-bold ${statusColors[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                    <span className="text-black/50 text-xs font-medium">{project.period}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-black mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-black/60 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{project.funder}</span>
                  </div>
                </div>
                {project.status === "ongoing" && (
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00D4FF] border-2 border-black text-black text-xs font-bold uppercase">
                      <span className="w-2 h-2 bg-black" />
                      Active
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        {filteredProjects.length > 8 && (
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
                  <span>더 보기 ({filteredProjects.length - 8}개)</span>
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
