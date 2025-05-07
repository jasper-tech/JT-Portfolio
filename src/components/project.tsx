import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image?: string;
}

interface ProjectsSectionProps {}

const projects: Project[] = [
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform with secure authentication, real-time payments, and product management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/projects/ecommerce",
    github: "https://github.com/user/ecommerce",
    image: "/images/projects/ecommerce-app.jpg",
  },
  {
    title: "Task Manager",
    description:
      "A Next.js and MongoDB-based task management system with role-based access control.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Material-UI"],
    link: "/projects/taskmanager",
    github: "https://github.com/user/taskmanager",
    image: "/images/projects/task-manager.jpg",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that uses OpenAI's API for natural language understanding and responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React"],
    link: "/projects/chatbot",
    github: "https://github.com/user/chatbot",
    image: "/images/projects/ai-chatbot.jpg",
  },
];

const ProjectsSection: FC<ProjectsSectionProps> = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const techBadgeColors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-700",
    "Node.js": "bg-green-100 text-green-700",
    MongoDB: "bg-green-100 text-green-700",
    "Tailwind CSS": "bg-cyan-100 text-cyan-700",
    "Next.js": "bg-black text-white",
    TypeScript: "bg-blue-100 text-blue-700",
    "Material-UI": "bg-indigo-100 text-indigo-700",
    Python: "bg-yellow-100 text-yellow-700",
    FastAPI: "bg-green-100 text-green-700",
    "OpenAI API": "bg-purple-100 text-purple-700",
    // Default color for any unlisted technologies
    default: "bg-gray-100 text-gray-700",
  };

  const getTechBadgeColor = (tech: string) => {
    return techBadgeColors[tech] || techBadgeColors.default;
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my recent work and personal projects that showcase my skills
            and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gray-700 overflow-hidden">
                <img
                  src={project.image || "/images/projects/default-project.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTechBadgeColor(
                        tech
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-auto">
                  <Link
                    to={project.link}
                    className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    View Project <ArrowUpRight size={16} />
                  </Link>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-lg transition-all duration-300"
          >
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
