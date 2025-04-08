import { motion } from "framer-motion";

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    whileHover={{ scale: 1.2, rotate: 360 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-blue-900"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default SocialLink;