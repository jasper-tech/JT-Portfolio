import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  category: string;
  featured?: boolean;
  year?: string;
}

const allProjects: Project[] = [
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform with secure authentication, real-time payments, and product management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/user/ecommerce",
    image: "/images/projects/ecommerce-app.jpg",
    category: "Personal",
    featured: true,
    year: "2024",
  },
  {
    title: "Joey Assistant Bot",
    description:
      "An intermediate-level AI assistant with smart functionalities, conversational responses, and task automation.",
    tech: ["Python"],
    github: "https://github.com/jasper-tech/Expiremental-Virtual-Assistant",
    image: "/images/projects/joey.png",
    category: "Personal",
    year: "2023",
  },
  {
    title: "BibleQuiz App",
    description:
      "A Next.js app for Bible quizzes, featuring a user-friendly interface and real-time score tracking.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://epsu-dv-bible-trivia-bowl.vercel.app",
    github: "https://github.com/jasper-tech/EPSU-DV-Bible-Trivia-Bowl",
    image: "/images/projects/epsu-dv-bible-quiz-app.jpg",
    category: "Non-profit",
    featured: true,
    year: "2025",
  },
];

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.65rem",
      padding: "3px 10px",
      border: "1px solid var(--border)",
      color: "var(--green-dim)",
      background: "var(--green-glow2)",
      letterSpacing: "0.06em",
    }}
  >
    {label}
  </span>
);

const AllProjectsPage = () => {
  const [category, setCategory] = useState("All");

  const filtered = allProjects.filter(
    (p) => category === "All" || p.category === category
  );

  const categories = ["All", "Personal", "Non-profit"];

  return (
    <section
      style={{
        padding: "8rem 3rem 6rem",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Header */}
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Portfolio</div>
        <h2 className="sec-title">All Projects</h2>
        <p className="sec-desc">
          A comprehensive collection of personal and non-profit work
        </p>
      </motion.div>

      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.75rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "6px 20px",
              background: category === cat ? "var(--green)" : "transparent",
              color: category === cat ? "var(--bg)" : "var(--ivory-muted)",
              border: `1px solid ${
                category === cat ? "var(--green)" : "var(--border)"
              }`,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (category !== cat) {
                e.currentTarget.style.borderColor = "var(--green)";
                e.currentTarget.style.color = "var(--green)";
              }
            }}
            onMouseLeave={(e) => {
              if (category !== cat) {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--ivory-muted)";
              }
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Count */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--ivory-muted)",
          letterSpacing: "0.08em",
          marginBottom: "1.5rem",
        }}
      >
        Showing {filtered.length}{" "}
        {filtered.length === 1 ? "project" : "projects"}
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, borderColor: "rgba(0,255,136,0.5)" }}
            style={{
              background: "var(--panel)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.3s",
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: 170,
                overflow: "hidden",
                position: "relative",
                background: "linear-gradient(135deg, #0a1810, #062210)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(0.7) brightness(0.85)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(13,20,16,0.85) 100%)",
                }}
              />
              {project.year && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--green)",
                    background: "rgba(6,10,7,0.85)",
                    border: "1px solid var(--border)",
                    padding: "2px 8px",
                  }}
                >
                  {project.year}
                </span>
              )}
              {project.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--bg)",
                    background: "var(--green)",
                    padding: "2px 8px",
                    letterSpacing: "0.08em",
                  }}
                >
                  FEATURED
                </span>
              )}
            </div>

            {/* Body */}
            <div
              style={{
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.4rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "var(--ivory)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--green-dark)",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                    marginLeft: 8,
                  }}
                >
                  {project.category}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--ivory-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {project.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: "1rem",
                }}
              >
                {project.tech.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "6px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      color: "var(--bg)",
                      background: "var(--green)",
                      border: "1px solid var(--green)",
                    }}
                  >
                    <ArrowUpRight size={12} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "6px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      color: "var(--ivory-muted)",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--green)";
                      e.currentTarget.style.borderColor = "var(--green)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--ivory-muted)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <Github size={12} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "4rem",
            fontFamily: "var(--font-mono)",
            color: "var(--ivory-muted)",
            fontSize: "0.85rem",
          }}
        >
          No projects match the selected filter.
        </div>
      )}

      {/* Back */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ textAlign: "center", marginTop: "3rem" }}
      >
        <Link to="/" className="btn-outline">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 7rem 1.5rem 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default AllProjectsPage;
