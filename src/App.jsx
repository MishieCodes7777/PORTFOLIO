import "./App.css";
import Bhavya from "./assets/Bhavya.png";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dsaNPTEL from "./assets/dsaNPTEL.png";
import python from "./assets/python.png";
function App() {
  const { scrollYProgress } = useScroll();
  const cursorRef = useRef(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements =
      document.querySelectorAll("button,a,li,.status");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("hover")
      );

      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hover")
      );
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <nav>
        <div className="status"
          onMouseEnter={() => cursorRef.current.classList.add("hover")}
          onMouseLeave={() => cursorRef.current.classList.remove("hover")}

        >
          <span className="dot"></span>
          Available for New Projects
        </div>

        <div className="cursor" ref={cursorRef}></div>





        <ul>
          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#skills">Technical Skills</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <a href="#certificates">Certificates</a>
          </li>
        </ul>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/bhavya-k-805485317/",
              "_blank"
            )
          }
        >
          Let's CONNECT
        </button>
      </nav>

      <section className="hero">

        <h1 className="hero-name">
          <span className="outline">BHAVYA </span>
          <span className="filled">KUNDALIA</span>
        </h1>

        <div className="hero-content">
          <div className="left">

            <h2>MERN Stack Developer & DSA Enthusiast</h2>

            <p>
              I'm a Bachelor of Technology student with a strong interest in web development and problem-solving. I enjoy building responsive and user-friendly applications, exploring new technologies, and turning ideas into practical solutions. Alongside development, I actively work on strengthening my Data Structures and Algorithms skills through consistent practice. I'm always eager to learn, improve, and take on challenges that help me grow as a developer.


            </p>

            <button>Let's Collaborate</button>
          </div>

          <div
            className="image-container"
            onMouseMove={handleMouseMove}
          >
            <img
              src={Bhavya}
              alt="Bhavya"
              className="gray-img"
            />

            <img
              src={Bhavya}
              alt="Bhavya"
              className="color-img"
              style={{
                "--x": `${mousePos.x}px`,
                "--y": `${mousePos.y}px`,
              }}
            />
          </div>

          <div className="socials">

            <a
              href="https://github.com/MishieCodes7777"
              target="_blank"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bhavya-k-805485317/"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/MishB7183/"
              target="_blank"
            >
              LeetCode
            </a>

          </div>
        </div>
      </section>

      <section id="experience" className="exp-projects">
        <div className="column">
          <h2 className="section-title">EXPERIENCE</h2>

          <div className="exp">
            <h3>Full Stack Web Development Intern</h3>
            <h4>Blend Vidya EdTech</h4>
            <span>Dec 2025 - Feb 2026</span>

            <ul>
              <li>
                Developed and optimized responsive web
                applications using HTML, CSS and JavaScript.

              </li>

              <li>
                Built interactive UI components and improved
                user experience across multiple pages.

              </li>

              <li>
                Integrated frontend and backend workflows for
                seamless data handling.

              </li>

              <li>
                Collaborated on real-world development
                projects using structured development practices.

              </li>
            </ul>

          </div>
        </div>


        <div id="projects" className="column">
          <h2 className="section-title">PROJECTS</h2>

          <div className="proj">
            <h3>SELF-TRACKING SYSTEM</h3>
            <p>
              Built a full-stack MERN application for employee
              productivity monitoring and workforce management.
            </p>
          </div>

          <div className="proj">
            <h3>WEBRTC VIDEO CONFERENCE APP</h3>
            <p>
              Developed a real-time video conferencing platform
              using WebRTC and JavaScript.
            </p>
          </div>

          <div className="proj">
            <h3>E-COMMERCE PLATFORM</h3>
            <p>
              Created a dynamic e-commerce website using HTML,
              CSS, JavaScript and PHP.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="skills-contact">
        <div id="skills" className="column">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="skills-list">
            <ul>
              <li>
                <strong>Languages:</strong> C++, JavaScript, Java, Python
              </li>

              <li>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React
              </li>

              <li>
                <strong>Backend:</strong> Node.js, Express.js
              </li>

              <li>
                <strong>Database:</strong> MySQL, MongoDB
              </li>

              <li>
                <strong>Core Concepts:</strong> DSA, OOP, Web Development
              </li>
            </ul>
          </div>

        </div>
        <div className="column">
          <h2 className="section-title">CONTACT</h2>

          <p className="contact-desc">
            Feel free to reach out for collaborations,
            internships, or project opportunities.
          </p>

          <div className="contact-list">
            <ul>

              <li>
                <strong>Email:</strong>
                <a href="mailto:kundaliabhavya2@gmail.com">
                  kundaliabhavya2@gmail.com
                </a>
              </li>

              <li>
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/MishieCodes7777"
                  target="_blank"
                  rel="noreferrer"
                >
                  MishieCodes7777
                </a>
              </li>

              <li>
                <strong>LeetCode:</strong>
                <a
                  href="https://leetcode.com/u/MishB7183/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MishB7183
                </a>
              </li>

              <li>
                <strong>LinkedIn:</strong>
                <a
                  href="https://linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section id="certificates" className="certificates-section">
        <h2 className="section-title">CERTIFICATES</h2>

        <div className="certificates-grid">

          <div className="certificate-card">
            <img src={dsaNPTEL} alt="NPTEL Certificate" />

            <div className="certificate-info">
              <h3>DSA, NPTEL</h3>
              <p>Earned certification in NPTEL's 12-week Data Structures and Algorithms using Java course, finishing among the 3,234 successful candidates from a registration pool of several lakh learners. Strengthened my understanding of algorithms, data structures, and problem-solving techniques.</p>
            </div>
          </div>

          <div className="certificate-card">
            <img src={python} alt="Certificate" />

            <div className="certificate-info">
              <h3>PYTHON FOR DATA SCIENCE, NPTEL</h3>
              <p>Earned an Elite grade in NPTEL's Python for Data Science course, placing among the top-performing learners and developing strong fundamentals in Python programming and data science.</p>
            </div>
          </div>


        </div>


      </section>




    </>
  );
}




export default App;