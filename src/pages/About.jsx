import bg from "../assets/About-bg.png";
import { motion } from "framer-motion";

const EVENT = {
  name: "Hackeler8",
  date: "September 15, 2025",
  time: "9:00 AM IST",
  venue: "SRM IST, Kattankulathur",
  hall: "Mini Hall 1",
  teamSize: "2–4 Members",
  hackDuration: "24 Hours",
  prize: "Coming Soon...",
};

// animation variants (same vibe as Home)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <section className="page" style={{ "--bg-url": `url(${bg})` }}>
      <motion.div
        className="container about-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="title" variants={fadeDown}>
          {EVENT.name}
        </motion.h1>

        <motion.div
          className="divider"
          initial={{ scaleX: 0, opacity: 0.6 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "center" }}
        />

        <motion.p className="about-description" variants={fadeUp}>
          Hackeler8 is more than just a hackathon — it’s a 24-hour celebration of ideas,
          creativity, and collaboration. Over one intense day, teams of students and innovators
          will come together to brainstorm, build, and bring their boldest projects to life.  
          <br /><br />
          With caffeine flowing and adrenaline pumping, participants will code through the night,
          overcome challenges, and showcase their creations in front of an esteemed panel of judges.  
          <br /><br />
          Whether you’re here to learn, compete, or network, Hackeler8 is your chance to push
          boundaries, solve real-world problems, and be part of a community that thrives on innovation.
        </motion.p>

        <motion.div
          style={{
            marginTop: 28,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
          }}
          variants={container}
        >
          {/* each card fades up with the container’s stagger */}
          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Date</div>
            <div style={valueStyle}>{EVENT.date}</div>
          </motion.div>

          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Time</div>
            <div style={valueStyle}>{EVENT.time}</div>
          </motion.div>

          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Venue</div>
            <div style={valueStyle}>{EVENT.venue}</div>
          </motion.div>

          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Hall</div>
            <div style={valueStyle}>{EVENT.hall}</div>
          </motion.div>

          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Team Size</div>
            <div style={valueStyle}>{EVENT.teamSize}</div>
          </motion.div>

          <motion.div style={cardStyle} variants={fadeUp}>
            <div style={labelStyle}>Hack Duration</div>
            <div style={valueStyle}>{EVENT.hackDuration}</div>
          </motion.div>

          {/* Prize Pool centered (spans 2 cols, width capped, centered) */}
          <motion.div
            style={{ ...cardStyle, gridColumn: "span 2", maxWidth: "400px", margin: "0 auto" }}
            variants={fadeUp}
          >
            <div style={labelStyle}>Prize Pool</div>
            <div style={valueStyle}>{EVENT.prize}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const cardStyle = {
  background: "rgba(0,0,0,.35)",
  border: "1px solid rgba(255,255,255,.14)",
  borderRadius: 14,
  padding: 16,
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,.25)",
};
const labelStyle = { opacity: 0.8, fontSize: 14, marginBottom: 4 };
const valueStyle = { fontSize: 18, fontWeight: 500 };