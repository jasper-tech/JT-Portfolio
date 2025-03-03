import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform with secure authentication, real-time payments, and product management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/projects/ecommerce",
  },
  {
    title: "Task Manager",
    description:
      "A Next.js and MongoDB-based task management system with role-based access control.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Material-UI"],
    link: "/projects/taskmanager",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that uses OpenAI’s API for natural language understanding and responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React"],
    link: "/projects/chatbot",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* View Project Link */}
            <Link
              to={project.link}
              className="mt-6 inline-block text-blue-500 hover:underline font-medium"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
