"use client";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "지식공학 방법론",
    description: "온톨로지, KG, FCA 등 형식적 지식 모델링 역량 습득",
    accent: "#00D4FF",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "협업 환경",
    description: "다양한 배경의 연구원들과 함께하는 협력적 연구 문화",
    accent: "#FFDE59",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "국제 교류",
    description: "해외 학회 참가 및 국제 공동 연구 기회",
    accent: "#FF6B9D",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "산학 협력",
    description: "실무 경험을 쌓을 수 있는 기업 프로젝트 참여",
    accent: "#000000",
  },
];

const positions = [
  {
    title: "석사과정",
    degree: "M.S.",
    description: "문제 정의부터 해결까지 주도적으로 파고드는 자세를 가진 학부 졸업생",
    requirements: ["산업공학, 컴퓨터공학 또는 관련 전공", "Python 프로그래밍 능력", "머신러닝 기초 지식"],
    bg: "bg-[#00D4FF]",
  },
  {
    title: "박사과정",
    degree: "Ph.D.",
    description: "독립적인 연구 수행이 가능한 석사 학위 소지자",
    requirements: ["석사 학위 (관련 분야)", "연구 논문 실적", "영어 커뮤니케이션 능력"],
    bg: "bg-[#FFDE59]",
  },
];

export default function Join() {
  return (
    <section id="join" className="py-16 sm:py-24 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">Join Us</h2>
          <div className="w-24 h-1 bg-black mt-3 mx-auto" />
          <p className="text-black font-medium mt-4 max-w-2xl mx-auto">
            지식공학연구실에서 함께 연구할 열정적인 연구원을 모집합니다
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-black flex items-center justify-center mb-3 sm:mb-4 text-black"
                style={{ backgroundColor: benefit.accent + "33" }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">{benefit.title}</h3>
              <p className="text-black/60 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {positions.map((position, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 border-4 border-black ${position.bg} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="bg-black text-white px-4 py-1 font-bold uppercase text-sm">
                  {position.degree}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-black">{position.title}</h3>
              </div>
              <p className="text-black/80 text-sm sm:text-base mb-4 sm:mb-6">{position.description}</p>
              <div>
                <p className="text-black font-bold text-xs sm:text-sm uppercase mb-2 sm:mb-3">Requirements:</p>
                <ul className="space-y-1 sm:space-y-2">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-black text-xs sm:text-sm font-medium">
                      <svg className="w-4 h-4 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center p-6 sm:p-10 border-4 border-black bg-[#FFDE59] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-lg sm:text-2xl font-black text-black mb-3 sm:mb-4">관심이 있으신가요?</h3>
          <p className="text-black/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            이력서와 연구 관심 분야를 포함하여 아래 이메일로 연락해 주세요.
          </p>
          <a
            href="mailto:stdream@hanyang.ac.kr"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,212,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 font-bold text-sm sm:text-base uppercase"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            stdream@hanyang.ac.kr
          </a>
        </div>
      </div>
    </section>
  );
}
