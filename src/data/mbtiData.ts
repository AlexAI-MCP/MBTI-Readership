import type { MBTICharacteristics, MBTIType } from '../types';

export const mbtiCharacteristics: Record<MBTIType, MBTICharacteristics> = {
  INTJ: {
    type: 'INTJ',
    name: '전략가',
    description: '독립적이고 전략적인 사고를 하는 완벽주의자',
    strengths: ['전략적 사고', '독립성', '혁신', '논리적 분석'],
    workStyle: '체계적이고 효율적인 방식을 선호하며, 장기적 비전을 중요시합니다.',
    communicationPreference: '간결하고 논리적인 소통을 선호하며, 불필요한 감정 표현을 불편해합니다.'
  },
  INTP: {
    type: 'INTP',
    name: '논리술사',
    description: '창의적이고 분석적인 문제 해결사',
    strengths: ['논리적 분석', '창의성', '문제 해결', '객관성'],
    workStyle: '유연하고 자율적인 환경에서 최고의 성과를 냅니다.',
    communicationPreference: '개념과 아이디어 중심의 토론을 즐기며, 정확성을 중요시합니다.'
  },
  ENTJ: {
    type: 'ENTJ',
    name: '통솔자',
    description: '카리스마 있고 결단력 있는 리더',
    strengths: ['리더십', '결단력', '효율성', '목표 지향성'],
    workStyle: '도전적이고 야심찬 목표를 추구하며, 빠른 실행을 선호합니다.',
    communicationPreference: '직접적이고 명확한 소통을 선호하며, 결과 중심적입니다.'
  },
  ENTP: {
    type: 'ENTP',
    name: '변론가',
    description: '혁신적이고 도전적인 토론가',
    strengths: ['창의성', '유연성', '토론 능력', '혁신'],
    workStyle: '새로운 아이디어와 가능성을 탐구하며, 변화를 즐깁니다.',
    communicationPreference: '활발한 토론과 브레인스토밍을 즐기며, 다양한 관점을 고려합니다.'
  },
  INFJ: {
    type: 'INFJ',
    name: '옹호자',
    description: '이상주의적이고 통찰력 있는 조력자',
    strengths: ['통찰력', '공감 능력', '창의성', '헌신'],
    workStyle: '의미 있는 일에 몰입하며, 조화로운 환경을 추구합니다.',
    communicationPreference: '깊이 있는 대화를 선호하며, 진정성과 이해를 중요시합니다.'
  },
  INFP: {
    type: 'INFP',
    name: '중재자',
    description: '이상주의적이고 창의적인 몽상가',
    strengths: ['창의성', '공감', '적응력', '개방성'],
    workStyle: '가치와 의미를 중시하며, 자율적인 환경에서 빛납니다.',
    communicationPreference: '진솔하고 배려 깊은 소통을 선호하며, 비판에 민감합니다.'
  },
  ENFJ: {
    type: 'ENFJ',
    name: '선도자',
    description: '카리스마 있고 영감을 주는 리더',
    strengths: ['리더십', '공감 능력', '의사소통', '조직력'],
    workStyle: '사람들과 협력하며 긍정적인 변화를 만들어냅니다.',
    communicationPreference: '따뜻하고 격려하는 소통을 하며, 팀의 화합을 중요시합니다.'
  },
  ENFP: {
    type: 'ENFP',
    name: '활동가',
    description: '열정적이고 창의적인 자유로운 영혼',
    strengths: ['열정', '창의성', '사교성', '유연성'],
    workStyle: '자유롭고 다양한 프로젝트를 즐기며, 새로운 가능성을 탐구합니다.',
    communicationPreference: '열정적이고 활발한 소통을 하며, 긍정적인 에너지를 전달합니다.'
  },
  ISTJ: {
    type: 'ISTJ',
    name: '현실주의자',
    description: '책임감 있고 체계적인 실행가',
    strengths: ['책임감', '조직력', '신뢰성', '세심함'],
    workStyle: '명확한 규칙과 절차를 따르며, 꼼꼼하게 일을 처리합니다.',
    communicationPreference: '명확하고 구체적인 소통을 선호하며, 사실 기반의 정보를 중시합니다.'
  },
  ISFJ: {
    type: 'ISFJ',
    name: '수호자',
    description: '헌신적이고 따뜻한 보호자',
    strengths: ['세심함', '헌신', '책임감', '인내심'],
    workStyle: '안정적이고 조화로운 환경에서 최선을 다합니다.',
    communicationPreference: '부드럽고 배려 깊은 소통을 하며, 구체적인 지침을 선호합니다.'
  },
  ESTJ: {
    type: 'ESTJ',
    name: '경영자',
    description: '효율적이고 조직적인 관리자',
    strengths: ['조직력', '결단력', '효율성', '신뢰성'],
    workStyle: '체계적이고 규칙적인 방식으로 목표를 달성합니다.',
    communicationPreference: '직접적이고 명확한 소통을 선호하며, 실용적인 접근을 중시합니다.'
  },
  ESFJ: {
    type: 'ESFJ',
    name: '집정관',
    description: '사교적이고 협조적인 조력자',
    strengths: ['협조성', '사교성', '조직력', '배려'],
    workStyle: '팀워크를 중시하며, 조화로운 환경을 만듭니다.',
    communicationPreference: '따뜻하고 친근한 소통을 하며, 관계를 중요시합니다.'
  },
  ISTP: {
    type: 'ISTP',
    name: '장인',
    description: '실용적이고 분석적인 문제 해결사',
    strengths: ['문제 해결', '실용성', '유연성', '침착함'],
    workStyle: '실질적인 문제를 논리적으로 해결하며, 자율성을 중시합니다.',
    communicationPreference: '간결하고 실용적인 소통을 선호하며, 행동으로 보여주기를 좋아합니다.'
  },
  ISFP: {
    type: 'ISFP',
    name: '모험가',
    description: '유연하고 감성적인 예술가',
    strengths: ['창의성', '유연성', '감수성', '개방성'],
    workStyle: '자유로운 환경에서 창의적으로 일하며, 현재에 집중합니다.',
    communicationPreference: '부드럽고 배려 깊은 소통을 하며, 압박을 불편해합니다.'
  },
  ESTP: {
    type: 'ESTP',
    name: '사업가',
    description: '활동적이고 현실적인 실행가',
    strengths: ['행동력', '적응력', '현실감각', '사교성'],
    workStyle: '빠르게 행동하며 즉각적인 결과를 추구합니다.',
    communicationPreference: '직설적이고 활발한 소통을 하며, 실용적인 해결책을 선호합니다.'
  },
  ESFP: {
    type: 'ESFP',
    name: '연예인',
    description: '활기차고 즉흥적인 엔터테이너',
    strengths: ['사교성', '열정', '유연성', '낙관성'],
    workStyle: '사람들과 함께 일하며 즐거운 분위기를 만듭니다.',
    communicationPreference: '활발하고 친근한 소통을 하며, 긍정적인 피드백을 중요시합니다.'
  }
};

export const mbtiTypes: MBTIType[] = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];
