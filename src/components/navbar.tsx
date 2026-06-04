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
      const timer = setTimeout(() => {
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
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
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
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
          background: scrolled
            ? "rgba(var(--bg-rgb), 0.95)"
            : "rgba(var(--bg-rgb), 0.6)",
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
            color: "var(--accent)",
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
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
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
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
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
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "6px 18px",
                background: "transparent",
                color: "var(--accent)",
                border: "1.5px solid var(--accent)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s ease",
                borderRadius: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
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
            color: "var(--accent)",
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
              background: "var(--bg)",
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
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
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
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px",
                background: "var(--accent)",
                color: "white",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                marginTop: "0.5rem",
                borderRadius: "6px",
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
