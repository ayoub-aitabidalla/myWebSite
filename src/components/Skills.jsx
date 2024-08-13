
import javaImage from '/src/assets/skills-icons/java.png';
import cppImage from '/src/assets/skills-icons/c.png';
import csharpImage from '/src/assets/skills-icons/csharp.png';
import reactImage from '/src/assets/skills-icons/react.png';
import angularImage from '/src/assets/skills-icons/angular.png';
import springImage from '/src/assets/skills-icons/spring.png';
import htmlImage from '/src/assets/skills-icons/html.png';
import jsImage from '/src/assets/skills-icons/js.png';
import phpImage from '/src/assets/skills-icons/php.png';
import mysqlImage from '/src/assets/skills-icons/mysql.png';
import postgreImage from '/src/assets/skills-icons/postgre.png';
import oracleImage from '/src/assets/skills-icons/oracle.png';

function Skills() {
  const skills = [
    { name: "Java", image: javaImage },
    { name: "C++", image: cppImage },
    { name: "C#", image: csharpImage },
    { name: "React", image: reactImage },
    { name: "Angular", image: angularImage },
    { name: "Spring boot", image: springImage },
    { name: "HTML & CSS", image: htmlImage },
    { name: "JavaScript", image: jsImage },
    { name: "PHP", image: phpImage },
    { name: "MySQL", image: mysqlImage },
    { name: "PostgreSQL", image: postgreImage },
    { name: "Oracle", image: oracleImage },
];

  return (
    <div className="w-11/12 mx-auto py-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        My Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-white transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="mb-4 w-16 h-16"
            />

            <h3 className="text-lg font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
