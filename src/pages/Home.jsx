import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiVercel,
  SiRender,
  SiNetlify,
  SiGooglecloud,
} from "react-icons/si";
import SocialLink from "../components/SocialLink";
import InteractiveBackground from "../components/InteractiveBackground";
import developerImage from "../assets/developer-image.png";
import fullstackImage from "../assets/fullstack.png";
import uiuxImage from "../assets/uiux-image.png";
import profileImage from "../assets/profile-image.png";

const skills = [
  {
    title: "Full Stack Development",
    description: [
      "Building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Crafting responsive and interactive UIs using React.js, Redux Toolkit, and Tailwind CSS.",
      "Designing RESTful APIs and integrating third-party services like Cloudinary and Stripe.",
      "Implementing authentication with JWT, handling file uploads, and deploying to platforms like Vercel and Render.",
    ],
    tech: [
      { name: "React", icon: "https://reactjs.org/favicon.ico" },
      { name: "Node.js", icon: "https://nodejs.org/static/images/favicons/favicon.png" },
      { name: "MongoDB", icon: "https://www.mongodb.com/assets/images/global/favicon.ico" },
      { name: "Express", icon: "https://expressjs.com/images/favicon.png" },
    ],
    image: fullstackImage,
    expertise: "90%",
  },
  {
    title: "Cloud Infra & Deployment",
    description: [
      "Deploying full stack apps on cloud platforms like Vercel, Render, and Netlify.",
      "Using Google Cloud for scalable cloud infrastructure and storage.",
      "Domain linking, CI/CD pipelines, and version control via GitHub Actions.",
      "Maintaining production-grade apps with auto-deployment and analytics.",
    ],
    tech: [
      { name: "Vercel", icon: <SiVercel size={24} /> },
      { name: "Render", icon: <SiRender size={24} color="#3f48cc" /> },
      { name: "Netlify", icon: <SiNetlify size={24} color="#38AF9C" /> },
      { name: "Google Cloud", icon: <SiGooglecloud size={24} color="#4285F4" /> },
    ],
    image: developerImage,
    expertise: "85%",
  },
  {
    title: "UI/UX Design",
    description: [
      "Creating attractive UIs for mobile and web applications.",
      "Customizing logos and designing from scratch.",
      "Optimizing user experience with functional flows.",
    ],
    tech: [
      { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" /> },
      { name: "Adobe XD", icon: <SiAdobexd size={24} color="#FF61F6" /> },
      { name: "Sketch", icon: <SiSketch size={24} color="#F7B500" /> },
    ],
    image: uiuxImage,
    expertise: "80%",
  },
];

const EnhancedInteractiveBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-blue-100 to-gray-50">
    <motion.div
      className="absolute w-64 h-64 bg-blue-300/20 rounded-full blur-xl"
      animate={{
        y: [0, -30, 0],
        x: [0, 50, 0],
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ top: "10%", left: "10%", opacity: 0.7 }}
    />
    <motion.div
      className="absolute w-48 h-48 bg-blue-400/20 rounded-lg blur-xl"
      animate={{
        y: [0, 20, 0],
        x: [-30, 0, 30],
        rotate: -360,
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ bottom: "15%", right: "15%", opacity: 0.6 }}
    />
  </div>
);

// const Footer = () => (
//   <footer className="bg-blue-50 text-center py-6 border-t border-blue-100 mt-10 relative z-10">
//     <p className="text-sm text-gray-600">
//       Made with ❤️ by <span className="font-semibold text-blue-800">Jeevan Kadam</span> — 2025
//     </p>
//     <div className="flex justify-center mt-2 space-x-4 text-blue-600">
//       <SocialLink href="https://github.com/Jeevan-2275" icon={<FaGithub />} label="GitHub" />
//       <SocialLink href="https://www.linkedin.com/in/jeevan-kadam-730b87327" icon={<FaLinkedin />} label="LinkedIn" />
//       <SocialLink href="https://x.com/JKadam33718" icon={<FaTwitter />} label="Twitter" />
//       <SocialLink href="https://youtube.com/@jeevankadam" icon={<FaYoutube />} label="YouTube" />
//     </div>
//   </footer>
// );

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative overflow-hidden">
      <EnhancedInteractiveBackground />

      <main className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-100/70 rounded-lg inline-block px-4 py-2 mb-4"
          >
            <span className="text-blue-800 font-semibold">Welcome to My Portfolio</span>
          </motion.div>
          <motion.div className="flex justify-center mb-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src={profileImage}
              alt="Jeevan Kadam Profile"
              className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-200"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Jeevan Kadam
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
          >
            A passionate developer thriving to build end-to-end products that create sustainable and scalable social and technical systems with a lasting impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6 mb-10 flex-wrap"
          >
            <SocialLink href="https://github.com/Jeevan-2275" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/jeevan-kadam-730b87327" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="https://x.com/JKadam33718" icon={<FaTwitter />} label="Twitter" />
            <SocialLink href="https://youtube.com/@jeevankadam" icon={<FaYoutube />} label="YouTube" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Jeevan-2275"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold"
            >
              ⭐ See Me on GitHub
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1UnEtEY3d0uCYGozPVETSO01AKKPQLvab/view?usp=sharing"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-blue-900 mb-12"
          >
            What I Do?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center border border-gray-200 hover:border-blue-300 transition duration-300 relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-xl pointer-events-none"
                />
                <motion.div
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4"
                >
                  Expertise: {skill.expertise}
                </motion.div>
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  src={skill.image}
                  alt={`${skill.title} illustration`}
                  className="w-52 h-52 object-contain mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{skill.title}</h3>
                <ul className="text-gray-700 text-left mb-6 space-y-3">
                  {skill.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-1">⚡</span>
                      <span className="text-sm">{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skill.tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 flex items-center justify-center"
                      title={tech.name}
                    >
                      {typeof tech.icon === "string" ? (
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      ) : (
                        tech.icon
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Down Hint */}
       
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
