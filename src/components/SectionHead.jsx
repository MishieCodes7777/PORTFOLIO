import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, lede, id }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  );
}
