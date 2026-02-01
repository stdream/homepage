import Link from "next/link";
import ResearchHero from "@/components/research/ResearchHero";
import { Header, Footer } from "@/components";

export default function ReasoningRetrievalPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ResearchHero
          title="Reasoning & Retrieval"
          titleKr="추론 및 검색"
          description="대규모 언어 모델(LLM) 기반 추론(Reasoning)과 검색(Retrieval) 기술 연구입니다. Graph RAG, 시맨틱 검색, 프롬프트 엔지니어링을 통해 AI 시스템의 정확성과 신뢰성을 향상시킵니다."
          accentColor="#FF6B9D"
        />

        {/* Overview Section */}
        <section className="py-16 sm:py-20 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Ontology-Based Reasoning */}
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#FF6B9D" }}>
                <h3 className="font-black text-lg text-black mb-3 uppercase">
                  Ontology-Based Reasoning
                </h3>
                <p className="text-sm text-black/60 mb-4">
                  온톨로지의 형식적 의미론을 활용한 지식 추론. 개념 계층과
                  관계 제약을 통해 암묵적 지식을 도출하고 논리적 일관성을 보장.
                </p>
                <ul className="text-xs text-black/50 space-y-1 font-bold">
                  <li>— Description Logic 기반 형식 추론</li>
                  <li>— KG 완전성 검증 및 지식 도출</li>
                  <li>— 온톨로지 제약 기반 질의 확장</li>
                </ul>
              </div>

              {/* Graph-Based Retrieval */}
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#00D4FF" }}>
                <h3 className="font-black text-lg text-black mb-3 uppercase">
                  Graph-Based Retrieval
                </h3>
                <p className="text-sm text-black/60 mb-4">
                  KG의 그래프 구조를 활용한 의미 기반 검색. 엔티티 간 관계 경로를
                  따라 다중 홉 질의를 처리하고 맥락적 정확도를 향상.
                </p>
                <ul className="text-xs text-black/50 space-y-1 font-bold">
                  <li>— 그래프 탐색 + 벡터 유사도 하이브리드 검색</li>
                  <li>— 온톨로지 가이드 검색 전략</li>
                  <li>— 도메인 적응형 시맨틱 검색</li>
                </ul>
              </div>

              {/* LLM Harness Engineering */}
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#FFDE59" }}>
                <h3 className="font-black text-lg text-black mb-3 uppercase">
                  LLM Harness Engineering
                </h3>
                <p className="text-sm text-black/60 mb-4">
                  프롬프트 최적화를 넘어 LLM 출력을 구조적으로 제어하는
                  프레임워크 설계. 생성 단계에서의 제약과 검증으로 신뢰성 확보.
                </p>
                <ul className="text-xs text-black/50 space-y-1 font-bold">
                  <li>— 온톨로지 제약 기반 출력 제어</li>
                  <li>— 형식 검증을 통한 환각 필터링</li>
                  <li>— 구조화된 추론 파이프라인 설계</li>
                </ul>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="mt-12 border-2 border-black bg-white p-6">
              <h3 className="font-black text-lg text-black mb-4 uppercase">
                Key Concepts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-2 uppercase text-sm">연구 접근</h4>
                  <ul className="text-sm text-black/60 space-y-1">
                    <li>— 형식 방법론(온톨로지, FCA)으로 LLM 추론의 논리적 기반 확보</li>
                    <li>— 그래프 구조를 검색과 추론의 공통 인프라로 활용</li>
                    <li>— 프롬프트가 아닌 시스템 아키텍처 수준의 신뢰성 설계</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 uppercase text-sm">핵심 과제</h4>
                  <ul className="text-sm text-black/60 space-y-1">
                    <li>— LLM 환각의 구조적 제거 (생성 단계 제약, 사후 필터링이 아닌)</li>
                    <li>— 도메인 지식의 형식적 표현과 LLM 추론의 통합</li>
                    <li>— 검색 정확도와 추론 깊이의 균형</li>
                  </ul>
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
                  title: "Ontology Engineering",
                  titleKr: "온톨로지 공학",
                  href: "/research/ontology",
                  accent: "#00D4FF",
                },
                {
                  title: "Knowledge Graph",
                  titleKr: "지식 그래프",
                  href: "/research/knowledge-graph",
                  accent: "#FFDE59",
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
