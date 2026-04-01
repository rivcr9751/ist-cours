export default function QuizBlock({ chapter, answers, revealed, onSelect, onReveal }) {
  if (!chapter.quiz || chapter.quiz.length === 0) {
    return <p style={{ color: "#64748b" }}>Aucune question pour ce chapitre.</p>;
  }

  return (
    <div className="quiz-list">
      {chapter.quiz.map((q, qIndex) => {
        const answerKey = `${chapter.id}-${qIndex}`;
        const selected = answers[answerKey];
        const isRevealed = revealed[answerKey];
        const isCorrect = selected === q.answer;

        return (
          <div key={qIndex} className="quiz-card">
            <div className="quiz-question-row">
              <span className="quiz-number">{qIndex + 1}</span>
              <div className="quiz-question">{q.question}</div>
            </div>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let cls = "quiz-option";
                if (selected === optIndex) {
                  if (isRevealed) {
                    cls += optIndex === q.answer ? " quiz-option-correct" : "";
                  } else {
                    cls += " quiz-option-selected";
                  }
                } else if (isRevealed && optIndex === q.answer) {
                  cls += " quiz-option-correct";
                }
                return (
                  <button
                    key={optIndex}
                    className={cls}
                    onClick={() => !isRevealed && onSelect(qIndex, optIndex)}
                    disabled={isRevealed}
                  >
                    <strong>{String.fromCharCode(65 + optIndex)}.</strong> {opt}
                  </button>
                );
              })}
            </div>
            <div className="quiz-actions">
              {selected !== undefined && !isRevealed && (
                <button className="secondary-button" onClick={() => onReveal(qIndex)}>
                  Vérifier
                </button>
              )}
              {isRevealed && (
                <span className={`quiz-result ${isCorrect ? "quiz-good" : "quiz-bad"}`}>
                  {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                </span>
              )}
            </div>
            {isRevealed && (
              <div className="quiz-explanation">{q.explanation}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
