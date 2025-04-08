import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Education", path: "/education" },
  { name: "About Us", path: "/about-us" },
  { name: "Projects", path: "/projects" },
  { name: "Open Source", path: "/open-source" },
  { name: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white bg-opacity-90 backdrop-blur-md shadow-lg"
    >
      <motion.h1
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold text-blue-900"
      >
         Jeevan Kadam
      </motion.h1>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-900 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <motion.li
            key={item.path}
            whileHover={{ scale: 1.1, color: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `transition-colors text-sm ${
                  isActive
                    ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                    : "text-blue-900 hover:text-blue-500"
                } py-2`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-16 right-0 w-64 bg-white p-4 z-50 md:hidden shadow-lg rounded-lg"
        >
          {navItems.map((item) => (
            <li key={item.path} className="py-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block text-blue-900 ${
                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;