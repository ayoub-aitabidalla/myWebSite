import { useNavigate } from 'react-router-dom';
import springImage from '/src/assets/skills-icons/spring.png';
import reactImage from '/src/assets/skills-icons/react.png';
import tailwindImage from '/src/assets/skills-icons/tailwind.png';
import mysqlImage from '/src/assets/skills-icons/mysql.png';
import angularImage from '/src/assets/skills-icons/angular.png';
import javaImage from '/src/assets/skills-icons/java.png';
import javafxImage from '/src/assets/skills-icons/javafx.png';
import jsImage from '/src/assets/skills-icons/js.png';
import phpImage from '/src/assets/skills-icons/php.png';
import cssImage from '/src/assets/skills-icons/css.png';

import satisImage from '/src/assets/projects-images/satis.jpg';
import rentRoverImage from '/src/assets/projects-images/rentrover-img1.jpg';
import fitManagerImage from '/src/assets/projects-images/gum1.jpg';
import libraryManagementImage from '/src/assets/projects-images/lib-manag.jpg';

function Projects() {
  const projects = [
    {
      title: "Satisnap",
      description: "Design and development of a web application for creating, managing, and tracking customer satisfaction surveys.",
      technologies: [springImage, reactImage, tailwindImage, mysqlImage],
      link: "#",
      image: satisImage,
    },
    {
      title: "Rent a Rover",
      description: "Developing a Vehicle Allocation Management Web App.",
      technologies: [springImage, angularImage, tailwindImage, mysqlImage],
      link: "#",
      image: rentRoverImage,
    },
    {
      title: "FitManager - Desktop Application",
      description: "Development of a gym management application, allowing management of members, trainers, and payments.",
      technologies: [javaImage, javafxImage, mysqlImage],
      link: "#",
      image: fitManagerImage,
    },
    {
      title: "Library Management",
      description: "Development of a university library management application, allowing management of books, users, and loans.",
      technologies: [phpImage, jsImage, cssImage, mysqlImage],
      link: "#",
      image: libraryManagementImage,
    },
  ];
  
  const navigate = useNavigate();

  const showProjectDetail = (title) => {
    console.log(title);
    navigate(`/${title}`);
  };
  
    return (
      <div className="w-11/12 mx-auto py-16">
        <h3 className="text-4xl font-bold text-center text-white mb-12">
          Side Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition duration-300 hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap mt-4">
                  {project.technologies.map((tech, index) => (
                    <img
                    key={index}
                    src={tech}
                    alt={tech}
                    className="w-8 h-8 mr-2 mb-2"
                    title={tech}
                  />
                  ))}
                </div>
                <button
                  
                  className="text-blue-400 hover:underline mt-4 inline-block "
                  onClick={()=>showProjectDetail(project.title)}
                  
                >
                  See more &gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  