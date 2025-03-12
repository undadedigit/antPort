import React from 'react';

interface GitHubProjectCardProps {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

const GitHubProjectCard: React.FC<GitHubProjectCardProps> = ({
  name,
  description,
  html_url,
  language,
  stargazers_count
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{language}</span>
          <span className="text-sm text-gray-500">⭐ {stargazers_count}</span>
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default GitHubProjectCard;