import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image?: string;
  category: string;
  featured?: boolean;
  year?: string;
}

const featuredProjects: Project[] = [
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform with secure authentication, real-time payments, and product management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/projects/ecommerce",
    github: "https://github.com/user/ecommerce",
    image: "/images/projects/ecommerce-app.jpg",
    category: "Personal",
    featured: true,
    year: "2024",
  },
  {
    title: "Task Manager",
    description:
      "A Next.js and MongoDB-based task management system with role-based access control.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Material-UI"],
    link: "/projects/taskmanager",
    github: "https://github.com/user/taskmanager",
    image: "/images/projects/task-manager.jpg",
    category: "Personal",
    featured: true,
    year: "2024",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that uses OpenAI's API for natural language understanding and responses.",
    tech: ["Python", "FastAPI", "OpenAI API", "React"],
    link: "/projects/chatbot",
    github: "https://github.com/user/chatbot",
    image: "/images/projects/ai-chatbot.jpg",
    category: "Personal",
    featured: true,
    year: "2023",
  },
];

// Additional personal projects
const additionalPersonalProjects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React and Three.js for interactive 3D elements.",
    tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "/",
    github: "https://github.com/user/portfolio",
    image: "/images/projects/portfolio.jpg",
    category: "Personal",
    year: "2024",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application with 7-day forecasts, animated weather conditions, and location search.",
    tech: ["Vue.js", "OpenWeather API", "Chart.js", "SCSS"],
    link: "/projects/weather",
    github: "https://github.com/user/weather-app",
    image: "/images/projects/weather-app.jpg",
    category: "Personal",
    year: "2023",
  },
  {
    title: "Markdown Editor",
    description:
      "A real-time markdown editor with syntax highlighting, preview mode, and local storage integration.",
    tech: ["React", "CodeMirror", "LocalStorage API", "Marked"],
    link: "/projects/markdown",
    github: "https://github.com/user/markdown-editor",
    image: "/images/projects/markdown-editor.jpg",
    category: "Personal",
    year: "2023",
  },
  {
    title: "Recipe App",
    description:
      "A recipe discovery and management app with user authentication, favorites, and meal planning features.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    link: "/projects/recipe-app",
    github: "https://github.com/user/recipe-app",
    image: "/images/projects/recipe-app.jpg",
    category: "Personal",
    year: "2022",
  },
];

// Non-profit projects
const nonProfitProjects: Project[] = [
  {
    title: "Community Garden Tracker",
    description:
      "A volunteer management and garden plot tracking system for urban community gardens.",
    tech: ["React", "Firebase", "Google Maps API", "Bootstrap"],
    link: "/projects/garden-tracker",
    github: "https://github.com/user/garden-tracker",
    image: "/images/projects/garden-tracker.jpg",
    category: "Non-profit",
    year: "2024",
  },
  {
    title: "Donation Platform",
    description:
      "A secure donation platform with recurring payment options, tax receipt generation, and donor management.",
    tech: ["Next.js", "Stripe API", "PostgreSQL", "Prisma"],
    link: "/projects/donation-platform",
    github: "https://github.com/user/donation-platform",
    image: "/images/projects/donation-platform.jpg",
    category: "Non-profit",
    year: "2023",
  },
  {
    title: "Volunteer Management System",
    description:
      "A comprehensive volunteer scheduling, hours tracking, and reporting system for non-profit organizations.",
    tech: ["Angular", "Node.js", "MongoDB", "Bootstrap"],
    link: "/projects/volunteer-system",
    github: "https://github.com/user/volunteer-system",
    image: "/images/projects/volunteer-system.jpg",
    category: "Non-profit",
    year: "2023",
  },
  {
    title: "Educational Resources Portal",
    description:
      "A centralized platform for free educational resources including lessons, videos, and interactive materials.",
    tech: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    link: "/projects/edu-resources",
    github: "https://github.com/user/edu-resources",
    image: "/images/projects/edu-portal.jpg",
    category: "Non-profit",
    year: "2022",
  },
  {
    title: "Wildlife Conservation Map",
    description:
      "An interactive map visualizing wildlife conservation efforts and endangered species data.",
    tech: ["JavaScript", "Leaflet.js", "D3.js", "Python"],
    link: "/projects/conservation-map",
    github: "https://github.com/user/conservation-map",
    image: "/images/projects/conservation-map.jpg",
    category: "Non-profit",
    year: "2022",
  },
];

// Combine all projects
const allProjects: Project[] = [
  ...featuredProjects,
  ...additionalPersonalProjects,
  ...nonProfitProjects,
];

// Tech badge colors from the original component
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
  "Three.js": "bg-red-100 text-red-700",
  "Framer Motion": "bg-purple-100 text-purple-700",
  "Vue.js": "bg-emerald-100 text-emerald-700",
  "Chart.js": "bg-pink-100 text-pink-700",
  SCSS: "bg-pink-100 text-pink-700",
  CodeMirror: "bg-gray-100 text-gray-700",
  Marked: "bg-orange-100 text-orange-700",
  "React Native": "bg-blue-100 text-blue-700",
  Firebase: "bg-amber-100 text-amber-700",
  Redux: "bg-purple-100 text-purple-700",
  Expo: "bg-gray-100 text-gray-700",
  "Google Maps API": "bg-red-100 text-red-700",
  Bootstrap: "bg-purple-100 text-purple-700",
  "Stripe API": "bg-blue-100 text-blue-700",
  PostgreSQL: "bg-blue-100 text-blue-700",
  Prisma: "bg-teal-100 text-teal-700",
  Angular: "bg-red-100 text-red-700",
  //   "Vue.js": "bg-green-100 text-green-700",
  Laravel: "bg-red-100 text-red-700",
  MySQL: "bg-blue-100 text-blue-700",
  "AWS S3": "bg-orange-100 text-orange-700",
  JavaScript: "bg-yellow-100 text-yellow-700",
  "Leaflet.js": "bg-green-100 text-green-700",
  "D3.js": "bg-orange-100 text-orange-700",
  // Default color for any unlisted technologies
  default: "bg-gray-100 text-gray-700",
};

const getTechBadgeColor = (tech: string) => {
  return techBadgeColors[tech] || techBadgeColors.default;
};

// All Projects Page Component
const AllProjectsPage = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // Filter projects based on category only
  const filteredProjects = allProjects.filter((project) => {
    return categoryFilter === "All" || project.category === categoryFilter;
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            All Projects
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            A comprehensive collection of my personal and non-profit projects,
            showcasing my technical skills and passion for building innovative
            solutions.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
        >
          <div className="flex justify-center">
            <div className="w-64">
              <label className="block text-gray-400 text-xs mb-1">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white text-sm px-3 py-1.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Personal">Personal</option>
                <option value="Non-profit">Non-profit</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-gray-300 text-sm"
        >
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden border ${
                project.featured ? "border-blue-500/50" : "border-gray-700"
              } hover:border-blue-500 transition-all duration-300 flex flex-col h-full`}
            >
              {/* Project Image */}
              <div className="w-full h-40 bg-gray-700 overflow-hidden relative">
                <img
                  src={project.image || "/images/projects/default-project.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    Featured
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-xs px-2 py-0.5 rounded">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  {project.year && (
                    <span className="text-xs text-gray-400">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-xs mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTechBadgeColor(
                        tech
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={project.link}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    View Project <ArrowUpRight size={14} />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <div className="text-gray-400 text-base">
              No projects match your current filter.
            </div>
            <button
              onClick={() => {
                setCategoryFilter("All");
              }}
              className="mt-3 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Clear Filter
            </button>
          </motion.div>
        )}

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-lg transition-all duration-300 text-sm"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
