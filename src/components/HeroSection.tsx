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

  const scrollToNextSection = () => {
    if (isAtBottom) {
      // Scroll back to hero
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      const nextSection = document.getElementById(nextSectionId);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footer = document.querySelector("footer");
      const bodyHeight = document.body.scrollHeight;

      // Determine which section to scroll to next based on current position
      const sections = [
        { id: "hero", element: document.getElementById("hero") },
        { id: "tech", element: document.getElementById("tech") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "resume", element: document.getElementById("resume") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      // Find the current visible section
      let currentSection = "hero";
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Set next section based on current section
      const sectionOrder = ["hero", "tech", "projects", "resume", "contact"];
      const currentIndex = sectionOrder.indexOf(currentSection);
      if (currentIndex !== -1 && currentIndex < sectionOrder.length - 1) {
        setNextSectionId(sectionOrder[currentIndex + 1]);
      } else if (currentIndex === sectionOrder.length - 1) {
        setNextSectionId("hero");
      }

      // Check if we're near the footer
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= bodyHeight - 150) {
          setIsAtBottom(true);
        } else {
          setIsAtBottom(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to get next section name for display
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

        {/* Right column — Your image */}
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
        @media (max-width: 900px) {
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            gap: 0 !important;
            position: relative;
          }
          
          #hero { 
            padding: 0 !important;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
          }
          
          /* Hero content overlays on bottom of image */
          .hero-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
            background: linear-gradient(to top, rgba(var(--bg-rgb), 0.95) 0%, rgba(var(--bg-rgb), 0.85) 60%, transparent 100%);
            backdrop-filter: blur(8px);
            padding: 2rem 1.5rem 1.5rem;
            border-radius: 24px 24px 0 0;
            text-align: center;
            margin: 0;
          }
          
          .hero-image-col {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
          
          .hero-image-col > div {
            width: 100%;
            max-width: none;
            height: 100%;
            border-radius: 0;
            border: none;
            box-shadow: none;
          }
          
          .hero-image-col > div > div {
            transform: none !important;
            border-radius: 0;
            margin: 0;
            width: 100%;
            height: 100%;
          }
          
          .hero-image-col img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          
          /* Circle buttons on the left side */
          .hero-buttons {
            position: fixed;
            left: 1rem;
            bottom: 2rem;
            z-index: 100;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-buttons a {
            width: 48px;
            height: 48px;
            padding: 0;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--accent);
            color: white;
            border: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
          
          .hero-buttons a span {
            display: none;
          }
          
          .hero-buttons a svg {
            width: 20px;
            height: 20px;
            margin: 0;
          }
          
          .hero-buttons .btn-outline {
            background: var(--panel);
            color: var(--accent);
            border: 1.5px solid var(--accent);
          }
          
          .hero-buttons .btn-outline:hover {
            background: var(--accent);
            color: white;
          }
          
          .hero-buttons {
            margin-bottom: 0;
          }
        }
        
        @media (max-width: 640px) {
          .hero-content {
            padding: 1.5rem 1rem 1rem;
          }
          
          .hero-content h1 {
            font-size: 1.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-buttons {
            left: 0.75rem;
            bottom: 1.5rem;
          }
          
          .hero-buttons a {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
