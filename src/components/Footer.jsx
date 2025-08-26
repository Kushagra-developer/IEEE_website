import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        
        {/* Left: Brand */}
        <div className="footer-brand">
          HackcelR8
        </div>

        {/* Center: Register Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYpWvrie6lQMbF35Ijm9E3xjAf8yxYeym1mH2viUAZ-JBpZg/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
          className="footer-btn"
        >
          Register Now
        </a>

        {/* Right: Socials */}
        <div className="footer-socials">
          <a 
            href="https://www.instagram.com/ieee_srmist_ssit"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={26} />
          </a>
          <a 
            href="https://www.linkedin.com/company/ieee-srmist-ssit/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={26} />
          </a>
          <a 
            href="mailto:ieee.ssit@srmist.edu.in"
            aria-label="Email"
          >
            <FaEnvelope size={26} />
          </a>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        © 2025 IEEE SRMIST SSIT. All rights reserved.
      </div>
    </footer>
  );
}
