export default function InfoCard({ emoji, title, text, dark = false }) {
  return (
    <div className={`info-card ${dark ? "info-card-dark" : ""}`}>
      <div className="info-card-head">
        <div className="emoji-badge">{emoji}</div>
        <div className="info-card-title">{title}</div>
      </div>
      <div className="info-card-text">{text}</div>
    </div>
  );
}
