import Cursor from "./components/Cursor";
import ProgressBar from "./components/ProgressBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ProgressBar />
      <Cursor />
      <Nav />

      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
