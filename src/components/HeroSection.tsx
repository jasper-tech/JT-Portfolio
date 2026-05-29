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
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 120 }}
      style={{
        width: 200,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0d1a12 0%, #0a1010 100%)",
        clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        boxShadow:
          "0 0 40px rgba(0,255,136,0.15), inset 0 0 40px rgba(0,255,136,0.04)",
        border: "2px solid var(--green)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Illustrated avatar SVG */}
      <svg
        viewBox="0 0 200 220"
        width="160"
        height="176"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* ── glow behind head ── */}
        <radialGradient id="headGlow" cx="50%" cy="48%" r="42%">
          <stop offset="0%" stopColor="#00ff88" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="100" cy="96" rx="56" ry="60" fill="url(#headGlow)" />

        {/* ── neck ── */}
        <rect x="85" y="148" width="30" height="22" rx="4" fill="#1a2e20" />

        {/* ── shoulders / body (teaser) ── */}
        <path
          d="M40 200 Q40 165 70 158 L85 154 Q100 160 115 154 L130 158 Q160 165 160 200Z"
          fill="#0f2218"
          stroke="#00ff88"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        {/* collar detail */}
        <path
          d="M85 156 Q100 168 115 156"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* ── head base ── */}
        <ellipse cx="100" cy="96" rx="52" ry="56" fill="#1c3028" />
        {/* subtle skin shading gradient */}
        <defs>
          <radialGradient id="skinGrad" cx="42%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#2a4535" />
            <stop offset="100%" stopColor="#162818" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="96" rx="52" ry="56" fill="url(#skinGrad)" />

        {/* ── head outline glow ── */}
        <ellipse
          cx="100"
          cy="96"
          rx="52"
          ry="56"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1.4"
          strokeOpacity="0.5"
        />

        {/* ── ear left ── */}
        <ellipse
          cx="48"
          cy="97"
          rx="7"
          ry="9"
          fill="#1c3028"
          stroke="#00ff88"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M52 93 Q55 97 52 101"
          fill="none"
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* ── ear right ── */}
        <ellipse
          cx="152"
          cy="97"
          rx="7"
          ry="9"
          fill="#1c3028"
          stroke="#00ff88"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M148 93 Q145 97 148 101"
          fill="none"
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* ── hair ── */}
        <path
          d="M52 72 Q54 44 100 40 Q146 44 148 72 Q138 52 100 50 Q62 52 52 72Z"
          fill="#0a1a0f"
        />
        {/* hairline fade */}
        <path
          d="M56 68 Q58 48 100 44 Q142 48 144 68"
          fill="none"
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.25"
        />

        {/* ── eyebrows ── */}
        <path
          d="M72 78 Q82 74 90 77"
          stroke="#00cc6a"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M110 77 Q118 74 128 78"
          stroke="#00cc6a"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── eyes — with animated blink via CSS ── */}
        {/* left eye white */}
        <ellipse cx="81" cy="92" rx="10" ry="9" fill="#d4ede0" />
        {/* left iris */}
        <ellipse cx="81" cy="93" rx="6" ry="6.5" fill="#00994f" />
        {/* left pupil */}
        <ellipse cx="81" cy="93" rx="3" ry="3.5" fill="#021008" />
        {/* left eye shine */}
        <ellipse
          cx="83.5"
          cy="90.5"
          rx="1.8"
          ry="1.4"
          fill="white"
          opacity="0.85"
        />
        {/* left eyelid outline */}
        <ellipse
          cx="81"
          cy="92"
          rx="10"
          ry="9"
          fill="none"
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* right eye white */}
        <ellipse cx="119" cy="92" rx="10" ry="9" fill="#d4ede0" />
        {/* right iris */}
        <ellipse cx="119" cy="93" rx="6" ry="6.5" fill="#00994f" />
        {/* right pupil */}
        <ellipse cx="119" cy="93" rx="3" ry="3.5" fill="#021008" />
        {/* right eye shine */}
        <ellipse
          cx="121.5"
          cy="90.5"
          rx="1.8"
          ry="1.4"
          fill="white"
          opacity="0.85"
        />
        {/* right eyelid outline */}
        <ellipse
          cx="119"
          cy="92"
          rx="10"
          ry="9"
          fill="none"
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />

        {/* ── nose ── */}
        <path
          d="M97 103 Q100 115 103 103"
          fill="none"
          stroke="#00994f"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <ellipse
          cx="95"
          cy="114"
          rx="4"
          ry="2.2"
          fill="#00994f"
          opacity="0.25"
        />
        <ellipse
          cx="105"
          cy="114"
          rx="4"
          ry="2.2"
          fill="#00994f"
          opacity="0.25"
        />

        {/* ── smile ── */}
        {/* teeth base */}
        <path
          d="M82 126 Q100 140 118 126"
          fill="none"
          stroke="#00ff88"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.15"
        />
        {/* lips outline */}
        <path
          d="M80 124 Q90 122 100 123 Q110 122 120 124 Q110 138 100 140 Q90 138 80 124Z"
          fill="#0d2018"
          stroke="#00cc6a"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        {/* upper lip bow */}
        <path
          d="M80 124 Q90 120 100 123 Q110 120 120 124"
          fill="none"
          stroke="#00cc6a"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        {/* teeth */}
        <path
          d="M84 126 Q100 127 116 126 Q110 136 100 137 Q90 136 84 126Z"
          fill="#c8ffe0"
          opacity="0.9"
        />
        {/* tooth divider lines */}
        <line
          x1="100"
          y1="126.5"
          x2="100"
          y2="136"
          stroke="#0d2018"
          strokeWidth="0.7"
          opacity="0.5"
        />
        <line
          x1="91"
          y1="126.5"
          x2="91.5"
          y2="134"
          stroke="#0d2018"
          strokeWidth="0.7"
          opacity="0.4"
        />
        <line
          x1="109"
          y1="126.5"
          x2="108.5"
          y2="134"
          stroke="#0d2018"
          strokeWidth="0.7"
          opacity="0.4"
        />
        {/* smile cheek dimples */}
        <ellipse cx="76" cy="122" rx="5" ry="3" fill="#00ff88" opacity="0.1" />
        <ellipse cx="124" cy="122" rx="5" ry="3" fill="#00ff88" opacity="0.1" />

        {/* ── tech HUD overlay — scan line across face ── */}
        <rect
          x="48"
          y="88"
          width="104"
          height="1.5"
          fill="#00ff88"
          opacity="0.06"
        />
        <rect
          x="48"
          y="110"
          width="104"
          height="1"
          fill="#00ff88"
          opacity="0.04"
        />

        {/* ── corner bracket accents (hex frame echo) ── */}
        <path
          d="M56 58 L56 50 L64 50"
          stroke="#00ff88"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.5"
        />
        <path
          d="M144 58 L144 50 L136 50"
          stroke="#00ff88"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.5"
        />
      </svg>
    </motion.div>

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
            // full-stack software developer
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
            Building elegant solutions to complex problems with modern
            technologies. Problem Solver &amp; Tech Enthusiast passionate about
            creating impactful applications that make a real difference.
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
