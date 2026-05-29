import { FC } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface ResumeItem {
  title: string;
  meta: string;
  desc: string;
}

const experience: ResumeItem[] = [
  {
    title: "Software Developer",
    meta: "XYZ Company · 2022 – Present",
    desc: "Developed full-stack applications using React, Node.js, and MongoDB. Optimized performance and improved UI/UX across multiple product lines.",
  },
];

const education: ResumeItem[] = [
  {
    title: "BSc Computer Engineering",
    meta: "KNUST · 2024",
    desc: "Kwame Nkrumah University of Science and Technology. Focused on software systems, algorithms, and computer architecture.",
  },
];

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
];

const ResumeSection: FC<{
  title: string;
  items: ResumeItem[];
  delay?: number;
}> = ({ title, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.16em",
        color: "var(--green)",
        textTransform: "uppercase",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {title}
      <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
    {items.map((item, i) => (
      <div
        key={i}
        style={{
          marginBottom: "1.5rem",
          position: "relative",
          paddingLeft: "1rem",
        }}
      >
        {/* Diamond bullet */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 6,
            width: 6,
            height: 6,
            background: "var(--green)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--ivory)",
            letterSpacing: "0.04em",
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--green-dark)",
            letterSpacing: "0.06em",
            margin: "2px 0 6px",
          }}
        >
          {item.meta}
        </div>
        <div
          style={{
            fontSize: "0.88rem",
            color: "var(--ivory-muted)",
            lineHeight: 1.7,
          }}
        >
          {item.desc}
        </div>
      </div>
    ))}
  </motion.div>
);

const CV: FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "/Jasper_CV.pdf";
    link.setAttribute("download", "Jasper_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      style={{
        padding: "8rem 3rem 6rem",
        background: "var(--bg2)",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section header */}
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Background</div>
        <h2 className="sec-title">Resume</h2>
        <p className="sec-desc">
          My professional journey, education, and technical capabilities
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
        className="resume-grid"
      >
        <ResumeSection title="Experience" items={experience} delay={0.1} />
        <ResumeSection title="Education" items={education} delay={0.2} />

        {/* Skills — full width */}
        <motion.div
          style={{ gridColumn: "1 / -1" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "var(--green)",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Skills
            <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  padding: "5px 14px",
                  border: "1px solid var(--border)",
                  color: "var(--green)",
                  background: "var(--green-glow2)",
                  cursor: "default",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--green)";
                  e.currentTarget.style.background = "var(--green-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--green-glow2)";
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Download button */}
        <motion.div
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            marginTop: "1rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button onClick={handleDownload} className="btn-primary">
            <Download size={14} />
            Download Full CV
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resume-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #resume { padding: 7rem 1.5rem 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default CV;
