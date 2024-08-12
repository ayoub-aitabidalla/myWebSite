import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-transparent py-6 shadow-lg ">
      <div className="flex justify-center space-x-10 items-center">
        <Link
          to="/"
          className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="skills"
          className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
        >
          Skills
        </Link>
        <Link
          to='projects'
          className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
        >
          Projects
        </Link>
        
        <Link
          to='contacts'
          className="text-white text-lg font-medium hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
