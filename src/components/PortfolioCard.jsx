import { motion } from "framer-motion";

const PortfolioCard = ({ item }) => {
  const hasMedia = item.image || item.video;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-gray-800 rounded-lg shadow-md"
    >
      {hasMedia && (
        <div className="mb-4">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
          )}
          {item.video && (
            <div className="video-container">
              <iframe
                src={item.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.title}
                className="w-full h-40"
              ></iframe>
            </div>
          )}
        </div>
      )}
      <p className="text-white font-semibold">{item.title}</p>
      <p className="text-gray-300 text-sm">{item.description}</p>
      <div className="flex gap-2 mt-2">
        {item.tech.map((tech, i) => (
          <span key={i} className="text-blue-400 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <a
          href={item.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Code
        </a>
        {item.demo && (
          <a
            href={item.demo}
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

export default PortfolioCard;