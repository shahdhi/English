import { Question, ReadingQuestion, ListeningQuestion, WritingPrompt, SpeakingPrompt, TestSection, CEFRLevel } from '../types';

export const testSections: TestSection[] = [
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    description: 'Test your word knowledge and synonyms',
    totalPoints: 4,
    canReturnLater: true
  },
  {
    id: 'grammar',
    title: 'Grammar',
    description: 'Complete sentences with correct grammar',
    totalPoints: 8,
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
  }
];

export const grammarQuestions: Question[] = [
  {
    id: 'grammar-1',
    text: "By the time you arrive, she ___ ready.",
    options: ['will be', 'will have been', 'would be', 'is'],
    correctAnswer: 1,
    points: 8
  }
];

export const readingQuestions: ReadingQuestion[] = [
  {
    id: 'reading-1',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function. Studies conducted at major universities found that employees who took 20-minute power naps showed 34% better performance on complex tasks compared to those who worked continuously. The optimal nap duration appears to be between 15-20 minutes, as longer naps can lead to grogginess and reduced alertness. Companies like Google and NASA have implemented nap policies, recognizing the benefits of strategic rest periods for their workforce.",
    text: "According to the passage, what is the optimal duration for a power nap?",
    options: ['10-15 minutes', '15-20 minutes', '20-25 minutes', '25-30 minutes'],
    correctAnswer: 1,
    points: 4
  },
  {
    id: 'reading-2',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function. Studies conducted at major universities found that employees who took 20-minute power naps showed 34% better performance on complex tasks compared to those who worked continuously. The optimal nap duration appears to be between 15-20 minutes, as longer naps can lead to grogginess and reduced alertness. Companies like Google and NASA have implemented nap policies, recognizing the benefits of strategic rest periods for their workforce.",
    text: "What was the performance improvement shown by employees who took power naps?",
    options: ['24%', '30%', '34%', '40%'],
    correctAnswer: 2,
    points: 4
  },
  {
    id: 'reading-3',
    passage: "Recent research has shown that taking short naps during the day can significantly improve productivity and cognitive function. Studies conducted at major universities found that employees who took 20-minute power naps showed 34% better performance on complex tasks compared to those who worked continuously. The optimal nap duration appears to be between 15-20 minutes, as longer naps can lead to grogginess and reduced alertness. Companies like Google and NASA have implemented nap policies, recognizing the benefits of strategic rest periods for their workforce.",
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