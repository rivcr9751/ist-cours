export default function ConceptCard({ title, tag, content, open, onToggle }) {
  return (
    <div className="concept-card">
      <button className="concept-button" onClick={onToggle}>
        <div>
          <div className="concept-tag">{tag}</div>
          <div className="concept-title">{title}</div>
        </div>
        <span className="concept-plus">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="concept-content">
          <p style={{ margin: 0 }}>{content}</p>
        </div>
      )}
    </div>
  );
}
