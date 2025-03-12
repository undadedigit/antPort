import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Node.js.',
      imageUrl: '/images/project1.jpg',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.com',
    },
    {
      title: 'Task Management App',
      description: 'A React Native mobile app for managing daily tasks and schedules.',
      imageUrl: '/images/project2.jpg',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.com',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;