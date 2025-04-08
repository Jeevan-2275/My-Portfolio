import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Interactive Background Component
const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-blue-100 to-white">
      <motion.div
        className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-md"
        animate={{ y: [0, -50, 0], x: [0, 50, 0], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-blue-400 rounded-lg opacity-20 blur-md"
        animate={{ y: [0, 40, 0], x: [-40, 0, 40], rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", right: "15%" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-10 blur-md"
        animate={{ scale: [1, 1.2, 1], rotate: 180 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 relative">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-bold text-blue-900 mb-2"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-700 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out to me through the form below or via my contact information.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 6px 20px rgba(0, 0, 255, 0.2)",
            }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-600 bg-blue-100 p-2 rounded-full">
                  <FaEnvelope />
                </span>
                <p className="text-gray-700">Email: jeevakadam2275@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 bg-blue-100 p-2 rounded-full">
                  <FaGithub />
                </span>
                <p className="text-gray-700">
                  GitHub:{" "}
                  <a
                    href="https://github.com/Jeevan-2275"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/Kadam-Jeevan
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 bg-blue-100 p-2 rounded-full">
                  <FaLinkedin />
                </span>
                <p className="text-gray-700">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/jeevan-kadam-730b87327/"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/Kadam-Jeevan
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600 bg-blue-100 p-2 rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <p className="text-gray-700">Location: Gujarat, Ahmedabad</p>
              </div>
            </div>

            {/* Connect With Me Section */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-900 mt-6 font-semibold"
            >
              Connect With Me
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-start space-x-4 mt-4"
            >
              <a
                href="https://github.com/Jeevan-2275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jeevan-kadam-730b87327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/JKadam33718"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com/@jeevankadam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaYoutube />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 6px 20px rgba(0, 0, 255, 0.2)",
            }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Send Me a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 transition duration-300"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactUs;
