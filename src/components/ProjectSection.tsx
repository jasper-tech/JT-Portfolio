import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  year: string;
  status?: "live" | "wip" | "archived";
}

const projects: Project[] = [
  {
    title: "BibleQuiz App",
    description:
      "A Next.js app for Bible quizzes, featuring a user-friendly interface and real-time score tracking.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://epsu-dv-bible-trivia-bowl.vercel.app",
    githubUrl: "https://github.com/jasper-tech/EPSU-DV-Bible-Trivia-Bowl",
    image: "/images/projects/epsu-dv-bible-quiz-app.jpg",
    year: "2025",
    status: "live",
  },
  {
    title: "Joey Assistant Bot",
    description:
      "An intermediate-level AI assistant with smart functionalities, conversational responses, and task automation.",
    tech: ["Python"],
    githubUrl: "https://github.com/jasper-tech/Expiremental-Virtual-Assistant",
    image: "/images/projects/joey.png",
    year: "2023",
    status: "archived",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce app with secure authentication, real-time payments, and complete product management.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    year: "2024",
    status: "wip",
  },
];

/* ── Tag badge ── */
const Tag: FC<{ label: string }> = ({ label }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "0.68rem",
      padding: "3px 10px",
      border: "1px solid rgba(0,255,136,0.2)",
      color: "var(--green-dim)",
      background: "rgba(0,255,136,0.06)",
      letterSpacing: "0.06em",
    }}
  >
    {label}
  </span>
);

/* ── Single project card ── */
const ProjectCard: FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, borderColor: "rgba(0,255,136,0.5)" }}
      style={{
        background: "var(--panel)",
        border: "1px solid rgba(0,255,136,0.2)",
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
          height: 180,
          overflow: "hidden",
          position: "relative",
          background: project.image
            ? "var(--bg3)"
            : `linear-gradient(135deg, #0a1810, #062210)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.7) brightness(0.9)",
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "rgba(0,255,136,0.15)",
              letterSpacing: "0.1em",
            }}
          >
            {project.title.slice(0, 6).toUpperCase()}
          </span>
        )}

        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(13,20,16,0.85) 100%)",
          }}
        />

        {/* Year badge */}
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--green)",
            background: "rgba(6,10,7,0.85)",
            border: "1px solid rgba(0,255,136,0.2)",
            padding: "2px 8px",
          }}
        >
          {project.year}
        </span>

        {/* Status */}
        {project.status === "wip" && (
          <span
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "#ffaa00",
              background: "rgba(6,10,7,0.85)",
              border: "1px solid rgba(255,170,0,0.3)",
              padding: "2px 8px",
              letterSpacing: "0.08em",
            }}
          >
            IN PROGRESS
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
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "var(--ivory)",
            letterSpacing: "0.06em",
            marginBottom: "0.5rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--ivory-muted)",
            lineHeight: 1.7,
            marginBottom: "1rem",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
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

        {/* Links */}
        <div style={{ display: "flex", gap: 10 }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--bg)",
                background: "var(--green)",
                border: "1px solid var(--green)",
                transition: "background 0.2s",
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "var(--ivory-muted)",
                background: "transparent",
                border: "1px solid rgba(0,255,136,0.2)",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--green)";
                e.currentTarget.style.borderColor = "var(--green)";
                e.currentTarget.style.background = "rgba(0,255,136,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ivory-muted)";
                e.currentTarget.style.borderColor = "rgba(0,255,136,0.2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Github size={12} /> GitHub
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "rgba(255,170,0,0.7)",
                padding: "6px 14px",
                border: "1px solid rgba(255,170,0,0.2)",
                letterSpacing: "0.08em",
              }}
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ── Projects section ── */
const Projects: FC = () => {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 3rem", position: "relative", zIndex: 1 }}
    >
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Work</div>
        <h2 className="sec-title">Featured Projects</h2>
        <p className="sec-desc">
          Selected builds showcasing my skills and problem-solving approach
        </p>
      </motion.div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ textAlign: "center", marginTop: "3rem" }}
      >
        <Link to="/all-projects" className="btn-outline">
          <ArrowUpRight size={14} />
          View All Projects
        </Link>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #projects { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
