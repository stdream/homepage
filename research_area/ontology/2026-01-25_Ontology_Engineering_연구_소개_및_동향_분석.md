---
title: Ontology Engineering 연구 소개 및 동향 분석
created: 2026-01-25 11:49
tags: ontology, knowledge-engineering, survey, LLM
source_query: 
---

# Ontology Engineering 연구 소개 및 동향 분석

## 1. 개요

**Ontology Engineering**은 특정 도메인의 지식을 형식적으로 표현하고 구조화하기 위한 온톨로지를 설계, 구축, 평가, 유지보수하는 학문 분야입니다. 온톨로지는 개념(concepts), 관계(relations), 속성(properties), 제약조건(constraints)을 통해 도메인 지식을 명시적으로 표현합니다.

### 핵심 정의

Guarino(1995)에 따르면, 온톨로지는 **"공유된 개념화의 형식적이고 명시적인 명세(formal, explicit specification of a shared conceptualization)"**로 정의됩니다. 이는 AI, 지식공학, 시맨틱 웹의 기반 기술로 자리잡았습니다.

---

## 2. 기초 연구 (1990s-2000s)

### 2.1 철학적/이론적 기반

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| Formal ontology, conceptual analysis and knowledge representation | Nicola Guarino | 1995 | 1,244 | 형식 온톨로지의 철학적 기반 제시 |
| Ontology Engineering Methodology | Sure-Vetter, Staab, Studer | 2009 | 147 | 체계적 방법론 프레임워크 |

### 2.2 주요 개념

1. **Ontological Level**: Brachman의 인식론적/개념적 수준 사이에 위치하는 온톨로지적 수준 제안
2. **Task-Independent Knowledge Base**: 특정 과업에 독립적인 재사용 가능한 지식베이스
3. **Epistemology vs Ontology**: 추론의 본질(인식론)과 실재의 본질(존재론) 구분

---

## 3. 주요 방법론

### 3.1 전통적 방법론

| 방법론 | 개발기관/저자 | 연도 | 인용수 | 특징 |
|--------|--------------|------|--------|------|
| **NeOn Methodology** | Suárez-Figueroa, Gómez-Pérez, Fernández-López | 2012 | 451 | 네트워크 기반 온톨로지 개발, 재사용 강조 |
| **DOGMA Methodology** | Spyns, Tang, Meersman | 2008 | 28 | 모델 이론 기반 접근법 |
| **On-To-Knowledge** | AIFB, Karlsruhe | 2000s | - | 지식 관리 중심 |
| **METHONTOLOGY** | UPM Madrid | 1990s | - | IEEE 표준 기반 생명주기 |

### 3.2 최신 방법론

| 방법론 | 저자 | 연도 | 인용수 | 특징 |
|--------|------|------|--------|------|
| **LOT (Linked Open Terms)** | Poveda-Villalón et al. | 2022 | 146 | 산업 지향적 프레임워크, Linked Data 연계 |
| **Agile OE Methodology** | Spoladore, Pessot, Trombetta | 2023 | 24 | 협업 기반 애자일 개발 |
| **Lightweight Methodology** | De Nicola, Missikoff | 2016 | 125 | 빠른 온톨로지 구축 |
| **HCOME** | Kotis, Vouros | 2006 | - | 인간 중심 협업 온톨로지 공학 |

### 3.3 방법론 비교



---

## 4. 핵심 기술 및 도구

### 4.1 온톨로지 언어
- **OWL (Web Ontology Language)**: W3C 표준, Description Logic 기반
- **RDF/RDFS**: 자원 기술 프레임워크
- **SPARQL**: 시맨틱 쿼리 언어

### 4.2 개발 도구
- **Protégé**: Stanford 개발, 가장 널리 사용되는 온톨로지 편집기
- **TopBraid Composer**: 상용 온톨로지 개발 환경
- **WebVOWL**: 웹 기반 온톨로지 시각화

### 4.3 최신 도구

| 도구 | 저자 | 연도 | 인용수 | 특징 |
|------|------|------|--------|------|
| **DeepOnto** | He, Chen et al. | 2023 | 39 | Python 기반, 딥러닝 통합 |
| **OWLAPY** | Baci et al. | 2025 | 1 | Python OWL 프레임워크 |

---

## 5. 최신 연구 동향 (2020-현재)

### 5.1 LLM 기반 온톨로지 공학

**패러다임 전환**: 2023년부터 Large Language Models (LLMs)를 활용한 온톨로지 공학이 주요 연구 트렌드로 부상했습니다.

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| **LLMs4OL** | Babaei Giglou, D'Souza, Auer | 2023 | 136 | LLM 기반 온톨로지 학습 프레임워크 |
| **Ontology engineering with LLMs** | Mateiu, Groza | 2023 | 49 | GPT-3 파인튜닝으로 NL→DL 변환 |
| **OntoChat** | Zhang et al. | 2024 | 29 | 대화형 온톨로지 공학 프레임워크 |
| **Accelerating KG and OE with LLMs** | Shimizu, Hitzler | 2024 | 23 | 모듈러 접근법 강조 |
| **OntoGenix** | Val-Calvo et al. | 2025 | 18 | 데이터셋 기반 온톨로지 생성 |

### 5.2 LLM 활용 주요 과업

1. **Term Typing**: 용어의 카테고리/타입 식별
2. **Taxonomy Discovery**: 계층적 관계 발견
3. **Non-Taxonomic Relation Extraction**: 비계층적 관계 추출
4. **Competency Question Generation**: 온톨로지 요구사항 질문 자동 생성

### 5.3 Human-LLM 협업 스펙트럼

Doumanas et al. (2024)은 인간-LLM 협업 수준을 4단계로 정의:



**연구 결과**: LLM이 온톨로지 공학 프로세스를 크게 가속화하지만, 높은 인간 개입을 유지할 때 정확성과 완전성이 향상됨.

### 5.4 RAG 기반 접근법

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| A RAG Approach for Generating CQs | Pan et al. | 2024 | 8 | RAG로 Competency Questions 생성 |
| Automating agentic collaborative OE | Soularidis et al. | 2025 | 0 | RAG + 역할 시뮬레이션 |

---

## 6. 응용 분야

### 6.1 도메인별 적용

| 도메인 | 대표 연구 | 특징 |
|--------|----------|------|
| **의료/바이오** | ACEs Ontology, UMLS | 건강 모니터링, 질병 분류 |
| **제조업** | Additive Manufacturing Ontology | 3D 프린팅, Industry 4.0 |
| **로보틱스** | Robot Manipulation Ontology | 자율 로봇, 지식 추론 |
| **스마트 시티** | Urban Heat Island Ontology | 도시 계획, 환경 모니터링 |
| **문화유산** | Cultural Gems Ontology | EU 문화 디지털화 |

### 6.2 기술 통합

- **Knowledge Graphs**: 온톨로지 기반 지식 그래프 구축
- **Semantic Web**: 웹 데이터의 의미적 상호운용성
- **Digital Twins**: 제조/건축 분야 디지털 트윈 모델링

---

## 7. 핵심 과제 및 연구 방향

### 7.1 현재 과제

1. **Consensus Building**: 온톨로지 개발은 합의 형성 과정 (Neuhaus & Hastings, 2022)
2. **Ontology Evolution**: 살아있는 온톨로지의 진화 관리 (Kotis et al., 2020)
3. **FAIR Principles**: 온톨로지의 Findable, Accessible, Interoperable, Reusable 준수

### 7.2 LLM 관련 과제

1. **Hallucination**: LLM의 허위 정보 생성 문제
2. **Domain Adaptation**: 도메인 특화 미세조정 필요성
3. **Syntax Precision**: OWL 문법 정확성 보장

### 7.3 미래 연구 방향

1. **Hybrid Approaches**: 인간-AI 협업 최적화
2. **Automated Evaluation**: 온톨로지 품질 자동 평가
3. **Modular Ontologies**: 재사용 가능한 모듈러 설계
4. **LLM Fine-tuning**: 도메인 특화 LLM 개발

---

## 8. 핵심 참고문헌

### 기초 연구
1. Guarino, N. (1995). Formal ontology, conceptual analysis and knowledge representation. *Int. J. Hum. Comput. Stud.* [DOI: 10.1006/IJHC.1995.1066](https://doi.org/10.1006/IJHC.1995.1066)

### 방법론
2. Suárez-Figueroa, M. et al. (2012). The NeOn Methodology for Ontology Engineering. [DOI: 10.1007/978-3-642-24794-1_2](https://doi.org/10.1007/978-3-642-24794-1_2)
3. Poveda-Villalón, M. et al. (2022). LOT: An industrial oriented ontology engineering framework. *Eng. Appl. AI* [DOI: 10.1016/j.engappai.2022.104755](https://doi.org/10.1016/j.engappai.2022.104755)
4. Kotis, K. et al. (2020). Ontology engineering methodologies for the evolution of living and reused ontologies. *KER* [DOI: 10.1017/S0269888920000065](https://doi.org/10.1017/S0269888920000065)

### LLM 기반 연구
5. Babaei Giglou, H. et al. (2023). LLMs4OL: Large Language Models for Ontology Learning. [arXiv:2307.16648](https://arxiv.org/abs/2307.16648)
6. He, Y. et al. (2023). DeepOnto: A Python Package for Ontology Engineering with Deep Learning. [arXiv:2307.03067](https://arxiv.org/abs/2307.03067)
7. Zhang, B. et al. (2024). OntoChat: a Framework for Conversational Ontology Engineering. [arXiv:2403.05921](https://arxiv.org/abs/2403.05921)
8. Doumanas, D. et al. (2024). From Human- to LLM-Centered Collaborative Ontology Engineering. *Applied Ontology* [DOI: 10.1177/15705838241305067](https://doi.org/10.1177/15705838241305067)

---

## 9. 결론

Ontology Engineering은 1990년대 지식 표현의 이론적 기반에서 시작하여, 2000년대 체계적 방법론(NeOn, METHONTOLOGY 등)을 거쳐, 2020년대에는 **LLM 기반 자동화**라는 새로운 패러다임으로 전환하고 있습니다.

**핵심 트렌드**:
- LLM을 활용한 온톨로지 학습 및 자동 생성
- Human-AI 협업을 통한 효율성과 정확성 균형
- RAG 기반 도메인 지식 통합
- 모듈러/재사용 가능한 온톨로지 설계

**향후 전망**: LLM 기술의 발전과 함께 온톨로지 공학은 더욱 자동화되고 접근성이 높아질 것으로 예상되며, 특히 도메인 전문가와 AI의 효과적인 협업 모델 개발이 핵심 연구 과제가 될 것입니다.

---

*분석 기준일: 2026-01-25*
*검색 키워드: ontology engineering, ontology engineering methodology, ontology knowledge representation, ontology learning extraction*
*총 검색 논문 수: 130편*