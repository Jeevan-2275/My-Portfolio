import { motion } from "framer-motion";
import { organizations } from "../data/organizations";

const OpenSource = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold gradient-text mb-8"
      >
        Contributed Organizations
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
        {organizations.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white bg-opacity-90 rounded-lg shadow-md text-center"
          >
            <p className="text-blue-900">{org}</p>
          </motion.div>
        ))}
      </div>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl text-blue-900 mt-8"
      >
        Contributions
      </motion.h3>
    </motion.div>
  );
};

export default OpenSource;