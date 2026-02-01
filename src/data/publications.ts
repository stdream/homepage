export type PublicationType = "journal" | "conference" | "workshop";

export type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
};

export const publications: Publication[] = [
  // 2025
  { id: 1, title: "MARC: Multimodal and Multi-Task Agentic Retrieval-Augmented Generation for Cold-Start Recommender System", authors: "Cho, Seung Hwan; Yang, Yujin; Baeck, Danik; Kim, Minjoo; Kim, Young-Min; Lee, Heejung; Park, Sangjin", venue: "CIKM - Proceedings of RDGENAI '25", year: 2025, type: "workshop" },
  { id: 2, title: "A Profile Picture NFT Valuation by Feature Selection for High-Dimensional Data", authors: "Lee, Geun-Cheol; Koo, Hoon-Young; Lee, Heejung", venue: "한국정보기술학회 추계학술대회", year: 2025, type: "conference" },
  { id: 3, title: "수집품 NFT 시장에서의 투자자 영향: 고래와 개미의 비교", authors: "구훈영; 이희정; 이근철", venue: "한국경영과학회지", year: 2025, type: "journal" },
  { id: 4, title: "Feature Selection for High-Dimensional and High-Cardinality Data: Azuki NFT Case", authors: "Lee, Geun-Cheol; Lee, Heejung; Koo, Hoon-Young", venue: "EcoSta 2025 - 8th International Conference on Econometrics and Statistics", year: 2025, type: "conference" },
  { id: 5, title: "싱가폴 창이 공항의 항공 승객 수요 예측", authors: "이근철; 이희정; 구훈영", venue: "한국산업경영시스템학회지", year: 2025, type: "journal" },
  { id: 6, title: "Quadratic regression models for Profile Picture NFT valuation", authors: "Lee, Geun-Cheol; Koo, Hoon-Young; Lee, Heejung", venue: "IEEE Access", year: 2025, type: "journal" },
  { id: 7, title: "개념격자 기반 그래프 확장을 통한 하이브리드 RAG의 구조적 검색 강화", authors: "양유진, 이희정", venue: "대한산업공학회 춘계학술대회", year: 2025, type: "conference" },
  { id: 8, title: "Understanding NFT Prices through Word Embeddings: A Case Study of BAYC", authors: "Lee, Geun-Cheol; Koo, Hoon-Young; Lee, Heejung", venue: "ISIITA 2025", year: 2025, type: "conference" },
  { id: 9, title: "A Two-Step Approach for Non-Fungible Token (NFT) Valuation Using Clustering and Hedonic Modeling", authors: "Lee, Geun-Cheol; Koo, Hoon-Young; Lee, Heejung", venue: "9th International Conference on Innovation in Artificial Intelligence", year: 2025, type: "conference" },
  { id: 10, title: "프로필 사진 NFT 가치 평가를 위한 2차 회귀모형 연구", authors: "이근철, 구훈영, 이희정", venue: "한국경영과학회 춘계학술대회", year: 2025, type: "conference" },
  // 2024
  { id: 11, title: "RAG 기반 생성형 AI를 활용한 효율적인 Literature Review: 효과적 구현과 향후 과제", authors: "양유진, 이희정", venue: "기술경영경제학회 동계학술대회", year: 2024, type: "conference" },
  { id: 12, title: "Exploring the relationship between rarity and price of profile picture NFT: A formal concept analysis on the BAYC NFT collection", authors: "Lee, Heejung; Lee, Geun-Cheol; Koo, Hoon-Young", venue: "Blockchain: Research and Applications", year: 2024, type: "journal" },
  { id: 13, title: "수집품 NFT 가치의 영향요인 분석", authors: "구훈영, 이희정, 이근철", venue: "경영과학", year: 2024, type: "journal" },
  { id: 14, title: "Word Embedding-Based Hedonic Models for Valuing Profile Picture NFTs: A Case Study of Bored Ape Yacht Club", authors: "Lee, Geun-Cheol; Koo, Hoon-Young; Lee, Heejung", venue: "The Asian Conference on the Social Sciences", year: 2024, type: "conference" },
  // 2023
  { id: 15, title: "Sentiment Dictionary Construction Based on Reason-Sentiment Pattern Using Korean Syntax Analysis", authors: "Kim, Woo Hyun; Lee, Heejung", venue: "Journal of Korean Society of Industrial and Systems Engineering", year: 2023, type: "journal" },
  { id: 16, title: "공동 출원 특허정보와 정형적 개념분석을 활용한 기술협력 성과 분석 연구", authors: "박찬호; 이희정", venue: "산업경영시스템학회지", year: 2023, type: "journal" },
  { id: 17, title: "헤도닉 모형을 이용한 프로필 사진 NFT의 가치 영향 요인 분석", authors: "이근철; 이희정; 구훈영", venue: "대한산업공학회지", year: 2023, type: "journal" },
  { id: 18, title: "SARIMAX 모형을 이용한 부산항 컨테이너 물동량 예측", authors: "이근철; 이희정; 구훈영", venue: "경영과학", year: 2023, type: "journal" },
  { id: 19, title: "희귀도와 속성에 따른 수집품 NFT의 잠재계층 분류 및 가치 분석", authors: "구훈영; 이근철; 이희정", venue: "대한산업공학회지", year: 2023, type: "journal" },
  { id: 20, title: "워드 임베딩을 통해 추출된 설명 변수를 활용한 NFT 가치 평가", authors: "이근철, 구훈영, 이희정", venue: "한국경영과학회 추계학술대회", year: 2023, type: "conference" },
  { id: 21, title: "한국어 구문분석을 활용한 이유-감성 패턴기반 감성사전 자동 구축 기법", authors: "김우현, 이희정", venue: "한국산업경영시스템학회 춘계학술대회", year: 2023, type: "conference" },
  // 2022
  { id: 22, title: "설비유지보수문서에서의 지식 추출 방법에 대한 연구", authors: "정민규; 서효원; 이희정; 이재현", venue: "한국 CDE 학회 논문집", year: 2022, type: "journal" },
  { id: 23, title: "의존구문분석을 활용한 속성기반 감성분석", authors: "양유진; 김우현; 이희정", venue: "한국산업경영시스템학회 학술대회", year: 2022, type: "conference" },
  { id: 24, title: "A named entity and relationship extraction method from trouble-shooting documents in korean", authors: "Jeong, Minkyu; Suh, Hyowon; Lee, Heejung; Lee, Jae Hyun", venue: "Applied Sciences", year: 2022, type: "journal" },
  { id: 25, title: "정형적개념분석 기반 조직 지식 체계화 및 활용 방법에 관한 연구", authors: "문희정, 이희정", venue: "기술경영경제학회 하계 학술대회", year: 2022, type: "conference" },
  { id: 26, title: "Identifying and prioritizing the product attributes based on sentiment analysis and weighted formal concept analysis", authors: "YJ Yang, HJ Lee", venue: "ISIITA 2022", year: 2022, type: "conference" },
  // 2021
  { id: 27, title: "정형적 개념 분석을 이용한 정부출연 연구소 기관평가 분석", authors: "구훈영; 이희정; 이근철", venue: "대한산업공학회지", year: 2021, type: "journal" },
  { id: 28, title: "스핀오프 스타트업 창업자의 사회적·인적 자본이 사업 성과에 미치는 영향: 정형적 개념분석 활용", authors: "최상훈; 이희정; 구훈영", venue: "대한산업공학회지", year: 2021, type: "journal" },
  { id: 29, title: "극장과 VOD 흥행에서 홀드백을 포함한 영화 흥행 요인의 영향", authors: "구훈영; 이희정; 이근철", venue: "경영과학", year: 2021, type: "journal" },
  { id: 30, title: "Identifying the mobile application repertoire based on weighted formal concept analysis", authors: "Kwon, Sung Eun; Kim, Youn Tae; Suh, Hyo-won; Lee, Heejung", venue: "Expert Systems with Applications", year: 2021, type: "journal" },
  { id: 31, title: "A practical approach for aspect-level sentiment analysis in the Korean online shopping malls", authors: "HS Suh, HJ Lee", venue: "ISIITA 2021 SUMMER", year: 2021, type: "conference" },
  { id: 32, title: "공동 특허 출원정보분석을 통한 기술협력 성과측정 방법", authors: "박찬호, 이희정", venue: "기술경영경제학회 하계 학술대회", year: 2021, type: "conference" },
  { id: 33, title: "Parse-tree based Semantic Relation Extraction from Natural Language Text", authors: "HS Suh, HJ Lee", venue: "ISIITA 2021 WINTER", year: 2021, type: "conference" },
  // 2020
  { id: 34, title: "Development of a Framework to Understand Tables in Engineering Specification Documents", authors: "Agossou, Valentin; Suh, Hyo-Won; Lee, Heejung; Lee, Jae Hyun", venue: "Applied Sciences", year: 2020, type: "journal" },
  { id: 35, title: "가중치를 적용한 정형적 개념분석을 통한 속성, 객체, 개념의 중요도 산출 기법", authors: "서효석; 윤성민; 이희정", venue: "대한산업공학회지", year: 2020, type: "journal" },
  { id: 36, title: "정형적 개념분석을 통한 SCM 연구동향 및 키워드 고찰", authors: "권용우, 이희정", venue: "Proceedings of Korea Society of Industrial Information Systems", year: 2020, type: "conference" },
  { id: 37, title: "유사 문서의 계층적 검색 기법: 시맨틱 유사도와 정형적 개념분석 활용", authors: "서효석, 이희정", venue: "Proceedings of Korea Society of Industrial Information Systems", year: 2020, type: "conference" },
  // 2019
  { id: 38, title: "텍스트 분석 기법과 온톨로지를 활용한 음식 레시피 추천 방법", authors: "Lee, Heejung; Hong, Jiheon", venue: "Journal of the Korean Institute of Industrial Engineers", year: 2019, type: "journal" },
  { id: 39, title: "시황 및 ICO 자금조달 결과에 따른 블록체인 스타트업 조직 구성에 관한 연구", authors: "이정민; 이희정", venue: "경영과학", year: 2019, type: "journal" },
  { id: 40, title: "텍스트 분석 기법과 식재료 계층구조를 활용한 음식 레시피 추천 방법", authors: "홍지헌; 이희정", venue: "대한산업공학회지", year: 2019, type: "journal" },
  { id: 41, title: "Prediction of Times-to-Failure of Semiconductor Chips Using Vmin Data", authors: "Lee, Heejung; Lee, Dong-Hee", venue: "International Journal of Industrial Engineering", year: 2019, type: "journal" },
  { id: 42, title: "Deep Learning Based Feature Extraction With Fusion Regularization On Sensor Signals of Semiconductor Manufacturing Process", authors: "JS Choi, JH Kang, MK Jeong, HJ Lee", venue: "2019 INFORMS Annual Meeting", year: 2019, type: "conference" },
  // 2018
  { id: 43, title: "Feature-based sentiment word selection and rating for system design", authors: "Park, Jinyoung; Lee, Heejung; Lee, Jae Hyun; Suh, HW", venue: "Journal of Industrial Electronics Technology and Application", year: 2018, type: "journal" },
  { id: 44, title: "Culinary recipe recommendation based on text analytics", authors: "Hong, Jiheon; Lee, Heejung", venue: "International Journal of Engineering and Technology (UAE)", year: 2018, type: "journal" },
  { id: 45, title: "레시피 마이닝과 미래의 식생활", authors: "홍지헌, 이희정", venue: "대한지역사회영양학회 2018 추계학술대회", year: 2018, type: "conference" },
  { id: 46, title: "제품 특징 평가를 통한 컨텍스트 기반 효율적인 제품 설계 방법론", authors: "박진영, 이희정, 이재현, 서효원", venue: "한국CDE학회 2018 하계학술대회논문집", year: 2018, type: "conference" },
  // 2017
  { id: 47, title: "연구개발 프로세스에서의 배치 사이즈 결정에 관한 연구: 시스템 다이내믹스 접근법 활용", authors: "서효석, 이희정", venue: "기술경영경제학회 2017 하계학술대회논문집", year: 2017, type: "conference" },
  // 2016
  { id: 48, title: "A solution selection approach to multiresponse surface optimization based on a clustering method", authors: "Lee, Heejung; Lee, Dong-Hee", venue: "Quality Engineering", year: 2016, type: "journal" },
  { id: 49, title: "사용자 태깅 기법을 이용한 엔지니어링 고장 데이터 분석", authors: "이희정, 서효원", venue: "Proceedings of the Society of CAD/CAM Conference", year: 2016, type: "conference" },
  // 2015
  { id: 50, title: "Construction of holistic fuzzy cognitive maps using ontology matching method", authors: "Lee, Dong Hee; Lee, Heejung", venue: "Expert Systems with Applications", year: 2015, type: "journal" },
  { id: 51, title: "A novel approach on operation and maintenance guideline using semantic processing and clustering", authors: "Jang, Ki Hoon; Hahm, Gyeong-June; Lee, Heejung; Suh, Hyo-Won", venue: "Industrial Engineering, Management Science and Applications 2015", year: 2015, type: "journal" },
  { id: 52, title: "의미유사성을 고려한 퍼지인지맵 설계", authors: "소호준; 이진욱; 이희정", venue: "한국경영과학회 학술대회논문집", year: 2015, type: "conference" },
  { id: 53, title: "은닉 마코프 모델을 이용한 플랜트 비정형 데이터 처리", authors: "이희정", venue: "2015 플랜트 융합기술 컨퍼런스", year: 2015, type: "conference" },
  { id: 54, title: "An Implementation of the F-Logic based Reasoning System for Product Development Management", authors: "SJ Lee, HJ Lee", venue: "International Conference on Researches in Engineering, Technology and Sciences", year: 2015, type: "conference" },
  // 2014
  { id: 55, title: "A holistic workflow modeling method for business process redesign", authors: "Lee, Heejung", venue: "International Journal of Industrial and Systems Engineering", year: 2014, type: "journal" },
  { id: 56, title: "Ontological semantic inference based on cognitive map", authors: "Lee, Heejung; Kwon, Soon Jae", venue: "Expert systems with Applications", year: 2014, type: "journal" },
  // 2013
  { id: 57, title: "Product configuration strategy based on product family similarity", authors: "Lee, Heejung", venue: "International Journal of Mechanical, Aerospace, Industrial, Mechatronic and Manufacturing Engineering", year: 2013, type: "journal" },
  { id: 58, title: "Cognitive map alignment using ontology matching process", authors: "Lee, Heejung", venue: "Proceedings of 14th Asia Pacific Industrial Engineering and Management Systems Conference", year: 2013, type: "conference" },
  // 2012
  { id: 59, title: "Product Family Design using Formal Concept Analysis and Ontology", authors: "Lee, Heejung", venue: "Journal of Korean Society of Industrial and Systems Engineering", year: 2012, type: "journal" },
  { id: 60, title: "The Hybrid Knowledge Model for Product Development Management", authors: "Lee, Heejung; Suh, Hyo-Won", venue: "International Journal of Computers and Information Engineering", year: 2012, type: "journal" },
  { id: 61, title: "정형적 개념 분석과 온톨로지를 활용한 제품계열 정보 설계", authors: "이희정", venue: "산업경영시스템학회지", year: 2012, type: "journal" },
  { id: 62, title: "Development of the Enterprise Process Evaluation for Small and Medium Business Consulting", authors: "Cho, Jey-Ryong; Lee, Heejung", venue: "Journal of Korean Society of Industrial and Systems Engineering", year: 2012, type: "journal" },
  { id: 63, title: "중소기업 경영컨설팅을 위한 전사적 프로세스 평가모델 개발", authors: "조재룡; 이희정", venue: "산업경영시스템학회지", year: 2012, type: "journal" },
  { id: 64, title: "제품개념설계를 위한 온톨로지 기반의 제품정보 모델링에 관한 연구", authors: "서승록; 이희정", venue: "한국경영공학회지", year: 2012, type: "journal" },
  { id: 65, title: "LCA 기반의 친환경 제품설계 가이드라인 방법", authors: "이호, 이주창, 이희정", venue: "한국산업경영시스템학회 2012 추계학술대회논문집", year: 2012, type: "conference" },
  { id: 66, title: "An ontological approach to measure similarity between different product information model", authors: "Lee, Joo Chang; Lee, Heejung", venue: "Proc. of the Asia Pacific Industrial Engineering & Management Systems Conference", year: 2012, type: "conference" },
  { id: 67, title: "중소기업의 프로세스 성숙도 평가모델 개발", authors: "조재룡; 이희정", venue: "한국산업경영시스템학회 학술대회", year: 2012, type: "conference" },
  // 2011
  { id: 68, title: "연구개발부문의 특성을 반영한 워크플로우 구축방법", authors: "서승록; 이희정", venue: "한국경영공학회지", year: 2011, type: "journal" },
  // 2010
  { id: 69, title: "An Ontological Approach to Select R&D Evaluation Metrics", authors: "Lee, Heejung", venue: "Journal of Korean Society of Industrial and Systems Engineering", year: 2010, type: "journal" },
  { id: 70, title: "온톨로지 기반 연구개발 평가지표 선정기법", authors: "이희정", venue: "산업경영시스템학회지", year: 2010, type: "journal" },
  { id: 71, title: "재제조·자원순환기술의 국내외 산업화 동향", authors: "정원; 이희정", venue: "신뢰성응용연구", year: 2010, type: "journal" },
  { id: 72, title: "Workflow Modeling for Product Development Environments based on Event Calculus", authors: "Lee, Hee-Jung; Suh, Hyo-Won", venue: "Korean Journal of Computational Design and Engineering", year: 2010, type: "journal" },
  // 2009
  { id: 73, title: "R&D 환경을 지원하기 위한 하이브리드 워크플로우 모델링 방법", authors: "이희정; 정원", venue: "한국산업경영시스템학회 학술대회", year: 2009, type: "conference" },
  { id: 74, title: "강화제조방법에 관한 연구: 판유리를 중심으로", authors: "허성관; 이희정; 조재룡; 이환덕", venue: "한국경영학회 융합학술대회", year: 2009, type: "conference" },
  { id: 75, title: "Hybrid knowledge representation and reasoning with ontology and rules for product engineering", authors: "Noh, Jung-Do; Suh, Hyo-Won; Lee, Heejung", venue: "International Design Engineering Technical Conferences and Computers and Information in Engineering Conference", year: 2009, type: "conference" },
  { id: 76, title: "Development of a R&D Performance Metrics using Ontology Approach", authors: "HJ Lee, JH Kim, TK Song", venue: "Proceedings of 10th Asia Pacific Industrial Engineering & Management Systems Conference", year: 2009, type: "conference" },
  // 2008
  { id: 77, title: "연구개발 성과관리체계 구축", authors: "이희정; 김승동", venue: "한국산업경영시스템학회 학술대회", year: 2008, type: "conference" },
  { id: 78, title: "Estimating the duration of stochastic workflow for product development process", authors: "Lee, Heejung; Suh, Hyo-Won", venue: "International Journal of Production Economics", year: 2008, type: "journal" },
  // 2006
  { id: 79, title: "Workflow structuring and reengineering method for design process", authors: "Lee, Heejung; Suh, Hyo-Won", venue: "Computers & Industrial Engineering", year: 2006, type: "journal" },
];

export const typeLabels: Record<string, string> = {
  all: "All",
  journal: "Journal",
  conference: "Conference",
  workshop: "Workshop",
};
