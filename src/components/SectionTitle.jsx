export default function SectionTitle({ title, subtitle, emoji }) {
  return (
    <div className="section-head">
      <div className="section-title-row">
        {emoji && <span className="section-emoji">{emoji}</span>}
        <h3 className="section-title">{title}</h3>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
