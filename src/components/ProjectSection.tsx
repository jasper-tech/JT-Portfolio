import { FC, useState } from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: { name: string; logo: string; invertInDark?: boolean }[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  status?: "live" | "wip" | "archived";
}

const techMap: Record<string, { logo: string; invertInDark?: boolean }> = {
  "Next.js": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invertInDark: true,
  },
  TypeScript: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  Firebase: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  "Tailwind CSS": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  Python: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  React: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "React Native": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Node.js": {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  MongoDB: {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
};

const projects: Project[] = [
  {
    title: "BibleQuiz App",
    description:
      "Bible quiz platform with real-time score tracking and a clean, user-friendly interface.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"].map((n) => ({
      name: n,
      ...techMap[n],
    })),
    liveUrl: "https://epsu-dv-bible-trivia-bowl.vercel.app",
    githubUrl: "https://github.com/jasper-tech/EPSU-DV-Bible-Trivia-Bowl",
    year: "2024",
    status: "live",
  },
  {
    title: "Joey Assistant Bot",
    description:
      "AI assistant with conversational responses, smart task automation, and natural language handling.",
    tech: ["Python"].map((n) => ({ name: n, ...techMap[n] })),
    githubUrl: "https://github.com/jasper-tech/Expiremental-Virtual-Assistant",
    year: "2023",
    status: "archived",
  },
  {
    title: "EMC, Union App",
    description:
      "Cross platform app built to manage union activities, finances, member records, and communications for EPSU.",
    tech: ["React Native", "Firebase"].map((n) => ({ name: n, ...techMap[n] })),
    liveUrl: "https://emc-virid.vercel.app"
    githubUrl: "https://github.com/jasper-tech/EMC",
    year: "2025",
    status: "live",
  },
];

const statusConfig = {
  live: {
    label: "LIVE",
    color: "#00ff88",
    bg: "rgba(0,255,136,0.08)",
    border: "rgba(0,255,136,0.3)",
  },
  wip: {
    label: "IN PROGRESS",
    color: "#ffaa00",
    bg: "rgba(255,170,0,0.08)",
    border: "rgba(255,170,0,0.3)",
  },
  archived: {
    label: "ARCHIVED",
    color: "#888",
    bg: "rgba(136,136,136,0.08)",
    border: "rgba(136,136,136,0.25)",
  },
};

/* ── Single project card ── */
const ProjectCard: FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const status = project.status ? statusConfig[project.status] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--panel)" : "var(--panel)",
        border: `1px solid ${
          hovered ? "rgba(0,255,136,0.45)" : "rgba(0,255,136,0.15)"
        }`,
        borderRadius: "6px",
        padding: hovered ? "1.1rem 1.15rem" : "0.75rem 0.9rem",
        display: "flex",
        flexDirection: "column",
        gap: hovered ? "0.6rem" : "0.35rem",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        cursor: "default",
        boxShadow: hovered ? "0 8px 32px rgba(0,255,136,0.09)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Top row: title + year + status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: hovered ? "0.88rem" : "0.8rem",
            fontWeight: 700,
            color: hovered ? "var(--green)" : "var(--ivory)",
            letterSpacing: "0.05em",
            flex: 1,
            minWidth: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "font-size 0.3s, color 0.3s",
          }}
        >
          {project.title}
        </span>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.57rem",
            color: "var(--green-dim)",
            letterSpacing: "0.06em",
            flexShrink: 0,
          }}
        >
          {project.year}
        </span>

        {status && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.52rem",
              letterSpacing: "0.07em",
              color: status.color,
              background: status.bg,
              border: `1px solid ${status.border}`,
              borderRadius: "3px",
              padding: "1px 5px",
              flexShrink: 0,
            }}
          >
            {status.label}
          </span>
        )}
      </div>

      {/* Description — always visible, expands on hover */}
      <p
        style={{
          fontSize: hovered ? "0.72rem" : "0.67rem",
          color: "var(--ivory-muted)",
          lineHeight: hovered ? 1.65 : 1.4,
          margin: 0,
          transition: "all 0.3s",
          display: "-webkit-box",
          WebkitLineClamp: hovered ? "unset" : 2,
          WebkitBoxOrient: "vertical",
          overflow: hovered ? "visible" : "hidden",
        }}
      >
        {project.description}
      </p>

      {/* Tech icons — always visible */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {project.tech.map((t) => (
          <div
            key={t.name}
            title={t.name}
            style={{
              width: 16,
              height: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={t.logo}
              alt={t.name}
              style={{
                width: hovered ? 16 : 14,
                height: hovered ? 16 : 14,
                filter: t.invertInDark
                  ? "invert(1) brightness(0.7) sepia(1) hue-rotate(90deg) saturate(3)"
                  : undefined,
                opacity: hovered ? 1 : 0.6,
                transition: "all 0.3s",
              }}
            />
          </div>
        ))}
      </div>

      {/* Links row — expands on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              overflow: "hidden",
            }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                style={{
                  color: "var(--ivory-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--green)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--ivory-muted)")
                }
              >
                <Github size={11} /> Repo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--ivory-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--green)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--ivory-muted)")
                }
              >
                <ExternalLink size={11} /> Live
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  color: "rgba(255,170,0,0.6)",
                  letterSpacing: "0.07em",
                }}
              >
                COMING SOON
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* GitHub icon — always visible when NOT hovered (replaced by full row on hover) */}
      {!hovered && project.githubUrl && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
            style={{
              color: "rgba(200,220,210,0.5)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Github size={12} />
          </a>
        </div>
      )}
    </motion.div>
  );
};

/* ── Projects section ── */
const Projects: FC = () => {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 3rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Work</div>
        {/* <h2 className="sec-title">Featured Projects</h2> */}
        <p className="sec-desc">
          Selected builds showcasing my skills and problem-solving approach
        </p>
      </motion.div>

      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "rgba(160,180,170,0.95)",
          letterSpacing: "0.1em",
          marginBottom: "0.75rem",
        }}
      >
        hover a card to expand
      </p>

      <div
        style={{
          maxWidth: 860,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.75rem",
        }}
        className="projects-grid"
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* View all */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ textAlign: "center", marginTop: "2.5rem" }}
      >
        <Link to="/all-projects" className="btn-outline">
          <ArrowUpRight size={14} />
          View All Projects
        </Link>
      </motion.div> */}

      <style>{`
        @media (max-width: 900px) {
          #projects { padding: 4rem 1.5rem !important; }
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
