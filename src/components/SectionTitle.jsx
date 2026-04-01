export default function SectionTitle({ emoji, title, subtitle }) {
  return (
    <div className="section-head">
      <div className="section-title-row">
        {emoji ? <div className="section-emoji">{emoji}</div> : null}
        <h3 className="section-title">{title}</h3>
      </div>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
