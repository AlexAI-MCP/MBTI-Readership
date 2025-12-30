import type { CommunicationAdvice, MBTIType, RelationshipType, SituationCategory } from '../types';
import { situations } from './situations';
import { mbtiSituationStyles, situationStrategies } from './situationStrategies';

// 각 MBTI 타입 + 상황별 커뮤니케이션 조언 생성 함수
export const generateAdvice = (
  mbti: MBTIType,
  relationship: RelationshipType,
  situationId: string
): CommunicationAdvice => {
  const situation = situations.find(s => s.id === situationId);
  const category = situation?.category || 'task_assignment';

  return {
    mbti,
    relationship,
    situation: situationId,
    overview: generateOverview(mbti, relationship, category, situation?.title || ''),
    keyPoints: generateKeyPoints(mbti, category, relationship),
    communicationStyle: {
      tone: generateTone(mbti, relationship, category),
      approach: generateApproach(mbti, relationship, category),
      avoid: generateAvoidList(mbti, category)
    },
    examples: generateExamples(mbti, relationship, category),
    tips: generateTips(mbti, relationship, category)
  };
};

// 개요 생성
const generateOverview = (
  mbti: MBTIType,
  relationship: RelationshipType,
  category: SituationCategory,
  situationTitle: string
): string => {
  const mbtiStyle = mbtiSituationStyles[mbti];
  const relationText = {
    junior: '후배',
    senior: '선배',
    colleague: '동료'
  };

  const categoryOverviews: Record<SituationCategory, (mbti: string, rel: string) => string> = {
    task_assignment: (m, r) =>
      `${m} ${r}에게 업무를 지시할 때는 ${mbtiStyle.taskPreference}를 고려하세요. "${situationTitle}" 상황에서는 명확한 기대치와 함께 적절한 자율성을 부여하는 것이 중요합니다.`,

    reporting: (m, r) =>
      `${m} ${r}에게 보고를 받거나 할 때는 ${mbtiStyle.reportingStyle}을 선호합니다. "${situationTitle}"에서는 효율적이면서도 필요한 정보를 빠짐없이 전달하세요.`,

    meeting: (m, r) =>
      `${m} ${r}와의 회의에서는 ${mbtiStyle.meetingStyle}을 고려하세요. "${situationTitle}"에서는 목적에 맞는 회의 분위기를 조성하는 것이 핵심입니다.`,

    feedback: (m, r) =>
      `${m} ${r}에게 피드백을 제공할 때는 ${mbtiStyle.feedbackNeeds}가 효과적입니다. "${situationTitle}"에서는 성장을 지원하는 건설적 접근이 중요합니다.`,

    collaboration: (m, r) =>
      `${m} ${r}와 협업할 때는 ${mbtiStyle.collaborationStyle}을 존중하세요. "${situationTitle}"에서는 서로의 강점을 살리는 협력 방식을 찾는 것이 중요합니다.`,

    conflict_resolution: (m, r) =>
      `${m} ${r}와의 갈등 해결 시 ${mbtiStyle.conflictApproach}가 효과적입니다. "${situationTitle}"에서는 win-win 해결책을 찾는 것이 핵심입니다.`,

    motivation: (m, r) =>
      `${m} ${r}를 동기부여할 때는 ${mbtiStyle.motivationFactors.join(', ')}을 강조하세요. "${situationTitle}"에서는 내재적 동기를 자극하는 것이 중요합니다.`,

    decision_making: (m, r) =>
      `${m} ${r}와 의사결정 시 ${mbtiStyle.decisionStyle}을 이해하세요. "${situationTitle}"에서는 충분한 정보와 명확한 기준을 제공하는 것이 핵심입니다.`
  };

  return categoryOverviews[category](mbti, relationText[relationship]);
};

// 핵심 포인트 생성
const generateKeyPoints = (
  mbti: MBTIType,
  category: SituationCategory,
  relationship: RelationshipType
): string[] => {
  const mbtiStyle = mbtiSituationStyles[mbti];
  const strategyInfo = situationStrategies[category];

  const mbtiPoints: Record<SituationCategory, string[]> = {
    task_assignment: [
      `${mbti}는 ${mbtiStyle.taskPreference}`,
      `${strategyInfo.focus}에 집중하세요`,
      relationship === 'junior' ? '명확한 가이드와 함께 자율성 제공' : '전문성을 존중하며 협력',
      '정기적인 피드백과 소통 채널 유지'
    ],
    reporting: [
      `${mbtiStyle.reportingStyle}`,
      '핵심 정보를 구조화해서 전달',
      relationship === 'senior' ? '간결하고 명확하게 보고' : '세부 사항 준비',
      '후속 조치 계획 포함'
    ],
    meeting: [
      `${mbtiStyle.meetingStyle}`,
      '명확한 안건과 목표 설정',
      relationship === 'junior' ? '적극적 참여 독려' : '의견 존중',
      '시간 효율적 진행'
    ],
    feedback: [
      `${mbtiStyle.feedbackNeeds}`,
      '구체적 사례와 데이터 활용',
      relationship === 'junior' ? '성장 중심 코칭' : '상호 발전적 대화',
      '실행 가능한 개선 방안 제시'
    ],
    collaboration: [
      `${mbtiStyle.collaborationStyle}`,
      '역할과 책임 명확화',
      '정기적 소통과 진행 상황 공유',
      '서로의 작업 방식 존중'
    ],
    conflict_resolution: [
      `${mbtiStyle.conflictApproach}`,
      '감정보다 사실에 집중',
      '서로의 입장을 충분히 경청',
      '건설적 해결책 도출'
    ],
    motivation: [
      `핵심 동기: ${mbtiStyle.motivationFactors.slice(0, 2).join(', ')}`,
      '개인의 강점과 기여 인정',
      relationship === 'junior' ? '성장 기회 제공' : '전문성 존중',
      '의미 있는 목표와 연결'
    ],
    decision_making: [
      `${mbtiStyle.decisionStyle}`,
      '충분한 정보와 맥락 제공',
      relationship === 'colleague' ? '함께 결정' : '명확한 기준 제시',
      '결정의 영향 고려'
    ]
  };

  return mbtiPoints[category];
};

// 어조 생성
const generateTone = (
  mbti: MBTIType,
  relationship: RelationshipType,
  _category: SituationCategory
): string => {
  const toneMap: Record<string, Record<RelationshipType, string>> = {
    // NT 그룹
    INTJ: {
      junior: '전문적이고 논리적인 어조로, 전략적 가치를 명확히 제시하세요',
      senior: '간결하고 핵심을 짚는 어조로, 효율성을 중시하세요',
      colleague: '상호 전문성을 인정하는 어조로 대화하세요'
    },
    INTP: {
      junior: '논리적이면서 탐구를 독려하는 어조로 소통하세요',
      senior: '정확하고 개념적인 어조로 핵심을 전달하세요',
      colleague: '지적 호기심을 자극하는 어조로 협력하세요'
    },
    ENTJ: {
      junior: '명확하고 결단력 있는 어조로 방향을 제시하세요',
      senior: '간결하고 성과 중심적인 어조로 보고하세요',
      colleague: '효율적이고 목표 지향적인 어조로 협업하세요'
    },
    ENTP: {
      junior: '활발하고 도전적인 어조로 창의성을 독려하세요',
      senior: '혁신적이고 가능성을 제시하는 어조로 소통하세요',
      colleague: '아이디어를 교환하는 활기찬 어조로 협력하세요'
    },

    // NF 그룹
    INFJ: {
      junior: '진솔하고 의미를 전달하는 어조로 소통하세요',
      senior: '통찰력을 담아 깊이 있게 전달하세요',
      colleague: '공감하고 비전을 공유하는 어조로 협력하세요'
    },
    INFP: {
      junior: '부드럽고 격려하는 어조로 가치를 전달하세요',
      senior: '진심을 담아 세심하게 소통하세요',
      colleague: '배려 깊고 진정성 있는 어조로 협업하세요'
    },
    ENFJ: {
      junior: '따뜻하고 격려하는 어조로 성장을 지원하세요',
      senior: '존중과 협력을 담은 어조로 소통하세요',
      colleague: '포용적이고 조화를 만드는 어조로 협력하세요'
    },
    ENFP: {
      junior: '열정적이고 긍정적인 어조로 동기부여하세요',
      senior: '활발하고 아이디어를 제시하는 어조로 소통하세요',
      colleague: '즐겁고 창의적인 어조로 협업하세요'
    },

    // SJ 그룹
    ISTJ: {
      junior: '명확하고 체계적인 어조로 지침을 제공하세요',
      senior: '정확하고 사실 기반의 어조로 보고하세요',
      colleague: '신뢰할 수 있고 일관된 어조로 협력하세요'
    },
    ISFJ: {
      junior: '부드럽고 구체적인 어조로 안내하세요',
      senior: '세심하고 배려 깊은 어조로 소통하세요',
      colleague: '헌신적이고 지원하는 어조로 협업하세요'
    },
    ESTJ: {
      junior: '직접적이고 명확한 어조로 지시하세요',
      senior: '효율적이고 실용적인 어조로 보고하세요',
      colleague: '체계적이고 책임감 있는 어조로 협력하세요'
    },
    ESFJ: {
      junior: '친근하고 격려하는 어조로 소통하세요',
      senior: '협조적이고 존중하는 어조로 보고하세요',
      colleague: '팀워크를 강조하는 따뜻한 어조로 협업하세요'
    },

    // SP 그룹
    ISTP: {
      junior: '간결하고 실용적인 어조로 핵심을 전달하세요',
      senior: '직접적이고 사실 중심의 어조로 보고하세요',
      colleague: '유연하고 효율적인 어조로 협력하세요'
    },
    ISFP: {
      junior: '부드럽고 개인을 존중하는 어조로 소통하세요',
      senior: '진솔하고 현재 중심의 어조로 전달하세요',
      colleague: '조화롭고 유연한 어조로 협업하세요'
    },
    ESTP: {
      junior: '활기차고 즉각적인 어조로 동기부여하세요',
      senior: '빠르고 핵심을 짚는 어조로 보고하세요',
      colleague: '역동적이고 실용적인 어조로 협력하세요'
    },
    ESFP: {
      junior: '열정적이고 긍정적인 어조로 격려하세요',
      senior: '활발하고 참여적인 어조로 소통하세요',
      colleague: '즐겁고 협력적인 어조로 함께 일하세요'
    }
  };

  return toneMap[mbti]?.[relationship] || '존중하고 명확한 어조로 소통하세요';
};

// 접근 방법 생성
const generateApproach = (
  mbti: MBTIType,
  relationship: RelationshipType,
  category: SituationCategory
): string => {
  const mbtiStyle = mbtiSituationStyles[mbti];

  const approachTemplates: Record<SituationCategory, (style: typeof mbtiStyle, rel: RelationshipType) => string> = {
    task_assignment: (style, rel) => {
      const relContext = rel === 'junior' ? '업무의 목표와 기대치를 명확히 설명하고' :
                         rel === 'senior' ? '필요한 지원과 리소스를 확인하며' :
                         '협력 방식을 함께 논의하고';
      return `${relContext}, ${style.taskPreference}를 고려해 자율성과 방향성의 균형을 맞추세요. 예: "이 업무의 목표는 ___입니다. 당신의 ___한 강점이 필요합니다."`;
    },

    reporting: (style, rel) => {
      const relContext = rel === 'senior' ? '결론을 먼저 말하고 핵심 데이터를 간결하게 제시하세요' :
                         rel === 'junior' ? '보고 구조를 안내하고 필요한 정보를 확인하세요' :
                         '상호 진행 상황을 투명하게 공유하세요';
      return `${relContext}. ${style.reportingStyle}에 맞춰 정보를 구조화하세요. 예: "핵심은 ___, 근거는 ___, 다음 단계는 ___입니다."`;
    },

    meeting: (style, rel) => {
      return `안건을 사전에 공유하고, ${style.meetingStyle}에 맞는 회의 분위기를 조성하세요. ${rel === 'junior' ? '적극적 참여를 독려하고' : rel === 'senior' ? '의견을 존중하며 경청하고' : '함께 아이디어를 발전시키며'} 명확한 결론을 도출하세요.`;
    },

    feedback: (style, rel) => {
      const relContext = rel === 'junior' ? '성장 관점에서 구체적 사례를 들어' :
                         rel === 'senior' ? '상호 발전적 대화로 건설적 의견을 나누며' :
                         '동료로서 솔직하면서도 배려 깊게';
      return `${relContext} 피드백하세요. ${style.feedbackNeeds}에 맞춰 실행 가능한 개선 방안을 함께 찾으세요. 예: "___한 점이 좋았고, ___을 개선하면 더 효과적일 것 같습니다."`;
    },

    collaboration: (style, rel) => {
      return `${style.collaborationStyle}을 존중하며 역할을 명확히 나누세요. ${rel === 'junior' ? '멘토링하며 함께 성장하고' : rel === 'senior' ? '전문성을 존중하며 배우고' : '서로의 강점을 살리며'} 정기적으로 소통하세요.`;
    },

    conflict_resolution: (style, rel) => {
      return `먼저 경청하고 ${style.conflictApproach}. ${rel === 'junior' ? '성장 기회로 전환하며' : rel === 'senior' ? '겸손하게 배우며' : '상호 이해를 높이며'} win-win 해결책을 함께 찾으세요.`;
    },

    motivation: (style, rel) => {
      const motivators = style.motivationFactors.slice(0, 2).join('과 ');
      return `${motivators}를 강조하며 ${rel === 'junior' ? '성장 기회를 제공하세요' : rel === 'senior' ? '기여를 인정하세요' : '함께 성과를 축하하세요'}. 개인의 강점과 업무의 의미를 연결하세요.`;
    },

    decision_making: (style, rel) => {
      return `${style.decisionStyle}을 이해하고, ${rel === 'junior' ? '필요한 정보와 가이드를 제공하며' : rel === 'senior' ? '의견을 존중하며 함께 판단하고' : '협력적으로 의사결정하며'} 명확한 기준과 충분한 맥락을 공유하세요.`;
    }
  };

  return approachTemplates[category](mbtiStyle, relationship);
};

// 피해야 할 것 생성
const generateAvoidList = (mbti: MBTIType, category: SituationCategory): string[] => {
  const avoidMap: Record<string, Record<SituationCategory, string[]>> = {
    INTJ: {
      task_assignment: ['모호한 목표', '비논리적 근거', '과도한 간섭', '감정적 호소'],
      reporting: ['장황한 설명', '불필요한 디테일', '감정 중심 보고', '결론 지연'],
      meeting: ['목적 없는 회의', '형식적 논의', '비효율적 진행', '감정적 토론'],
      feedback: ['애매한 표현', '근거 없는 비판', '과도한 칭찬', '피상적 피드백'],
      collaboration: ['세세한 간섭', '불명확한 역할', '비효율적 프로세스', '감정 우선'],
      conflict_resolution: ['감정적 대응', '비논리적 주장', '회피', '애매한 타협'],
      motivation: ['단기 보상 강조', '감정적 격려만', '비전 없는 독려', '표면적 칭찬'],
      decision_making: ['근거 부족', '즉흥적 결정', '감정 우선', '불명확한 기준']
    },
    INTP: {
      task_assignment: ['창의성 제한', '과도한 규칙', '논리 없는 지시', '탐구 시간 부족'],
      reporting: ['부정확한 정보', '논리 결함', '형식만 강조', '창의성 무시'],
      meeting: ['비생산적 토론', '개념 무시', '즉흥 회의', '아이디어 차단'],
      feedback: ['논리 없는 비판', '감정 우선', '창의성 제한', '근거 부족'],
      collaboration: ['자율성 침해', '획일화 강요', '탐구 방해', '즉흥 강요'],
      conflict_resolution: ['감정 격화', '논리 회피', '강압적 해결', '표면적 타협'],
      motivation: ['외부 보상만', '창의성 무시', '논리 경시', '획일적 격려'],
      decision_making: ['성급한 결정', '가능성 무시', '분석 생략', '논리 경시']
    },
    ENTJ: {
      task_assignment: ['비효율적 방식', '우유부단함', '목표 불명확', '권한 제한'],
      reporting: ['장황함', '핵심 누락', '우유부단', '지연'],
      meeting: ['비효율적 진행', '결정 지연', '목적 불명', '형식주의'],
      feedback: ['간접적 표현', '애매함', '실행력 부족', '우유부단'],
      collaboration: ['비효율', '우유부단', '리더십 제한', '느린 진행'],
      conflict_resolution: ['회피', '우유부단', '비효율', '감정 격화'],
      motivation: ['비전 부재', '도전 부족', '성과 경시', '영향력 제한'],
      decision_making: ['우유부단', '분석 과다', '실행 지연', '비효율']
    },
    ENTP: {
      task_assignment: ['창의성 제한', '경직된 규칙', '획일화', '도전 부족'],
      reporting: ['형식 과다', '창의성 무시', '경직성', '가능성 무시'],
      meeting: ['지루함', '토론 제한', '경직성', '아이디어 차단'],
      feedback: ['창의성 무시', '경직된 기준', '도전 제한', '획일화'],
      collaboration: ['유연성 부족', '토론 제한', '창의성 억제', '경직성'],
      conflict_resolution: ['경직된 해결', '창의성 무시', '획일화', '강압'],
      motivation: ['단조로움', '도전 부족', '혁신 제한', '경직성'],
      decision_making: ['성급함', '옵션 제한', '경직성', '창의성 무시']
    },
    INFJ: {
      task_assignment: ['의미 부재', '가치 불일치', '피상적 접근', '진정성 부족'],
      reporting: ['형식적', '맥락 무시', '피상적', '통찰 경시'],
      meeting: ['갈등적 분위기', '피상적 논의', '진정성 부족', '조화 무시'],
      feedback: ['진정성 부족', '피상적', '가치 무시', '냉소적'],
      collaboration: ['갈등 분위기', '가치 불일치', '조화 무시', '피상적'],
      conflict_resolution: ['감정 무시', '관계 경시', '피상적 해결', '강압적'],
      motivation: ['의미 부재', '가치 무시', '피상적 격려', '진정성 부족'],
      decision_making: ['가치 무시', '장기 영향 경시', '피상적', '진정성 부족']
    },
    INFP: {
      task_assignment: ['가치 불일치', '강압적', '비판적', '의미 부재'],
      reporting: ['형식적', '진정성 부족', '비판적', '급박함'],
      meeting: ['갈등적', '비판 과다', '압박적', '가치 무시'],
      feedback: ['비판적', '강압적', '진정성 부족', '가치 경시'],
      collaboration: ['갈등', '강압', '가치 불일치', '조화 무시'],
      conflict_resolution: ['강압적', '감정 무시', '비판 과다', '가치 경시'],
      motivation: ['의미 없음', '강압', '가치 무시', '진정성 부족'],
      decision_making: ['강압', '가치 무시', '급박함', '감정 경시']
    },
    ENFJ: {
      task_assignment: ['개인 무시', '갈등 조장', '냉소적', '관계 경시'],
      reporting: ['냉소적', '관계 무시', '영향 경시', '형식적'],
      meeting: ['갈등적', '배제', '냉소적', '조화 무시'],
      feedback: ['부정적 과다', '관계 경시', '냉소적', '개인 무시'],
      collaboration: ['갈등', '배제', '조화 무시', '관계 경시'],
      conflict_resolution: ['감정 무시', '관계 경시', '갈등 격화', '냉소적'],
      motivation: ['개인 무시', '성장 경시', '관계 무시', '부정적'],
      decision_making: ['관계 무시', '영향 경시', '독단적', '배제']
    },
    ENFP: {
      task_assignment: ['창의성 제한', '경직성', '단조로움', '부정적'],
      reporting: ['형식 과다', '경직성', '부정적', '가능성 무시'],
      meeting: ['지루함', '경직성', '창의성 차단', '부정적'],
      feedback: ['부정적 과다', '창의성 무시', '경직성', '제한적'],
      collaboration: ['경직성', '자유 제한', '단조로움', '창의성 억제'],
      conflict_resolution: ['부정적', '경직성', '창의성 무시', '제한적'],
      motivation: ['단조로움', '제한적', '부정적', '창의성 억제'],
      decision_making: ['경직성', '가능성 무시', '즉흥 제한', '부정적']
    },
    ISTJ: {
      task_assignment: ['모호함', '즉흥성', '규칙 무시', '불명확'],
      reporting: ['부정확', '모호함', '즉흥적', '구조 부재'],
      meeting: ['비체계적', '즉흥적', '목적 불명', '비효율'],
      feedback: ['모호함', '즉흥적', '근거 부족', '비구체적'],
      collaboration: ['무질서', '즉흥성', '책임 불명', '비체계적'],
      conflict_resolution: ['감정적', '즉흥적', '규칙 무시', '비논리적'],
      motivation: ['불안정', '즉흥적', '책임 경시', '모호함'],
      decision_making: ['즉흥적', '근거 부족', '비체계적', '모호함']
    },
    ISFJ: {
      task_assignment: ['급작스러움', '비판적', '불명확', '압박적'],
      reporting: ['급박함', '비판적', '형식적', '압박'],
      meeting: ['갈등적', '급박함', '비판적', '압박적'],
      feedback: ['비판 과다', '급박함', '압박적', '형식적'],
      collaboration: ['갈등', '압박', '비판적', '불안정'],
      conflict_resolution: ['공격적', '급박함', '비판 과다', '압박'],
      motivation: ['불안정', '비판적', '압박', '조화 무시'],
      decision_making: ['급박함', '압박', '불안정', '배려 부족']
    },
    ESTJ: {
      task_assignment: ['비효율', '모호함', '무질서', '비실용적'],
      reporting: ['비효율', '모호함', '장황함', '비실용적'],
      meeting: ['비효율', '비체계적', '결론 부재', '무질서'],
      feedback: ['모호함', '비실용적', '간접적', '비효율'],
      collaboration: ['무질서', '비효율', '책임 불명', '비체계적'],
      conflict_resolution: ['회피', '모호함', '비효율', '우유부단'],
      motivation: ['비효율', '성과 경시', '무질서', '비실용적'],
      decision_making: ['우유부단', '비효율', '비체계적', '모호함']
    },
    ESFJ: {
      task_assignment: ['냉소적', '개인 무시', '갈등 조장', '비협조적'],
      reporting: ['냉소적', '관계 무시', '형식적', '비협조적'],
      meeting: ['갈등적', '배제', '냉소적', '비협조적'],
      feedback: ['냉소적', '비판 과다', '관계 무시', '부정적'],
      collaboration: ['갈등', '냉소적', '비협조적', '개인 무시'],
      conflict_resolution: ['냉소적', '관계 무시', '비협조적', '공격적'],
      motivation: ['냉소적', '관계 무시', '개인 경시', '부정적'],
      decision_making: ['독단적', '관계 무시', '냉소적', '배제']
    },
    ISTP: {
      task_assignment: ['이론 과다', '비실용적', '과도한 설명', '간섭'],
      reporting: ['장황함', '이론적', '비실용적', '형식 과다'],
      meeting: ['비효율', '이론 과다', '장황함', '비실용적'],
      feedback: ['간접적', '이론적', '비실용적', '장황함'],
      collaboration: ['간섭', '비효율', '이론 과다', '자율성 침해'],
      conflict_resolution: ['감정적', '이론적', '비실용적', '장황함'],
      motivation: ['이론적', '비실용적', '자율성 침해', '간섭'],
      decision_making: ['이론 과다', '비현실적', '장황함', '비실용적']
    },
    ISFP: {
      task_assignment: ['압박', '비판적', '강압적', '경직성'],
      reporting: ['압박', '비판적', '형식 과다', '강압적'],
      meeting: ['압박적', '비판적', '갈등적', '경직'],
      feedback: ['비판 과다', '압박', '강압적', '냉소적'],
      collaboration: ['압박', '갈등', '강압', '경직성'],
      conflict_resolution: ['공격적', '압박', '비판 과다', '강압'],
      motivation: ['압박', '비판적', '강압', '의미 무시'],
      decision_making: ['압박', '강압', '급박함', '가치 무시']
    },
    ESTP: {
      task_assignment: ['이론 과다', '느린 진행', '비실용적', '분석 과다'],
      reporting: ['장황함', '이론적', '느림', '비실용적'],
      meeting: ['지루함', '이론 과다', '느린 진행', '비실용적'],
      feedback: ['이론적', '장황함', '느림', '비실용적'],
      collaboration: ['느림', '이론 과다', '비실용적', '경직성'],
      conflict_resolution: ['회피', '이론적', '느림', '비실용적'],
      motivation: ['이론적', '느림', '비실용적', '장기만 강조'],
      decision_making: ['느림', '분석 과다', '이론적', '비실용적']
    },
    ESFP: {
      task_assignment: ['지루함', '경직성', '부정적', '단조로움'],
      reporting: ['형식 과다', '경직성', '지루함', '부정적'],
      meeting: ['지루함', '경직성', '부정적', '형식적'],
      feedback: ['부정적 과다', '경직성', '냉소적', '형식적'],
      collaboration: ['경직성', '지루함', '부정적', '제한적'],
      conflict_resolution: ['부정적', '경직성', '냉소적', '형식적'],
      motivation: ['부정적', '지루함', '경직성', '냉소적'],
      decision_making: ['경직성', '부정적', '형식적', '지루함']
    }
  };

  return avoidMap[mbti]?.[category] || ['모호한 지시', '감정적 대응', '일방적 소통', '과도한 간섭'];
};

// 예시 생성
const generateExamples = (
  mbti: MBTIType,
  _relationship: RelationshipType,
  category: SituationCategory
): { good: string[]; bad: string[] } => {
  // 상황별 예시는 매우 많으므로, 핵심적인 몇 가지만 생성
  const exampleTemplates: Record<SituationCategory, { good: string[]; bad: string[] }> = {
    task_assignment: {
      good: [
        `이 프로젝트의 전략적 목표는 ${mbti}의 강점을 활용하는 것입니다. 구체적으로는...`,
        `당신의 전문성을 신뢰하므로 실행 방법은 자율에 맡기겠습니다. 다만 마일스톤은...`,
        `이 업무가 팀/회사에 미치는 영향은... 궁금한 점이 있으면 언제든 물어보세요`
      ],
      bad: [
        `일단 해보고 나중에 생각해봐요`,
        `왜 그렇게 하는지 일일이 보고해주세요`,
        `다른 사람들 다 하니까 당신도 해야죠`
      ]
    },
    reporting: {
      good: [
        `핵심 결론은 A입니다. 근거는 1)... 2)... 3)... 다음 액션은 B입니다`,
        `현황: 완료 70%, 이슈: X (대응: Y), 다음 주 목표: Z`,
        `데이터 분석 결과 [구체적 수치], 의미: ..., 제안: ...`
      ],
      bad: [
        `글쎄요, 대충 이런 느낌으로 진행하고 있어요`,
        `일단 긴 배경 설명부터... [장황한 설명] ...그래서 결론은...`,
        `정확한 수치는 모르겠지만 감으로는...`
      ]
    },
    meeting: {
      good: [
        `오늘 안건: 1)... 2)... 목표: 30분 내 결정. 먼저 A에 대한 의견을 듣고 싶습니다`,
        `각자의 전문 영역에서 아이디어를 공유해주세요. 판단 기준은...`,
        `좋은 의견 감사합니다. 정리하면... 다음 액션은...`
      ],
      bad: [
        `그냥 모여서 얘기나 해봅시다`,
        `일단 회의부터 하고 안건은 그때 정하죠`,
        `시간 많으니까 천천히 얘기해봅시다`
      ]
    },
    feedback: {
      good: [
        `A 부분은 정말 효과적이었습니다. B를 개선하면 더 좋을 것 같은데, 함께 방법을 찾아볼까요?`,
        `구체적으로 X 상황에서 Y한 접근이 좋았습니다. 다음엔 Z도 고려해보면...`,
        `전반적으로 잘하고 있습니다. 성장을 위해 [구체적 제안]을 시도해보는 건 어떨까요?`
      ],
      bad: [
        `대충 괜찮은 것 같아요`,
        `이건 완전히 틀렸어요, 다시 하세요`,
        `왜 이렇게 했는지 이해가 안 가네요`
      ]
    },
    collaboration: {
      good: [
        `당신은 A를, 제가 B를 담당하는 게 서로 강점을 살리는 것 같습니다`,
        `매주 화요일 30분 싱크 미팅으로 진행 상황을 공유하면 어떨까요?`,
        `당신의 방식을 존중합니다. 제 작업과 통합할 때만 조율하죠`
      ],
      bad: [
        `제 방식대로만 따라오세요`,
        `특별한 계획 없이 그냥 각자 알아서 하죠`,
        `일일이 제 허락을 받아야 합니다`
      ]
    },
    conflict_resolution: {
      good: [
        `먼저 당신 입장을 충분히 듣고 싶습니다. 구체적으로 어떤 부분이 문제였나요?`,
        `사실을 정리해보면... 서로 win-win할 수 있는 방법을 찾아봅시다`,
        `제 관점은... 당신 관점은... 절충점으로 [구체적 제안]은 어떨까요?`
      ],
      bad: [
        `당신이 틀렸고 제가 맞아요`,
        `이 얘기 꺼내지 말고 그냥 넘어갑시다`,
        `감정적으로 대응하지 말고 냉정해지세요`
      ]
    },
    motivation: {
      good: [
        `이 일이 당신의 [강점/가치]과 완벽히 맞아떨어집니다. 장기적으로는...`,
        `지난 프로젝트에서 보여준 [구체적 기여]가 정말 인상적이었습니다`,
        `이 기회를 통해 [성장 기회]를 얻을 수 있을 것입니다`
      ],
      bad: [
        `그냥 열심히 하세요`,
        `다른 사람도 다 하니까 당신도 해야죠`,
        `잘하면 보상이 있을 거예요 (구체적 내용 없음)`
      ]
    },
    decision_making: {
      good: [
        `판단에 필요한 정보: 1)... 2)... 기준: A, B, C. 각 옵션의 장단점은...`,
        `리스크는... 기회는... 당신의 전문적 의견은?`,
        `데이터상으로는 X가 유리하나, 장기적으로는 Y도 고려할 필요가 있습니다. 함께 결정하죠`
      ],
      bad: [
        `그냥 느낌대로 결정합시다`,
        `시간 없으니 빨리 아무거나 정하세요`,
        `제가 결정했으니 따라오기만 하면 됩니다`
      ]
    }
  };

  return exampleTemplates[category];
};

// 추가 팁 생성
const generateTips = (
  mbti: MBTIType,
  relationship: RelationshipType,
  category: SituationCategory
): string[] => {
  const mbtiStyle = mbtiSituationStyles[mbti];

  const baseTips: Record<SituationCategory, string[]> = {
    task_assignment: [
      `${mbti}의 작업 선호도(${mbtiStyle.taskPreference})를 반영한 업무 배분`,
      relationship === 'junior' ? '성장 기회와 멘토링 제공' : '전문성과 자율성 존중',
      '정기적 체크인으로 진행 상황 확인 (과도하지 않게)',
      '성과 달성 시 구체적 기여를 인정'
    ],
    reporting: [
      `${mbtiStyle.reportingStyle}에 맞는 보고 포맷 활용`,
      relationship === 'senior' ? '핵심 먼저, 디테일은 질문 시' : '필요한 정보 사전 안내',
      '데이터와 사실 기반 정보 준비',
      '후속 조치 계획 명확히'
    ],
    meeting: [
      `${mbtiStyle.meetingStyle}을 고려한 회의 설계`,
      '안건과 목표를 사전 공유',
      '시간 관리와 효율성 중시',
      '명확한 결론과 액션 아이템 정리'
    ],
    feedback: [
      `${mbtiStyle.feedbackNeeds}를 고려한 피드백`,
      '구체적 사례와 관찰 사실 활용',
      '균형잡힌 피드백 (강점 + 개선점)',
      '실행 가능한 다음 단계 제시'
    ],
    collaboration: [
      `${mbtiStyle.collaborationStyle}을 존중한 협업`,
      '역할과 책임 명확히',
      '정기적이지만 과하지 않은 소통',
      '서로의 작업 방식 차이 인정'
    ],
    conflict_resolution: [
      `${mbtiStyle.conflictApproach}를 이해하고 접근`,
      '감정보다 사실에 집중',
      '서로의 입장을 충분히 경청',
      'Win-win 해결책 지향'
    ],
    motivation: [
      `핵심 동기: ${mbtiStyle.motivationFactors.join(', ')}`,
      '개인의 가치와 업무 의미 연결',
      '구체적 기여와 성과 인정',
      relationship === 'junior' ? '성장 경로 제시' : '전문성과 영향력 존중'
    ],
    decision_making: [
      `${mbtiStyle.decisionStyle}을 이해`,
      '충분한 정보와 명확한 기준 제공',
      relationship === 'colleague' ? '협력적 의사결정' : '적절한 자율성',
      '결정의 영향과 맥락 공유'
    ]
  };

  return baseTips[category];
};
