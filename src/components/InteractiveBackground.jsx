import React from "react";
import { motion } from "framer-motion";

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute w-32 h-32 bg-blue-400 rounded-full"
        animate={{
          y: [0, -50, 0],
          x: [0, 50, 0],
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "20%" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-green-400 rounded-lg"
        animate={{
          y: [0, 30, 0],
          x: [-50, 0, 50],
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", right: "30%" }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-purple-400 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 180,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default InteractiveBackground;