import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const el = document.querySelector("#register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar luxe ${scrolled ? "with-shadow" : ""}`}>
      <div className="navbar-inner">

        <Link to="/" className="brand hackcelr8-logo">
          <span className="hackcel">HACKCELR</span>
          <span className="r8">8</span>
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <nav className={`navlinks ${open ? "open" : ""}`}>
          <NavLink to="/" end className={({isActive}) => `navlink ${isActive ? "active":""}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `navlink ${isActive ? "active":""}`}>About</NavLink>
          <NavLink to="/tracks" className={({isActive}) => `navlink ${isActive ? "active":""}`}>Tracks</NavLink>
          <NavLink to="/sponsors" className={({isActive}) => `navlink ${isActive ? "active":""}`}>Sponsors</NavLink>
          <NavLink to="/judges" className={({isActive}) => `navlink ${isActive ? "active":""}`}>Judges</NavLink>
          <NavLink to="/contact" className={({isActive}) => `navlink ${isActive ? "active":""}`}>Contact</NavLink>
        </nav>

       <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdYpWvrie6lQMbF35Ijm9E3xjAf8yxYeym1mH2viUAZ-JBpZg/viewform?usp=header"
  className="nav-cta"
  target="_blank"
  rel="noreferrer"
>
  Register now
</a>
      </div>
    </header>
  );
}