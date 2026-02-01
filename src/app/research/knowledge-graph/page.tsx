import Link from "next/link";
import ResearchHero from "@/components/research/ResearchHero";
import { Header, Footer } from "@/components";

export default function KnowledgeGraphPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ResearchHero
          title="Knowledge Graph"
          titleKr="지식 그래프"
          description="실세계의 지식을 엔티티(노드)와 관계(엣지)로 구조화하여 표현하는 지식 표현 기술입니다. 검색 엔진, 추천 시스템, 질의응답 시스템 등 다양한 AI 응용 분야에서 핵심 인프라로 활용됩니다."
          accentColor="#FFDE59"
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
                <p className="text-black/60 leading-relaxed mb-4">
                  Knowledge Graph(KG)는 Google이 2012년 도입한 이후 AI 분야의 핵심
                  인프라로 자리잡았습니다. 전통적으로 도메인 전문가의 수작업에
                  의존했으나, 최근 <strong className="text-black font-bold">대규모 언어모델(LLM)</strong>의 등장으로
                  자동화된 구축 방법론이 급속히 발전하고 있습니다.
                </p>
                <p className="text-black/60 leading-relaxed mb-4">
                  KG 구축은 딥러닝 기반 추출(2018-2019)에서 멀티모달 확장(2020-2022),
                  LLM 기반 자동화(2023-2024)를 거쳐 현재 완전 자율 구축 단계로
                  발전하고 있습니다.
                </p>
                <div className="mt-6 border-2 border-black bg-white p-4">
                  <h4 className="font-bold text-black mb-2 uppercase text-sm">KG 구축 파이프라인</h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["데이터 수집", "엔티티 추출", "관계 추출", "정규화", "저장/시각화"].map((step, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="px-2 py-1 border-2 border-black bg-[#FFDE59] font-bold text-black text-xs">{step}</span>
                        {i < 4 && <span className="text-black font-black">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Concepts */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tight mb-6">
                  Key Concepts
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Ontology-Driven KG Construction",
                      desc: "온톨로지를 스키마(TBox)로 활용하여 KG를 체계적으로 구축하고, 인스턴스(ABox) 수준의 지식을 의미적으로 일관되게 채워가는 방법론",
                    },
                    {
                      title: "Graph-based RAG",
                      desc: "KG의 그래프 구조를 활용한 검색 증강 생성. 다중 홉 추론과 온톨로지 가이드 검색으로 LLM의 환각을 줄이고 정확도를 향상",
                    },
                    {
                      title: "Formal Concept Analysis",
                      desc: "개념 격자(Concept Lattice) 기반의 수학적 프레임워크로 KG 스키마 자동 발견, 지식 정제, 링크 예측에 활용",
                    },
                    {
                      title: "Neuro-Symbolic Integration",
                      desc: "LLM(신경망)과 형식 방법론(온톨로지, FCA)의 결합을 통해 자동 구축의 유연성과 논리적 일관성을 동시에 확보",
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
                  title: "Ontology Engineering",
                  titleKr: "온톨로지 공학",
                  href: "/research/ontology",
                  accent: "#00D4FF",
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
