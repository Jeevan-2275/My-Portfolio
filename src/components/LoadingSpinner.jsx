import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-cyan-400 border-gray-700 rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner;