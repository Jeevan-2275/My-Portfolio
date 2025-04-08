import { motion } from "framer-motion";

// Define background colors for each certification based on index
const backgroundColors = [
  "bg-red-600", // Machine Learning
  "bg-gray-600", // Deep Learning
  "bg-green-600", // ML on GCP
  "bg-blue-600", // Data Science
  "bg-orange-600", // Big Data
  "bg-blue-600", // Advanced Data Science
  "bg-blue-600", // Advanced ML on GCP
  "bg-blue-600", // DL on Tensorflow
  "bg-blue-600", // Fullstack Development
];

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className={`p-4 ${backgroundColors[index % backgroundColors.length]} text-white rounded-lg shadow-md text-center`}
  >
    <p className="font-semibold">{cert.title}</p>
    <p>{cert.issuer}</p>
    <p>{cert.platform}</p>
  </motion.div>
);

export default CertificationCard;