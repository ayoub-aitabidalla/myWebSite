// import { useParams } from 'react-router-dom';

// const ProjectDetails = ({ projects }) => {
//   const { projectTitle } = useParams();
//   const project = projects.find(p => p.title === projectTitle);

//   if (!project) {
//     return <div className="text-white">Project not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
//         <h2 className="text-4xl font-semibold text-white mb-6">{project.title}</h2>
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-64 object-cover rounded-lg mb-6"
//         />
//         <p className="text-gray-300 text-lg mb-6">{project.description}</p>
//         <div className="flex flex-wrap gap-4 mb-6">
//           {project.technologies.map((tech, index) => (
//             <img
//               key={index}
//               src={tech}
//               alt={tech}
//               className="w-10 h-10"
//               title={tech}
//             />
//           ))}
//         </div>
//         <div>
//           <button className="text-blue-400 hover:underline">
//             View Project &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
