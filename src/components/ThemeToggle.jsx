import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.2, boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
};

export default ThemeToggle;