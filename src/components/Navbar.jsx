import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('About');

  const handleScroll = () => {
    const sections = ['About', 'skills', 'projects', 'contacts'];
    const offsets = sections.map((id) => document.getElementById(id)?.offsetTop || 0);
    const scrollPosition = window.scrollY + 200;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 w-full bg-gray-800 z-10">
      <div className="flex justify-center space-x-10 items-center py-4">
        <button
          onClick={() => handleNavClick('About')}
          className={`text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'About' ? 'text-blue-500 border-blue-500' : 'text-white'
          } transition duration-300 transform hover:scale-105`}
        >
          About
        </button>
        <button
          onClick={() => handleNavClick('skills')}
          className={`text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'skills' ? 'text-blue-500 border-blue-500' : 'text-white'
          } transition duration-300 transform hover:scale-105`}
        >
          Skills
        </button>
        <button
          onClick={() => handleNavClick('projects')}
          className={`text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'projects' ? 'text-blue-500 border-blue-500' : 'text-white'
          } transition duration-300 transform hover:scale-105`}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavClick('contacts')}
          className={`text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'contacts' ? 'text-blue-500 border-blue-500' : 'text-white'
          } transition duration-300 transform hover:scale-105`}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
