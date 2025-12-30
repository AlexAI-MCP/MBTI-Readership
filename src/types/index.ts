export type RelationshipType = 'junior' | 'senior' | 'colleague';

export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type SituationCategory =
  | 'task_assignment'
  | 'reporting'
  | 'meeting'
  | 'feedback'
  | 'collaboration'
  | 'conflict_resolution'
  | 'motivation'
  | 'decision_making';

export interface Situation {
  id: string;
  category: SituationCategory;
  title: string;
  description: string;
}

export interface CommunicationAdvice {
  mbti: MBTIType;
  relationship: RelationshipType;
  situation: string;
  overview: string;
  keyPoints: string[];
  communicationStyle: {
    tone: string;
    approach: string;
    avoid: string[];
  };
  examples: {
    good: string[];
    bad: string[];
  };
  tips: string[];
}

export interface MBTICharacteristics {
  type: MBTIType;
  name: string;
  description: string;
  strengths: string[];
  workStyle: string;
  communicationPreference: string;
}
