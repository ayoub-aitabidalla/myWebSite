// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="bg-transparent py-6 shadow-lg ">
//       <div className="flex justify-center space-x-10 items-center">
//         <Link
//           to="/"
//           className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
//         >
//           Home
//         </Link>
//         <Link
//           to="skills"
//           className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
//         >
//           Skills
//         </Link>
//         <Link
//           to='projects'
//           className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
//         >
//           Projects
//         </Link>
        
//         <Link
//           to='contacts'
//           className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
//         >
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import  { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <div className="fixed top-0 w-full bg-gray-800 z-10">
      <div className="flex justify-center space-x-10 items-center py-4">
        <a
          
          className={`text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'About' ? 'text-blue-500 border-blue-500' : ''
          } transition duration-300 transform hover:scale-105`}
        >
          About
        </a>
        <a
          
          className={`text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'skills' ? 'text-blue-500 border-blue-500' : ''
          } transition duration-300 transform hover:scale-105`}
        >
          Skills
        </a>
        <a
          
          className={`text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'projects' ? 'text-blue-500 border-blue-500' : ''
          } transition duration-300 transform hover:scale-105`}
        >
          Projects
        </a>
        <a
          
          className={`text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent ${
            activeSection === 'contacts' ? 'text-blue-500 border-blue-500' : ''
          } transition duration-300 transform hover:scale-105`}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;

