import React, { useState } from 'react';
import { TestIntro } from './components/TestIntro';
import { ProgressBar } from './components/ProgressBar';
import { TestSection } from './components/TestSection';
import { TestResults } from './components/TestResults';
import { TestResult } from './types';
import { 
  testSections, 
  vocabularyQuestions, 
  grammarQuestions, 
  readingQuestions, 
  listeningQuestions, 
  writingPrompt, 
  speakingPrompt 
} from './data/testData';

type AppState = 'intro' | 'testing' | 'results';

function App() {
  const [appState, setAppState] = useState<AppState>('intro');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [results, setResults] = useState<TestResult[]>([]);

  const handleStartTest = () => {
    setAppState('testing');
    setCurrentSectionIndex(0);
    setResults([]);
  };

  const handleSectionComplete = (score: number, responses: (string | number)[]) => {
    const currentSection = testSections[currentSectionIndex];
    const newResult: TestResult = {
      sectionId: currentSection.id,
      score,
      maxScore: currentSection.totalPoints,
      responses
    };
    
    setResults(prev => [...prev, newResult]);
    
    if (currentSectionIndex < testSections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      setAppState('results');
    }
  };

  const handleNext = () => {
    // This is handled by handleSectionComplete
  };

  const handleRestart = () => {
    setAppState('intro');
    setCurrentSectionIndex(0);
    setResults([]);
  };

  if (appState === 'intro') {
    return <TestIntro onStartTest={handleStartTest} />;
  }

  if (appState === 'results') {
    return <TestResults results={results} onRestart={handleRestart} />;
  }

  const currentSection = testSections[currentSectionIndex];
  const getSectionData = () => {
    switch (currentSection.id) {
      case 'vocabulary':
        return { questions: vocabularyQuestions };
      case 'grammar':
        return { questions: grammarQuestions };
      case 'reading':
        return { questions: readingQuestions };
      case 'listening':
        return { questions: listeningQuestions };
      case 'writing':
        return { writingPrompt };
      case 'speaking':
        return { speakingPrompt };
      default:
        return { questions: [] };
    }
  };

  const sectionData = getSectionData();

  return (
    <div className="min-h-screen bg-gray-100">
      <ProgressBar
        currentSection={currentSectionIndex + 1}
        totalSections={testSections.length}
        sectionTitle={currentSection.title}
      />
      
      <TestSection
        sectionId={currentSection.id}
        title={currentSection.title}
        questions={'questions' in sectionData ? sectionData.questions : undefined}
        writingPrompt={'writingPrompt' in sectionData ? sectionData.writingPrompt : undefined}
        speakingPrompt={'speakingPrompt' in sectionData ? sectionData.speakingPrompt : undefined}
        canReturnLater={currentSection.canReturnLater}
        onSectionComplete={handleSectionComplete}
        onNext={handleNext}
      />
    </div>
  );
}

export default App;
