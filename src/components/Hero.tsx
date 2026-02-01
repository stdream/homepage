"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-black mb-4">
              Knowledge Engineering Lab @ Hanyang
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-black leading-none tracking-tighter mb-2">
              KELAB
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              Knowledge Engineering Lab
            </p>
            <p className="text-lg sm:text-xl text-black leading-relaxed mb-8 sm:mb-10">
              비정형 데이터에서 의미 있는{" "}
              <span className="bg-[#FFDE59] px-2 font-bold">지식</span>을
              발견하고 구조화하는 연구
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#research"
                className="px-8 py-4 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,212,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-bold uppercase tracking-wide text-sm text-center"
              >
                Our Research &rarr;
              </Link>
              <Link
                href="#publications"
                className="px-8 py-4 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-bold uppercase tracking-wide text-sm text-center"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* Right: Knowledge Pipeline Diagram */}
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 400 420" className="w-full max-w-md">
              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#000000" />
                </marker>
              </defs>

              {/* Pipeline Arrows */}
              <line x1="200" y1="62" x2="200" y2="88" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="200" y1="142" x2="200" y2="168" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="200" y1="222" x2="200" y2="248" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="200" y1="302" x2="200" y2="328" stroke="#000000" strokeWidth="3" markerEnd="url(#arrowhead)" />

              {/* Layer 1: Data & Disciplines — Black */}
              <rect x="120" y="20" width="160" height="40" fill="#000000" stroke="#000000" strokeWidth="3" />
              <text x="200" y="45" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">DATA &amp; DISCIPLINES</text>

              {/* Layer 2: Ontology Engineering — Cyan */}
              <rect x="115" y="95" width="170" height="45" fill="#00D4FF" stroke="#000000" strokeWidth="3" />
              <text x="200" y="123" textAnchor="middle" fill="#000000" fontSize="12" fontWeight="800">ONTOLOGY ENGINEERING</text>

              {/* Layer 3: Knowledge Graph — White */}
              <rect x="125" y="175" width="150" height="45" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
              <text x="200" y="203" textAnchor="middle" fill="#000000" fontSize="12" fontWeight="800">KNOWLEDGE GRAPH</text>

              {/* Layer 4: Reasoning & Retrieval — Yellow */}
              <rect x="95" y="255" width="210" height="45" fill="#FFDE59" stroke="#000000" strokeWidth="3" />
              <text x="200" y="283" textAnchor="middle" fill="#000000" fontSize="12" fontWeight="800">REASONING &amp; RETRIEVAL</text>

              {/* Layer 5: Industry Solutions — Black */}
              <rect x="110" y="335" width="180" height="45" fill="#000000" stroke="#000000" strokeWidth="3" />
              <text x="200" y="363" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">INDUSTRY SOLUTIONS</text>

              {/* Layer Labels (right side) */}
              <text x="380" y="45" textAnchor="end" fill="#000000" fontSize="10" fontWeight="700">Input</text>
              <text x="380" y="123" textAnchor="end" fill="#000000" fontSize="10" fontWeight="700">Modeling</text>
              <text x="380" y="203" textAnchor="end" fill="#000000" fontSize="10" fontWeight="700">Knowledge</text>
              <text x="380" y="283" textAnchor="end" fill="#000000" fontSize="10" fontWeight="700">Intelligence</text>
              <text x="380" y="363" textAnchor="end" fill="#000000" fontSize="10" fontWeight="700">Applications</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
