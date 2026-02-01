"use client";

import Link from "next/link";
import { professor, phdStudents, msStudents } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">Our Team</h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4">지식공학연구실 구성원</p>
        </div>

        {/* Professor */}
        <div className="mb-12 sm:mb-16">
          <Link
            href="/professor"
            className="block max-w-md mx-auto p-6 sm:p-8 border-4 border-black bg-[#FFDE59] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 cursor-pointer"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl sm:text-3xl">{professor.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-black mb-1">{professor.name}</h3>
                <p className="text-black font-bold text-sm sm:text-base mb-1">{professor.role}</p>
                <p className="text-black/70 text-xs sm:text-sm mb-2">{professor.affiliation}</p>
                <span className="text-black font-bold text-xs sm:text-sm inline-flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {professor.email}
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* PhD Students */}
        <div className="mb-10 sm:mb-14">
          <div className="mb-6">
            <span className="bg-black text-white px-4 py-2 inline-block font-bold uppercase text-sm tracking-wide">
              Ph.D. Students ({phdStudents.length})
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {phdStudents.map((student) => (
              <div
                key={student.name}
                className="p-4 sm:p-5 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00D4FF] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg sm:text-xl">{student.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-black font-bold text-base sm:text-lg">{student.name}</p>
                    <p className="text-black/60 text-xs sm:text-sm">{student.major}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MS Students */}
        <div>
          <div className="mb-6">
            <span className="bg-black text-white px-4 py-2 inline-block font-bold uppercase text-sm tracking-wide">
              M.S. Students ({msStudents.length})
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {msStudents.map((student) => (
              <div
                key={student.name}
                className="p-4 sm:p-5 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFDE59] border-2 border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black text-lg sm:text-xl">{student.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-black font-bold text-base sm:text-lg">{student.name}</p>
                    <p className="text-black/60 text-xs sm:text-sm">{student.major}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
