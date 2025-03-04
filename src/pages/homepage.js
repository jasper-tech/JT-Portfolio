import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Code,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto overflow-x-hidden snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 snap-start">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Jasper</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl"
        >
          Full-Stack Developer | <span className="text-green-500">React</span> |{" "}
          <span className="text-green-500">Next.js</span> |{" "}
          <span className="text-green-500">Node.js</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex space-x-4"
        >
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center space-x-2"
          >
            <span>View Portfolio</span> <ArrowRight />
          </Link>
          <Link
            to="#"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-800 text-center px-6 snap-start">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          I'm a passionate software developer specializing in modern web
          technologies. I create scalable and efficient applications using
          React, Next.js, Node.js, and TypeScript.
        </p>
      </section>

      {/* Projects */}
      <section className="h-screen flex flex-col items-center justify-center px-8 snap-start">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce App",
              tech: ["React", "Node.js", "Stripe"],
              link: "/projects/ecommerce",
            },
            {
              title: "Task Manager",
              tech: ["Next.js", "MongoDB", "Tailwind CSS"],
              link: "/projects/taskmanager",
            },
            {
              title: "AI Chatbot",
              tech: ["Python", "OpenAI API", "FastAPI"],
              link: "/projects/chatbot",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((stack, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.1 }}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full"
                  >
                    {stack}
                  </motion.span>
                ))}
              </div>
              <Link
                to={project.link}
                className="mt-4 inline-block text-blue-500"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="h-screen flex flex-col items-center justify-center px-6 bg-gray-800 text-center snap-start">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="mt-8 max-w-3xl w-full space-y-6">
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <Briefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Software Developer at XYZ Company
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              2022 - Present
            </p>
          </div>

          <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border dark:border-gray-700">
            <div className="flex items-center space-x-4">
              <Code className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Full-Stack Developer
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Expertise in modern web development, including React, Next.js, and
              Node.js.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center snap-start">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">Let's build something amazing together!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="mailto:sandyjasper922@gmail.com"
            className="p-3 bg-blue-500 text-white rounded-full"
          >
            <Mail />
          </a>
          <a
            href="https://github.com/jasper-tech"
            className="p-3 bg-gray-900 text-white rounded-full"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/afeawo-sandy-298235215"
            className="p-3 bg-blue-700 text-white rounded-full"
          >
            <Linkedin />
          </a>
        </div>
      </section>
    </div>
  );
}
