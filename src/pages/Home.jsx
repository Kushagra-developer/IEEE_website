import bg from "../assets/home-bg.jpeg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="page" style={{ "--bg-url": `url(${bg})` }}>
      <div className="container hero-center hero-spotlight">
        
        <motion.h1 
          className="title title-glow"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hackeler8
        </motion.h1>

        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          “Hack hard, crash harder.”
        </motion.p>

        <div className="divider"></div>
        <div className="badge badge-pulse">Applications Open</div>

        {/* Animated paragraph */}
        <motion.p 
          className="hero-paragraph"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          This is not just a hackathon — it’s a 24-hour battleground where ideas are pushed
          to their breaking point and creativity thrives under pressure. <br /><br />
          Teams come together to brainstorm, build, and break limits, competing against time
          and against themselves.
          It’s about sleepless nights, relentless debugging, spontaneous breakthroughs, and
          the thrill of seeing your vision come alive.<br />
          At Hackeler8, it’s not just about winning — it’s about learning, creating, and
          being part of something unforgettable.
        </motion.p>

        {/* Glowing CTA */}
        <motion.div 
          className="hero-actions"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
<a
  className="btn btn-xl btn-shine"
  href="https://docs.google.com/forms/d/e/1FAIpQLSdYpWvrie6lQMbF35Ijm9E3xjAf8yxYeym1mH2viUAZ-JBpZg/viewform?usp=header"
  target="_blank"
  rel="noreferrer"
>
  Register Now
</a>        </motion.div>

        {/* Floating social icons */}
        <motion.div 
          className="social-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a 
            href="https://www.instagram.com/ieee_srmist_ssit" target="_blank" rel="noreferrer" aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaInstagram size={34} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/company/ieee-srmist-ssit/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaLinkedin size={34} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}