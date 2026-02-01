---
title: Knowledge Graph 구축 연구 소개 및 동향
created: 2026-01-25 12:47
tags: knowledge-graph, survey, LLM, 연구동향
source_query: 
---

# Knowledge Graph 구축: 기본 연구소개 및 연구동향

## 1. 개요

Knowledge Graph (KG)는 실세계의 지식을 **엔티티(노드)**와 **관계(엣지)**로 구조화하여 표현하는 지식 표현 기술이다. 검색 엔진, 추천 시스템, 질의응답 시스템 등 다양한 AI 응용 분야에서 핵심 인프라로 활용되고 있다.

KG 구축은 전통적으로 도메인 전문가의 수작업에 의존했으나, 최근 **대규모 언어모델(LLM)**의 등장으로 자동화된 구축 방법론이 급속히 발전하고 있다.

---

## 2. 핵심 논문 (인용수 기준)

### 2.1 기반 연구 (2018-2019)

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| **COMET** | Bosselut et al. | 2019 | 987 | 상식 KG 자동 생성을 위한 Transformer 기반 생성 모델 |
| **SciIE** | Luan et al. | 2018 | 751 | 과학 문헌에서 엔티티/관계/상호참조를 동시 추출하는 멀티태스크 프레임워크 |

**COMET (Bosselut et al., 2019)**
- ATOMIC, ConceptNet 등 상식 KG에 대한 최초의 포괄적 자동 구축 연구
- GPT 기반 생성 모델로 상식 지식을 자연어로 생성
- Top-1 정밀도: ATOMIC 77.5%, ConceptNet 91.7%

**SciIE (Luan et al., 2018)**
- 과학 논문을 위한 SciERC 데이터셋 구축
- 공유 span representation을 통한 다중 태스크 학습
- 도메인 특화 피처 없이 기존 모델 대비 성능 향상

### 2.2 멀티모달 KG (2022-2023)

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| **MMKG Survey** | Zhu et al. | 2022 | 236 | 텍스트-이미지 기반 멀티모달 KG 구축/응용 종합 서베이 |
| **Comprehensive Survey** | Zhong et al. | 2023 | 224 | 300+ 방법론을 분석한 ACM Computing Surveys 논문 |

**Multi-Modal Knowledge Graph Survey (Zhu et al., 2022)**
- 텍스트와 이미지를 결합한 MMKG 구축 체계 정립
- 지식 획득 → 정제 → 진화의 3단계 프레임워크 제시
- 엔티티 정렬, 충돌 해결 등 핵심 과제 분석

### 2.3 LLM 기반 KG 구축 (2023-2025)

| 논문 | 저자 | 연도 | 인용수 | 핵심 기여 |
|------|------|------|--------|-----------|
| **LLMs for KG** | Zhu et al. | 2023 | 216 | LLM의 KG 구축/추론 능력 종합 평가 |
| **Generative KGC Review** | Ye et al. | 2022 | 99 | Seq2Seq 기반 생성적 KG 구축 분류 체계 |
| **EDC Framework** | Zhang & Soh | 2024 | 78 | Extract-Define-Canonicalize 3단계 프레임워크 |
| **LLM-assisted Ontology** | Kommineni et al. | 2024 | 78 | 온톨로지/KG 구축을 위한 LLM 파이프라인 |

**LLMs for KG Construction and Reasoning (Zhu et al., 2023)**
- GPT-4 기반 KG 구축/추론 능력 정량/정성 평가
- 8개 데이터셋, 4개 태스크에서 실험
- LLM은 추출보다 **추론**에 더 적합 (AutoKG 제안)

**Extract-Define-Canonicalize (Zhang & Soh, 2024)**
- 스키마 제한 없이 대규모 KG 구축 가능
- 3단계: 오픈 정보 추출 → 스키마 정의 → 정규화
- RAG 방식 스키마 검색으로 성능 향상

---

## 3. 연구 동향 분석

### 3.1 시기별 발전 흐름



### 3.2 주요 기술 트렌드

#### (1) LLM 기반 정보 추출
- **Zero-shot Prompting**: 학습 데이터 없이 엔티티/관계 추출
- **In-context Learning**: 소수 예시만으로 도메인 적응
- **Chain-of-Thought**: 단계적 추론을 통한 정확도 향상

#### (2) 생성적 KG 구축 (Generative KGC)
- Seq2Seq 모델로 트리플 직접 생성
- 스키마 유연성 확보
- 복잡한 관계 표현 가능

#### (3) 에이전트 기반 자율 구축
- UrbanKGent: 도시 데이터 KG 자율 구축
- AutoKG: 멀티 에이전트 협업
- GraphJudge: LLM을 판정자로 활용한 품질 검증

#### (4) RAG 통합
- Graphusion: 전역적 관점의 KG 구축
- 외부 지식 소스 동적 참조
- 환각(Hallucination) 완화

### 3.3 응용 도메인

| 도메인 | 대표 연구 | 특징 |
|--------|-----------|------|
| **의료/헬스케어** | Healthcare KG Survey (2023), Sepsis KG (2024), Heart Failure KG (2024) | 임상 데이터 통합, 진단 지원 |
| **사이버보안** | AttacKG+ (2024), LLM-TIKG (2024) | 위협 정보 분석, 공격 패턴 추론 |
| **교육** | Cross-Data KG (2024), TutorQA | 학습 경로 추천, 지식 질의응답 |
| **산업/제조** | IDS-KG (2024), Failure KG (2024) | 예지정비, 장애 진단 |
| **도시/환경** | UrbanKGent (2024), Earthquake KG (2024) | 스마트시티, 재난 대응 |

---

## 4. 핵심 기술 구성 요소

### 4.1 KG 구축 파이프라인



### 4.2 LLM 활용 방식

| 방식 | 설명 | 장점 | 단점 |
|------|------|------|------|
| **Zero-shot** | 프롬프트만으로 추출 | 학습 데이터 불필요 | 정밀도 낮음 |
| **Few-shot** | 소수 예시 제공 | 도메인 적응 용이 | 예시 품질 의존 |
| **Fine-tuning** | 도메인 데이터로 미세조정 | 높은 정확도 | 데이터/비용 필요 |
| **RAG** | 외부 지식 검색 통합 | 환각 감소 | 검색 품질 의존 |

### 4.3 평가 지표

- **Intrinsic**: Precision, Recall, F1-score (엔티티/관계 추출)
- **Extrinsic**: 다운스트림 태스크 성능 (QA, 추천 등)
- **Human Evaluation**: 의미적 정확성, 완전성 평가

---

## 5. 향후 연구 방향

### 5.1 기술적 과제

1. **스키마 자동 유도**: 사전 정의 없이 도메인 스키마 자동 생성
2. **지식 진화**: 시간에 따른 지식 업데이트 및 버전 관리
3. **멀티모달 통합**: 텍스트, 이미지, 테이블, 그래프 등 다양한 소스 통합
4. **환각 제어**: LLM 생성 지식의 사실성 검증

### 5.2 응용 확장

1. **도메인 특화 KG**: 법률, 금융, 과학 등 전문 분야 확장
2. **실시간 KG**: 스트리밍 데이터로부터 동적 KG 구축
3. **개인화 KG**: 사용자별 맞춤 지식 그래프

### 5.3 LLM + KG 시너지

- **KG → LLM**: 지식 그래프로 LLM 환각 완화
- **LLM → KG**: LLM으로 KG 자동 구축/확장
- **협업 추론**: KG 구조 + LLM 언어 이해력 결합

---

## 6. 결론

Knowledge Graph 구축 연구는 **딥러닝 기반 추출**(2018-2019)에서 **멀티모달 확장**(2020-2022), **LLM 기반 자동화**(2023-2024)를 거쳐 현재 **완전 자율 구축**(2025-)의 단계로 발전하고 있다.

특히 GPT-4 등 대규모 언어모델의 등장으로 수작업 의존도가 크게 감소하고 있으며, 에이전트 기반 자율 구축 시스템이 등장하고 있다. 향후에는 LLM과 KG의 시너지를 극대화하는 하이브리드 시스템이 주류가 될 것으로 전망된다.

---

## 참고 문헌 (상위 10편)

1. Bosselut et al. (2019). COMET: Commonsense Transformers for Automatic KG Construction. ACL. [987 citations]
2. Luan et al. (2018). Multi-Task Identification of Entities, Relations, and Coreference for Scientific KG. EMNLP. [751 citations]
3. Zhu et al. (2022). Multi-Modal Knowledge Graph Construction and Application: A Survey. TKDE. [236 citations]
4. Zhong et al. (2023). A Comprehensive Survey on Automatic KG Construction. ACM Computing Surveys. [224 citations]
5. Zhu et al. (2023). LLMs for KG Construction and Reasoning. WWW. [216 citations]
6. Ye et al. (2022). Generative Knowledge Graph Construction: A Review. EMNLP. [99 citations]
7. Abu-Salih et al. (2024). A Systematic Literature Review of KG Construction in Education. Heliyon. [83 citations]
8. Zhang & Soh (2024). Extract, Define, Canonicalize: An LLM-based Framework for KGC. EMNLP. [78 citations]
9. Kommineni et al. (2024). From Human Experts to Machines: An LLM Supported Approach. arXiv. [78 citations]
10. Trajanoska et al. (2023). Enhancing KG Construction Using LLMs. arXiv. [76 citations]
