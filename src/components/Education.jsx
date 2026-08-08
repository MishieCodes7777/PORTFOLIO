import { education, certificates } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import dsaNPTEL from "../assets/dsaNPTEL.webp";
import python from "../assets/python.webp";
import "./Education.css";

const images = { dsaNPTEL, python };

export default function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="Background"
          title="Education"
          id="education-title"
        />

        <ul className="edu">
          {education.map((item, i) => (
            <Reveal key={item.qualification} delay={i * 0.06} as="li">
              <div className="edu__row">
                <div>
                  <h3 className="edu__qual">{item.qualification}</h3>
                  <p className="edu__inst">{item.institution}</p>
                </div>
                <span className="edu__period">{item.period}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <h3 className="edu__subhead" id="certificates">
          Certifications
        </h3>

        <div className="certs">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <article className="card card--hover cert">
                <img
                  className="cert__image"
                  src={images[cert.image]}
                  alt={cert.alt}
                  loading="lazy"
                  decoding="async"
                  width={cert.width}
                  height={cert.height}
                />
                <div className="cert__body">
                  <p className="cert__issuer">{cert.issuer}</p>
                  <h4 className="cert__title">{cert.title}</h4>
                  <p className="cert__desc">{cert.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
