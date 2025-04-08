import { motion } from "framer-motion";
import { degrees } from "../data/education";
import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";
import educationImage from "../assets/education-image.png";
import iiitKurnoolLogo from "../assets/iiit-kurnool-logo.png";
import iuLogo from "../assets/iu-logo.png";

// Enhanced InteractiveBackground with parallax effect
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

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Enhanced Interactive Background */}
      <EnhancedInteractiveBackground />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
            aria-label="Education Section"
          >
            Education
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-900 mb-6"
          >
            Basic Qualification and Certifications
          </motion.h3>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            src={educationImage}
            alt="Education illustration"
            className="w-64 h-64 mx-auto object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Degrees Received Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-2xl font-bold text-blue-900 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            aria-label="Degrees Received"
          >
            Degrees Received
          </motion.h3>
          <div className="space-y-6">
            {degrees.map((deg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start gap-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 hover:border-blue-300 transition duration-300"
              >
                <motion.img
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 * index }}
                  src={index === 0 ? iiitKurnoolLogo : iuLogo}
                  alt={`${deg.institution} logo`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200 shadow-md"
                />
                <div className="flex-1 text-left">
                  <p className="text-lg font-semibold text-blue-900">{deg.institution}</p>
                  <p className="text-sm text-gray-700">{deg.degree}</p>
                  <p className="text-sm text-gray-600">{deg.year}</p>
                  <ul className="mt-3 space-y-1">
                    {deg.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 mt-1">⚡</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={deg.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, color: "#60a5fa" }}
                    className="mt-3 inline-block text-blue-600 hover:underline text-sm"
                    aria-label={`Visit ${deg.institution} website`}
                  >
                    Visit Website
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-2xl font-bold text-blue-900 mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            aria-label="Certifications Section"
          >
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <CertificationCard cert={cert} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Explore more about me or visit my{" "}
          <a href="/projects" className="text-blue-600 hover:underline">projects</a>.
        </motion.div>
      </main>
    </div>
  );
};

export default Education;