import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[75vh] sm:min-h-screen flex items-center justify-center px-4 pt-6 pb-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            Hi, I'm <br />
            Mohammad Ekhlaque
          </motion.h1>

          <div className="text-lg sm:text-xl md:text-2xl text-blue-500 mb-4 h-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "Node.js Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-3">
            Full Stack Developer | React • Node • Express
          </p>

          <p className="text-xs sm:text-sm mb-6">
            2+ Projects | MERN Stack | Open to Internships
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              download="Mohammad_Ekhlaque_CV.pdf"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/profile.png" // 👈 put image in public folder
            alt="profile Picture"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition"
          />
        </motion.div>
      </div>
    </section>
  );
}
