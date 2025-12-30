# MBTI 커뮤니케이션 가이드

리더가 후배, 선배, 동료와 소통할 때 상대의 MBTI 성향에 맞춘 효과적인 커뮤니케이션 방법을 제공하는 웹 애플리케이션입니다.

## 주요 기능

- **관계 선택**: 후배/선배/동료 중 소통 상대 선택
- **MBTI 선택**: 16가지 MBTI 타입 중 상대의 성격 유형 선택 (좌우 스크롤)
- **상황 선택**: 50가지 업무 상황 중 해당하는 상황 선택
  - 업무 지시
  - 보고
  - 회의
  - 피드백
  - 협업
  - 갈등 해결
  - 동기부여
  - 의사결정
- **세밀한 조언 제공**:
  - 개요
  - 핵심 포인트
  - 커뮤니케이션 스타일 (어조, 접근 방법, 피해야 할 것)
  - 좋은 예시 vs 나쁜 예시
  - 추가 팁

## 디자인

- **글래스모피즘** UI로 세련되고 현대적인 느낌
- **이모지 최소화**로 전문적이고 심플한 인터페이스
- **반응형 디자인**으로 모바일, 태블릿, 데스크톱 모두 지원
- **부드러운 애니메이션** (Framer Motion)

## 기술 스택

- **React 19** + **TypeScript**
- **Vite** (빌드 도구)
- **React Router** (라우팅)
- **Framer Motion** (애니메이션)
- **CSS3** (글래스모피즘 효과)

## 개발 환경 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 미리보기
npm run preview
```

## Railway 배포

이 프로젝트는 Railway 배포에 최적화되어 있습니다.

```bash
# 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

Railway에서 자동으로 다음을 실행합니다:
1. `npm install`
2. `npm run build`
3. `npm start`

## 프로젝트 구조

```
src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── GlassButton.tsx
│   └── GlassCard.tsx
├── pages/             # 페이지 컴포넌트
│   ├── HomePage.tsx
│   ├── RelationshipPage.tsx
│   ├── MBTIPage.tsx
│   ├── SituationPage.tsx
│   └── AdvicePage.tsx
├── data/              # 데이터 및 로직
│   ├── mbtiData.ts
│   ├── situations.ts
│   └── adviceData.ts
├── types/             # TypeScript 타입 정의
│   └── index.ts
├── App.tsx            # 메인 앱 (라우팅)
└── index.css          # 글로벌 스타일
```

## 라이센스

MIT
