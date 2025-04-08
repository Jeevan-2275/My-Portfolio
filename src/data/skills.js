import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import { skillCategories } from "../data/skills";
import { SiReact, SiNodedotjs, SiAzuredevops, SiMysql, SiHtml5, SiGit, SiFigma } from "react-icons/si";

const Skills = () => {
  const icons = {
    Frontend: <SiReact className="text-cyan-400" />,
    Backend: <SiNodedotjs className="text-green-400" />,
    "Cloud Integration": <SiAzuredevops className="text-blue-400" />,
    Database: <SiMysql className="text-blue-400" />,
    "Web Technologies": <SiHtml5 className="text-orange-400" />,
    "Tools & DevOps": <SiGit className="text-red-400" />,
    "UI/UX": <SiFigma className="text-pink-400" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10"
      id="skills"
      role="region"
      aria-label="Skills section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-cyan-400 font-futura mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Technical Skills Proficiency
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg border border-cyan-400/30"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center">
              {icons[category]}
              <span className="ml-2">{category}</span>
            </h3>
            {skills.map((skill) => (
              <SkillBar key={skill.title} title={skill.title} percentage={skill.percentage} />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;