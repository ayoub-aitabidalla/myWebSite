

function Skills() {
    const skills = [
        { name: "Java", image: 'src/assets/skills-icons/java.png' },
        { name: "C++", image: 'src/assets/skills-icons/c.png' }, // Add the path for C++ icon
        { name: "C#", image: 'src/assets/skills-icons/csharp.png' }, // Add the path for C# icon
        { name: "React", image: 'src/assets/skills-icons/react.png' },
        { name: "Angular", image: 'src/assets/skills-icons/angular.png' },
        { name: "Spring boot", image: 'src/assets/skills-icons/spring.png' }, // Add the path for Spring icon
        { name: "HTML & CSS", image: 'src/assets/skills-icons/html.png' },
        { name: "JavaScript", image: 'src/assets/skills-icons/js.png' },
        { name: "PHP", image: 'src/assets/skills-icons/php.png' }, 
        { name: "MySQL", image: 'src/assets/skills-icons/mysql.png' }, 
        { name: "PostgreSQL", image: 'src/assets/skills-icons/postgre.png' }, 
        { name: "Oracle", image: 'src/assets/skills-icons/oracle.png' }, 
        
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
