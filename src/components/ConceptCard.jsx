export default function ConceptCard({ title, tag, content, open, onToggle }) {
  return (
    <div className="concept-card">
      <button className="concept-button" onClick={onToggle}>
        <div>
          {tag ? <div className="concept-tag">{tag}</div> : null}
          <div className="concept-title">{title}</div>
        </div>
        <div className="concept-plus">{open ? "−" : "+"}</div>
      </button>
      {open ? <div className="concept-content">{content}</div> : null}
    </div>
  );
}
