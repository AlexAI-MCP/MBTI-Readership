import type { SituationCategory } from '../types';

// 상황 카테고리별 핵심 전략
export const situationStrategies: Record<SituationCategory, {
  name: string;
  focus: string;
  keyAspects: string[];
}> = {
  task_assignment: {
    name: '업무 지시',
    focus: '명확한 전달과 동기부여',
    keyAspects: ['목표 명확화', '기대치 설정', '자율성 부여', '리소스 제공'],
  },
  reporting: {
    name: '보고',
    focus: '효율적 정보 전달',
    keyAspects: ['핵심 정보', '구조화', '객관성', '후속 조치'],
  },
  meeting: {
    name: '회의',
    focus: '참여와 생산성',
    keyAspects: ['안건 명확화', '의견 수렴', '시간 관리', '결론 도출'],
  },
  feedback: {
    name: '피드백',
    focus: '성장 지원',
    keyAspects: ['구체성', '균형', '실행 가능성', '긍정적 방향'],
  },
  collaboration: {
    name: '협업',
    focus: '시너지 창출',
    keyAspects: ['역할 분담', '소통 채널', '상호 존중', '공동 목표'],
  },
  conflict_resolution: {
    name: '갈등 해결',
    focus: '건설적 해결',
    keyAspects: ['경청', '객관성', '공감', 'win-win 추구'],
  },
  motivation: {
    name: '동기부여',
    focus: '내재적 동기 자극',
    keyAspects: ['강점 인정', '비전 제시', '자율성', '성장 기회'],
  },
  decision_making: {
    name: '의사결정',
    focus: '효과적인 결정',
    keyAspects: ['정보 수집', '기준 설정', '이해관계 고려', '실행 계획'],
  },
};

// MBTI별 상황 대응 스타일
export const mbtiSituationStyles = {
  // Analysts (NT)
  INTJ: {
    taskPreference: '전략적 목표와 장기 비전을 제시받기를 선호',
    reportingStyle: '핵심과 결론을 먼저, 논리적 근거 중심',
    meetingStyle: '효율적이고 목적 지향적인 회의 선호',
    feedbackNeeds: '객관적 데이터와 개선 방안 중심',
    collaborationStyle: '독립적 작업 후 통합하는 방식 선호',
    conflictApproach: '논리와 효율성으로 해결',
    motivationFactors: ['전략적 중요성', '독창적 해결', '장기 영향력'],
    decisionStyle: '분석적이고 장기적 관점',
  },
  INTP: {
    taskPreference: '문제의 본질과 탐구 자율성 중시',
    reportingStyle: '정확성과 논리적 일관성 강조',
    meetingStyle: '아이디어 토론과 개념적 논의 선호',
    feedbackNeeds: '논리적 설명과 개선 가능성',
    collaborationStyle: '지적 교류와 자율적 기여',
    conflictApproach: '객관적 분석으로 근본 원인 파악',
    motivationFactors: ['지적 호기심', '혁신 기회', '논리적 완성도'],
    decisionStyle: '다양한 가능성을 탐구하는 분석적 접근',
  },
  ENTJ: {
    taskPreference: '도전적 목표와 명확한 권한 선호',
    reportingStyle: '간결하고 행동 중심적 보고',
    meetingStyle: '신속한 결정과 실행 지향',
    feedbackNeeds: '직접적이고 실용적인 피드백',
    collaborationStyle: '리더십을 발휘하며 효율적 조율',
    conflictApproach: '직접적 대화로 신속 해결',
    motivationFactors: ['리더십 기회', '영향력', '성과 달성'],
    decisionStyle: '빠르고 결단력 있는 의사결정',
  },
  ENTP: {
    taskPreference: '혁신적 도전과 창의적 자유',
    reportingStyle: '새로운 관점과 가능성 제시',
    meetingStyle: '활발한 토론과 브레인스토밍',
    feedbackNeeds: '건설적 도전과 새로운 시각',
    collaborationStyle: '아이디어 교환과 유연한 협업',
    conflictApproach: '창의적 대안으로 해결',
    motivationFactors: ['혁신 기회', '지적 자극', '새로운 도전'],
    decisionStyle: '여러 옵션을 탐색하는 유연한 접근',
  },

  // Diplomats (NF)
  INFJ: {
    taskPreference: '의미 있는 목표와 가치 일치',
    reportingStyle: '통찰력과 맥락을 포함한 보고',
    meetingStyle: '조화롭고 깊이 있는 논의',
    feedbackNeeds: '진정성 있고 성장 지향적',
    collaborationStyle: '공감과 비전 공유',
    conflictApproach: '근본 원인과 관계 회복 중시',
    motivationFactors: ['사회적 가치', '개인 성장', '비전 실현'],
    decisionStyle: '가치와 장기적 영향 고려',
  },
  INFP: {
    taskPreference: '가치와 의미를 느낄 수 있는 업무',
    reportingStyle: '진솔하고 세심한 보고',
    meetingStyle: '배려 깊고 창의적인 분위기',
    feedbackNeeds: '부드럽고 격려하는 피드백',
    collaborationStyle: '조화와 개인 기여 존중',
    conflictApproach: '공감과 이해로 접근',
    motivationFactors: ['개인적 의미', '창의성', '진정성'],
    decisionStyle: '가치와 감정을 중시하는 신중한 접근',
  },
  ENFJ: {
    taskPreference: '사람을 돕고 조직하는 역할',
    reportingStyle: '관계와 영향을 고려한 보고',
    meetingStyle: '협력적이고 포용적인 분위기',
    feedbackNeeds: '긍정적이면서 발전적인',
    collaborationStyle: '팀 화합과 시너지 창출',
    conflictApproach: '공감과 중재로 해결',
    motivationFactors: ['타인 성장', '팀 화합', '긍정적 변화'],
    decisionStyle: '관계와 영향을 고려한 협력적 접근',
  },
  ENFP: {
    taskPreference: '창의적이고 다양한 경험',
    reportingStyle: '열정적이고 가능성 중심',
    meetingStyle: '활기차고 아이디어 넘치는',
    feedbackNeeds: '긍정적이고 격려하는',
    collaborationStyle: '자유롭고 활발한 교류',
    conflictApproach: '긍정적 관점으로 전환',
    motivationFactors: ['새로운 가능성', '창의성', '자유로운 표현'],
    decisionStyle: '직관과 열정을 따르는 유연한 접근',
  },

  // Sentinels (SJ)
  ISTJ: {
    taskPreference: '명확한 지침과 체계적 절차',
    reportingStyle: '사실과 데이터 중심의 정확한 보고',
    meetingStyle: '구조화되고 효율적인 진행',
    feedbackNeeds: '구체적이고 실용적인',
    collaborationStyle: '역할과 책임이 명확한',
    conflictApproach: '규칙과 논리로 해결',
    motivationFactors: ['안정성', '책임 완수', '인정'],
    decisionStyle: '경험과 사실에 기반한 신중한 접근',
  },
  ISFJ: {
    taskPreference: '구체적 지침과 안정적 환경',
    reportingStyle: '세심하고 배려 깊은 보고',
    meetingStyle: '조화롭고 체계적인',
    feedbackNeeds: '부드럽고 구체적인',
    collaborationStyle: '헌신적이고 지원적인',
    conflictApproach: '조화와 배려로 해결',
    motivationFactors: ['타인 돕기', '안정성', '인정'],
    decisionStyle: '전통과 경험을 존중하는 신중한 접근',
  },
  ESTJ: {
    taskPreference: '명확한 목표와 체계적 구조',
    reportingStyle: '효율적이고 실용적인 보고',
    meetingStyle: '조직적이고 결과 지향적',
    feedbackNeeds: '직접적이고 실행 가능한',
    collaborationStyle: '효율적이고 조직적인',
    conflictApproach: '규칙과 절차로 해결',
    motivationFactors: ['효율성', '성과', '리더십'],
    decisionStyle: '실용적이고 체계적인 접근',
  },
  ESFJ: {
    taskPreference: '협력적이고 사람 중심적 업무',
    reportingStyle: '관계를 고려한 상세한 보고',
    meetingStyle: '협조적이고 조화로운',
    feedbackNeeds: '긍정적이고 관계 지향적',
    collaborationStyle: '팀워크와 화합 중시',
    conflictApproach: '조화와 협력으로 해결',
    motivationFactors: ['팀 화합', '인정', '타인 돕기'],
    decisionStyle: '관계와 전통을 고려한 협력적 접근',
  },

  // Explorers (SP)
  ISTP: {
    taskPreference: '실용적 문제와 자율성',
    reportingStyle: '간결하고 사실 중심',
    meetingStyle: '효율적이고 실용적인',
    feedbackNeeds: '직접적이고 실용적인',
    collaborationStyle: '독립적이면서 유연한',
    conflictApproach: '논리적이고 실용적 해결',
    motivationFactors: ['실용적 가치', '자율성', '기술 향상'],
    decisionStyle: '현실적이고 유연한 접근',
  },
  ISFP: {
    taskPreference: '창의적이고 유연한 환경',
    reportingStyle: '세심하고 현재 중심',
    meetingStyle: '편안하고 비형식적',
    feedbackNeeds: '부드럽고 개인적인',
    collaborationStyle: '조화롭고 유연한',
    conflictApproach: '조용히 조화 추구',
    motivationFactors: ['창의성', '자율성', '현재 경험'],
    decisionStyle: '가치와 감각을 따르는 유연한 접근',
  },
  ESTP: {
    taskPreference: '즉각적 행동과 도전',
    reportingStyle: '빠르고 핵심 중심',
    meetingStyle: '활동적이고 즉흥적',
    feedbackNeeds: '즉각적이고 실용적',
    collaborationStyle: '역동적이고 유연한',
    conflictApproach: '즉각적이고 실용적 해결',
    motivationFactors: ['즉각적 결과', '도전', '행동'],
    decisionStyle: '빠르고 현실적인 접근',
  },
  ESFP: {
    taskPreference: '활기차고 사람과 함께',
    reportingStyle: '활발하고 긍정적',
    meetingStyle: '재미있고 참여적',
    feedbackNeeds: '긍정적이고 즉각적',
    collaborationStyle: '열정적이고 사교적',
    conflictApproach: '긍정적 분위기로 전환',
    motivationFactors: ['즐거움', '사회적 연결', '즉각적 경험'],
    decisionStyle: '직관과 경험을 따르는 즉흥적 접근',
  },
};
