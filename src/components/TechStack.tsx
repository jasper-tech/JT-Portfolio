import { FC, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Tech {
  name: string;
  logo: string;
  invertInDark?: boolean;
}

const technologies: Tech[] = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
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
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
];

/* ── TechStack section ── */
const TechStack: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="tech"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 3rem",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
        <p className="sec-desc">
          Tools and frameworks I wield to build modern, scalable applications
        </p>
      </motion.div>

      {/* Progress Bar Container */}
      <div
        style={{
          maxWidth: "100%",
          margin: "3rem auto 0",
          position: "relative",
          overflowX: "auto",
          overflowY: "visible",
          paddingTop: "80px", // space for tooltips above the bar
        }}
        className="tech-bar-container"
      >
        {/* Main Progress Bar */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minWidth: "1000px",
            height: "100px",
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: "50px",
            overflow: "visible",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          {/* Animated fill bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "100%",
              background:
                "linear-gradient(90deg, var(--accent-glow2), var(--accent-glow))",
              borderRadius: "50px",
              overflow: "visible",
            }}
          />

          {/* Tech items distributed along the bar */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              padding: "0 1.5rem",
              zIndex: 2,
              overflow: "visible",
            }}
          >
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  zIndex: 9999,
                  overflow: "visible",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip — rendered above the icon */}
                {hoveredIndex === index && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "calc(100% + 12px)",
                      left: "50%",
                      transform:
                        index === 0
                          ? "translateX(-10%)"
                          : index === technologies.length - 1
                          ? "translateX(-90%)"
                          : "translateX(-50%)",
                      background: "var(--panel)",
                      border: "2px solid var(--accent)",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      whiteSpace: "nowrap",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      letterSpacing: "0.08em",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      pointerEvents: "none",
                      zIndex: 10000,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {tech.name}
                  </div>
                )}

                {/* Icon circle marker */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: `2px solid ${
                      hoveredIndex === index ? "var(--accent)" : "var(--border)"
                    }`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 0 25px var(--accent-glow)`
                        : "none",
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: tech.invertInDark
                        ? "invert(1) brightness(0.7) sepia(1) hue-rotate(90deg) saturate(3)"
                        : undefined,
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #tech { 
            padding: 4rem 1.5rem !important;
            min-height: 100vh;
          }
          
          .tech-bar-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 30px;
          }
          
          .tech-bar-container::-webkit-scrollbar {
            height: 4px;
          }
          
          .tech-bar-container::-webkit-scrollbar-track {
            background: var(--border);
            border-radius: 4px;
          }
          
          .tech-bar-container::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 4px;
          }
        }
        
        @media (max-width: 640px) {
          .tech-bar-container > div {
            min-width: 1000px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
