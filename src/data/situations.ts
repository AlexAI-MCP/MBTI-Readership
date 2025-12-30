import type { Situation } from '../types';

export const situations: Situation[] = [
  // 업무 지시 (Task Assignment)
  {
    id: 'task_001',
    category: 'task_assignment',
    title: '새로운 프로젝트 착수',
    description: '새로운 프로젝트의 시작과 목표를 전달할 때'
  },
  {
    id: 'task_002',
    category: 'task_assignment',
    title: '긴급 업무 요청',
    description: '급하게 처리해야 할 업무를 맡길 때'
  },
  {
    id: 'task_003',
    category: 'task_assignment',
    title: '복잡한 업무 배분',
    description: '여러 단계로 이루어진 복잡한 업무를 설명할 때'
  },
  {
    id: 'task_004',
    category: 'task_assignment',
    title: '반복 업무 개선 요청',
    description: '기존 업무의 효율화를 요청할 때'
  },
  {
    id: 'task_005',
    category: 'task_assignment',
    title: '역할 재배분',
    description: '팀원들의 역할을 조정하고 재배분할 때'
  },
  {
    id: 'task_006',
    category: 'task_assignment',
    title: '도전적 과제 부여',
    description: '난이도 높은 새로운 도전 과제를 제시할 때'
  },
  {
    id: 'task_007',
    category: 'task_assignment',
    title: '협업 업무 조율',
    description: '여러 팀원이 함께 수행할 업무를 조율할 때'
  },
  {
    id: 'task_008',
    category: 'task_assignment',
    title: '우선순위 변경 안내',
    description: '업무 우선순위가 바뀌었음을 전달할 때'
  },

  // 보고 (Reporting)
  {
    id: 'report_001',
    category: 'reporting',
    title: '진행 상황 보고 요청',
    description: '현재 진행 중인 업무의 상태를 보고받을 때'
  },
  {
    id: 'report_002',
    category: 'reporting',
    title: '문제 상황 보고 접수',
    description: '발생한 문제에 대한 보고를 받을 때'
  },
  {
    id: 'report_003',
    category: 'reporting',
    title: '성과 보고 청취',
    description: '완료된 업무의 성과를 보고받을 때'
  },
  {
    id: 'report_004',
    category: 'reporting',
    title: '정기 보고 미팅',
    description: '정기적인 업무 보고 시간에'
  },
  {
    id: 'report_005',
    category: 'reporting',
    title: '상위 보고 준비',
    description: '상급자에게 올릴 보고서 준비를 요청할 때'
  },
  {
    id: 'report_006',
    category: 'reporting',
    title: '데이터 분석 결과 보고',
    description: '분석 결과를 보고받을 때'
  },
  {
    id: 'report_007',
    category: 'reporting',
    title: '예외 상황 보고',
    description: '예상치 못한 상황에 대한 보고를 받을 때'
  },

  // 회의 (Meeting)
  {
    id: 'meeting_001',
    category: 'meeting',
    title: '브레인스토밍 회의',
    description: '아이디어를 모으는 창의적 회의를 진행할 때'
  },
  {
    id: 'meeting_002',
    category: 'meeting',
    title: '의사결정 회의',
    description: '중요한 결정을 내려야 하는 회의에서'
  },
  {
    id: 'meeting_003',
    category: 'meeting',
    title: '킥오프 미팅',
    description: '프로젝트 시작 회의를 이끌 때'
  },
  {
    id: 'meeting_004',
    category: 'meeting',
    title: '문제 해결 회의',
    description: '발생한 문제를 함께 해결하는 회의에서'
  },
  {
    id: 'meeting_005',
    category: 'meeting',
    title: '진행 상황 공유 회의',
    description: '팀 전체의 진행 상황을 공유하는 회의에서'
  },
  {
    id: 'meeting_006',
    category: 'meeting',
    title: '피드백 세션',
    description: '팀원들의 의견을 듣는 피드백 회의에서'
  },
  {
    id: 'meeting_007',
    category: 'meeting',
    title: '회고 미팅',
    description: '프로젝트 완료 후 회고 회의를 진행할 때'
  },
  {
    id: 'meeting_008',
    category: 'meeting',
    title: '전략 기획 회의',
    description: '장기 전략을 논의하는 회의에서'
  },

  // 피드백 (Feedback)
  {
    id: 'feedback_001',
    category: 'feedback',
    title: '긍정적 피드백',
    description: '잘한 일에 대해 칭찬하고 격려할 때'
  },
  {
    id: 'feedback_002',
    category: 'feedback',
    title: '개선 피드백',
    description: '부족한 부분을 개선하도록 조언할 때'
  },
  {
    id: 'feedback_003',
    category: 'feedback',
    title: '실수 지적',
    description: '명확한 실수를 지적하고 바로잡을 때'
  },
  {
    id: 'feedback_004',
    category: 'feedback',
    title: '성장 코칭',
    description: '장기적 성장을 위한 코칭을 할 때'
  },
  {
    id: 'feedback_005',
    category: 'feedback',
    title: '평가 면담',
    description: '정기 평가 면담을 진행할 때'
  },
  {
    id: 'feedback_006',
    category: 'feedback',
    title: '즉각 피드백',
    description: '업무 중 즉시 피드백을 제공할 때'
  },
  {
    id: 'feedback_007',
    category: 'feedback',
    title: '360도 피드백 전달',
    description: '다면 평가 결과를 전달할 때'
  },

  // 협업 (Collaboration)
  {
    id: 'collab_001',
    category: 'collaboration',
    title: '팀 빌딩',
    description: '팀 결속력을 높이고자 할 때'
  },
  {
    id: 'collab_002',
    category: 'collaboration',
    title: '크로스 팀 협업 요청',
    description: '다른 팀과의 협업을 조율할 때'
  },
  {
    id: 'collab_003',
    category: 'collaboration',
    title: '지식 공유 장려',
    description: '팀원 간 지식 공유를 독려할 때'
  },
  {
    id: 'collab_004',
    category: 'collaboration',
    title: '멘토링 요청',
    description: '선배가 후배를 멘토링하도록 요청할 때'
  },
  {
    id: 'collab_005',
    category: 'collaboration',
    title: '페어 작업 제안',
    description: '둘이서 함께 작업하도록 제안할 때'
  },
  {
    id: 'collab_006',
    category: 'collaboration',
    title: '팀 프로세스 개선',
    description: '팀 협업 방식을 개선하고자 할 때'
  },

  // 갈등 해결 (Conflict Resolution)
  {
    id: 'conflict_001',
    category: 'conflict_resolution',
    title: '의견 충돌 중재',
    description: '팀원 간 의견이 충돌할 때 중재할 때'
  },
  {
    id: 'conflict_002',
    category: 'conflict_resolution',
    title: '불만 사항 청취',
    description: '팀원의 불만을 듣고 해결할 때'
  },
  {
    id: 'conflict_003',
    category: 'conflict_resolution',
    title: '오해 해소',
    description: '커뮤니케이션 오해를 풀어줄 때'
  },
  {
    id: 'conflict_004',
    category: 'conflict_resolution',
    title: '성과 불균형 조정',
    description: '업무 분담의 불균형을 조정할 때'
  },
  {
    id: 'conflict_005',
    category: 'conflict_resolution',
    title: '감정적 갈등 완화',
    description: '감정적으로 격해진 상황을 진정시킬 때'
  },

  // 동기부여 (Motivation)
  {
    id: 'motiv_001',
    category: 'motivation',
    title: '목표 설정 독려',
    description: '새로운 목표를 설정하도록 동기부여할 때'
  },
  {
    id: 'motiv_002',
    category: 'motivation',
    title: '슬럼프 극복 지원',
    description: '의욕이 저하된 팀원을 격려할 때'
  },
  {
    id: 'motiv_003',
    category: 'motivation',
    title: '비전 제시',
    description: '팀의 방향성과 비전을 공유할 때'
  },
  {
    id: 'motiv_004',
    category: 'motivation',
    title: '성취 축하',
    description: '팀의 성과를 축하하고 격려할 때'
  },
  {
    id: 'motiv_005',
    category: 'motivation',
    title: '도전 장려',
    description: '새로운 도전을 시도하도록 격려할 때'
  },
  {
    id: 'motiv_006',
    category: 'motivation',
    title: '자율성 부여',
    description: '더 많은 자율권을 주며 신뢰를 표현할 때'
  },

  // 의사결정 (Decision Making)
  {
    id: 'decision_001',
    category: 'decision_making',
    title: '빠른 결정 요구',
    description: '신속한 의사결정이 필요할 때'
  },
  {
    id: 'decision_002',
    category: 'decision_making',
    title: '합의 도출',
    description: '팀원들과 합의를 이끌어낼 때'
  },
  {
    id: 'decision_003',
    category: 'decision_making',
    title: '리스크 평가',
    description: '위험 요소를 평가하고 결정할 때'
  },
  {
    id: 'decision_004',
    category: 'decision_making',
    title: '우선순위 결정',
    description: '여러 옵션 중 우선순위를 정할 때'
  },
  {
    id: 'decision_005',
    category: 'decision_making',
    title: '방향 전환 안내',
    description: '기존 방향을 수정하고 새로운 방향을 제시할 때'
  }
];

export const getCategoryName = (category: string): string => {
  const categoryNames: Record<string, string> = {
    task_assignment: '업무 지시',
    reporting: '보고',
    meeting: '회의',
    feedback: '피드백',
    collaboration: '협업',
    conflict_resolution: '갈등 해결',
    motivation: '동기부여',
    decision_making: '의사결정'
  };
  return categoryNames[category] || category;
};
