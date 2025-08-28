import {
  Question,
  ReadingQuestion,
  ListeningQuestion,
  WritingPrompt,
  SpeakingPrompt,
  TestSection,
  CEFRLevel
} from '../types';

export const testSections: TestSection[] = [
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    description: 'Test your word knowledge and synonyms',
    totalPoints: 40,
    canReturnLater: true
  },
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Complete sentences with correct grammar',
    totalPoints: 80,
    canReturnLater: true
  },
  {
    id: 'reading',
    title: 'Reading Comprehension',
    description: 'Read passages and answer questions',
    totalPoints: 12,
    canReturnLater: true
  },
  {
    id: 'listening',
    title: 'Listening Comprehension',
    description: 'Listen to audio and answer questions',
    totalPoints: 12,
    canReturnLater: false
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Write a professional response',
    totalPoints: 10,
    canReturnLater: false
  },
  {
    id: 'speaking',
    title: 'Speaking',
    description: 'Record your spoken response',
    totalPoints: 10,
    canReturnLater: false
  }
];

export const vocabularyQuestions: Question[] = [
  {
    id: 'vocab-1',
    text: "Which word is the best synonym for 'meticulous'?",
    options: ['Careless', 'Detailed', 'Quick', 'Simple'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-2',
    text: "The manager *commended* the team on their hard work.",
    options: ['criticized', 'praised', 'joined', 'dismissed'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-3',
    text: "The *objective* of the meeting is to brainstorm new ideas.",
    options: ['location', 'purpose', 'length', 'problem'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-4',
    text: "Her response was rather *vague* and didn't answer the question directly.",
    options: ['clear', 'quick', 'unclear', 'angry'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'vocab-5',
    text: "We need to *postpone* the event until next week.",
    options: ['cancel', 'attend', 'delay', 'plan'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'vocab-6',
    text: "The software has a built-in feature to *streamline* the process.",
    options: ['complicate', 'describe', 'make more efficient', 'slow down'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'vocab-7',
    text: "The project's *feasibility* is still being studied.",
    options: ['cost', 'possibility', 'timeline', 'manager'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-8',
    text: "Please *review* the document before the meeting.",
    options: ['forget', 'examine', 'lose', 'write'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-9',
    text: "They had a *brief* conversation in the hallway.",
    options: ['long', 'short', 'loud', 'angry'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'vocab-10',
    text: "The company is looking to *expand* into new markets.",
    options: ['reduce', 'leave', 'grow', 'invest'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'vocab-11',
    text: "Her argument was very *persuasive*.",
    options: ['confusing', 'convincing', 'weak', 'long'],
    correctAnswer: 1,
    points: 4
  }
];

export const grammarQuestions: Question[] = [
  {
    id: 'grammar-1',
    text: "By the time you arrive, she ___ ready.",
    options: ['will be', 'will have been', 'would be', 'is'],
    correctAnswer: 1,
    points: 8
  },
  {
    id: 'grammar-2',
    text: "If I _________ more time, I would learn to play the guitar.",
    options: ['have', 'had', 'would have', 'having'],
    correctAnswer: 1,
    points: 8
  },
  {
    id: 'grammar-3',
    text: "By the time we arrived, the meeting _________.",
    options: ['had already started', 'already starts', 'has already started', 'is already starting'],
    correctAnswer: 0,
    points: 8
  },
  {
    id: 'grammar-4',
    text: "She's the colleague _________ project won the company award.",
    options: ['who', 'which', 'whose', 'whom'],
    correctAnswer: 2,
    points: 8
  },
  {
    id: 'grammar-5',
    text: "We look forward to _________ from you soon.",
    options: ['hear', 'hearing', 'heard', 'be hearing'],
    correctAnswer: 1,
    points: 8
  },
  {
    id: 'grammar-6',
    text: "He _________ in London for five years before he moved to Paris.",
    options: ['lived', 'has lived', 'had lived', 'was living'],
    correctAnswer: 2,
    points: 8
  },
  {
    id: 'grammar-7',
    text: "Could you please turn _________ the music? It's a bit loud.",
    options: ['on', 'off', 'down', 'up'],
    correctAnswer: 2,
    points: 8
  },
  {
    id: 'grammar-8',
    text: "Neither the manager nor the employees _________ happy with the new policy.",
    options: ['is', 'are', 'be', 'been'],
    correctAnswer: 1,
    points: 8
  },
  {
    id: 'grammar-9',
    text: "This report _________ by the finance team yesterday.",
    options: ['was written', 'written', 'is written', 'wrote'],
    correctAnswer: 0,
    points: 8
  },
  {
    id: 'grammar-10',
    text: "I'll send you the data _________ I get back to my desk.",
    options: ['while', 'until', 'as soon as', 'during'],
    correctAnswer: 2,
    points: 8
  },
  {
    id: 'grammar-11',
    text: "It's important _________ your goals clearly.",
    options: ['to define', 'defining', 'define', 'defined'],
    correctAnswer: 0,
    points: 8
  }
];

export const readingQuestions: ReadingQuestion[] = [
  {
    id: 'reading-1',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function...",
    text: "According to the passage, what is the optimal duration for a power nap?",
    options: ['10-15 minutes', '15-20 minutes', '20-25 minutes', '25-30 minutes'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'reading-2',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function...",
    text: "What was the performance improvement shown by employees who took power naps?",
    options: ['24%', '30%', '34%', '40%'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'reading-3',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function...",
    text: "Why might longer naps be counterproductive?",
    options: ['They waste too much time', 'They can cause grogginess', 'They are not allowed by companies', 'They require special facilities'],
    correctAnswer: 1,
    points: 4
  }
];

export const listeningQuestions: ListeningQuestion[] = [
  {
    id: 'listening-1',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    audioDuration: 30,
    text: "What is the main topic of the audio clip?",
    options: ['Customer service policies', 'Music in retail environments', 'Employee training', 'Store layout design'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'listening-2',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    audioDuration: 30,
    text: "According to the speaker, what effect does background music have?",
    options: ['It increases sales', 'It reduces customer time', 'It improves mood and spending', 'It helps with navigation'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'listening-3',
    audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
    audioDuration: 30,
    text: "What type of music is recommended for retail stores?",
    options: ['Classical music', 'Upbeat pop songs', 'Instrumental and ambient', 'No music at all'],
    correctAnswer: 2,
    points: 4
  }
];

export const writingPrompt: WritingPrompt = {
  id: 'writing-1',
  scenario: "A customer's files were accidentally deleted due to account inactivity. Write a professional response addressing their concern.",
  instructions: "Your response should be empathetic, professional, and provide clear next steps. Aim for 100-150 words.",
  points: 10
};

export const speakingPrompt: SpeakingPrompt = {
  id: 'speaking-1',
  scenario: "Company Event Venue Change",
  instructions: "You need to announce that next week's company training event has been moved from Conference Room A to the Main Auditorium due to higher than expected attendance. Be clear, professional, and provide any necessary details.",
  timeLimit: 60,
  points: 10
};

export const cefrLevels: CEFRLevel[] = [
  { level: 'A1', name: 'Beginner', minScore: 0, maxScore: 15, color: '#EF4444' },
  { level: 'A2', name: 'Elementary', minScore: 16, maxScore: 25, color: '#F97316' },
  { level: 'B1', name: 'Intermediate', minScore: 26, maxScore: 35, color: '#F59E0B' },
  { level: 'B2', name: 'Upper Intermediate', minScore: 36, maxScore: 45, color: '#10B981' },
  { level: 'C1', name: 'Advanced', minScore: 46, maxScore: 52, color: '#3B82F6' },
  { level: 'C2', name: 'Proficient', minScore: 53, maxScore: 56, color: '#8B5CF6' }
];
