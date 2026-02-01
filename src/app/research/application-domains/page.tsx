import Link from "next/link";
import ResearchHero from "@/components/research/ResearchHero";
import { Header, Footer } from "@/components";

export default function ApplicationDomainsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <ResearchHero
          title="Application Domains"
          titleKr="응용 도메인"
          description="Ontology, Knowledge Graph, Reasoning 기술을 실제 산업 분야에 적용하는 연구입니다. 시스템 공학, 스마트 제조, 디지털 트윈, 우주·국방, 비즈니스, 스마트시티 등 다양한 도메인에서 지식공학 기술의 실용적 가치를 창출합니다."
          accentColor="#000000"
        />

        {/* Research Domains Section */}
        <section className="py-12 sm:py-16 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-8 text-center">
              Research Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "System Engineering",
                  titleKr: "시스템 공학",
                  desc: "요구사항 추적 관리, MBSE 기반 시스템 아키텍처 지식 모델링",
                  accent: "#00D4FF",
                },
                {
                  title: "Manufacturing",
                  titleKr: "스마트 제조",
                  desc: "산업 데이터의 온톨로지 기반 통합, 플랜트 운영 지식 체계화, 유지보수 자동화 파이프라인",
                  accent: "#FFDE59",
                },
                {
                  title: "Digital Assets",
                  titleKr: "디지털 자산",
                  desc: "NFT 가치평가 모형, ESG 생태계 온톨로지 설계, 가상플랜트 데이터 처리",
                  accent: "#FF6B9D",
                },
                {
                  title: "Space & Defense",
                  titleKr: "우주·국방",
                  desc: "우주기술 개발정보 하이브리드 검색, 스마트 군수지원 체계 연구",
                  accent: "#000000",
                },
                {
                  title: "Business",
                  titleKr: "비즈니스",
                  desc: "온톨로지 기반 제품개발 관리, 비즈니스 프로세스 의미 분석, 마켓 인텔리전스 플랫폼",
                  accent: "#00D4FF",
                },
                {
                  title: "Smart Safety",
                  titleKr: "스마트 안전",
                  desc: "VLM 기반 스마트 안전 실시간 상황 인지, KG 기반 위험 시나리오 추론 및 대응 체계",
                  accent: "#FFDE59",
                },
              ].map((domain, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black bg-white p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  style={{ borderLeftWidth: "6px", borderLeftColor: domain.accent }}
                >
                  <h3 className="font-black text-black mb-1 uppercase text-sm">{domain.title}</h3>
                  <p className="text-xs text-black/50 font-bold mb-3">{domain.titleKr}</p>
                  <p className="text-sm text-black/60">{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="py-12 sm:py-16 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mb-4 text-center">
              Key Concepts
            </h2>
            <p className="text-black/60 text-center mb-10 max-w-3xl mx-auto">
              모든 도메인에서 공통적으로 적용되는 KELAB의 핵심 접근법
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#00D4FF" }}>
                <h3 className="font-black text-black mb-2 uppercase text-sm">온톨로지 기반 도메인 모델링</h3>
                <p className="text-sm text-black/60">
                  각 응용 도메인의 지식을 온톨로지로 형식화하여 시스템 간 상호운용성과
                  지식 재사용을 확보하는 공통 방법론.
                </p>
              </div>
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#FFDE59" }}>
                <h3 className="font-black text-black mb-2 uppercase text-sm">비정형 데이터 → 지식 변환</h3>
                <p className="text-sm text-black/60">
                  산업 현장의 비정형 문서(유지보수 기록, 기술 문서, 개발 정보)를
                  구조화된 지식으로 변환하는 파이프라인 설계.
                </p>
              </div>
              <div className="border-2 border-black bg-white p-6" style={{ borderTopWidth: "6px", borderTopColor: "#FF6B9D" }}>
                <h3 className="font-black text-black mb-2 uppercase text-sm">하이브리드 검색 & 분석</h3>
                <p className="text-sm text-black/60">
                  온톨로지 기반 시맨틱 검색과 데이터 분석을 결합하여
                  도메인 특화 인텔리전스를 도출하는 통합 분석 체계.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 sm:py-16 border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-6 text-center">
              Other Research Areas
            </h3>
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
                  title: "Reasoning & Retrieval",
                  titleKr: "추론 및 검색",
                  href: "/research/reasoning-retrieval",
                  accent: "#FF6B9D",
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
