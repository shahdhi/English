import React from 'react';
import { Trophy, Target, BookOpen, Headphones, PenTool, Mic, Download } from 'lucide-react';
import { TestResult, CEFRLevel } from '../types';
import { cefrLevels } from '../data/testData';

interface TestResultsProps {
  results: TestResult[];
  onRestart: () => void;
}

export const TestResults: React.FC<TestResultsProps> = ({ results, onRestart }) => {
  const totalScore = results.reduce((sum, result) => sum + result.score, 0);
  const maxPossibleScore = results.reduce((sum, result) => sum + result.maxScore, 0);
  const percentage = (totalScore / maxPossibleScore) * 100;
  
  const cefrLevel = cefrLevels.find(level => 
    totalScore >= level.minScore && totalScore <= level.maxScore
  ) || cefrLevels[0];

  const getSectionIcon = (sectionId: string) => {
    const iconClass = "w-6 h-6";
    switch (sectionId) {
      case 'vocabulary': return <BookOpen className={iconClass} />;
      case 'grammar': return <Target className={iconClass} />;
      case 'reading': return <BookOpen className={iconClass} />;
      case 'listening': return <Headphones className={iconClass} />;
      case 'writing': return <PenTool className={iconClass} />;
      case 'speaking': return <Mic className={iconClass} />;
      default: return <Target className={iconClass} />;
    }
  };

  const getSectionName = (sectionId: string) => {
    return sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace('-', ' ');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4">
          <Trophy className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h1>
        <p className="text-gray-600">Here are your English fluency test results</p>
      </div>

      {/* Overall Score */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-4xl font-bold text-gray-900 mb-2">{totalScore}/{maxPossibleScore}</div>
            <div className="text-lg text-gray-600">Total Score ({percentage.toFixed(1)}%)</div>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <div 
              className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg"
              style={{ backgroundColor: cefrLevel.color }}
            >
              {cefrLevel.level} - {cefrLevel.name}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Section Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((result) => {
            const sectionPercentage = (result.score / result.maxScore) * 100;
            return (
              <div key={result.sectionId} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="text-blue-600 mr-3">
                    {getSectionIcon(result.sectionId)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{getSectionName(result.sectionId)}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{result.score}/{result.maxScore} points</span>
                      <span>{sectionPercentage.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${sectionPercentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CEFR Level Guide */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">CEFR Level Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cefrLevels.map((level) => (
            <div 
              key={level.level} 
              className={`border rounded-lg p-3 ${level.level === cefrLevel.level ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200'}`}
            >
              <div className="flex items-center mb-2">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: level.color }}
                />
                <span className="font-medium text-gray-900">{level.level}</span>
              </div>
              <p className="text-sm text-gray-600">{level.name}</p>
              <p className="text-xs text-gray-500">{level.minScore}-{level.maxScore} points</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Take Test Again
        </button>
        <button
          className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </button>
      </div>
    </div>
  );
};