import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Full-stack portfolio with backend API, dark mode, animations, and contact form.",
      tech: ["React", "Express", "Tailwind"],
      github: "https://github.com/e4ekhlaque/portfolio",
      live: "https://portfolio-lemon-three-88.vercel.app/",
    },
    {
      title: "ToDo App",
      desc: "Task management app with CRUD operations and responsive UI.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/todo-app",
      live: "https://todo-app.vercel.app",
    },
    ,
  ];

  return (
    <section
      id="projects"
      className="p-12 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-left"
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
