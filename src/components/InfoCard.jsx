export default function InfoCard({ emoji, title, text }) {
  return (
    <div className="info-card">
      <div className="info-card-head">
        {emoji && <span className="emoji-badge">{emoji}</span>}
        <div className="info-card-title">{title}</div>
      </div>
      <div className="info-card-text">{text}</div>
    </div>
  );
}
