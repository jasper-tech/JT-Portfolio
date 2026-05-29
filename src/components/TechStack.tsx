import { FC, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Tech {
  name: string;
  logo: string;
  invertInDark?: boolean;
}

const technologies: Tech[] = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invertInDark: true,
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

/* ── Single tech card ── */
interface TechCardProps {
  tech: Tech;
  index: number;
}

const TechCard: FC<TechCardProps> = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6, borderColor: "rgba(0,255,136,0.6)" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "1.5rem 1rem",
        background: "var(--panel)",
        border: "1px solid rgba(0,255,136,0.2)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.3s",
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          top: 6,
          right: 6,
          width: 6,
          height: 6,
          borderTop: "1px solid var(--green)",
          borderRight: "1px solid var(--green)",
        }}
      />

      {/* Bottom sweep on hover — using pseudo via a child element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--green)",
          transformOrigin: "left",
        }}
      />

      <img
        src={tech.logo}
        alt={`${tech.name} logo`}
        style={{
          width: 42,
          height: 42,
          filter: tech.invertInDark
            ? "invert(1) brightness(0.7) sepia(1) hue-rotate(90deg) saturate(3)"
            : undefined,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--ivory-muted)",
        }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
};

/* ── TechStack section ── */
const TechStack: FC = () => {
  return (
    <section
      id="tech"
      style={{
        padding: "6rem 3rem",
        background: "var(--bg2)",
        borderTop: "1px solid rgba(0,255,136,0.2)",
        borderBottom: "1px solid rgba(0,255,136,0.2)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section header */}
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Technologies</div>
        <h2 className="sec-title">My Tech Stack</h2>
        <p className="sec-desc">
          Tools and frameworks I wield to build modern, scalable web
          applications
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
        }}
      >
        {technologies.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #tech { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
