import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Judges from "./pages/Judges.jsx";
import Contact from "./pages/Contact.jsx";
import Tracks from "./pages/Tracks.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/sponsors" element={<Sponsors />}/>
        <Route path="/judges" element={<Judges />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}