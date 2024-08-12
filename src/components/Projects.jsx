function Projects() {
    const projects = [
      {
        title: "Satisnap",
        description: "Design and development of a web application for creating, managing, and tracking customer satisfaction surveys.",
        technologies: ["src/assets/skills-icons/spring.png", "src/assets/skills-icons/react.png", "src/assets/skills-icons/tailwind.png", "src/assets/skills-icons/mysql.png"],
        link: "#",
        image: "src/assets/projects-images/satis.jpg",
      },
      {
        title: "Rent a Rover",
        description: "Development of a vehicle allocation management application.",
        technologies: ["src/assets/skills-icons/spring.png", "src/assets/skills-icons/angular.png", "src/assets/skills-icons/tailwind.png", "src/assets/skills-icons/mysql.png"],
        link: "#",
        image: "src/assets/projects-images/rent-rover.png", 
      },
      {
        title: "FitManager - Desktop Application",
        description: "Development of a gym management application, allowing management of members, trainers, and payments.",
        technologies: ["src/assets/skills-icons/java.png", "src/assets/skills-icons/javafx.png", "src/assets/skills-icons/mysql.png"],
        link: "#",
        image: "src/assets/projects-images/gum1.jpg", 
      },
      {
        title: "Library Management",
        description: "Development of a university library management application, allowing management of books, users, and loans.",
        technologies: ["src/assets/skills-icons/php.png", "src/assets/skills-icons/js.png", "src/assets/skills-icons/css.png", "src/assets/skills-icons/mysql.png"],
        link: "#",
        image: "src/assets/projects-images/lib-manag.jpg", 
      },
    ];
  
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
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline mt-4 inline-block"
                >
                  See more &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  