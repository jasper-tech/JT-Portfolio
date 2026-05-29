import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import Hero from "../components/HeroSection";
import TechStack from "../components/TechStack";
import Projects from "../components/ProjectSection";
import Footer from "../components/footer";

const HomePage: FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--ivory)",
      }}
    >
      <Hero />
      <TechStack />
      <Projects />

      {/* ── CTA Banner ── */}
      <section
        id="cta"
        style={{
          padding: "5rem 3rem",
          background: "var(--bg3)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="sec-label" style={{ marginBottom: "1rem" }}>
            Let's Build
          </div>
          <h2 className="sec-title" style={{ marginBottom: "1rem" }}>
            Ready to build something great?
          </h2>
          <p className="sec-desc" style={{ marginBottom: "2rem" }}>
            I'm always open to new opportunities and exciting collaborations.
            Let's connect and bring your ideas to life.
          </p>
          <Link to="/contact" className="btn-primary">
            <Zap size={14} />
            Start a Conversation
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
