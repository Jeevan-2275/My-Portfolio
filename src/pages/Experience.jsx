import { motion } from "framer-motion";
import { useState } from "react";
import { experience } from "../data/experience";
import experienceImage from "../assets/experience-image.png";

const Experience = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="relative z-10 py-16 px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold gradient-text mb-4"
        >
          Experience
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-900 mb-4"
        >
          Work, Internship and Volunteership
        </motion.h3>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          src={experienceImage}
          alt="Experience illustration"
          className="w-64 h-64 mx-auto"
        />
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-5xl mx-auto text-center text-blue-900 mb-12"
      >
        <p className="text-lg">
          I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.
        </p>
      </motion.div>

      {/* Categories Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-4"
      >
        {experience.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="border border-blue-300 rounded-lg p-4"
          >
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full text-left text-blue-900 font-semibold text-lg focus:outline-none"
            >
              {category.name}
              <span className="float-right">
                {expandedCategory === category.name ? "▲" : "▼"}
              </span>
            </button>
            {expandedCategory === category.name && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-blue-900"
              >
                <p>{category.details.length === 0 ? "No details available yet." : category.details.join(", ")}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;