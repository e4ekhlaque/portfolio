import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 sm:px-6 md:px-10 text-center scroll-mt-24"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
        About Me
      </h2>

      <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-300">
        Passionate CSE student focused on building scalable full-stack
        applications with modern UI/UX, responsive design, and strong
        performance. I enjoy solving real-world problems using React,
        JavaScript, Node.js, and Express.
      </p>
    </motion.section>
  );
}