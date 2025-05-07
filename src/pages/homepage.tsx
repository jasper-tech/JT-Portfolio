import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/project";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

const HomePage: FC = () => {
  const technologies: Technology[] = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "TypeScript", icon: "🔷", color: "text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "Next.js", icon: "⚡", color: "text-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Sandy Afeawo
        </motion.h1>
        <motion.p
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </motion.p>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/cv"
            className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
          >
            View My CV
          </Link>
          <Link
            to="/contactme"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`flex items-center space-x-2 ${tech.color} bg-gray-800 px-4 py-2 rounded-full`}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
