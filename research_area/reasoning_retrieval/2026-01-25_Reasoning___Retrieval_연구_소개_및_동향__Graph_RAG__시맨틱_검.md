---
title: Reasoning & Retrieval 연구 소개 및 동향 (Graph RAG, 시맨틱 검색, 프롬프트 엔지니어링)
created: 2026-01-25 13:21
tags: reasoning, retrieval, graphrag, semantic-search, prompt-engineering, LLM, RAG
source_query: 
---

# Reasoning & Retrieval 연구 소개 및 동향

## 개요

본 문서는 대규모 언어 모델(LLM) 기반 추론(Reasoning)과 검색(Retrieval) 기술의 최신 연구 동향을 분석합니다. Graph RAG, 시맨틱 검색, 프롬프트 엔지니어링 세 분야의 120편 논문을 기반으로 합니다.

---

## 1. Graph RAG (그래프 기반 검색 증강 생성)

### 핵심 논문

| 논문 | 인용수 | 연도 | 학술지/학회 | 핵심 기여 |
|------|--------|------|-------------|-----------|
| Graph Retrieval-Augmented Generation: A Survey | 274 | 2024 | ACM TOIS | GraphRAG 최초 종합 서베이, 워크플로우 정형화 |
| G-Retriever | 190 | 2024 | NeurIPS | 텍스트 그래프 QA용 RAG, Prize-Collecting Steiner Tree |
| RAG with KG for Customer Service QA | 173 | 2024 | SIGIR | LinkedIn 배포, MRR 77.6% 향상, 해결시간 28.6% 단축 |
| LightRAG | 153 | 2024 | EMNLP | 이중 레벨 검색, 점진적 업데이트, 경량화 |
| Medical Graph RAG | 109 | 2024 | arXiv | 의료 도메인 특화, Triple Graph + U-Retrieval |

### 연구 트렌드

**1) 도메인 특화 GraphRAG (2024-2025)**
- 의료(MedGraphRAG, MedRAG), 법률, 고객 서비스 등 특화 시스템
- 도메인 지식그래프와 RAG 통합

**2) 효율성 개선**
- LightRAG: 이중 레벨 검색 + 점진적 업데이트
- MiniRAG: 소형 언어 모델(SLM) 지원, 저장 공간 75% 절감
- PathRAG: 관계 경로 기반 pruning으로 중복 제거

**3) 다중 홉 추론 강화**
- HopRAG: retrieve-reason-prune 메커니즘
- GRAG: 텍스트+토폴로지 이중 뷰
- HyperGraphRAG: n-ary 관계 표현을 위한 하이퍼그래프

**4) 멀티모달 확장**
- VideoRAG: 장시간 비디오용 이중 채널 아키텍처
- HM-RAG: 계층적 멀티에이전트 멀티모달 RAG

---

## 2. 시맨틱 검색 / Dense Retrieval

### 핵심 논문

| 논문 | 인용수 | 연도 | 학술지/학회 | 핵심 기여 |
|------|--------|------|-------------|-----------|
| Blended RAG | 128 | 2024 | MIPR | Dense+Sparse 하이브리드, NQ/TREC-COVID 벤치마크 |
| REMAP | 53 | 2019 | TIP | 다층 CNN 엔트로피 가중 풀링, Google Landmark 우승 |
| Multi-Aspect Dense Retrieval | 21 | 2022 | KDD | 다중 aspect 임베딩, 전자상거래 특화 |
| Generative Retrieval as Multi-Vector | 19 | 2024 | SIGIR | 생성적 검색과 다중 벡터 검색 동치성 증명 |
| TaxoIndex | 14 | 2024 | EMNLP | 학술논문용 택소노미 기반 시맨틱 인덱싱 |

### 연구 트렌드

**1) 하이브리드 검색 (2024-2025)**
- Blended RAG: Dense Vector + Sparse Encoder 융합
- BMX: BM25 + 엔트로피 가중 유사도 + 시맨틱 향상
- Hybrid Semantic Search: 벡터 + 키워드 조합

**2) 도메인 적응**
- 학술논문(TaxoIndex), POI 검색(Geo-Enhanced), 법률(LegalBERT)
- 의료 코호트 검색(Dense Passage Retrieval)

**3) 다중 벡터 표현**
- Multi-Aspect Dense Retrieval: aspect별 임베딩
- ColBERTv2: late-interaction 아키텍처
- MURAL: 다중 세분화 인식

**4) 검색 효율성**
- EHI: End-to-end 계층적 인덱싱
- SeDR: 장문 문서 세그먼트 표현
- 대규모 e-commerce 검색 최적화

---

## 3. 프롬프트 엔지니어링 / LLM 추론

### 핵심 논문

| 논문 | 인용수 | 연도 | 학술지/학회 | 핵심 기여 |
|------|--------|------|-------------|-----------|
| Concise Thoughts | 80 | 2024 | arXiv | 간결성 메트릭, Constrained-CoT 제안 |
| Long-to-Short LLM Reasoning via Model Merging | 38 | 2025 | arXiv | 모델 병합으로 응답 길이 55% 감소, overthinking 해결 |
| Prompt Engineering for Secure Code | 15 | 2025 | Forge | 보안 취약점 56% 감소, 반복 프롬프팅 |
| LLMs for Wireless Networks | 15 | 2024 | IEEE WC | 네트워크 최적화/예측용 자기 개선 프롬프팅 |
| RAG + Prompt for Dialect COPA | 14 | 2024 | VarDial | RAG + 고급 프롬프트로 방언 이해 |

### 연구 트렌드

**1) 추론 효율화 (2025)**
- Long-to-Short: System 1/2 모델 병합으로 overthinking 방지
- Constrained-CoT: 출력 길이 제한으로 간결성 확보
- Adaptive Injection Decoding: 추론 중단 방지

**2) Chain-of-Thought 발전**
- Auto-CoT, Logical CoT (LogiCoT)
- Tree of Thought: 분기 탐색 추론
- Self-refinement: 자기 검증 반복

**3) 도메인 특화 프롬프팅**
- 의료: 통계 추론용 하이브리드 프롬프팅
- 법률: 논증 추론 + ICL
- 코드: 보안 취약점 탐지/수정
- 경로 계획: Spatial-to-Relational 변환

**4) RAG + 프롬프트 통합**
- Graph-RAG + Prompt Engineering: 요구사항 추적
- KG-enhanced RAG with CoT/ToT
- 장문 문서용 계층적 프롬프트

---

## 4. 세 분야의 융합 트렌드

### 4.1 Graph RAG + Semantic Search
- 지식그래프 구조 + 벡터 유사도 검색 결합
- 멀티홉 추론을 위한 그래프 탐색 + 밀집 검색

### 4.2 Graph RAG + Prompt Engineering
- Graph-RAG + CoT/ToT로 복잡 추론 강화
- 구조화된 지식 기반 프롬프트 구성

### 4.3 Semantic Search + Prompt Engineering
- 검색된 컨텍스트의 효과적 활용을 위한 프롬프트 설계
- 쿼리 확장(Query Expansion)을 위한 LLM 프롬프팅

### 4.4 통합 시스템
| 시스템 | 구성 요소 | 응용 분야 |
|--------|-----------|-----------|
| MedGraphRAG | KG + RAG + 의료 온톨로지 | 의료 진단 |
| DO-RAG | KG + 벡터 + CoT Agent | 도메인 QA |
| KG-RAG for ITS | KG-RAG + 적응형 프롬프트 | 교육 튜터링 |

---

## 5. 주요 연구 과제

### 해결된 과제
- 기본 RAG의 hallucination 감소 → GraphRAG로 개선
- 단순 키워드 검색의 한계 → Dense Retrieval로 극복
- 단일 단계 추론 한계 → CoT/ToT로 해결

### 현재 진행 중인 과제
1. **확장성**: 대규모 KG에서의 효율적 검색
2. **동적 업데이트**: 실시간 지식 그래프 갱신
3. **멀티모달 통합**: 텍스트-이미지-비디오 통합 RAG
4. **평가 체계**: GraphRAG 성능 측정 표준화

### 향후 연구 방향
1. **Foundation Model for Graph**: GFM-RAG 같은 그래프 파운데이션 모델
2. **Agentic RAG**: 멀티에이전트 협업 기반 RAG
3. **Reasoning LLM + RAG**: o1, DeepSeek-R1 등 추론 모델과 RAG 결합
4. **Efficient Inference**: 경량화 및 온디바이스 배포

---

## 6. 참고 문헌

### Graph RAG
- Peng et al., Graph Retrieval-Augmented Generation: A Survey, ACM TOIS 2024
- He et al., G-Retriever, NeurIPS 2024
- Guo et al., LightRAG, EMNLP 2024

### Semantic Search
- Sawarkar et al., Blended RAG, MIPR 2024
- Kong et al., Multi-Aspect Dense Retrieval, KDD 2022
- Kang et al., TaxoIndex, EMNLP 2024

### Prompt Engineering
- Nayab et al., Concise Thoughts, arXiv 2024
- Wu et al., Long-to-Short LLM Reasoning via Model Merging, arXiv 2025
- Masoudifard et al., Graph-RAG + Prompt Engineering, arXiv 2024

---

*분석 기준: 2024-2025년 Semantic Scholar API 검색 결과 120편 논문*
*생성일: 2025-01-25*