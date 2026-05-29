import { FC, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Stack", to: "/#tech" },
  { label: "Projects", to: "/#projects" },
  { label: "Resume", to: "/cv" },
];

const NavBar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After navigating to "/", scroll to the target section
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo && location.pathname === "/") {
      // Small delay to let the page render its sections first
      const timer = setTimeout(() => {
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
        // Clean up the query param without adding a history entry
        navigate("/", { replace: true });
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.slice(2);
    setOpen(false);

    if (location.pathname === "/") {
      // Already on homepage — just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with the section as a query param
      navigate(`/?scrollTo=${id}`);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3rem",
          height: "64px",
          background: scrolled ? "rgba(6,10,7,0.95)" : "rgba(6,10,7,0.6)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--green)",
            letterSpacing: "0.12em",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ animation: "pulse 2s ease-in-out infinite" }}>◈</span>
          Sandy Afeawo
        </Link>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.to}
              onClick={(e) => handleAnchor(e, link.to)}
              whileHover={{ y: -2 }}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ivory-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ivory-muted)")
              }
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              to="/contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "7px 20px",
                background: "transparent",
                color: "var(--green)",
                border: "1px solid var(--green)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--green-glow)";
                e.currentTarget.style.boxShadow = "0 0 20px var(--green-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--green)",
            cursor: "pointer",
            padding: "4px",
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              zIndex: 999,
              background: "rgba(6,10,7,0.98)",
              borderBottom: "1px solid var(--border)",
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleAnchor(e, link.to)}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  color: "var(--ivory-muted)",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "12px",
                background: "var(--green)",
                color: "var(--bg)",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
          nav { padding: 0 1.5rem !important; }
        }
      `}</style>
    </>
  );
};

export default NavBar;
