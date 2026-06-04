import { FC, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

/* ── Typing cursor ── */
const Cursor: FC = () => (
  <span
    style={{
      display: "inline-block",
      width: "3px",
      height: "1em",
      background: "var(--accent)",
      marginLeft: "4px",
      verticalAlign: "text-bottom",
      animation: "cursor-blink 1s step-end infinite",
    }}
  />
);

/* ── Hero ── */
const Hero: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [nextSectionId, setNextSectionId] = useState<string>("tech");
  const isScrolling = useRef(false);

  const scrollToNextSection = () => {
    if (isScrolling.current) return;

    if (isAtBottom) {
      isScrolling.current = true;
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
      return;
    }

    const sectionOrder = ["hero", "tech", "projects", "resume", "contact"];
    const targetId = nextSectionId;
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      isScrolling.current = true;
      targetEl.scrollIntoView({ behavior: "smooth" });

      // After scroll, pre-calculate the next section
      const currentIndex = sectionOrder.indexOf(targetId);
      if (currentIndex !== -1 && currentIndex < sectionOrder.length - 1) {
        setTimeout(() => {
          setNextSectionId(sectionOrder[currentIndex + 1]);
          isScrolling.current = false;
        }, 800);
      } else {
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    }
  };

  useEffect(() => {
    const sectionOrder = ["hero", "tech", "projects", "resume", "contact"];

    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Find the current visible section
      let currentSection = "hero";
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = id;
            break;
          }
        }
      }

      // Set next section based on current
      const currentIndex = sectionOrder.indexOf(currentSection);
      if (currentIndex !== -1 && currentIndex < sectionOrder.length - 1) {
        setNextSectionId(sectionOrder[currentIndex + 1]);
      } else if (currentIndex === sectionOrder.length - 1) {
        setNextSectionId("hero");
      }

      // Check if near bottom
      if (scrollPosition >= bodyHeight - 150) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNextSectionName = () => {
    const sectionNames: Record<string, string> = {
      hero: "Work",
      tech: "Stack",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    };
    return sectionNames[nextSectionId] || "Scroll";
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <div className="hero-content">
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
              color: "var(--text-primary)",
            }}
          >
            Hi, I'm
            <br />
            <span
              style={{
                color: "var(--text-primary)",
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
              color: "var(--accent-dim)",
              letterSpacing: "0.08em",
              marginBottom: "2rem",
            }}
          >
            full-stack software developer
            <Cursor />
          </motion.div>

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
            className="hero-buttons"
          >
            <Link to="/cv" className="btn-primary">
              <FileText size={14} />
              <span>View Resume</span>
            </Link>
            <Link to="/contact" className="btn-outline">
              <MessageCircle size={14} />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </div>

        {/* Right column — image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0],
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-image-col"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 320,
              height: 420,
            }}
          >
            {/* Tilted frame */}
            <div
              className="hero-tilted-frame"
              style={{
                position: "absolute",
                inset: 0,
                border: "3px solid var(--accent)",
                borderRadius: "24px",
                transform: "rotate(-8deg)",
                background: "var(--bg)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            />

            {/* Main card */}
            <div
              className="hero-main-card"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.18), 0 0 30px var(--accent-glow)",
                transform: "translateY(-10px)",
              }}
            >
              <img
                src="/my-pic.jpg"
                alt="Sandy Afeawo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  background: "var(--bg)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {isAtBottom ? "Top" : getNextSectionName()}
          </span>
          {isAtBottom ? (
            <ChevronUp
              size={24}
              style={{
                color: "var(--accent)",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
            />
          ) : (
            <ChevronDown
              size={24}
              style={{
                color: "var(--accent)",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
            />
          )}
        </motion.div>
      </motion.div>

      <style>{`
        /* ── MOBILE: stack image above text ── */
        @media (max-width: 900px) {
          #hero {
            padding: 5rem 1.5rem 5rem !important;
            min-height: 100vh;
            align-items: flex-start !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            /* image first (row 1), content second (row 2) */
          }

          /* Put image column first visually */
          .hero-image-col {
            order: -1;
          }

          /* Reset any absolute/overlay positioning */
          .hero-content {
            position: static !important;
            background: none !important;
            backdrop-filter: none !important;
            padding: 0 !important;
            border-radius: 0 !important;
            text-align: left;
            z-index: auto !important;
          }

          /* Image column: natural flow, centered */
          .hero-image-col {
            position: static !important;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          /* Keep the same decorative border style as desktop */
          .hero-image-col > div {
            position: relative !important;
            width: 100% !important;
            max-width: 280px !important;
            height: 340px !important;
          }

          /* Keep the tilted accent frame */
          .hero-tilted-frame {
            position: absolute !important;
            inset: 0 !important;
            border: 3px solid var(--accent) !important;
            border-radius: 24px !important;
            transform: rotate(-8deg) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
          }

          /* Keep the main card border/shadow */
          .hero-main-card {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
            border-radius: 24px !important;
            overflow: hidden !important;
            border: 1px solid var(--border) !important;
            box-shadow: 0 25px 50px rgba(0,0,0,0.18), 0 0 30px var(--accent-glow) !important;
            transform: translateY(-10px) !important;
          }

          /* Buttons stay inline below text */
          .hero-buttons {
            position: static !important;
            flex-direction: row !important;
            flex-wrap: wrap;
            margin-bottom: 0;
          }

          .hero-buttons a {
            width: auto !important;
            height: auto !important;
            padding: 0.6rem 1.2rem !important;
            border-radius: 8px !important;
          }

          .hero-buttons a span {
            display: inline !important;
          }
        }

        @media (max-width: 640px) {
          #hero {
            padding: 4.5rem 1rem 4rem !important;
          }

          .hero-image-col > div {
            max-width: 220px !important;
            height: 270px !important;
          }

          .hero-content h1 {
            font-size: 1.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
