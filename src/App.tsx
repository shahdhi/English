import React, { useState } from 'react';
import { TestIntro } from './components/TestIntro';
import { TestSection } from './components/TestSection';
import { TestResult } from './types';
import { testSections, vocabularyQuestions } from './data/testData';

function App() {
  const [testStarted, setTestStarted] = useState(false);

  if (!testStarted) {
    return <TestIntro onStartTest={() => setTestStarted(true)} />;
  }

  // Simple test with just the first section for debugging
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1>Test Section</h1>
      <TestSection
        sectionId="vocabulary"
        title="Vocabulary"
        questions={vocabularyQuestions}
        canReturnLater={true}
        onSectionComplete={(score, responses) => {
          console.log('Section completed', score, responses);
        }}
        onNext={() => {}}
      />
    </div>
  );
}

export default App;
