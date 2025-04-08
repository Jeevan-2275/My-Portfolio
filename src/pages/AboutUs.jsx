import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/about-us-image.png"; // Ensure this matches your portfolio's illustration style

// Interactive Background Component
const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-blue-100 to-white">
      <motion.div
        className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-sm"
        animate={{
          y: [0, -40, 0],
          x: [0, 40, 0],
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "15%", left: "15%" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-blue-400 rounded-lg opacity-20 blur-sm"
        animate={{
          y: [0, 30, 0],
          x: [-40, 0, 40],
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", right: "20%" }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 180,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-bold text-blue-900 mb-4"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-700 italic mb-6"
          >
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 0, 255, 0.5)" }}
            src={aboutUsImage}
            alt="About Me illustration"
            className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-md border-4 border-blue-300"
          />
        </motion.div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Bio Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">👤</span> Bio
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I am Jeevan Kadam, a first-year B.Tech student at Rai University, Ahmedabad, with a passion for technology. My journey is driven by curiosity and a desire to craft innovative solutions. I enjoy tackling real-world challenges through coding and have excelled in multiple hackathons.
            </p>
          </motion.div>

          {/* Technical Expertise Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🔧</span> Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML/CSS",
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB",
                "Express.js",
                "REST APIs",
                "Git",
                "Tailwind CSS",
                "Github",
                
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* University Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🎓</span> University
            </h3>
            <p className="text-gray-700">Rai University, Ahmedabad</p>
            <p className="text-blue-900 mt-2 font-medium">CGPA: 8.90</p>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.7 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">/</span> Tech Stack
            </h3>
            <p className="text-gray-700">Mastery of 10+ Technologies</p>
          </motion.div>

          {/* Goal Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🎯</span> Goal
            </h3>
           
          <p className="text-gray-700">Full Stack Developer</p>
          <p className="text-gray-700">Web Developer</p>

          </motion.div>

          {/* Goals & Aspirations Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 0.9 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">🌟</span> Goals & Aspirations
            </h3>
            <p className="text-gray-700 leading-relaxed">
            "My goal is to become a dynamic full-stack developer who builds impactful and scalable web solutions for real-world challenges. I'm passionate about mastering advanced algorithms, cloud computing, and modern frameworks, while actively contributing to open-source projects and pushing the boundaries of innovation."            </p>
          </motion.div>

          {/* Learning Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 1.0 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">📖</span> Learning
            </h3>
            <p className="text-gray-700">Building RESTful APIs with Node.js & Express</p>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 1.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">📊</span> Progress
            </h3>
            <p className="text-gray-700">Completed 5+ Projects</p>
          </motion.div>

          {/* Fun Facts Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 255, 0.3)" }}
            transition={{ delay: 1.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">☕</span> Fun Facts
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Curious by nature and driven by innovation, I thrive on learning new technologies and solving complex problems.</li>
              <li> I enjoy collaborating in hackathons, creating unique projects, and contributing to the open-source community</li>
              <li> Beyond tech, I dive into books on psychology and philosophy to better understand people and perspectives.</li>
              <li>Passionate about contributing to open-source software.</li>
            </ul>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutUs;
