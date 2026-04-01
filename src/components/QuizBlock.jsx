export default function QuizBlock({ chapter, answers, revealed, onSelect, onReveal }) {
  return (
    <div className="quiz-list">
      {chapter.quiz.map((q, qIndex) => {
        const selected = answers[`${chapter.id}-${qIndex}`];
        const show = revealed[`${chapter.id}-${qIndex}`];
        return (
          <div key={qIndex} className="quiz-card">
            <div className="quiz-question-row">
              <div className="quiz-number">{qIndex + 1}</div>
              <div className="quiz-question">{q.question}</div>
            </div>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                const isSelected = selected === optIndex;
                const isCorrect = q.answer === optIndex;
                return (
                  <button
                    key={optIndex}
                    className={`quiz-option ${isSelected ? "quiz-option-selected" : ""} ${show && isCorrect ? "quiz-option-correct" : ""}`}
                    onClick={() => onSelect(qIndex, optIndex)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="quiz-actions">
              <button className="primary-button" onClick={() => onReveal(qIndex)}>
                Vérifier
              </button>
              {show && selected !== undefined ? (
                <div className={`quiz-result ${selected === q.answer ? "quiz-good" : "quiz-bad"}`}>
                  {selected === q.answer ? "Bonne réponse" : "Réponse à revoir"}
                </div>
              ) : null}
            </div>
            {show ? <div className="quiz-explanation">{q.explanation}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
