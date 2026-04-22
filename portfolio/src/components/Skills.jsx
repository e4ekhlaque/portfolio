import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaJava,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Java", icon: <FaJava />, color: "#f89820" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },

    /* darker for light mode visibility */
    { name: "Express.js", icon: <SiExpress />, color: "#444444" },

    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },

    /* darker for light mode visibility */
    { name: "GitHub", icon: <FaGithub />, color: "#111111" },
  ];

  return (
    <section
      id="skills"
      className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 bg-gray-100 dark:bg-gray-800 scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.04,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-4 sm:py-5 text-center shadow-sm hover:shadow-lg transition min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center"
          >
            <div
              className="text-4xl sm:text-5xl mb-3 sm:mb-4 drop-shadow-sm"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white leading-tight">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}