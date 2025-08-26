import bg from "../assets/Sponsor.bg.png";
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

export default function Sponsors() {
  return (
    <section className="page" style={{ "--bg-url": `url(${bg})` }}>
      <motion.div
        className="container"
        style={{ textAlign: "center" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="title" variants={fadeDown}>
          Our Sponsors
        </motion.h1>

        <motion.div
          className="divider"
          variants={fadeUp}
          initial={{ scaleX: 0, opacity: 0.6 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          style={{ margin: "0 auto", transformOrigin: "center" }}
        />

        {/* 📝 Description before logos */}
        <motion.p
          className="sponsor-description"
          variants={fadeUp}
          style={{
            maxWidth: 800,
            margin: "20px auto 40px",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Hackeler8 would not be possible without the incredible support of our sponsors.  
          Their commitment fuels innovation, empowers students, and helps us create an
          environment where bold ideas can turn into real impact.  
          From tech giants to local partners, each sponsor plays a vital role in shaping
          this hackathon into a transformative experience.
        </motion.p>

        <motion.div className="sponsor-grid" variants={container}>
          {[1,2,3,4,5,6,7,8].map(i => (
            <motion.div key={i} className="sponsor-card" variants={fadeUp}>
              Sponsor Logo {i}
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          variants={fadeUp}
          style={{ opacity: 0.85, fontSize: "1.1rem", marginTop: 30 }}
        >
          Sponsors Coming Soon...
        </motion.p>
      </motion.div>
    </section>
  );
}