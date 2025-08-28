import React, { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { AudioPlayer } from './AudioPlayer';
import { VoiceRecorder } from './VoiceRecorder';
import { AlertTriangle } from 'lucide-react';
import { Question, ReadingQuestion, ListeningQuestion, WritingPrompt, SpeakingPrompt } from '../types';

interface TestSectionProps {
  sectionId: string;
  title: string;
  questions?: Question[] | ReadingQuestion[] | ListeningQuestion[];
  writingPrompt?: WritingPrompt;
  speakingPrompt?: SpeakingPrompt;
  canReturnLater: boolean;
  onSectionComplete: (score: number, responses: (string | number)[]) => void;
  onNext: () => void;
}

export const TestSection: React.FC<TestSectionProps> = ({
  sectionId,
  title,
  questions,
  writingPrompt,
  speakingPrompt,
  canReturnLater,
  onSectionComplete,
  onNext
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | string | null)[]>([]);
  const [submittedQuestions, setSubmittedQuestions] = useState<boolean[]>([]);
  const [writingResponse, setWritingResponse] = useState('');
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
  
  const isWritingSection = sectionId === 'writing';
  const isSpeakingSection = sectionId === 'speaking';
  const isListeningSection = sectionId === 'listening';
  
  const totalQuestions = questions?.length || 1;
  
  // Initialize answers array
  React.useEffect(() => {
    const initialAnswers = new Array(totalQuestions).fill(null);
    const initialSubmitted = new Array(totalQuestions).fill(false);
    setAnswers(initialAnswers);
    setSubmittedQuestions(initialSubmitted);
  }, [totalQuestions]);

  const handleAnswerSelect = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmitQuestion = () => {
    const newSubmitted = [...submittedQuestions];
    newSubmitted[currentQuestionIndex] = true;
    setSubmittedQuestions(newSubmitted);
  };

  const handleResetQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null;
    setAnswers(newAnswers);
    
    const newSubmitted = [...submittedQuestions];
    newSubmitted[currentQuestionIndex] = false;
    setSubmittedQuestions(newSubmitted);
  };

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateScore = () => {
    if (isWritingSection || isSpeakingSection) {
      // For writing and speaking, give full points if completed
      const hasResponse = isWritingSection ? writingResponse.trim().length > 0 : recordingBlob !== null;
      return hasResponse ? (writingPrompt?.points || speakingPrompt?.points || 0) : 0;
    }
    
    if (!questions) return 0;
    
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score += question.points;
      }
    });
    return score;
  };

  const handleCompleteSection = () => {
    const score = calculateScore();
    let responses: (string | number)[] = [];
    
    if (isWritingSection) {
      responses = [writingResponse];
    } else if (isSpeakingSection) {
      responses = [recordingBlob ? 'recorded' : 'not-recorded'];
    } else {
      responses = answers as (string | number)[];
    }
    
    onSectionComplete(score, responses);
    onNext();
  };

  const isCurrentQuestionSubmitted = submittedQuestions[currentQuestionIndex];
  const allQuestionsSubmitted = submittedQuestions.every(submitted => submitted);

  if (isWritingSection && writingPrompt) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        {!canReturnLater && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-yellow-800 font-medium">Important Notice</p>
              <p className="text-yellow-700 text-sm">You cannot return to this section once you proceed. Please complete it carefully.</p>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {writingPrompt.points} points
            </span>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-4">Writing Task</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-900 mb-2">Scenario:</h4>
            <p className="text-gray-700 mb-4">{writingPrompt.scenario}</p>
            <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
            <p className="text-gray-700">{writingPrompt.instructions}</p>
          </div>
          
          <textarea
            value={writingResponse}
            onChange={(e) => setWritingResponse(e.target.value)}
            placeholder="Type your response here..."
            className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">
              {writingResponse.length} characters
            </span>
            <button
              onClick={handleCompleteSection}
              disabled={writingResponse.trim().length < 50}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Complete Section
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isSpeakingSection && speakingPrompt) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        {!canReturnLater && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-yellow-800 font-medium">Important Notice</p>
              <p className="text-yellow-700 text-sm">You cannot return to this section once you proceed. Please complete it carefully.</p>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {speakingPrompt.points} points
            </span>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-4">Speaking Task</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-900 mb-2">Scenario: {speakingPrompt.scenario}</h4>
            <p className="text-gray-700">{speakingPrompt.instructions}</p>
            <p className="text-sm text-gray-600 mt-2">Time limit: {speakingPrompt.timeLimit} seconds</p>
          </div>
          
          <VoiceRecorder 
            timeLimit={speakingPrompt.timeLimit}
            onRecordingComplete={(blob) => setRecordingBlob(blob)}
          />
          
          <div className="flex justify-end">
            <button
              onClick={handleCompleteSection}
              disabled={recordingBlob === null}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Complete Section
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const isReadingQuestion = 'passage' in currentQuestion;
  const isListeningQuestion = 'audioUrl' in currentQuestion;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {!canReturnLater && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-yellow-800 font-medium">Important Notice</p>
            <p className="text-yellow-700 text-sm">You cannot return to this section once you proceed. Please complete it carefully.</p>
          </div>
        </div>
      )}
      
      {isReadingQuestion && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Reading Passage:</h4>
          <p className="text-gray-700 leading-relaxed">
            {(currentQuestion as ReadingQuestion).passage}
          </p>
        </div>
      )}
      
      {isListeningQuestion && (
        <AudioPlayer
          audioUrl={(currentQuestion as ListeningQuestion).audioUrl}
          duration={(currentQuestion as ListeningQuestion).audioDuration}
        />
      )}
      
      <QuestionCard
        question={currentQuestion.text}
        options={currentQuestion.options}
        selectedAnswer={answers[currentQuestionIndex] as number | null}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleSubmitQuestion}
        onReset={handleResetQuestion}
        onSkip={handleSkipQuestion}
        points={currentQuestion.points}
        questionNumber={currentQuestionIndex + 1}
        isSubmitted={isCurrentQuestionSubmitted}
        correctAnswer={currentQuestion.correctAnswer}
        showCorrect={isCurrentQuestionSubmitted}
      />
      
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Previous
        </button>
        
        <span className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        
        {currentQuestionIndex < totalQuestions - 1 ? (
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={handleCompleteSection}
            disabled={!allQuestionsSubmitted}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Complete Section
          </button>
        )}
      </div>
    </div>
  );
};