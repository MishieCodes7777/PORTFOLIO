import { profile, contactLinks } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="Get in touch"
          title="Contact"
          id="contact-title"
          lede="Open to internships, junior developer roles and freelance work. The fastest way to reach me is email — I reply within a day."
        />

        <Reveal>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="contact__links">
            {contactLinks.map((s) => (
              <li key={s.label}>
                <a
                  className="contact__link"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="contact__platform">{s.label}</span>
                  <span className="contact__handle">{s.handle}</span>
                  <span className="contact__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
