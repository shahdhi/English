import { CEFRLevel } from '../types';
import { cefrLevels } from '../data/testData';

export const calculateCEFRLevel = (score: number): CEFRLevel => {
  return cefrLevels.find(level => 
    score >= level.minScore && score <= level.maxScore
  ) || cefrLevels[0];
};

export const getPerformanceDescription = (percentage: number): string => {
  if (percentage >= 90) return "Excellent performance";
  if (percentage >= 80) return "Very good performance";
  if (percentage >= 70) return "Good performance";
  if (percentage >= 60) return "Satisfactory performance";
  if (percentage >= 50) return "Below average performance";
  return "Needs significant improvement";
};

export const getSectionFeedback = (sectionId: string, score: number, maxScore: number): string => {
  const percentage = (score / maxScore) * 100;
  
  const feedbackMap: Record<string, Record<string, string>> = {
    vocabulary: {
      high: "Excellent vocabulary knowledge with strong understanding of synonyms and word relationships.",
      medium: "Good vocabulary foundation with room for expanding advanced word knowledge.",
      low: "Basic vocabulary skills - focus on learning more synonyms and word meanings."
    },
    grammar: {
      high: "Strong grammatical accuracy with excellent understanding of complex structures.",
      medium: "Solid grammar foundation with minor areas for improvement in complex tenses.",
      low: "Basic grammar knowledge - focus on fundamental sentence structures and verb tenses."
    },
    reading: {
      high: "Excellent reading comprehension with strong analytical and inference skills.",
      medium: "Good reading skills with solid understanding of main ideas and details.",
      low: "Basic reading comprehension - practice with longer texts and inference questions."
    },
    listening: {
      high: "Excellent listening skills with strong ability to understand spoken English.",
      medium: "Good listening comprehension with minor challenges in complex audio.",
      low: "Basic listening skills - practice with various accents and speaking speeds."
    },
    writing: {
      high: "Strong writing ability with clear structure and professional tone.",
      medium: "Good writing skills with effective communication and organization.",
      low: "Basic writing ability - focus on structure, clarity, and professional language."
    },
    speaking: {
      high: "Confident speaking ability with clear pronunciation and natural flow.",
      medium: "Good speaking skills with effective communication and decent fluency.",
      low: "Basic speaking ability - practice pronunciation, fluency, and confidence."
    }
  };

  const level = percentage >= 70 ? 'high' : percentage >= 50 ? 'medium' : 'low';
  return feedbackMap[sectionId]?.[level] || "Performance assessment completed.";
};