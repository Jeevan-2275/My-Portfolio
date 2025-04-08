import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const HamburgerMenu = ({ isOpen, setIsOpen, navItems }) => {
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed top-16 right-0 w-64 bg-gray-900 p-4 z-50 md:hidden"
      role="menu"
      aria-label="Mobile navigation"
    >
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path} role="menuitem">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block text-white font-futura ${isActive ? "text-cyan-400" : "hover:text-cyan-400"}`
              }
              onClick={() => setIsOpen(false)}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HamburgerMenu;