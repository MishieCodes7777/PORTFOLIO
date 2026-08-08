import { experience } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="Where I've worked"
          title="Experience"
          id="experience-title"
          lede="Professional work, and the software I shipped while doing it."
        />

        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="job">
              <div className="job__meta">
                <p className="job__period">{job.period}</p>
                <p className="job__location">{job.location}</p>
              </div>

              <div className="job__body">
                <h3 className="job__role">{job.role}</h3>
                <p className="job__company">{job.company}</p>
                <p className="job__summary">{job.summary}</p>

                <ul className="job__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {job.project && (
                  <aside className="shipped">
                    <p className="shipped__label">
                      <span className="shipped__marker" aria-hidden="true" />
                      {job.project.tagline}
                    </p>

                    <h4 className="shipped__name">{job.project.name}</h4>
                    <p className="shipped__desc">{job.project.description}</p>

                    <ul className="chips">
                      {job.project.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {(job.project.repo || job.project.demo) && (
                      <div className="shipped__links">
                        {job.project.demo && (
                          <a
                            className="link-arrow"
                            href={job.project.demo}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Live demo <span aria-hidden="true">→</span>
                          </a>
                        )}
                        {job.project.repo && (
                          <a
                            className="link-arrow"
                            href={job.project.repo}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Source code <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                    )}
                  </aside>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
