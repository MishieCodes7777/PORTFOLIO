import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import portrait from "../assets/bhavya.webp";
import { profile, socials } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [spot, setSpot] = useState({ x: -300, y: -300 });
  const frameRef = useRef(null);
  const reduce = useReducedMotion();

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="hero" id="top">
      <motion.h1 className="hero__name" {...rise(0.05)}>
        <span className="hero__outline">{profile.firstName}</span>
        <span className="hero__filled">{profile.lastName}</span>
      </motion.h1>

      <div className="hero__grid">
        <motion.div className="hero__intro" {...rise(0.18)}>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__bio">{profile.bio}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#projects">
              View my work
            </a>
            <a className="btn btn--outline" href={profile.resume} download>
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.div className="hero__portrait" {...rise(0.28)}>
          <div
            className="portrait"
            onMouseMove={handleMove}
            onMouseLeave={() => setSpot({ x: -300, y: -300 })}
            ref={frameRef}
          >
            <img
              src={portrait}
              alt="Portrait of Bhavya Kundalia"
              className="portrait__base"
              width="720"
              height="900"
              fetchPriority="high"
            />
            <img
              src={portrait}
              alt=""
              aria-hidden="true"
              className="portrait__reveal"
              width="720"
              height="900"
              style={{ "--x": `${spot.x}px`, "--y": `${spot.y}px` }}
            />
          </div>
          <p className="portrait__hint">Move your cursor across the photo</p>
        </motion.div>

        <motion.ul className="hero__socials" {...rise(0.38)}>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer noopener">
                <span>{s.label}</span>
                <span className="hero__handle">{s.handle}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
