export default function ProgressBar({ value }) {
  return (
    <div className="progress-track">
      <div
        className="progress-bar"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
