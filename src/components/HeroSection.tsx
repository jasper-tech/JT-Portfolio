import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, MessageCircle } from "lucide-react";

/* ── Typing cursor ── */
const Cursor: FC = () => (
  <span
    style={{
      display: "inline-block",
      width: "3px",
      height: "1em",
      background: "var(--green)",
      marginLeft: "4px",
      verticalAlign: "text-bottom",
      animation: "cursor-blink 1s step-end infinite",
    }}
  />
);

/* ── Animated hexagon avatar ── */
const HeroAvatar: FC = () => (
  <div
    style={{
      position: "relative",
      width: 320,
      height: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Outer spinning ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        border: "1px solid rgba(0,255,136,0.15)",
        borderTopColor: "var(--green)",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
      }}
    />
    {/* Inner spinning ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        width: 260,
        height: 260,
        borderRadius: "50%",
        border: "1px solid rgba(0,255,136,0.1)",
        borderBottomColor: "var(--green-dim)",
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
      }}
    />

    {/* Corner dots */}
    {[
      { top: "10%", left: "18%", delay: 0 },
      { top: "10%", right: "18%", delay: 0.5 },
      { bottom: "10%", left: "18%", delay: 1 },
      { bottom: "10%", right: "18%", delay: 1.5 },
    ].map((pos, i) => (
      <motion.div
        key={i}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: pos.delay }}
        style={{
          position: "absolute",
          ...pos,
          width: 6,
          height: 6,
          background: "var(--green)",
          borderRadius: "50%",
          boxShadow: "0 0 8px var(--green)",
        }}
      />
    ))}

    {/* Hex avatar */}
    <div
      style={{
        width: 200,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d1410, #0e1510)",
        clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        boxShadow:
          "0 0 40px rgba(0,255,136,0.15), inset 0 0 40px rgba(0,255,136,0.04)",
        border: "2px solid var(--green)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.8rem",
          fontWeight: 900,
          color: "var(--green)",
          letterSpacing: "0.06em",
          textShadow: "0 0 20px rgba(0,255,136,0.6)",
        }}
      >
        SA
      </span>
    </div>

    {/* Status badge */}
    <div
      style={{
        position: "absolute",
        bottom: 24,
        right: -10,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "var(--panel)",
        border: "1px solid rgba(0,255,136,0.2)",
        padding: "6px 14px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--green)",
        zIndex: 2,
      }}
    >
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          width: 7,
          height: 7,
          background: "var(--green)",
          borderRadius: "50%",
          boxShadow: "0 0 6px var(--green)",
        }}
      />
      ONLINE
    </div>
  </div>
);

/* ── Stat item ── */
const Stat: FC<{ num: string; label: string }> = ({ num, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.8rem",
        fontWeight: 700,
        color: "var(--green)",
        letterSpacing: "0.06em",
      }}
    >
      {num}
    </span>
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        letterSpacing: "0.1em",
        color: "var(--ivory-muted)",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  </div>
);

/* ── Hero ── */
const Hero: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 3rem 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--green)",
              border: "1px solid rgba(0,255,136,0.2)",
              padding: "4px 14px",
              marginBottom: "1.5rem",
              letterSpacing: "0.12em",
              background: "rgba(0,255,136,0.06)",
            }}
          >
            ▸ AVAILABLE FOR WORK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              marginBottom: "0.5rem",
              color: "var(--ivory)",
            }}
          >
            Hi, I'm
            <br />
            <span
              style={{
                color: "var(--green)",
                textShadow: "0 0 30px rgba(0,255,136,0.4)",
              }}
            >
              Sandy Afeawo
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--green-dim)",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
            }}
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          >
            full-stack developer & network engineer
            <Cursor />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              color: "var(--ivory-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: "2.5rem",
            }}
          >
            Building elegant software and designing resilient networks.
            Full-Stack Developer & Network Engineer passionate about crafting
            impactful applications and robust network infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Link to="/cv" className="btn-primary">
              <FileText size={14} />
              View Resume
            </Link>
            <Link to="/contact" className="btn-outline">
              <MessageCircle size={14} />
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            <Stat num="3+" label="Years Coding" />
            <Stat num="10+" label="Projects Built" />
            <Stat num="6+" label="Technologies" />
          </motion.div>
        </div>

        {/* Right column — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-avatar-col"
        >
          <HeroAvatar />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar-col { display: none !important; }
          #hero { padding: 7rem 1.5rem 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
