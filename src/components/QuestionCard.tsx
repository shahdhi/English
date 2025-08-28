import React from 'react';
import { CheckCircle, Circle, RotateCcw, SkipForward } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onAnswerSelect: (answer: number) => void;
  onSubmit: () => void;
  onReset: () => void;
  onSkip: () => void;
  points: number;
  questionNumber?: number;
  isSubmitted: boolean;
  correctAnswer?: number;
  showCorrect?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
  onReset,
  onSkip,
  points,
  questionNumber,
  isSubmitted,
  correctAnswer,
  showCorrect = false
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        {questionNumber && (
          <span className="text-sm font-medium text-gray-500">
            Question {questionNumber}
          </span>
        )}
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {points} points
        </span>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-6">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = showCorrect && correctAnswer === index;
          const isWrong = showCorrect && isSelected && correctAnswer !== index;
          
          let optionClass = "flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300";
          
          if (isSubmitted) {
            optionClass += " cursor-not-allowed";
            if (isCorrect) {
              optionClass += " border-green-500 bg-green-50";
            } else if (isWrong) {
              optionClass += " border-red-500 bg-red-50";
            } else if (isSelected) {
              optionClass += " border-gray-300 bg-gray-50";
            } else {
              optionClass += " border-gray-200 bg-gray-50";
            }
          } else {
            if (isSelected) {
              optionClass += " border-blue-500 bg-blue-50";
            } else {
              optionClass += " border-gray-200 hover:bg-gray-50";
            }
          }
          
          return (
            <div
              key={index}
              className={optionClass}
              onClick={() => !isSubmitted && onAnswerSelect(index)}
            >
              <div className="flex items-center">
                {isSelected ? (
                  <CheckCircle className={`w-5 h-5 mr-3 ${isSubmitted ? (isCorrect ? 'text-green-500' : 'text-red-500') : 'text-blue-500'}`} />
                ) : (
                  <Circle className="w-5 h-5 mr-3 text-gray-400" />
                )}
                <span className={`text-gray-900 ${isSubmitted && isCorrect ? 'font-medium' : ''}`}>
                  {option}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onSubmit}
          disabled={selectedAnswer === null || isSubmitted}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Submit
        </button>
        <button
          onClick={onReset}
          disabled={isSubmitted}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </button>
        <button
          onClick={onSkip}
          disabled={isSubmitted}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
        >
          <SkipForward className="w-4 h-4 mr-2" />
          Skip
        </button>
      </div>
    </div>
  );
};