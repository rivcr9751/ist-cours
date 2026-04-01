function ShadowDefs() {
  return (
    <defs>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodOpacity="0.14" />
      </filter>
      <linearGradient id="deepBlue" x1="0" x2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="mint" x1="0" x2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <linearGradient id="sky" x1="0" x2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <linearGradient id="slateSoft" x1="0" x2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <marker id="arrowDark" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L10,3 L0,6 Z" fill="#334155" />
      </marker>
      <marker id="arrowMint" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L10,3 L0,6 Z" fill="#10b981" />
      </marker>
      <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L10,3 L0,6 Z" fill="#0f172a" />
      </marker>
    </defs>
  );
}

function Frame({ children, title, subtitle }) {
  return (
    <svg viewBox="0 0 860 340" className="diagram-svg">
      <ShadowDefs />
      <rect x="20" y="20" width="820" height="300" rx="28" fill="#ffffff" stroke="#dbe4ee" />
      <text x="44" y="52" fontSize="18" fill="#0f172a" fontWeight="800">{title}</text>
      <text x="44" y="74" fontSize="13" fill="#64748b">{subtitle}</text>
      {children}
    </svg>
  );
}

export function SpectrumDiagram() {
  return (
    <Frame title="Sélection d’un sous-espace admissible" subtitle="On distingue ici l’ensemble de départ, la contrainte T, puis les états effectivement retenus.">
      <rect x="40" y="95" width="240" height="185" rx="24" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="62" y="124" fontSize="15" fill="#334155" fontWeight="700">Espace des possibilités</text>
      {["état A", "état B", "état C", "état D", "état E"].map((item, i) => (
        <g key={item}>
          <rect x="65" y={140 + i * 25} width="160" height="18" rx="9" fill="#ffffff" stroke="#d8e1eb" />
          <text x="79" y={153 + i * 25} fontSize="12" fill="#475569">{item}</text>
        </g>
      ))}
      <rect x="325" y="125" width="180" height="120" rx="26" fill="url(#deepBlue)" filter="url(#softShadow)" />
      <text x="415" y="168" textAnchor="middle" fontSize="42" fill="white" fontWeight="800">T</text>
      <text x="415" y="194" textAnchor="middle" fontSize="14" fill="#dbeafe">contrainte de sélection</text>
      <path d="M280 186 C 302 186, 312 186, 325 186" stroke="#475569" strokeWidth="4" fill="none" markerEnd="url(#arrowDark)" />
      <path d="M505 186 C 535 186, 548 186, 578 186" stroke="#10b981" strokeWidth="4" fill="none" markerEnd="url(#arrowMint)" />
      <rect x="578" y="95" width="235" height="185" rx="24" fill="#ecfdf5" stroke="#a7f3d0" />
      <text x="600" y="124" fontSize="15" fill="#065f46" fontWeight="800">Sous-espace admissible</text>
      {["état B", "état D", "état E"].map((item, i) => (
        <g key={item}>
          <rect x="605" y={155 + i * 34} width="160" height="22" rx="11" fill="url(#mint)" opacity="0.16" stroke="#10b981" />
          <text x="620" y={170 + i * 34} fontSize="12" fill="#065f46">{item}</text>
        </g>
      ))}
      <text x="40" y="306" fontSize="12" fill="#64748b">Lecture pédagogique : tout ce qui est possible au départ n’est pas forcément retenu comme physiquement admissible.</text>
    </Frame>
  );
}

export function ProjectionDiagram() {
  return (
    <Frame title="Projection et lecture effective" subtitle="La projection ne détruit pas arbitrairement : elle rend un contenu plus riche lisible sous une forme stable.">
      <rect x="42" y="95" width="250" height="190" rx="24" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="64" y="124" fontSize="15" fill="#334155" fontWeight="800">Structure plus riche</text>
      <circle cx="118" cy="172" r="42" fill="#cbd5e1" />
      <circle cx="180" cy="144" r="54" fill="#94a3b8" opacity="0.9" />
      <circle cx="202" cy="210" r="60" fill="url(#slateSoft)" opacity="0.95" />
      <text x="68" y="265" fontSize="12" fill="#64748b">contenu global, non directement lu dans toute sa richesse</text>
      <circle cx="430" cy="190" r="70" fill="url(#deepBlue)" filter="url(#softShadow)" />
      <text x="430" y="182" textAnchor="middle" fontSize="44" fill="white" fontWeight="800">π</text>
      <text x="430" y="210" textAnchor="middle" fontSize="14" fill="#dbeafe">projection</text>
      <path d="M292 190 C 330 190, 352 190, 360 190" stroke="#475569" strokeWidth="4" fill="none" markerEnd="url(#arrowDark)" />
      <path d="M500 190 C 548 190, 585 190, 618 190" stroke="#0f172a" strokeWidth="4" fill="none" markerEnd="url(#arrowBlue)" />
      <rect x="618" y="95" width="200" height="190" rx="24" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="640" y="124" fontSize="15" fill="#334155" fontWeight="800">Lecture effective</text>
      {[150, 182, 214, 246].map((y, i) => (
        <rect key={y} x="645" y={y} width={145 - i * 12} height="16" rx="8" fill={i % 2 === 0 ? "#94a3b8" : "#475569"} opacity="0.92" />
      ))}
      <text x="645" y="272" fontSize="12" fill="#64748b">description plus simple, mais plus directement lisible</text>
    </Frame>
  );
}

export function TernaryDiagram() {
  return (
    <Frame title="Organisation ternaire minimale" subtitle="Le rôle de l’ordre trois est représenté ici comme une organisation minimale non triviale dans la classe étudiée.">
      <circle cx="430" cy="180" r="34" fill="#ffffff" stroke="#cbd5e1" />
      <text x="430" y="188" textAnchor="middle" fontSize="26" fill="#334155" fontWeight="800">T</text>
      <circle cx="250" cy="215" r="78" fill="url(#deepBlue)" filter="url(#softShadow)" />
      <text x="250" y="205" textAnchor="middle" fontSize="28" fill="white" fontWeight="800">H₀</text>
      <text x="250" y="230" textAnchor="middle" fontSize="13" fill="#dbeafe">secteur invariant</text>
      <circle cx="430" cy="92" r="78" fill="url(#sky)" filter="url(#softShadow)" />
      <text x="430" y="82" textAnchor="middle" fontSize="28" fill="white" fontWeight="800">H₁</text>
      <text x="430" y="107" textAnchor="middle" fontSize="13" fill="#e0f2fe">premier secteur</text>
      <circle cx="610" cy="215" r="78" fill="url(#mint)" filter="url(#softShadow)" />
      <text x="610" y="205" textAnchor="middle" fontSize="28" fill="white" fontWeight="800">H₂</text>
      <text x="610" y="230" textAnchor="middle" fontSize="13" fill="#dcfce7">deuxième secteur</text>
      <path d="M315 202 C 344 170, 370 139, 397 114" stroke="#94a3b8" strokeWidth="3.5" fill="none" />
      <path d="M463 114 C 493 138, 523 171, 545 202" stroke="#94a3b8" strokeWidth="3.5" fill="none" />
      <path d="M324 246 C 401 282, 486 282, 535 246" stroke="#94a3b8" strokeWidth="3.5" fill="none" />
      <text x="44" y="304" fontSize="12" fill="#64748b">Image pédagogique : le ternaire n’est pas une décoration, mais un verrou de structuration minimale.</text>
    </Frame>
  );
}

export function TripletDiagram() {
  return (
    <Frame title="Le triplet de départ" subtitle="H_adm, D et T forment ensemble le point de départ du cadre, et non trois briques indépendantes juxtaposées.">
      <rect x="52" y="115" width="210" height="130" rx="24" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="82" y="158" fontSize="28" fill="#334155" fontWeight="800">H_adm</text>
      <text x="82" y="186" fontSize="14" fill="#64748b">états admissibles</text>
      <rect x="325" y="115" width="210" height="130" rx="24" fill="url(#deepBlue)" filter="url(#softShadow)" />
      <text x="430" y="165" textAnchor="middle" fontSize="42" fill="white" fontWeight="800">D</text>
      <text x="430" y="194" textAnchor="middle" fontSize="14" fill="#dbeafe">opérateur spectral</text>
      <rect x="598" y="115" width="210" height="130" rx="24" fill="url(#mint)" filter="url(#softShadow)" />
      <text x="703" y="165" textAnchor="middle" fontSize="42" fill="white" fontWeight="800">T</text>
      <text x="703" y="194" textAnchor="middle" fontSize="14" fill="#dcfce7">organisation discrète</text>
      <path d="M262 180 C 287 180, 300 180, 325 180" stroke="#7c3aed" strokeWidth="4" fill="none" markerEnd="url(#arrowDark)" />
      <path d="M535 180 C 560 180, 573 180, 598 180" stroke="#10b981" strokeWidth="4" fill="none" markerEnd="url(#arrowMint)" />
    </Frame>
  );
}

export function QuotientDiagram() {
  return (
    <Frame title="Quotient et redondances internes" subtitle="Plusieurs descriptions peuvent porter le même contenu lisible. Le quotient identifie alors l’équivalence physique pertinente.">
      <rect x="42" y="96" width="268" height="188" rx="24" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="64" y="124" fontSize="15" fill="#334155" fontWeight="800">Descriptions reliées par redondance</text>
      {[0, 1, 2].map((i) => <circle key={i} cx={115 + i * 70} cy={165 + i * 16} r="20" fill="#cbd5e1" />)}
      {[0, 1, 2].map((i) => <circle key={i + 3} cx={140 + i * 52} cy={224 - i * 10} r="20" fill="#94a3b8" />)}
      <text x="80" y="262" fontSize="12" fill="#64748b">plusieurs descriptions, un même contenu lisible</text>
      <path d="M310 190 C 388 190, 430 190, 505 190" stroke="#334155" strokeWidth="4" fill="none" markerEnd="url(#arrowDark)" />
      <circle cx="640" cy="190" r="78" fill="url(#deepBlue)" filter="url(#softShadow)" />
      <text x="640" y="182" textAnchor="middle" fontSize="30" fill="white" fontWeight="800">quotient</text>
      <text x="640" y="210" textAnchor="middle" fontSize="14" fill="#dbeafe">une lecture physique</text>
    </Frame>
  );
}

export function ConeDiagram() {
  return (
    <Frame title="Cône causal effectif" subtitle="Une fois la lecture effective stabilisée, une structure causale unique peut être lue au niveau pertinent.">
      <line x1="430" y1="96" x2="430" y2="280" stroke="#94a3b8" strokeWidth="2.2" />
      <line x1="132" y1="188" x2="728" y2="188" stroke="#94a3b8" strokeWidth="2.2" />
      <path d="M430 188 L334 104 L526 104 Z" fill="url(#deepBlue)" opacity="0.95" filter="url(#softShadow)" />
      <path d="M430 188 L334 272 L526 272 Z" fill="#334155" opacity="0.92" filter="url(#softShadow)" />
      <circle cx="430" cy="188" r="10" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
      <text x="548" y="127" fontSize="14" fill="#334155" fontWeight="700">futur causal</text>
      <text x="548" y="252" fontSize="14" fill="#334155" fontWeight="700">passé causal</text>
      <text x="452" y="182" fontSize="14" fill="#0f172a">événement</text>
      <text x="44" y="304" fontSize="12" fill="#64748b">Image pédagogique : une causalité effective unique devient lisible dans la description stabilisée.</text>
    </Frame>
  );
}
