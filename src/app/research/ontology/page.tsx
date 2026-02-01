import Link from "next/link";
import ResearchHero from "@/components/research/ResearchHero";
import { Header, Footer } from "@/components";

export default function OntologyResearchPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ResearchHero
          title="Ontology Engineering"
          titleKr="온톨로지 공학"
          description="도메인 지식을 형식적으로 표현하고 구조화하기 위한 온톨로지를 설계, 구축, 평가, 유지보수하는 연구 분야입니다. 개념, 관계, 속성, 제약조건을 통해 도메인 지식을 명시적으로 표현합니다."
          accentColor="#00D4FF"
        />

        {/* Overview Section */}
        <section className="py-16 sm:py-20 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Definition */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-6">
                  Overview
                </h2>
                <blockquote className="border-l-4 border-[#00D4FF] pl-4 mb-6">
                  <p className="text-black/70 italic text-base sm:text-lg font-bold">
                    &quot;A formal, explicit specification of a shared conceptualization&quot;
                  </p>
                  <cite className="text-sm text-black/50 mt-2 block font-bold">
                    — Guarino, 1995
                  </cite>
                </blockquote>
                <p className="text-black/60 leading-relaxed mb-4">
                  온톨로지는 AI, 지식공학, 시맨틱 웹의 기반 기술로 자리잡았습니다.
                  특정 도메인의 개념과 관계를 명확하게 정의함으로써 시스템 간
                  상호운용성을 확보하고 지식 재사용을 가능하게 합니다.
                </p>
                <p className="text-black/60 leading-relaxed">
                  2020년대에 들어 Large Language Models(LLM)을 활용한 온톨로지
                  자동 생성 및 학습이 주요 연구 트렌드로 부상하고 있습니다.
                </p>
              </div>

              {/* Key Concepts */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight mb-6">
                  Key Concepts
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Ontological Level",
                      desc: "인식론적/개념적 수준 사이에 위치하는 지식 표현 수준",
                    },
                    {
                      title: "Task-Independent KB",
                      desc: "특정 과업에 독립적인 재사용 가능한 지식베이스",
                    },
                    {
                      title: "LLM-based OE",
                      desc: "대규모 언어모델 기반 온톨로지 학습 및 자동 생성",
                    },
                    {
                      title: "Human-AI Collaboration",
                      desc: "인간 전문가와 AI의 효과적인 협업 모델",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-black bg-white p-4"
                    >
                      <h4 className="font-bold text-black mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-black/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Other Research Areas */}
        <section className="py-16 sm:py-20 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-8 text-center">
              Other Research Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Knowledge Graph",
                  titleKr: "지식 그래프",
                  href: "/research/knowledge-graph",
                  accent: "#FFDE59",
                },
                {
                  title: "Reasoning & Retrieval",
                  titleKr: "추론 및 검색",
                  href: "/research/reasoning-retrieval",
                  accent: "#FF6B9D",
                },
                {
                  title: "Application Domains",
                  titleKr: "응용 도메인",
                  href: "/research/application-domains",
                  accent: "#000000",
                },
              ].map((area, idx) => (
                <Link
                  key={idx}
                  href={area.href}
                  className="border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150 p-6 block"
                  style={{ borderLeftWidth: "6px", borderLeftColor: area.accent }}
                >
                  <h3 className="font-bold text-black mb-1 uppercase">
                    {area.title}
                  </h3>
                  <p className="text-sm text-black/50 font-bold">{area.titleKr}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
