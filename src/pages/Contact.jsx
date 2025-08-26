import bg from "../assets/judges-bg.jpeg";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
};
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <section className="page" style={{ "--bg-url": `url(${bg})` }}>
      <motion.div className="container" variants={container} initial="hidden" animate="show" style={{ textAlign: "center" }}>
        <motion.h1 className="title" variants={fadeDown}>Contact</motion.h1>

        <motion.div
          className="divider"
          variants={fadeUp}
          initial={{ scaleX: 0, opacity: 0.7 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{ margin: "0 auto", transformOrigin: "center" }}
        />

        {/* Club about blurb */}
        <motion.p
          className="about-description"
          variants={fadeUp}
          style={{ maxWidth: 900, margin: "16px auto 26px", opacity: 0.92 }}
        >
          <strong>SRM IEEE IST Student Branch</strong> is a community of builders, designers, and researchers
          driven by curiosity and craft. We host hands-on workshops, talks, and hackathons—creating a space
          where ideas turn into launches. If you want to learn, ship, and vibe with people who care about
          quality, you’ll fit right in.
        </motion.p>

        {/* Socials */}
        <motion.div variants={fadeUp} className="social-row" style={{ marginTop: 6 }}>
          <a
            href="https://www.instagram.com/ieee_srmist_ssit"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="social-icon"
            title="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/ieee-srmist-ssit/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-icon"
            title="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          className="contact-grid"
          variants={container}
          style={{
            marginTop: 26,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <motion.div variants={fadeUp} className="contact-card">
            <div className="contact-icon"><FaEnvelope size={18} /></div>
            <div>
              <div className="contact-label">Email</div>
              <a className="contact-value" href="mailto:team@hackeler8.dev">studentchapterieee@gmail.com</a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-card">
            <div className="contact-icon"><FaPhoneAlt size={18} /></div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91- 89200 60135</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-card" style={{ gridColumn: "span 2" }}>
            <div className="contact-icon"><FaMapMarkerAlt size={18} /></div>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-card" style={{ gridColumn: "span 2" }}>
            <div className="contact-icon"><FaClock size={18} /></div>
            <div>
              <div className="contact-label">Club Hours</div>
              <div className="contact-value">Weekdays · 10:00 AM – 5:00 PM (IST) · Events as announced</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}