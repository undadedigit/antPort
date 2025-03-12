import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-gray-800 text-white p-4 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Anthony Rana</a>
        <ul className="flex space-x-4">
          <li><a href="/#about" className="hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="/#skills" className="hover:text-gray-300 transition-colors">Skills</a></li>
          <li><a href="/#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
          <li><a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">CV</a></li>
          <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
          <li><a href="mailto:anthonyrana@gmail.com" className="hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;