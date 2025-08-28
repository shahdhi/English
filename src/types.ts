export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface ReadingQuestion extends Question {
  passage: string;
}

export interface ListeningQuestion extends Question {
  audioUrl: string;
  audioDuration: number;
}

export interface WritingPrompt {
  id: string;
  scenario: string;
  instructions: string;
  points: number;
}

export interface SpeakingPrompt {
  id: string;
  scenario: string;
  instructions: string;
  timeLimit: number;
  points: number;
}

export interface TestSection {
  id: string;
  title: string;
  description: string;
  totalPoints: number;
  canReturnLater: boolean;
}

export interface TestResult {
  sectionId: string;
  score: number;
  maxScore: number;
  responses: (string | number)[];
}

export interface CEFRLevel {
  level: string;
  name: string;
  minScore: number;
  maxScore: number;
  color: string;
}

export type TestStatus = 'not-started' | 'in-progress' | 'completed';