import { certificates } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import dsaNPTEL from "../assets/dsaNPTEL.webp";
import python from "../assets/python.webp";
import "./Certificates.css";

const images = { dsaNPTEL, python };

export default function Certificates() {
  return (
    <section className="section" id="certificates" aria-labelledby="certificates-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="Verified coursework"
          title="Certificates"
          id="certificates-title"
        />

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
                  <h3 className="cert__title">{cert.title}</h3>
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
