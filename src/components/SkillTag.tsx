import React from 'react';

interface SkillTagProps {
  name: string;
  level: 'beginner' | 'intermediate' | 'expert';
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level }) => {
  const getColorClass = () => {
    switch (level) {
      case 'beginner':
        return 'bg-green-200 text-green-800';
      case 'intermediate':
        return 'bg-yellow-200 text-yellow-800';
      case 'expert':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getColorClass()}`}>
      {name}
    </span>
  );
};

export default SkillTag;