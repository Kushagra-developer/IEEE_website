import { useEffect, useRef } from "react";
import bg from "../assets/home-bg.jpeg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import ieeeLogo from "../assets/ieee-logo.png";
import srmLogo from "../assets/srm-logo.png";
import hackcelr8Logo from "../assets/hackcelr8-logo.jpeg";

function Countdown({ target = "2025-09-15T09:00:00+05:30" }) {
  const tRef = useRef({ d: 0, h: 0, m: 0, s: 0 });
  const [, force] = useStateToggle();

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      tRef.current = { d, h, m, s };
      force();
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, force]);

  const { d, h, m, s } = tRef.current;
  return (
    <div className="countdown">
      <span>{d}d</span><b>:</b>
      <span>{h}h</span><b>:</b>
      <span>{m}m</span><b>:</b>
      <span>{s}s</span>
    </div>
  );
}

function useStateToggle() {
  const ref = useRef(0);
  return [ref.current, () => (ref.current ^= 1)];
}

export default function Home() {
  const btnWrapRef = useRef(null);

  useEffect(() => {
    const el = btnWrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="page" style={{ "--bg-url": `url(${bg})` }}>
      <div className="container hero-center hero-spotlight">

        <div className="spark-field">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="spark" />
          ))}
        </div>

        <motion.div
          className="inline-logo-row"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ieeeLogo} alt="IEEE Logo" className="side-logo" />
          <div className="main-logo-wrap">
            <img src={hackcelr8Logo} alt="HackcelR8 Logo" className="main-logo" />
          </div>
          <img src={srmLogo} alt="SRM Logo" className="side-logo" />
        </motion.div>

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

        <motion.p
          className="hero-paragraph"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          This is not just a hackathon — it’s a 24-hour battleground where ideas are pushed
          to their breaking point and creativity thrives under pressure. <br /><br />
          Teams come together to brainstorm, build, and break limits, competing against time
          and against themselves. It’s about sleepless nights, relentless debugging,
          spontaneous breakthroughs, and the thrill of seeing your vision come alive. <br />
          At Hackeler8, it’s not just about winning — it’s about learning, creating, and
          being part of something unforgettable.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div ref={btnWrapRef} className="magnet-wrap">
            <a
              className="btn btn-xl btn-shine"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYpWvrie6lQMbF35Ijm9E3xjAf8yxYeym1mH2viUAZ-JBpZg/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
          </div>
        </motion.div>

        <div style={{ marginTop: 14 }}>
          <Countdown target="2025-09-15T09:00:00+05:30" />
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="marquee-item" key={i}>SPONSOR</div>
            ))}
          </div>
        </div>

        <motion.div
          className="social-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="https://www.instagram.com/ieee_srmist_ssit"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaInstagram size={34} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/ieee-srmist-ssit/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaLinkedin size={34} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
