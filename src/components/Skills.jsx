import javaImage from "/src/assets/skills-icons/java.png";
import cppImage from "/src/assets/skills-icons/c.png";
import csharpImage from "/src/assets/skills-icons/csharp.png";
import reactImage from "/src/assets/skills-icons/react.png";
import angularImage from "/src/assets/skills-icons/angular.png";
import springImage from "/src/assets/skills-icons/spring.png";
import htmlImage from "/src/assets/skills-icons/html.png";
import jsImage from "/src/assets/skills-icons/js.png";
import phpImage from "/src/assets/skills-icons/php.png";
import mysqlImage from "/src/assets/skills-icons/mysql.png";
import postgreImage from "/src/assets/skills-icons/postgre.png";
import oracleImage from "/src/assets/skills-icons/oracle.png";

function Skills() {
  const databases = [
    { name: "MySQL", image: mysqlImage },
    { name: "PostgreSQL", image: postgreImage },
    { name: "Oracle", image: oracleImage },
  ];

  const frameworks = [
    { name: "React", image: reactImage },
    { name: "Angular", image: angularImage },
    { name: "Spring Boot", image: springImage },
  ];

  const programmingLanguages = [
    { name: "Java", image: javaImage },
    { name: "C++", image: cppImage },
    { name: "C#", image: csharpImage },
  ];

  const webTechnologies = [
    { name: "HTML & CSS", image: htmlImage },
    { name: "JavaScript", image: jsImage },
    { name: "PHP", image: phpImage },
  ];

  return (
    <div className="w-11/12 mx-auto py-12 ">
      <h3 className="text-4xl font-extrabold text-center text-white mb-12">
        My Skills
      </h3>

      <div className="mb-12">
        <h4 className="text-2xl text-center font-semibold text-blue-400 mb-4">
          Programming Languages
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 max-w-5xl mx-auto">
          {programmingLanguages.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mb-4 w-20 h-20"
              />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl text-center font-semibold text-blue-400 mb-4">
          Web Development Technologies
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 max-w-5xl mx-auto">
          {webTechnologies.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mb-4 w-20 h-20"
              />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl text-center font-semibold text-blue-400 mb-4">
          Frameworks
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 max-w-5xl mx-auto">
          {frameworks.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mb-4 w-20 h-20"
              />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h4 className="text-2xl text-center font-semibold text-blue-400 mb-4">
          Database Systems
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 max-w-5xl mx-auto">
          {databases.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mb-4 w-20 h-20"
              />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
