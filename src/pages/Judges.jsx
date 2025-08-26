import "./Judges.css";
import bg from "../assets/Tracks.png"; // or .jpeg if that’s your file
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Judges() {
  const cards = Array.from({ length: 4 });

  return (
    <section className="judges-page" style={{ "--bg-url": `url(${bg})` }}>
      {/* transparent BG overlay */}
      <div className="judges-bg" />

      <motion.div
        className="judges-container hero-spotlight-judges"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="judges-title" variants={fadeDown}>
          Judges
        </motion.h1>

        <motion.div
          className="divider"
          variants={fadeUp}
          initial={{ scaleX: 0, opacity: 0.7 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{ transformOrigin: "center" }}
        />

        <motion.p className="judges-intro" variants={fadeUp}>
          Meet the brilliant minds guiding this event. Each judge brings unmatched
          expertise, sharp taste, and a bias for shipping under pressure.
        </motion.p>

        <motion.div className="judges-row" variants={container}>
          {cards.map((_, i) => (
            <motion.article
              className="judge-card"
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="judge-img placeholder"><span>Image</span></div>
              <h2 className="judge-name">Name</h2>
              <p className="judge-desc">Description</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}