import React from 'react';
import { Clock, CheckCircle, AlertCircle, Play } from 'lucide-react';

interface TestIntroProps {
  onStartTest: () => void;
}

export const TestIntro: React.FC<TestIntroProps> = ({ onStartTest }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">English Fluency Test</h1>
        <p className="text-xl text-gray-600">Comprehensive assessment of your English language skills</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Test Overview</h2>
        <p className="text-gray-700 mb-6">
          This assessment evaluates your English proficiency across six key areas. Your results will be aligned with the 
          Common European Framework of Reference (CEFR) levels, ranging from A1 (Beginner) to C2 (Proficient).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Test Sections</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Vocabulary (4 points)</li>
              <li>• Grammar (8 points)</li>
              <li>• Reading Comprehension (12 points)</li>
              <li>• Listening Comprehension (12 points)</li>
              <li>• Writing (10 points)</li>
              <li>• Speaking (10 points)</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">What You'll Need</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Microphone access for speaking section</li>
              <li>• Audio enabled for listening section</li>
              <li>• Approximately 20-25 minutes</li>
              <li>• Quiet environment for best results</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800 mb-1">Important Instructions</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Some sections (Listening, Writing, Speaking) cannot be revisited once completed</li>
                <li>• Make sure your audio is working before starting</li>
                <li>• Complete the test in one session for accurate results</li>
                <li>• Use Submit, Reset, or Skip buttons as needed for each question</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onStartTest}
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          <Play className="w-6 h-6 mr-3" />
          Begin Test
        </button>
      </div>
    </div>
  );
};