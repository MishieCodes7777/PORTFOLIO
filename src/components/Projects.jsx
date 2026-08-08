import { projects } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="Selected work"
          title="Projects"
          id="projects-title"
          lede="Things I built on my own time to learn something specific."
        />

        <div className="projects">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <article className="card card--hover project">
                <header className="project__head">
                  <h3 className="project__name">{project.name}</h3>
                  <span className="project__year">{project.year}</span>
                </header>

                {project.tag && <p className="project__tag">{project.tag}</p>}

                <p className="project__desc">{project.description}</p>

                <ul className="project__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="chips">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project__links">
                  {project.demo && (
                    <a
                      className="link-arrow"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live demo <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      className="link-arrow"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Source code <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
