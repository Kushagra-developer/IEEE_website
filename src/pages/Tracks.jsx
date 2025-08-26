import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Lightbulb, Cpu, Rocket, Menu, X } from "lucide-react";
import "./Tracks.css";
import bg from "../assets/judges-bg.jpeg"; // red theme background image

// gradient map (Tailwind-ish colors → real hex)
const GRADIENTS = {
  sd: ["#34d399", "#14b8a6"],   // green-400 → teal-500
  oi: ["#f59e0b", "#f97316"],   // yellow-400 → orange-500
  aiml: ["#60a5fa", "#6366f1"], // blue-400 → indigo-500
  se: ["#a78bfa", "#ec4899"],   // purple-400 → pink-500
};

// --- Data for Hackathon Tracks ---
const tracks = [
  {
    id: "sd",
    title: "Sustainable Development",
    icon: Leaf,
    description:
      "Innovate for a greener future. Create solutions that address environmental challenges, promote renewable energy, and build sustainable communities. Your code can contribute to a healthier planet for generations to come.",
  },
  {
    id: "oi",
    title: "Open Innovation",
    icon: Lightbulb,
    description:
      "Collaborate, share, and build on open-source technologies. This track is for those who believe in the power of community-driven development. Fork, remix, and contribute to projects that are changing the world.",
  },
  {
    id: "aiml",
    title: "AI/ML",
    icon: Cpu,
    description:
      "Push the boundaries of intelligence. Develop cutting-edge algorithms, create intelligent applications, and explore the potential of machine learning. From neural networks to natural language processing, the future of AI is in your hands.",
  },
  {
    id: "se",
    title: "Space Exploration",
    icon: Rocket,
    description:
      "Reach for the stars. Design technologies for the final frontier. Work on projects related to satellite communication, rover navigation, data visualization from space telescopes, or even conceptualize life on other planets.",
  },
];

// helpers
const getGrad = (id) => {
  const [start, end] = GRADIENTS[id] || ["#ffffff", "#bbbbbb"];
  return { "--grad-start": start, "--grad-end": end };
};

// --- Reusable Track Page Component ---
const TrackPage = ({ track }) => {
  const Icon = track.icon;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      key={track.id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="track-page"
    >
      <motion.div
        variants={itemVariants}
        className="track-icon"
        style={getGrad(track.id)}
      >
        <Icon className="icon-svg" />
      </motion.div>

      <motion.h1 variants={itemVariants} className="track-title">
        {track.title}
      </motion.h1>

      <motion.p variants={itemVariants} className="track-desc">
        {track.description}
      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="track-btn"
        style={getGrad(track.id)}
      >
        Explore Track
      </motion.button>
    </motion.div>
  );
};

// --- Navigation Component ---
const Navigation = ({ activeTrack, setActiveTrack, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="tracks-nav-desktop">
        {tracks.map((track) => (
          <button
            key={track.id}
            onClick={() => setActiveTrack(track.id)}
            className={`tracks-pill ${activeTrack === track.id ? "is-active" : ""}`}
          >
            {activeTrack === track.id && (
              <motion.div
                layoutId="active-pill"
                className="tracks-pill-active"
                style={getGrad(track.id)}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="pill-label">{track.title}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="tracks-mobile-toggle-wrap">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="tracks-mobile-toggle"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="tracks-nav-mobile"
          >
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track.id);
                  setIsMenuOpen(false);
                }}
                className={`tracks-mobile-item ${
                  activeTrack === track.id ? "is-active" : ""
                }`}
              >
                {track.title}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTrack, setActiveTrack] = useState(tracks[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // subtle bg parallax
  useEffect(() => {
    const bgEl = document.getElementById("main-bg");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 10 - 5;
      const y = (clientY / window.innerHeight) * 10 - 5;
      if (bgEl) bgEl.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentTrack = tracks.find((t) => t.id === activeTrack);

  return (
    <main className="tracks-page">
      {/* Background Image (transparent overlay) */}
      <div
        id="main-bg"
        className="tracks-bg"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Navigation */}
      <Navigation
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Content Area */}
      <div className="tracks-content">
        <AnimatePresence mode="wait">
          {currentTrack && <TrackPage key={currentTrack.id} track={currentTrack} />}
        </AnimatePresence>
      </div>
    </main>
  );
}