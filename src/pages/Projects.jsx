import React, { useState } from "react";
import { motion } from "framer-motion";
import InteractiveBackground from "../components/InteractiveBackground";

// Sample project data (replace with your actual projects)
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.",
    tech: ["React", "TailwindCSS"],
    category: "All Projects",
    imageUrl: "../assets/portfolio.png",
    videoUrl: null,
    liveDemo: "https://portfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "MERN Stack App",
    description: "A full stack MERN application with authentication and CRUD operations.",
    tech: ["MongoDB", "Express", "React", "Node"],
    category: "MERN Stack",
    imageUrl: "../assets/mern-stack.png",
    videoUrl: null,
    liveDemo: "https://mernapp.com",
    github: "https://github.com/yourusername/mernapp",
  },
  {
    title: "Modern Coffee Shop",
    description: "An elegant and responsive coffee shop website featuring online ordering, a customer loyalty system, and more.",
    tech: ["React", "TailwindCSS", "Responsive"],
    category: "React",
    imageUrl: "../assets/coffee-shop.png",
    videoUrl: null,
    liveDemo: "https://coffeeshop.com",
    github: "https://github.com/yourusername/coffeeshop",
  },
  {
    title: "Indonesian Food Restaurant",
    description: "A website for a new Indonesian food restaurant with an online ordering system.",
    tech: ["React", "Node"],
    category: "Backend",
    imageUrl: "../assets/indonesian-food.png",
    videoUrl: null,
    liveDemo: "https://indonesianfood.com",
    github: "https://github.com/yourusername/indonesianfood",
  },
  {
    title: "Live Weather App",
    description: "A real-time weather application built with React.",
    tech: ["React", "HTML/CSS"],
    category: "React",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: null,
    liveDemo: "https://weatherapp.com",
    github: "https://github.com/yourusername/weatherapp",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects = filter === "All Projects"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore a collection of my projects showcasing my skills in web development and design.
          </motion.p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {["All Projects", "React", "HTML/CSS", "Figma", "Backend", "MERN Stack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                filter === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                {index < 3 && (
                  <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                    Featured
                  </span>
                )}
                {(project.videoUrl || project.imageUrl) && (
                  <div className="mb-4 w-full h-48 overflow-hidden rounded-lg">
                    {project.videoUrl ? (
                      <iframe
                        src={project.videoUrl}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-center mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    Live Demo <span className="text-lg">🌐</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    GitHub <span className="text-lg">📝</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
