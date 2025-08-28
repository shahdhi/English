import React from 'react';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentSection,
  totalSections,
  sectionTitle
}) => {
  const progress = (currentSection / totalSections) * 100;

  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-gray-900">{sectionTitle}</h2>
          <span className="text-sm text-gray-500">
            {currentSection} of {totalSections}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};