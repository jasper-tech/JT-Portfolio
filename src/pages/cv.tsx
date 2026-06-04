import { FC } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CV: FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = "/Sandy_Afeawo_CV.pdf";
    link.setAttribute("download", "Sandy_Afeawo_CV.pdf");
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button onClick={handleDownload} className="btn-primary">
          <Download size={14} />
          Download Full CV
        </button>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #resume { padding: 7rem 1.5rem 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default CV;
