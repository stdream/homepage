export type ProjectStatus = "ongoing" | "completed";

export type Project = {
  id: number;
  title: string;
  period: string;
  funder: string;
  status: ProjectStatus;
  startYear: number;
};

export const projects: Project[] = [
  // 진행 중
  { id: 1, title: "지속가능한 ESG 생태계 구축을 위한 NFT(Non-Fungible Token) 가치평가 모형 연구", period: "2023.06 - 2026.05", funder: "연구재단 (공동연구지원사업)", status: "ongoing", startYear: 2023 },
  { id: 2, title: "우주기술 개발정보관리를 위한 하이브리드 검색 기술 개발", period: "2025.05 - 2026.04", funder: "레드스피어(주)", status: "ongoing", startYear: 2025 },
  { id: 3, title: "스마트 군수지원 혁신연구센터", period: "2025.03 - 2026.02", funder: "한양대학교 산학협력단", status: "ongoing", startYear: 2025 },
  // 완료
  { id: 4, title: "제품개발 플랫폼 커스터마이징을 위한 용어사전 구축 시제품 제작", period: "2022.09 - 2022.11", funder: "과학기술정보통신부 (KAIST)", status: "completed", startYear: 2022 },
  { id: 5, title: "유지보수 문서 정형화 시제품 구축", period: "2020.10 - 2020.12", funder: "과학기술정보통신부 (KAIST)", status: "completed", startYear: 2020 },
  { id: 6, title: "빅데이터 하이브리드 어날리틱스 기반 마켓 인텔리전스 및 마켓 전략 시뮬레이션 플랫폼 및 서비스 개발", period: "2020.07 - 2022.07", funder: "중소벤처기업부 (빅데이터기반서비스개발사업)", status: "completed", startYear: 2020 },
  { id: 7, title: "비정형 데이터 처리 통합화 및 실용화 활용기술 연구용역", period: "2018.10 - 2018.12", funder: "과학기술정보통신부 (KAIST)", status: "completed", startYear: 2018 },
  { id: 8, title: "DMZ경제순환센터건립 기본계획용역", period: "2018.01 - 2018.03", funder: "양구군청 (학술연구용역사업)", status: "completed", startYear: 2018 },
  { id: 9, title: "플랜트 유지보수 문서의 의미정보생성 지원기술 개발용역", period: "2017.12 - 2018.05", funder: "과학기술정보통신부 (KAIST)", status: "completed", startYear: 2017 },
  { id: 10, title: "온톨로지와 기계학습 기반 한국음식 레시피 창작기술 개발", period: "2017.06 - 2019.05", funder: "연구재단 (이공분야기초연구사업)", status: "completed", startYear: 2017 },
  { id: 11, title: "신재생에너지 활성화 유도 플랫폼 구축에 관한 연구", period: "2017.06 - 2017.10", funder: "산업통상자원부 (한국전력)", status: "completed", startYear: 2017 },
  { id: 12, title: "비정형 데이터 처리기반의 요구사항 분석 기법에 관한 연구", period: "2017.04 - 2018.03", funder: "한양대학교 (교내일반연구사업)", status: "completed", startYear: 2017 },
  { id: 13, title: "플랜트 유보수 문서 통합 의미데이터 처리 절차 및 시제품 기술개발 용역", period: "2016.11 - 2017.04", funder: "미래창조과학부 (KAIST)", status: "completed", startYear: 2016 },
  { id: 14, title: "지식기반 의미데이터 처리 시제품 개발 용역", period: "2016.03 - 2016.11", funder: "미래창조과학부 (KAIST)", status: "completed", startYear: 2016 },
  { id: 15, title: "비정형 데이터 분석/처리 기술동향 및 적용사례 조사/검증 용역", period: "2015.11 - 2016.04", funder: "미래창조과학부 (KAIST)", status: "completed", startYear: 2015 },
  { id: 16, title: "형태소 분석을 통한 EPC산업 비정형데이터 분석", period: "2015.07 - 2016.06", funder: "한양대학교 (교내일반연구사업)", status: "completed", startYear: 2015 },
  { id: 17, title: "가상플랜트를 위한 데이터처리 기술분석 용역", period: "2015.03 - 2016.11", funder: "미래창조과학부 (KAIST)", status: "completed", startYear: 2015 },
  { id: 18, title: "온톨로지와 인지지도를 활용한 시맨틱 추론방법 개발", period: "2013.03 - 2014.08", funder: "한양대학교 (교내일반연구사업)", status: "completed", startYear: 2013 },
  { id: 19, title: "온톨로지와 규칙을 활용한 제품 플랫폼 분석", period: "2011.05 - 2012.04", funder: "대구대학교 (교내일반연구사업)", status: "completed", startYear: 2011 },
  { id: 20, title: "온톨로지와 규칙을 결합한 하이브리드 협업 제품개발 관리시스템 개발", period: "2010.09 - 2015.08", funder: "연구재단 (이공분야 기초연구사업)", status: "completed", startYear: 2010 },
  { id: 21, title: "온톨로지 기반의 비즈니스 프로세스 분석방법", period: "2010.05 - 2011.04", funder: "대구대학교 (교내일반연구사업)", status: "completed", startYear: 2010 },
  { id: 22, title: "제품개발 관리를 위한 온톨로지 구축", period: "2009.05 - 2010.04", funder: "대구대학교 (교내일반연구사업)", status: "completed", startYear: 2009 },
  { id: 23, title: "기업의 R&D 환경을 지원하기 위한 하이브리드 워크플로우 모델링", period: "2009.05 - 2010.04", funder: "한국학술진흥재단 (기초연구과제지원사업)", status: "completed", startYear: 2009 },
  { id: 24, title: "제품개발 유형별 성과관리 방법론 구축에 관한 연구", period: "2008.10 - 2009.09", funder: "대구대학교 (교내일반연구사업)", status: "completed", startYear: 2008 },
];

export const statusLabels: Record<string, string> = {
  all: "All",
  ongoing: "진행 중",
  completed: "완료",
};
