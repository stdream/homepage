import Link from "next/link";
import { Header, Footer } from "@/components";

export default function ProfessorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-[#FFDE59] border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo Placeholder */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 bg-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-6xl sm:text-7xl">
                  H
                </span>
              </div>

              {/* Name & Title */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight mb-2">
                  이희정
                </h1>
                <p className="text-lg sm:text-xl font-black text-black/80 mb-4">
                  Heejung Lee &middot; Professor, Ph.D.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-black text-white px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wide">
                    산업융합학부
                  </span>
                  <span className="bg-black text-white px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wide">
                    산업데이터엔지니어링학과
                  </span>
                  <span className="bg-black text-white px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wide">
                    기술경영전문대학원
                  </span>
                </div>

                {/* Contact */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span className="font-bold text-black text-sm sm:text-base">+82 2 2220 2364</span>
                  </div>
                  <a
                    href="mailto:stdream@hanyang.ac.kr"
                    className="flex items-center gap-2 font-bold text-black text-sm sm:text-base hover:bg-black hover:text-white px-2 py-1 transition-colors"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    stdream@hanyang.ac.kr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Bio */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-6">
                  About
                </h2>
                <p className="text-black/60 leading-relaxed mb-4">
                  한양대학교 산업융합학부 교수이며, 기술경영전문대학원에 소속되어 있습니다.
                  2007년 KAIST에서 박사학위를 취득하였으며, 박사학위 논문의 주제는
                  제품개발을 위한 워크플로우 구조화 방법에 관한 것입니다.
                </p>
                <p className="text-black/60 leading-relaxed mb-4">
                  2013년 한양대학교에 부임하기 전에는 대구대학교에서 5년간 조교수로
                  재직하였고, 삼성전자에서 5년간 선임연구원으로 근무하였습니다.
                </p>
                <p className="text-black/60 leading-relaxed">
                  현재 BPM, 지식공학, R&D 관리 등의 과목을 강의하고 있으며,
                  주요 연구 관심 분야는 지식 발견, 온톨로지 공학, BPM입니다.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-6">
                  Education
                </h2>
                <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D4FF] border-2 border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-black text-lg">D</span>
                    </div>
                    <div>
                      <h3 className="font-black text-black text-lg">Ph.D. in Industrial Engineering</h3>
                      <p className="font-bold text-black/70 mb-1">KAIST &middot; 2007</p>
                      <p className="text-sm text-black/50">
                        제품개발을 위한 워크플로우 구조화 방법
                      </p>
                      <p className="text-sm text-black/50 italic">
                        Workflow Structuring Methods for Product Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-16 sm:py-20 border-t-4 border-black bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-8">
              Career
            </h2>
            <div className="space-y-4">
              {[
                {
                  period: "2013 - Present",
                  role: "Professor",
                  org: "Hanyang University",
                  orgKr: "한양대학교 산업융합학부",
                  accent: "#FFDE59",
                },
                {
                  period: "2008 - 2013",
                  role: "Assistant Professor",
                  org: "Daegu University",
                  orgKr: "대구대학교",
                  accent: "#00D4FF",
                },
                {
                  period: "2003 - 2008",
                  role: "Senior Engineer",
                  org: "Samsung Electronics",
                  orgKr: "삼성전자",
                  accent: "#FF6B9D",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black bg-white p-5 sm:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  style={{ borderLeftWidth: "6px", borderLeftColor: item.accent }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wide w-fit">
                      {item.period}
                    </span>
                    <div>
                      <h3 className="font-black text-black text-base sm:text-lg">{item.role}</h3>
                      <p className="text-black/60 text-sm font-bold">
                        {item.org} &middot; {item.orgKr}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Interests & Teaching */}
        <section className="py-16 sm:py-20 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Research Interests */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-6">
                  Research Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    { en: "Knowledge Discovery", kr: "지식 발견", accent: "#FFDE59" },
                    { en: "Ontology Engineering", kr: "온톨로지 공학", accent: "#00D4FF" },
                    { en: "Business Process Management", kr: "BPM", accent: "#FF6B9D" },
                    { en: "R&D Management", kr: "R&D 관리", accent: "#FFDE59" },
                  ].map((interest, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black px-4 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
                      style={{ backgroundColor: interest.accent }}
                    >
                      <p className="font-black text-black text-sm sm:text-base">{interest.en}</p>
                      <p className="text-black/60 text-xs font-bold">{interest.kr}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teaching */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-6">
                  Teaching
                </h2>
                <div className="space-y-3">
                  {[
                    { en: "Business Process Management", kr: "BPM" },
                    { en: "Knowledge Engineering", kr: "지식공학" },
                    { en: "R&D Management", kr: "R&D 관리" },
                  ].map((course, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black bg-white p-4 flex items-center gap-4"
                    >
                      <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-sm">{idx + 1}</span>
                      </div>
                      <div>
                        <p className="font-bold text-black">{course.en}</p>
                        <p className="text-black/50 text-sm font-bold">{course.kr}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Team */}
        <section className="py-12 sm:py-16 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <Link
              href="/#team"
              className="inline-block px-8 py-4 bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-black uppercase tracking-wide text-sm sm:text-base"
            >
              &larr; Back to Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
