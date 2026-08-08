import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav__mark" href="#top" aria-label="Back to top">
        <span className="nav__initials">BK</span>
        <span className="status">
          <span className="status__dot" aria-hidden="true" />
          {profile.status}
        </span>
      </a>

      <nav className={`nav__menu ${open ? "is-open" : ""}`} aria-label="Main">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn--outline nav__resume"
          href={profile.resume}
          download={profile.resumeFileName}
          onClick={() => setOpen(false)}
        >
          Download resume
        </a>
      </nav>

      <button
        className={`nav__toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
