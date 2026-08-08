import { skills } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section__inner">
        <SectionHead
          eyebrow="What I work with"
          title="Technical Skills"
          id="skills-title"
        />

        <div className="skills">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <div className="skill-group">
                <h3 className="skill-group__name">{group.group}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
