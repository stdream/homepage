"use client";

import Link from "next/link";
import { researchAreasData, accentColors } from "@/data/research-areas";

const icons: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="26" y="6" width="12" height="12" stroke="#000" strokeWidth="3" />
      <rect x="8" y="26" width="10" height="10" stroke="#000" strokeWidth="3" />
      <rect x="46" y="26" width="10" height="10" stroke="#000" strokeWidth="3" />
      <rect x="4" y="48" width="8" height="8" stroke="#000" strokeWidth="3" />
      <rect x="20" y="48" width="8" height="8" stroke="#000" strokeWidth="3" />
      <rect x="36" y="48" width="8" height="8" stroke="#000" strokeWidth="3" />
      <rect x="52" y="48" width="8" height="8" stroke="#000" strokeWidth="3" />
      <line x1="32" y1="18" x2="13" y2="26" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="18" x2="51" y2="26" stroke="#000" strokeWidth="2" />
      <line x1="13" y1="36" x2="8" y2="48" stroke="#000" strokeWidth="2" />
      <line x1="13" y1="36" x2="24" y2="48" stroke="#000" strokeWidth="2" />
      <line x1="51" y1="36" x2="40" y2="48" stroke="#000" strokeWidth="2" />
      <line x1="51" y1="36" x2="56" y2="48" stroke="#000" strokeWidth="2" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="24" y="24" width="16" height="16" stroke="#000" strokeWidth="3" />
      <rect x="4" y="12" width="10" height="10" stroke="#000" strokeWidth="3" />
      <rect x="50" y="12" width="10" height="10" stroke="#000" strokeWidth="3" />
      <rect x="4" y="42" width="10" height="10" stroke="#000" strokeWidth="3" />
      <rect x="50" y="42" width="10" height="10" stroke="#000" strokeWidth="3" />
      <line x1="24" y1="28" x2="14" y2="20" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="28" x2="50" y2="20" stroke="#000" strokeWidth="2" />
      <line x1="24" y1="36" x2="14" y2="44" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="36" x2="50" y2="44" stroke="#000" strokeWidth="2" />
      <line x1="9" y1="22" x2="9" y2="42" stroke="#000" strokeWidth="2" strokeDasharray="4" />
      <line x1="55" y1="22" x2="55" y2="42" stroke="#000" strokeWidth="2" strokeDasharray="4" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="16" y="12" width="32" height="32" stroke="#000" strokeWidth="3" />
      <line x1="24" y1="28" x2="24" y2="36" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="20" x2="32" y2="36" stroke="#000" strokeWidth="2" />
      <line x1="40" y1="24" x2="40" y2="36" stroke="#000" strokeWidth="2" />
      <line x1="32" y1="44" x2="32" y2="56" stroke="#000" strokeWidth="3" />
      <line x1="26" y1="50" x2="32" y2="56" stroke="#000" strokeWidth="3" />
      <line x1="38" y1="50" x2="32" y2="56" stroke="#000" strokeWidth="3" />
      <rect x="8" y="8" width="6" height="6" fill="#000" />
      <rect x="50" y="8" width="6" height="6" fill="#000" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <rect x="6" y="6" width="22" height="22" stroke="#000" strokeWidth="3" />
      <rect x="36" y="6" width="22" height="22" stroke="#000" strokeWidth="3" />
      <rect x="6" y="36" width="22" height="22" stroke="#000" strokeWidth="3" />
      <rect x="36" y="36" width="22" height="22" stroke="#000" strokeWidth="3" />
      <circle cx="17" cy="17" r="5" stroke="#000" strokeWidth="2" />
      <line x1="47" y1="12" x2="47" y2="22" stroke="#000" strokeWidth="2" />
      <line x1="42" y1="17" x2="52" y2="17" stroke="#000" strokeWidth="2" />
      <line x1="12" y1="47" x2="22" y2="47" stroke="#000" strokeWidth="2" />
      <line x1="17" y1="42" x2="17" y2="52" stroke="#000" strokeWidth="2" />
      <line x1="42" y1="42" x2="52" y2="52" stroke="#000" strokeWidth="2" />
      <line x1="52" y1="42" x2="42" y2="52" stroke="#000" strokeWidth="2" />
    </svg>
  ),
};

const researchAreas = researchAreasData.map((area) => ({
  ...area,
  icon: icons[area.id],
}));

export default function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
            Research Areas
          </h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            지식공학연구실의 핵심 연구 분야
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="block p-6 sm:p-8 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 group"
              style={{ borderLeftWidth: "6px", borderLeftColor: accentColors[area.color] }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                {area.title}
              </h3>
              <p className="text-sm text-black/60 mb-2 sm:mb-3">
                {area.titleKr}
              </p>
              <p className="text-sm text-black leading-relaxed">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
