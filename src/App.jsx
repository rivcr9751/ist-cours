import { useMemo, useState } from "react";
import { chapters } from "./data/chapters";
import ProgressBar from "./components/ProgressBar";
import SectionTitle from "./components/SectionTitle";
import InfoCard from "./components/InfoCard";
import ConceptCard from "./components/ConceptCard";
import QuizBlock from "./components/QuizBlock";
import {
  ConeDiagram,
  ProjectionDiagram,
  QuotientDiagram,
  SpectrumDiagram,
  TernaryDiagram,
  TripletDiagram,
} from "./components/diagrams";

const COURSE_VERSION = "v8.1";

function TopBar() {
  return (
    <div className="topbar topbar-compact">
      <div className="topbar-main">
        <div className="topbar-badge">IST — cours illustré</div>
        <div className="topbar-title">Internal Spaces Theory — manuel interactif</div>
        <div className="topbar-subtitle">
          Présentation resserrée, schémas retravaillés, synthèses explicites et lecture plus directe du rôle de chaque chapitre.
        </div>
      </div>
      <div className="topbar-version">{COURSE_VERSION}</div>
    </div>
  );
}

function Tabs({ activeTab, setActiveTab }) {
  const tabs = [
    ["overview", "Vue d’ensemble"],
    ["notions", "Notions"],
    ["schema", "Schémas"],
    ["quiz", "Quiz"],
    ["synthese", "Synthèse"],
    ["exercice", "Exercice"],
  ];

  return (
    <div className="pill-row">
      {tabs.map(([key, label]) => (
        <button key={key} className={`pill ${activeTab === key ? "pill-active" : ""}`} onClick={() => setActiveTab(key)}>
          {label}
        </button>
      ))}
    </div>
  );
}

function buildChapterSummary(chapter) {
  const firstPlan = chapter.plan[0] || "";
  const secondPlan = chapter.plan[1] || "";
  const thirdPlan = chapter.plan[2] || "";
  const lastPlan = chapter.plan[chapter.plan.length - 1] || "";

  return {
    does: `Ce chapitre a une fonction précise dans le parcours : il ne sert pas seulement à ajouter une notion de plus, mais à déplacer la lecture du cadre. Il commence par ${firstPlan.toLowerCase()}, puis il montre comment ${secondPlan.toLowerCase()}. Enfin, il prépare le lecteur à ${thirdPlan ? thirdPlan.toLowerCase() : lastPlan.toLowerCase()}, de sorte que la suite ne tombe pas comme un bloc abstrait sans transition.`,
    why: `Son importance vient du fait qu’il construit un seuil de compréhension. Sans lui, les résultats qui suivent resteraient soit trop techniques, soit trop abrupts. Avec lui, on comprend mieux ce que le chapitre installe, ce qu’il clarifie, et pourquoi il devient nécessaire dans l’économie générale d’IST-I.`,
    takeaway: `À la fin, il faut surtout retenir ceci : ${chapter.memo.join(" ")} Le bon réflexe n’est pas d’apprendre une formule isolée, mais de voir quel problème de lecture ce chapitre résout dans l’ensemble du cours.`,
    limits: `Ce chapitre ne prétend pas encore fermer tout le cadre. Il ne remplace ni les démonstrations complètes ni les verrous plus techniques. Son rôle est plus juste : rendre lisible ce qui sans lui resterait trop compact, et conduire jusqu’à ${lastPlan.toLowerCase()} sans donner l’illusion que tout est déjà démontré à ce stade.`,
  };
}

function DiagramPanel({ diagram }) {
  let title = "Lecture spectrale";
  let subtitle = "On part d’un espace large, puis une contrainte sélectionne ce qui devient physiquement lisible.";
  let content = <SpectrumDiagram />;
  let notes = [
    "Le schéma ne remplace pas la démonstration, mais il aide à voir le geste conceptuel.",
    "On distingue clairement l’ensemble des possibilités et ce qui devient admissible.",
    "Le cœur du message est la sélection, pas la décoration graphique.",
  ];

  if (diagram === "projection") {
    title = "Projection et lecture effective";
    subtitle = "La projection n’efface pas arbitrairement : elle construit une lecture stable et cohérente d’une structure plus riche.";
    content = <ProjectionDiagram />;
    notes = [
      "Une bonne projection conserve ce qui reste lisible physiquement.",
      "Elle simplifie sans trahir la structure utile.",
      "C’est ainsi que la lecture 4D devient pensable dans IST-I.",
    ];
  } else if (diagram === "ternary") {
    title = "Organisation ternaire minimale";
    subtitle = "Le rôle de l’ordre trois est montré ici comme une organisation minimale non triviale dans la classe étudiée.";
    content = <TernaryDiagram />;
    notes = [
      "Le ternaire n’est pas ajouté pour faire joli.",
      "Il sert d’ancrage structurel à plusieurs résultats du cadre.",
      "Il faut le lire comme un verrou de sélection, pas comme une image autonome du monde.",
    ];
  } else if (diagram === "triplet") {
    title = "Le triplet de départ";
    subtitle = "H_adm, D et T forment ensemble le point de départ du cadre, et non trois briques indépendantes juxtaposées.";
    content = <TripletDiagram />;
    notes = [
      "H_adm sélectionne les états admissibles.",
      "D organise la lecture spectrale.",
      "T impose une structure discrète interne qui n’est pas décorative.",
    ];
  } else if (diagram === "quotient") {
    title = "Quotient et redondances internes";
    subtitle = "Plusieurs descriptions peuvent porter le même contenu lisible ; le quotient sert alors à identifier cette équivalence.";
    content = <QuotientDiagram />;
    notes = [
      "Une redondance de description n’est pas une nouvelle physique.",
      "La lisibilité minimale suppose qu’on ne compte pas plusieurs fois ce qui n’est qu’une réécriture.",
      "Le quotient formalise ce passage à l’essentiel lisible.",
    ];
  } else if (diagram === "cone") {
    title = "Cône causal effectif";
    subtitle = "Une fois la lecture effective stabilisée, une structure causale unique devient lisible à l’échelle pertinente.";
    content = <ConeDiagram />;
    notes = [
      "Le cône causal organise ce qui peut influencer quoi.",
      "L’idée importante est l’unicité de la structure causale lisible.",
      "On reste ici sur une image pédagogique d’un résultat plus technique.",
    ];
  }

  return (
    <section className="card compact-card">
      <SectionTitle title={title} subtitle={subtitle} emoji="🖼️" />
      {content}
      <div className="note-grid compact-note-grid top-gap">
        {notes.map((item, idx) => (
          <div key={idx} className="note-card">{item}</div>
        ))}
      </div>
    </section>
  );
}

function OverviewPanel({ chapter }) {
  const summary = buildChapterSummary(chapter);

  return (
    <section className="stack-gap">
      <section className="card compact-card chapter-focus">
        <SectionTitle
          title="Ce que fait ce chapitre"
          subtitle="Ici, on explicite vraiment la fonction du chapitre dans le parcours général : ce qu’il met en place, ce qu’il clarifie, ce qu’il ne prétend pas encore démontrer, et pourquoi la suite devient plus compréhensible après lui."
          emoji="🎯"
        />
        <div className="focus-grid">
          <div className="focus-card focus-card-main">
            <div className="focus-card-title">Fonction du chapitre</div>
            <p>{summary.does}</p>
          </div>
          <div className="focus-card">
            <div className="focus-card-title">Pourquoi il compte</div>
            <p>{summary.why}</p>
          </div>
          <div className="focus-card">
            <div className="focus-card-title">Ce qu’il faut retenir</div>
            <p>{summary.takeaway}</p>
          </div>
          <div className="focus-card">
            <div className="focus-card-title">Ce qu’il ne ferme pas encore</div>
            <p>{summary.limits}</p>
          </div>
        </div>
      </section>

      <section className="card compact-card">
        <SectionTitle
          title="Plan du chapitre"
          subtitle="Avant d’entrer dans les détails, voici la trajectoire intellectuelle du chapitre. L’idée est de savoir clairement où l’on va."
          emoji="🧭"
        />
        <div className="plan-grid">
          {chapter.plan.map((item, idx) => (
            <div key={idx} className="plan-card plan-card-strong">
              <strong>{idx + 1}.</strong> {item}
            </div>
          ))}
        </div>
      </section>

      <section className="info-grid compact-info-grid">
        <InfoCard emoji="🧩" title="Idée structurante" text={chapter.plan[0]} />
        <InfoCard emoji="📌" title="Niveau de lecture" text="Le chapitre reste pédagogique : il explique, distingue et prépare, sans prétendre condenser à lui seul toute la preuve technique d’IST-I." />
        <InfoCard emoji="🔭" title="Horizon" text={chapter.plan.slice(1).join(" • ")} />
      </section>
    </section>
  );
}

function SynthesisPanel({ chapter, showMemo, setShowMemo }) {
  const summary = buildChapterSummary(chapter);
  return (
    <section className="stack-gap">
      <section className="card compact-card synthese-banner">
        <SectionTitle
          title="Synthèse du chapitre"
          subtitle="Une reformulation plus dense, faite pour vérifier que l’idée du chapitre est comprise dans son mouvement général et pas seulement dans ses définitions isolées."
          emoji="🧠"
        />
        <div className="synthese-grid">
          <div className="synthese-box">
            <div className="synthese-label">En une phrase</div>
            <p>{summary.does}</p>
          </div>
          <div className="synthese-box">
            <div className="synthese-label">Pourquoi c’est utile</div>
            <p>{summary.why}</p>
          </div>
          <div className="synthese-box">
            <div className="synthese-label">À garder en mémoire</div>
            <ul className="memo-bullets">
              {chapter.memo.map((line, idx) => <li key={idx}>{line}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="card compact-card">
        <SectionTitle
          title="Fiche mémoire"
          subtitle="Version courte à relire avant de passer au chapitre suivant."
          emoji="📝"
        />
        <div className="memo-list">
          {chapter.memo.map((line, idx) => (
            <div key={idx} className="memo-item">{line}</div>
          ))}
        </div>
        <div className="top-gap">
          <button className="secondary-button" onClick={() => setShowMemo((s) => !s)}>
            {showMemo ? "Masquer le conseil méthode" : "Afficher un conseil méthode"}
          </button>
          {showMemo ? (
            <div className="correction-box top-gap">
              Lis d’abord la synthèse sans tes notes, puis reformule-la avec tes propres mots. Si tu n’arrives pas à expliquer ce que fait le chapitre en trois phrases, reviens à la vue d’ensemble avant de poursuivre.
            </div>
          ) : null}
        </div>
      </section>
    </section>
  );
}

export default function App() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [openCards, setOpenCards] = useState({});
  const [showCorrection, setShowCorrection] = useState(false);
  const [showMemo, setShowMemo] = useState(false);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});

  const chapter = chapters[chapterIndex];

  const progress = useMemo(() => {
    const total = chapter.quiz.length;
    const good = chapter.quiz.filter((q, i) => answers[`${chapter.id}-${i}`] === q.answer).length;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }, [answers, chapter]);

  const globalProgress = useMemo(() => {
    const total = chapters.reduce((sum, c) => sum + c.quiz.length, 0);
    const good = chapters.reduce((sum, c) => sum + c.quiz.filter((q, i) => answers[`${c.id}-${i}`] === q.answer).length, 0);
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }, [answers]);

  const toggleCard = (key) => setOpenCards((prev) => ({ ...prev, [key]: !prev[key] }));
  const selectAnswer = (qIndex, optionIndex) => setAnswers((prev) => ({ ...prev, [`${chapter.id}-${qIndex}`]: optionIndex }));
  const revealAnswer = (qIndex) => setRevealed((prev) => ({ ...prev, [`${chapter.id}-${qIndex}`]: true }));

  const resetCurrentChapter = () => {
    const nextAnswers = { ...answers };
    const nextRevealed = { ...revealed };
    chapter.quiz.forEach((_, i) => {
      delete nextAnswers[`${chapter.id}-${i}`];
      delete nextRevealed[`${chapter.id}-${i}`];
    });
    setAnswers(nextAnswers);
    setRevealed(nextRevealed);
    setShowCorrection(false);
    setShowMemo(false);
  };

  return (
    <div className="page-shell">
      <div className="page-inner compact-page-inner">
        <TopBar />

        <div className="layout compact-layout">
          <aside className="sidebar card sticky-card compact-sidebar sidebar-v8">
            <div className="sidebar-header tight-bottom">
              <div className="sidebar-title">📘 Cours interactif IST</div>
              <div className="sidebar-subtitle">16 chapitres · version soignée · synthèses explicites · {COURSE_VERSION}</div>
            </div>

            <div className="panel soft-panel compact-panel">
              <div className="panel-title">Progression globale</div>
              <ProgressBar value={globalProgress} />
              <div className="panel-caption">{globalProgress}% sur l’ensemble des quiz</div>
            </div>

            <div className="chapter-list compact-chapter-list">
              {chapters.map((c, idx) => (
                <button
                  key={c.id}
                  className={`chapter-button ${idx === chapterIndex ? "chapter-button-active" : ""}`}
                  onClick={() => {
                    setChapterIndex(idx);
                    setActiveTab("overview");
                    setShowCorrection(false);
                    setShowMemo(false);
                  }}
                >
                  <div className="chapter-button-id">Chapitre {c.id}</div>
                  <div className="chapter-button-title">{c.shortTitle}</div>
                </button>
              ))}
            </div>

            <div className="panel soft-panel compact-panel">
              <div className="panel-title">Progression du chapitre</div>
              <ProgressBar value={progress} />
              <div className="panel-caption">{progress}% de bonnes réponses sur ce chapitre</div>
            </div>

            <button className="secondary-button full-width" onClick={resetCurrentChapter}>Réinitialiser ce chapitre</button>
          </aside>

          <main className="content-zone compact-content-zone">
            <section className="card course-header compact-course-header course-header-v8">
              <div className="course-kicker">{chapter.shortTitle}</div>
              <h2 className="course-title compact-course-title">{chapter.title}</h2>
              <p className="course-intro compact-course-intro">{chapter.intro}</p>
              <div className="goal-box compact-goal-box">
                <div className="goal-label">Objectif du chapitre</div>
                <div className="goal-text">{chapter.goal}</div>
              </div>
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </section>

            <section className="info-grid compact-info-grid">
              <InfoCard emoji="🧭" title="Position du chapitre" text="Chaque chapitre prépare une marche précise dans la compréhension d’IST-I." />
              <InfoCard emoji="🎯" title="Objectif pédagogique" text={chapter.goal} />
              <InfoCard emoji="💡" title="Ce qu’il travaille" text={chapter.plan[0]} />
              <InfoCard emoji="🖼️" title="Image directrice" text={chapter.plan.slice(1).join(" • ")} />
            </section>

            {activeTab === "overview" ? <OverviewPanel chapter={chapter} /> : null}

            {activeTab === "notions" ? (
              <section>
                <SectionTitle
                  title="Cartes de notions"
                  subtitle="Chaque bloc est un morceau de compréhension. L’ensemble ne donne pas une liste plate de définitions, mais un chemin de lecture plus structuré."
                  emoji="🧩"
                />
                <div className="concept-grid">
                  {chapter.notions.map((item, idx) => {
                    const key = `${chapter.id}-${idx}`;
                    return (
                      <ConceptCard
                        key={key}
                        title={item.title}
                        tag={item.tag}
                        content={item.content}
                        open={!!openCards[key]}
                        onToggle={() => toggleCard(key)}
                      />
                    );
                  })}
                </div>
              </section>
            ) : null}

            {activeTab === "schema" ? <DiagramPanel diagram={chapter.diagram} /> : null}

            {activeTab === "quiz" ? (
              <section className="card compact-card">
                <SectionTitle
                  title="Mini-quiz"
                  subtitle="Le quiz sert à vérifier que les distinctions centrales du chapitre sont claires, pas seulement reconnues visuellement."
                  emoji="🧪"
                />
                <QuizBlock chapter={chapter} answers={answers} revealed={revealed} onSelect={selectAnswer} onReveal={revealAnswer} />
              </section>
            ) : null}

            {activeTab === "synthese" ? <SynthesisPanel chapter={chapter} showMemo={showMemo} setShowMemo={setShowMemo} /> : null}

            {activeTab === "exercice" ? (
              <section className="card compact-card">
                <SectionTitle
                  title="Exercice guidé"
                  subtitle="L’exercice sert à reformuler le chapitre avec tes propres mots. C’est souvent là que l’on voit si l’idée a été comprise ou seulement lue."
                  emoji="✍️"
                />
                <div className="exercise-box">
                  <p>{chapter.exercise.prompt}</p>
                </div>
                <div className="top-gap">
                  <button className="secondary-button" onClick={() => setShowCorrection((s) => !s)}>
                    {showCorrection ? "Masquer la correction" : "Afficher la correction"}
                  </button>
                  {showCorrection ? <div className="correction-box top-gap">{chapter.exercise.correction}</div> : null}
                </div>
              </section>
            ) : null}
          </main>
        </div>
      </div>
    </div>
  );
}
