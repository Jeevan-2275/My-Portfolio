import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const hasMedia = project.image || project.video;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-800 rounded-lg shadow-md"
    >
      {hasMedia && (
        <div className="mb-4">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
          )}
          {project.video && (
            <div className="video-container">
              <iframe
                src={project.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
                className="w-full h-40"
              ></iframe>
            </div>
          )}
        </div>
      )}
      <p className="text-white font-semibold">{project.title}</p>
      <p className="text-gray-300 text-sm">{project.description}</p>
      <div className="flex gap-2 mt-2">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-blue-400 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;