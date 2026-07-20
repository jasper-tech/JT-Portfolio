import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Invalid email format";
  if (!values.message.trim()) errors.message = "Message is required";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters";
  return errors;
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  color: "var(--ivory)",
  fontFamily: "var(--font-ui)",
  fontSize: "0.95rem",
  padding: "10px 14px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const ContactMe: FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((err) => ({ ...err, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);
    setSendError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setValues({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setSendError(true);
      setTimeout(() => setSendError(false), 5000);
    } finally {
      setSending(false);
    }
  };

  const fields: {
    id: keyof FormValues;
    label: string;
    type?: string;
    multiline?: boolean;
    placeholder: string;
  }[] = [
    { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    {
      id: "email",
      label: "Your Email Address",
      type: "email",
      placeholder: "hello@example.com",
    },
    {
      id: "message",
      label: "Message",
      multiline: true,
      placeholder: "Tell me about your project...",
    },
  ];

  const contacts = [
    {
      href: "mailto:sandyafeawo123@gmail.com",
      icon: <Mail size={16} />,
      label: "sandyafeawo123@gmail.com",
    },
    {
      href: "https://github.com/jasper-tech",
      icon: <Github size={16} />,
      label: "github.com/jasper-tech",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/in/afeawo-sandy-298235215/",
      icon: <Linkedin size={16} />,
      label: "LinkedIn",
      target: "_blank",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 3rem 6rem",
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Section header */}
      <motion.div
        className="sec-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">Reach Out</div>
        <h2 className="sec-title">Contact Me</h2>
        <p className="sec-desc">
          Have a project or want to say hi? I'd love to hear from you.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ maxWidth: 700, margin: "0 auto", width: "100%" }}
      >
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            padding: "2.5rem",
            position: "relative",
          }}
        >
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 40,
              height: 40,
              borderTop: "2px solid var(--green)",
              borderLeft: "2px solid var(--green)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 40,
              height: 40,
              borderBottom: "2px solid var(--green)",
              borderRight: "2px solid var(--green)",
            }}
          />

          {fields.map(({ id, label, type, multiline, placeholder }) => (
            <div key={id} style={{ marginBottom: "1.25rem" }}>
              <label
                htmlFor={id}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  color: "var(--green)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {label}
              </label>
              {multiline ? (
                <textarea
                  id={id}
                  name={id}
                  value={values[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  rows={5}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 130,
                    borderColor:
                      focused === id
                        ? "var(--green)"
                        : errors[id]
                        ? "rgba(255,80,80,0.6)"
                        : "var(--border)",
                    boxShadow:
                      focused === id ? "0 0 0 2px var(--green-glow)" : "none",
                  }}
                />
              ) : (
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={values[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  onFocus={() => setFocused(id)}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle,
                    borderColor:
                      focused === id
                        ? "var(--green)"
                        : errors[id]
                        ? "rgba(255,80,80,0.6)"
                        : "var(--border)",
                    boxShadow:
                      focused === id ? "0 0 0 2px var(--green-glow)" : "none",
                  }}
                />
              )}
              {errors[id] && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "rgba(255,100,100,0.9)",
                    marginTop: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  ✕ {errors[id]}
                </p>
              )}
            </div>
          ))}

          <motion.button
            onClick={handleSubmit}
            disabled={sending}
            whileHover={
              !sending
                ? { boxShadow: "0 0 30px rgba(0,255,136,0.4)", y: -2 }
                : {}
            }
            whileTap={!sending ? { scale: 0.98 } : {}}
            style={{
              width: "100%",
              marginTop: "0.5rem",
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: 14,
              background: sending ? "rgba(0,255,136,0.4)" : "var(--green)",
              color: "#000000",
              border: "none",
              cursor: sending ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              transition: "background 0.2s",
            }}
          >
            <Send size={16} />
            {sending ? "Sending..." : "Send Message"}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--green)",
                padding: "1rem",
                border: "1px solid var(--border)",
                marginTop: "1rem",
                background: "var(--green-glow2)",
                letterSpacing: "0.06em",
              }}
            >
              ✓ Message transmitted. I'll get back to you soon.
            </motion.div>
          )}

          {sendError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "rgba(255,100,100,0.9)",
                padding: "1rem",
                border: "1px solid rgba(255,80,80,0.3)",
                marginTop: "1rem",
                background: "rgba(255,80,80,0.06)",
                letterSpacing: "0.06em",
              }}
            >
              ✕ Something went wrong. Please try again.
            </motion.div>
          )}
        </div>

        {/* Contact links */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {contacts.map(({ href, icon, label, target }) => (
            <a
              key={href}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--ivory-muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--green)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--ivory-muted)")
              }
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 7rem 1.5rem 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default ContactMe;
