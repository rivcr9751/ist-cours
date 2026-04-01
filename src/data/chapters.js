export const chapters = [
  {
    id: 1,
    shortTitle: "Structures admissibles",
    title: "Structures spectrales admissibles non-factorisables",
    intro:
      "Ce premier chapitre pose les fondations abstraites d'IST. Il ne part ni d'une géométrie, ni d'une dynamique, mais d'une règle d'admissibilité sélectionnant certains états dans un espace plus large — et d'une contrainte de non-factorisabilité qui gouverne toute la suite.",
    goal:
      "Comprendre ce qu'est un triplet spectral admissible non-factorisable, pourquoi la non-factorisabilité est la contrainte centrale d'IST, et ce que la trivialité du commutant conjoint {D,T}′ = ℂ·Id implique structurellement.",
    plan: [
      "Définir l'admissibilité abstraite : S_adm ⊂ S sélectionné par les contraintes 𝒞",
      "Distinguer non-séparabilité et non-factorisabilité spectrale (Définitions I.1–I.3)",
      "Introduire l'ordre hérité stable et la discrétisation minimale (Postulat I.1)",
      "Définir le triplet spectral admissible S = (ℋ_adm, D, T) — objet central d'IST",
      "Établir l'interdiction de lecture interne directe (Théorème I.1 et Corollaire I.1)",
    ],
    notions: [
      {
        title: "Admissibilité spectrale",
        tag: "Définition fondatrice",
        content:
          "On part d'un ensemble d'états 𝒮 et d'un ensemble de contraintes 𝒞. Ces contraintes sélectionnent S_adm ⊂ S. L'objet d'IST n'est pas 𝒮 lui-même, mais la structure que 𝒞 induit sur S_adm. Cette logique de sélection est préalable à toute dynamique ou géométrie.",
      },
      {
        title: "Non-factorisabilité spectrale",
        tag: "Contrainte centrale",
        content:
          "Une structure est non-factorisable si ℋ_adm ne se décompose pas en ℋ_A ⊗ ℋ_B et si aucun sous-espace spectral stable par D ne possède de base propre factorisable. C'est précisément ce qu'exclut l'action d'un groupe discret Γ dans ℋ_adm = {ψ ∈ ℋ | γ*ψ = χ_γ ψ, ∀γ ∈ Γ}. La non-factorisabilité distingue IST des approches de type Kaluza–Klein.",
      },
      {
        title: "Triplet spectral admissible S = (ℋ_adm, D, T)",
        tag: "Objet central",
        content:
          "Le triplet réunit : (a) ℋ_adm, espace de Hilbert séparable contraint par un groupe discret Γ ; (b) D, opérateur auto-adjoint à spectre réel discret non borné ; (c) T, automorphisme unitaire d'ordre fini n ≥ 2 satisfaisant T^n = Id. La Section II montrera que n = 3 est imposé par la non-factorisabilité — ce n'est pas un postulat.",
      },
      {
        title: "Trivialité du commutant conjoint",
        tag: "Résultat établi",
        content:
          "Le Théorème I.1 démontre qu'il n'existe aucune sous-algèbre de von Neumann commutative non triviale dans B(ℋ_adm) commutant avec D et T. Conséquence (Corollaire I.1) : {D,T}′ = ℂ·Id. Aucun opérateur non scalaire ne commute simultanément avec D et T. C'est le contenu opérationnel exact de la non-factorisabilité admissible.",
      },
    ],
    diagram: "triplet",
    quiz: [
      {
        question:
          "Qu'est-ce que la non-factorisabilité spectrale admissible exclut précisément ?",
        options: [
          "Toute décomposition de ℋ_adm en sous-espaces propres",
          "L'existence de bases propres factorisables dans tout sous-espace spectral stable par D",
          "L'action de tout groupe discret sur ℋ",
          "L'existence d'un spectre discret pour D",
        ],
        answer: 1,
        explanation:
          "La Définition I.3 stipule : il n'existe pas de base propre factorisable pour D dans aucun sous-espace spectral stable satisfaisant les contraintes internes. C'est cela, et non simplement l'absence de décomposition de ℋ, qui est la contrainte opératoire centrale.",
      },
      {
        question:
          "Le Corollaire I.1 ({D,T}′ = ℂ·Id) signifie que :",
        options: [
          "D et T commutent entre eux",
          "D et T ont les mêmes valeurs propres",
          "Tout opérateur commutant simultanément avec D et T est scalaire",
          "Le spectre de D est borné",
        ],
        answer: 2,
        explanation:
          "La trivialité du commutant conjoint signifie qu'aucun opérateur non scalaire ne commute à la fois avec D et T. Cela interdit toute algèbre interne commutative compatible avec l'admissibilité — donc toute procédure de localisation interne directe.",
      },
      {
        question:
          "En quoi IST diffère-t-il fondamentalement des approches Kaluza–Klein ?",
        options: [
          "IST utilise un groupe de jauge discret plutôt que continu",
          "Dans IST, l'espace interne est fondamentalement non localisable par construction spectrale",
          "IST postule une dimension supplémentaire compacte différente",
          "IST n'utilise pas d'espace de Hilbert",
        ],
        answer: 1,
        explanation:
          "Dans Kaluza–Klein, l'espace interne admet une interprétation géométrique locale (position interne définissable). Dans IST, la structure interne est fondamentalement non localisable, comme le montre le Corollaire I.2 : toute grandeur observable doit être construite au niveau de la description 4D effective, par projection des modes admissibles sur M₄.",
      },
    ],
    memo: [
      "S_adm est sélectionné par les contraintes 𝒞, pas postulé comme objet primitif.",
      "La non-factorisabilité = pas de base propre factorisable dans aucun sous-espace stable par D.",
      "{D,T}′ = ℂ·Id : aucun opérateur interne non scalaire ne commute avec D et T — clé de toute la suite.",
    ],
    exercise: {
      prompt:
        "Expliquez avec vos propres mots pourquoi la trivialité du commutant conjoint {D,T}′ = ℂ·Id est la traduction opératorielle exacte de la non-factorisabilité spectrale admissible. Que se passerait-il si ce commutant contenait un opérateur non scalaire ?",
      correction:
        "Si un opérateur A non scalaire commutait avec D et T, A générerait une sous-algèbre commutative non triviale dans B(ℋ_adm). Par le théorème de représentation des algèbres de von Neumann, cela permettrait de décomposer ℋ_adm en intégrale directe au-dessus d'un espace mesuré, avec D et T fibrés — ce qui fournirait des bases propres factorisables, contredisant directement la Définition I.3. La trivialité du commutant est donc exactement ce qui verrouille la non-factorisabilité au niveau opérationnel.",
    },
  },

  {
    id: 2,
    shortTitle: "Contrainte ternaire",
    title: "Contrainte ternaire minimale et classification",
    intro:
      "Ce chapitre démontre le résultat le plus frappant de la première partie d'IST : la non-factorisabilité spectrale n'est pas compatible avec n'importe quelle action cyclique. Elle impose n = 3 comme ordre minimal. Ce n'est pas un postulat : c'est une conséquence.",
    goal:
      "Comprendre pourquoi ℤ₃ est l'unique groupe cyclique minimal compatible avec la non-factorisabilité spectrale, maîtriser la décomposition ternaire ℋ_adm = ℋ₀ ⊕ ℋ₁ ⊕ ℋ₂, et identifier l'invariant spectral 8/3.",
    plan: [
      "Définir les actions discrètes admissibles (Définition II.1) : libre, cohérente, sans dégénérescence singulière",
      "Démontrer la minimalité de ℤ₃ par exclusion systématique (Proposition II.1)",
      "Construire la décomposition ternaire canonique ℋ₀ ⊕ ℋ₁ ⊕ ℋ₂",
      "Calculer l'invariant spectral ternaire ρ = 8/3 dans la réalisation canonique S₀",
    ],
    notions: [
      {
        title: "Action admissible d'un groupe discret",
        tag: "Définition",
        content:
          "Une action de Γ est admissible si : (a) elle est libre — aucun élément non trivial ne fixe un point de Σ ; (b) elle agit de manière cohérente sur les opérateurs spectraux ; (c) elle ne génère pas de dégénérescences spectrales singulières. Ces conditions garantissent que la contrainte produit une structure géométrique propre.",
      },
      {
        title: "Preuve de la minimalité de ℤ₃",
        tag: "Résultat établi",
        content:
          "Pour n = 1 : action triviale, espace factorisable. Pour n = 2 : la contrainte ℓ₁ + ℓ₂ ≡ 0 (mod 2) produit ℋ_adm = (ℋ_pair ⊗ ℋ_pair) ⊕ (ℋ_impair ⊗ ℋ_impair) — encore factorisable. Pour n = 3 : la contrainte ℓ₁ + ℓ₂ ≡ 0 (mod 3) rend la factorisation impossible. Le mode (1,0) est exclu tandis que (2,1) est admis : aucun choix indépendant de sous-espaces ne peut satisfaire cette sélection.",
      },
      {
        title: "Décomposition ternaire canonique",
        tag: "Structure centrale",
        content:
          "Sous T³ = Id, les valeurs propres de T sont les racines cubiques de l'unité ω = e^{2πi/3}. Les projecteurs P_k = (1/3)(Id + ω^{-k}T + ω^{-2k}T²) décomposent ℋ_adm en trois secteurs ℋ₀ ⊕ ℋ₁ ⊕ ℋ₂. Le secteur physique ℋ₀ = ℋ_adm est sélectionné par la contrainte ℓ₁ + ℓ₂ ≡ 0 (mod 3). Cette décomposition est une conséquence directe de T³ = Id, sans référence géométrique.",
      },
      {
        title: "Invariant spectral ternaire ρ = 8/3",
        tag: "Signature de S₀",
        content:
          "Dans la réalisation canonique S₀, les valeurs propres de D sont λ_{ℓ₁,ℓ₂} = ℓ₁(ℓ₁+2) + ℓ₂(ℓ₂+2). Les deux premières valeurs propres non triviales de secteurs distincts donnent ρ = λ_{ℓ=2}/λ_{ℓ=1} = 8/3. Sa non-intégralité (8/3 ∉ ℤ) reflète l'irréductibilité sphérique et distingue S₀ d'un tore ou d'une sphère S⁶. C'est une signature spectrale robuste vis-à-vis des déformations admissibles.",
      },
    ],
    diagram: "ternary",
    quiz: [
      {
        question:
          "Pourquoi n = 2 ne suffit-il pas pour produire une non-factorisabilité spectrale ?",
        options: [
          "Parce que ℤ₂ n'agit pas librement sur Σ",
          "Parce que la contrainte ℓ₁ + ℓ₂ ≡ 0 (mod 2) produit encore une somme de produits tensoriels",
          "Parce que ℤ₂ n'est pas un groupe cyclique",
          "Parce que les valeurs propres de T pour n = 2 ne sont pas des racines de l'unité",
        ],
        answer: 1,
        explanation:
          "Pour n = 2, ℋ_adm = (ℋ_pair ⊗ ℋ_pair) ⊕ (ℋ_impair ⊗ ℋ_impair). Cette décomposition est une somme directe de produits tensoriels — l'espace reste donc factorisable au sens spectral. C'est la raison pour laquelle ℤ₂ est insuffisant.",
      },
      {
        question:
          "La décomposition ternaire ℋ_adm = ℋ₀ ⊕ ℋ₁ ⊕ ℋ₂ est-elle un postulat d'IST ?",
        options: [
          "Oui, elle est posée comme axiome fondateur",
          "Non, elle est une conséquence directe de T³ = Id, elle-même imposée par la non-factorisabilité",
          "Elle est postulée pour les besoins du Modèle Standard",
          "Elle provient d'une hypothèse géométrique sur Σ₆",
        ],
        answer: 1,
        explanation:
          "La Remarque I.2 est explicite : T³ = Id n'est pas un postulat du cadre admissible, mais une conséquence de la structure spectrale (Proposition II.1). La décomposition ternaire en découle canoniquement via les projecteurs P_k sans référence à aucune géométrie.",
      },
      {
        question: "L'invariant ρ = 8/3 est significatif parce que :",
        options: [
          "Il prouve que S₀ est isométrique à S⁶",
          "Sa non-intégralité reflète l'irréductibilité de la structure sphérique et distingue S₀ d'un tore",
          "Il donne directement la constante de couplage de jauge",
          "Il montre que le spectre de D est continu",
        ],
        answer: 1,
        explanation:
          "La Remarque II.1 l'explicite : 8/3 ∉ ℤ reflète l'irréductibilité de la structure sphérique, distingue S₀ d'une sphère S⁶ ou d'un tore, et constitue une signature spectrale robuste vis-à-vis des déformations admissibles préservant la structure ternaire.",
      },
    ],
    memo: [
      "ℤ₁ et ℤ₂ produisent des espaces factorisables — seul ℤ₃ (et au-delà) force la non-factorisabilité.",
      "La décomposition ℋ₀ ⊕ ℋ₁ ⊕ ℋ₂ suit de T³ = Id via les projecteurs P_k — sans hypothèse géométrique.",
      "ρ = 8/3 est un invariant spectral de S₀ : non entier, donc S₀ n'est ni un tore ni S⁶.",
    ],
    exercise: {
      prompt:
        "Montrez, en reprenant l'argument de la Proposition II.1, pourquoi n = 3 rend impossible la factorisation ℋ_adm = ℋ_A ⊗ ℋ_B. Identifiez précisément les deux modes qui créent la contradiction.",
      correction:
        "La contrainte est ℓ₁ + ℓ₂ ≡ 0 (mod 3). Le mode (0,0) est admissible : donc 0 ∈ ℋ_A et 0 ∈ ℋ_B. Le mode (2,1) est admissible (2+1=3≡0) : donc 2 ∈ ℋ_A et 1 ∈ ℋ_B. Mais si 2 ∈ ℋ_A et 0 ∈ ℋ_B, la paire (2,0) devrait appartenir à ℋ_A ⊗ ℋ_B. Or 2+0=2 ≢ 0 (mod 3), donc (2,0) est exclu de ℋ_adm : contradiction. La factorisation est impossible.",
    },
  },

  {
    id: 3,
    shortTitle: "Spectre & hiérarchie",
    title: "Structure spectrale non homogène et hiérarchie des masses",
    intro:
      "Les Sections III et IV posent un cadre d'orientation pour des questions qui seront résolues dans IST-III. Elles introduisent la notion de lisibilité spectrale non uniforme et la possibilité d'une hiérarchie des masses sans paramètre libre — sans prétendre fermer ces problèmes ici.",
    goal:
      "Comprendre ce que signifie une structure spectrale non homogène, distinguer les poids spectraux des corrections dynamiques, et saisir pourquoi une décomposition faiblement couplée pourrait produire une hiérarchie sans ajustement.",
    plan: [
      "Définir la lisibilité spectrale effective et la non-homogénéité du spectre effectif",
      "Introduire la projection physique pondérée Π_phys = Σ_n w_n P_n",
      "Formuler les contraintes de cohérence sur les poids spectraux (Proposition III.1)",
      "Définir la décomposition faiblement couplée et la hiérarchie spectrale (Sections III–IV)",
    ],
    notions: [
      {
        title: "Lisibilité spectrale effective",
        tag: "Notion préparatoire",
        content:
          "Un mode ψ_n est lisible à l'échelle Λ si et seulement si λ_n ≤ Λ. La lisibilité est uniforme si tous les modes d'un même secteur ternaire contribuent identiquement. Elle est non uniforme si les poids w_n varient — c'est ce que formalise la Section III, en laissant ouverts les calculs explicites.",
      },
      {
        title: "Spectre effectif non homogène",
        tag: "Définition",
        content:
          "La structure spectrale est non homogène si λ_n = λ_n^0 + δ_n, où δ_n reflète une propriété intrinsèque de la projection effective, non une perturbation dynamique. Les corrections δ_n ne sont pas des paramètres libres : elles doivent résulter de la structure spectrale interne. Le calcul explicite reste ouvert.",
      },
      {
        title: "Décomposition faiblement couplée",
        tag: "Conditionnel",
        content:
          "Une partition Spec(D) = ⊔_i Σ_i est faiblement couplée si sup|⟨ψᵢ, ψⱼ⟩| ≪ 1 pour i ≠ j (Définition IV.1). Si elle existe, elle produit une hiérarchie λ₁ ≪ λ₂ ≪ λ₃ et, via la relation masse-spectre, m₁ ≪ m₂ ≪ m₃. Son existence pour S₀ reste un programme ouvert.",
      },
      {
        title: "Identification aux familles fermioniques",
        tag: "Conjecture structurelle",
        content:
          "La contrainte ℤ₃ produit naturellement trois secteurs Σ₁ ⊔ Σ₂ ⊔ Σ₃ du spectre admissible. La Remarque IV.1 est explicite : l'identification de ces secteurs aux trois familles de fermions est une conjecture structurelle, non une démonstration. Elle est développée dans IST-II et IST-III.",
      },
    ],
    diagram: "spectrum",
    quiz: [
      {
        question:
          "Quel est le statut des Sections III et IV dans IST-I ?",
        options: [
          "Elles démontrent l'origine des masses des fermions",
          "Elles ont un statut préparatoire : elles ouvrent le programme d'IST-III sans le fermer",
          "Elles établissent la hiérarchie des trois familles comme résultat rigoureux",
          "Elles introduisent un mécanisme dynamique de brisure de symétrie",
        ],
        answer: 1,
        explanation:
          "Le préambule de la Section III est explicite : ces sections ont un statut préparatoire, elles n'établissent pas encore la hiérarchie des masses, et leur contenu doit être lu comme un cadre d'orientation pour IST-III, non comme une fermeture partielle du problème des familles.",
      },
      {
        question:
          "Les corrections δ_n dans λ_n = λ_n^0 + δ_n sont-elles des paramètres libres ?",
        options: [
          "Oui, elles sont ajustées phénoménologiquement",
          "Non, elles doivent résulter de la structure spectrale interne — leur calcul reste ouvert",
          "Oui, elles correspondent aux masses des bosons de jauge",
          "Non, elles sont identiquement nulles dans IST",
        ],
        answer: 1,
        explanation:
          "La Définition III.2 est claire : les corrections δ_n reflètent une propriété intrinsèque de la projection effective, non une perturbation dynamique, et ne sont pas des paramètres libres. Leur calcul dans S₀ est un problème ouvert explicitement signalé.",
      },
      {
        question:
          "L'identification des secteurs Σᵢ aux familles fermioniques est :",
        options: [
          "Un résultat démontré dans IST-I via la ternarité de ℤ₃",
          "Une conjecture structurelle développée dans IST-II et IST-III",
          "Un postulat du cadre spectral admissible",
          "Une conséquence directe de la Proposition II.1",
        ],
        answer: 1,
        explanation:
          "La Remarque IV.1 est sans ambiguïté : 'l'identification des secteurs Σᵢ aux familles de fermions est une conjecture structurelle, non une démonstration.' IST-I pose seulement le cadre permettant de formuler cette identification.",
      },
    ],
    memo: [
      "Les Sections III–IV sont programmatiques : elles ouvrent IST-III sans le fermer ici.",
      "Les δ_n ne sont pas libres mais leur calcul explicite reste ouvert.",
      "Trois secteurs spectraux ← ℤ₃ : structurellement motivé, pas encore identifié aux trois familles.",
    ],
    exercise: {
      prompt:
        "Expliquez la différence entre un paramètre libre et une correction spectrale δ_n intrinsèque. Pourquoi cette distinction est-elle cruciale pour le programme d'IST ?",
      correction:
        "Un paramètre libre est une valeur ajustée a posteriori sur les données, sans contrainte interne. Une correction spectrale intrinsèque est au contraire entièrement déterminée par la géométrie spectrale du triplet admissible — elle est en principe calculable à partir de S₀, même si le calcul n'est pas encore effectué. Cette distinction est cruciale pour IST car elle conditionne la falsifiabilité du programme : si les δ_n étaient libres, IST ne prédirait rien sur les masses. Comme ils ne le sont pas (par construction), les masses fermioniques sont des invariants spectraux que IST-III devra calculer.",
    },
  },

  {
    id: 4,
    shortTitle: "Projection 4D",
    title: "Construction quadridimensionnelle effective",
    intro:
      "Cette section formalise le passage central d'IST : comment une structure spectrale interne admissible devient physiquement lisible en quatre dimensions. La projection π_Λ est canonique dès que la troncature est fixée. Elle est indépendante de toute hypothèse dynamique.",
    goal:
      "Maîtriser la construction π_Λ : ℋ_adm → C^∞(M₄)^{N_Λ} par décomposition modale, comprendre ses propriétés de canonicité et d'indépendance dynamique, et saisir comment les champs 4D émergent comme coefficients modaux.",
    plan: [
      "Définir la troncature spectrale I_Λ = {n | λ_n ≤ Λ} et l'espace tronqué ℋ_Λ",
      "Construire π_Λ par décomposition modale : φ_n(x) = ⟨ψ_n, Ψ(x,·)⟩",
      "Établir canonicité, injectivité et indépendance dynamique (Propositions V.1–V.3)",
      "Identifier le symbole principal de l'opérateur effectif projeté P_eff,Λ",
    ],
    notions: [
      {
        title: "Troncature spectrale",
        tag: "Construction",
        content:
          "La troncature à l'échelle Λ sélectionne les modes dont λ_n ≤ Λ : I_Λ = {n ∈ ℕ | λ_n ≤ Λ}, puis ℋ_Λ = Vect{ψ_n | n ∈ I_Λ} de dimension N_Λ. Cette opération est purement spectrale et ne fait intervenir aucune structure géométrique sur l'espace interne.",
      },
      {
        title: "La projection π_Λ et les champs effectifs",
        tag: "Construction centrale",
        content:
          "π_Λ : ℋ_adm → C^∞(M₄)^{N_Λ} est définie par la décomposition Ψ(x,y) = Σ_{n∈I_Λ} φ_n(x) ψ_n(y) avec φ_n(x) = ⟨ψ_n, Ψ(x,·)⟩. Les champs effectifs φ_n ne sont pas postulés a priori : ils émergent comme coefficients des modes internes admissibles dans la description 4D.",
      },
      {
        title: "Indépendance dynamique de π_Λ",
        tag: "Résultat établi",
        content:
          "La Proposition V.3 établit que π_Λ est indépendante de toute équation du mouvement, de toute structure causale, et de toute métrique sur M₄. C'est une propriété essentielle : la projection 4D précède et ne dépend pas des lois dynamiques — celles-ci émergent ensuite, en régime infrarouge.",
      },
      {
        title: "Symbole principal et scalarité interne",
        tag: "Résultat établi",
        content:
          "Pour l'opérateur total D = D_4 ⊗ Id + Id ⊗ D_Σ dans la forme minimale, le symbole principal de P_eff,Λ = D²_eff,Λ est σ(P_eff,Λ)(x,ξ) = a^{μν}(x) ξ_μ ξ_ν Id_{N_Λ}. La proportionnalité à l'identité sur le secteur interne projeté exprime l'absence de structure propagative interne indépendante — conséquence de la non-factorisabilité.",
      },
    ],
    diagram: "projection",
    quiz: [
      {
        question:
          "Comment les champs effectifs φ_n(x) sont-ils obtenus dans la construction π_Λ ?",
        options: [
          "Ils sont postulés a priori comme champs de jauge",
          "Ils émergent comme coefficients de la décomposition modale Ψ(x,y) = Σ φ_n(x) ψ_n(y)",
          "Ils sont définis par une équation dynamique sur M₄",
          "Ils sont sélectionnés par une hypothèse de minimalité de l'action",
        ],
        answer: 1,
        explanation:
          "Les champs φ_n(x) = ⟨ψ_n, Ψ(x,·)⟩ sont les projections de l'état total sur les modes internes admissibles. Ils ne sont pas postulés : ils émergent naturellement de la décomposition modale, comme le souligne la Définition V.3.",
      },
      {
        question:
          "Pourquoi le symbole principal de P_eff,Λ est-il proportionnel à l'identité sur le secteur interne ?",
        options: [
          "Par hypothèse de symétrie de jauge",
          "Parce que D_Σ et D_4 commutent dans la forme minimale",
          "Parce que la non-factorisabilité interdit toute structure propagative interne indépendante au niveau principal",
          "Par choix de la normalisation des modes propres ψ_n",
        ],
        answer: 2,
        explanation:
          "L'existence de composantes principales internes non équivalentes introduirait une décomposition supplémentaire du secteur projeté, incompatible avec la contrainte de non-factorisabilité admissible. La scalarité interne du symbole principal est donc une conséquence de la non-factorisabilité.",
      },
      {
        question: "La projection π_Λ dépend-elle d'une métrique sur M₄ ?",
        options: [
          "Oui, elle utilise la métrique lorentzienne émergente",
          "Non, elle est indépendante de toute structure dynamique sur M₄",
          "Oui, elle requiert au moins une structure conforme",
          "Non, mais elle dépend d'une orientation de M₄",
        ],
        answer: 1,
        explanation:
          "La Proposition V.3 est explicite : π_Λ est indépendante de toute équation du mouvement, de toute structure causale, et de toute métrique sur M₄. La projection est purement spectrale et précède toute hypothèse dynamique.",
      },
    ],
    memo: [
      "π_Λ est définie par décomposition modale — les champs φ_n émergent, ils ne sont pas postulés.",
      "Indépendance dynamique de π_Λ : elle précède toute métrique ou équation du mouvement.",
      "Symbole principal scalaire interne = conséquence directe de la non-factorisabilité.",
    ],
    exercise: {
      prompt:
        "Pourquoi dit-on que les champs effectifs φ_n 'émergent' plutôt qu'ils sont 'introduits' ? Quel est l'enjeu conceptuel de cette distinction dans le programme d'IST ?",
      correction:
        "Introduire un champ signifie le poser comme degré de liberté primitif, avec des propriétés ad hoc. Dire qu'il émerge signifie qu'il est entièrement déterminé par une structure préexistante — ici le mode interne ψ_n et la structure spectrale du triplet admissible. L'enjeu conceptuel est crucial : IST cherche à dériver les structures de la physique (champs, symétries, dynamique) à partir du seul cadre spectral non-factorisable, sans les postuler. Si les champs φ_n étaient introduits, IST ne serait qu'une reformulation; s'ils émergent, c'est un programme de dérivation.",
    },
  },

  {
    id: 5,
    shortTitle: "Unicité de la projection",
    title: "Unicité minimale de la projection quadridimensionnelle",
    intro:
      "La projection π_Λ a été construite explicitement à la section précédente. Il reste à montrer qu'elle n'est pas un choix arbitraire parmi d'autres possibilités : elle est imposée par la structure admissible elle-même. C'est l'objet du Théorème V.5.1 — résultat conditionnel fort.",
    goal:
      "Comprendre le groupe des automorphismes internes G, la notion de projection physiquement admissible, et pourquoi toute telle projection coïncide, à isomorphisme près, avec π_Λ — sous l'hypothèse (H4) d'identification entre contenu physique lisible et orbites de G.",
    plan: [
      "Définir G = {U ∈ 𝒰(ℋ_adm) | [U,D] = [U,T] = 0} et le quotient ℋ_adm/G",
      "Formuler les projections physiquement admissibles (Définition V.5.1)",
      "Démontrer l'invariance nécessaire sous G (Proposition V.5.1) et la descente au quotient",
      "Établir l'unicité minimale et la canonicité (Théorème V.5.1, conditionnel fort)",
    ],
    notions: [
      {
        title: "Groupe des automorphismes internes G",
        tag: "Définition",
        content:
          "G = {U ∈ 𝒰(ℋ_adm) | [U,D] = 0, [U,T] = 0}. Ses éléments préservent le spectre de D, la décomposition ternaire induite par T, et ℋ_adm. L'action de G représente une redondance interne de description sans signification physique indépendante. La projection canonique q : ℋ_adm → ℋ_adm/G est la structure fondamentale.",
      },
      {
        title: "Projection physiquement admissible",
        tag: "Définition centrale",
        content:
          "Une projection Π : ℋ_adm → E_4D est physiquement admissible si : (i) elle ne dépend que des données lisibles en 4D ; (ii) elle est compatible avec D, T et la décomposition spectrale ; (iii) elle n'introduit aucune donnée interne supplémentaire non accessible à la lisibilité 4D. En particulier, elle ne peut pas distinguer deux états d'une même orbite sous G.",
      },
      {
        title: "Unicité minimale : le Théorème V.5.1",
        tag: "Conditionnel fort",
        content:
          "Sous les hypothèses (H1) non-factorisabilité, (H2) interdiction de lecture interne directe, (H3) lisibilité 4D minimale, et (H4) identification explicite entre contenu physique lisible et orbites de G, toute projection physiquement admissible se factorise uniquement par ℋ_adm/G. La projection 4D est unique à isomorphisme près, minimale et canonique. Sans (H4), on obtient le quotient canonique mais pas l'unicité physique complète.",
      },
      {
        title: "Algèbre des observables 4D",
        tag: "Corollaire",
        content:
          "Le Corollaire V.5.4 identifie 𝒪_4D = 𝒪_adm^G : les observables physiquement admissibles sont exactement les fonctions G-invariantes des observables admissibles. Toute tentative d'enrichir la description par des étiquettes distinguant des états d'une même orbite G réintroduit une lecture interne directe incompatible avec le cadre IST.",
      },
    ],
    diagram: "quotient",
    quiz: [
      {
        question:
          "Pourquoi toute projection physiquement admissible doit-elle être G-invariante ?",
        options: [
          "Parce que G est un groupe de symétrie de jauge postulé",
          "Parce que deux états d'une même orbite G ont le même contenu physique 4D lisible — les distinguer introduirait une information interne non observable",
          "Parce que G commute avec l'opérateur de masse",
          "Pour assurer la renormalisabilité de la théorie effective",
        ],
        answer: 1,
        explanation:
          "La Définition V.5.1(iii) est précise : une projection physiquement admissible ne peut pas dépendre d'informations internes non accessibles à la lisibilité 4D. Or G encode précisément les redondances internes — les transformations qui laissent invariant tout contenu physique lisible. Si Π(Uψ) ≠ Π(ψ) pour U ∈ G, elle distinguerait des états physiquement identiques.",
      },
      {
        question:
          "L'hypothèse (H4) dans le Théorème V.5.1 est nécessaire pour obtenir :",
        options: [
          "La factorisation canonique au quotient (Proposition V.5.2)",
          "L'unicité physique complète — sans (H4), on obtient le quotient mais pas l'injectivité physique",
          "L'existence du groupe G",
          "La non-factorisabilité de ℋ_adm",
        ],
        answer: 1,
        explanation:
          "Sans (H4), la Proposition V.5.2 donne déjà la factorisation canonique par le quotient. Mais pour conclure à l'injectivité de Π̃ sur son image — et donc à l'unicité physique —, il faut que ψ et ψ′ de même image aient le même contenu physique lisible, ce qui est exactement (H4). Le statut du théorème est 'conditionnel fort' précisément à cause de cette hypothèse.",
      },
      {
        question:
          "Que signifie l'équation 𝒪_4D = 𝒪_adm^G ?",
        options: [
          "Les observables 4D sont construites à partir d'opérateurs G non invariants",
          "Les observables 4D sont exactement les fonctions G-invariantes des observables admissibles",
          "G agit trivialement sur toutes les observables admissibles",
          "Les observables admissibles sont un sous-ensemble des observables 4D",
        ],
        answer: 1,
        explanation:
          "L'exposant G désigne les invariants sous G. 𝒪_4D = 𝒪_adm^G signifie que seules les observables invariantes sous le groupe d'automorphismes internes sont physiquement accessibles dans la description 4D. C'est la formulation algébrique du principe de lisibilité 4D minimale.",
      },
    ],
    memo: [
      "G encode les redondances internes : éléments qui ne changent pas le contenu physique lisible.",
      "La projection 4D est unique à isomorphisme près — sous (H4) qui identifie équivalence physique et orbites de G.",
      "𝒪_4D = 𝒪_adm^G : seules les observables G-invariantes sont physiques.",
    ],
    exercise: {
      prompt:
        "Expliquez pourquoi la 'dimension émergente' dans IST ne signifie pas que M₄ est choisie arbitrairement. En quoi l'unicité de π_Λ montre-t-elle que '4D est forcé' ?",
      correction:
        "La projection vers la physique 4D n'est pas un choix parmi d'autres représentations possibles : elle est imposée par le quotient des redondances internes. La dimension 4 n'est pas postulée comme cadre préalable — elle apparaît comme le niveau descriptif minimal compatible avec l'effacement des redondances internes G et l'interdiction de toute localisation interne directe. L'unicité de π_Λ à isomorphisme près signifie que toute autre tentative de description 'à plus haute résolution interne' réintroduit des informations non physiquement lisibles, violant les contraintes de l'admissibilité spectrale.",
    },
  },

  {
    id: 6,
    shortTitle: "Secteur de jauge",
    title: "Lisibilité locale, secteur de jauge et invariance interne",
    intro:
      "Une fois la projection 4D canonique établie, la question suivante est : quelles structures supplémentaires émergent quand cette projection est rendue locale sur M₄ ? La localisation des redondances internes impose l'apparition d'une connexion de jauge — sous des hypothèses explicites.",
    goal:
      "Comprendre comment la localisation du groupe G sur M₄ force l'introduction d'une connexion A_μ(x) ∈ 𝔤, démontrer le masslessness classique des bosons de jauge, et saisir le lien entre ce mécanisme et la trivialité du commutant {D,T}′.",
    plan: [
      "Définir G = {U | UDU⁻¹ = D, UTU⁻¹ = T} et la lisibilité 4D minimale",
      "Montrer que la dérivée ordinaire ∂_μ brise la covariance locale (Proposition VI.4.2)",
      "Introduire la connexion ∇_μ = ∂_μ + A_μ par cohérence locale (Théorème VI.4.1)",
      "Établir le masslessness classique par l'invariance de jauge (Théorème VI.3)",
    ],
    notions: [
      {
        title: "Localisation de G et non-covariance de ∂_μ",
        tag: "Mécanisme central",
        content:
          "L'invariance globale sous G est une propriété des observables. Quand on rend cette invariance locale — U(x) ∈ G dépendant du point — la dérivée ordinaire se transforme selon ∂_μ(U(x)ψ) = U(x)∂_μψ + (∂_μU(x))ψ. Le terme (∂_μU)ψ brise la covariance et est inévitable. La cohérence impose d'introduire un champ compensateur.",
      },
      {
        title: "La connexion A_μ comme structure minimale",
        tag: "Résultat conditionnel",
        content:
          "La dérivée covariante ∇_μ = ∂_μ + A_μ, avec A_μ(x) ∈ 𝔤, restaure la covariance locale : ∇_μ(U(x)ψ) = U(x)∇_μψ sous la loi de transformation A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹. La connexion n'est pas un degré de liberté indépendant ajouté : c'est la structure minimale requise par la cohérence locale de la projection 4D.",
      },
      {
        title: "Masslessness classique nécessaire",
        tag: "Résultat établi sous hypothèses IR",
        content:
          "Le Théorème VI.3 démontre qu'un terme de masse Tr(A_μA^μ) n'est pas invariant sous les transformations locales A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹ : les termes croisés en ∂_μg ne se compensent pas. En revanche, F_{μν} ↦ UF_{μν}U⁻¹ se transforme de manière homogène, garantissant l'invariance de Tr(F_{μν}F^{μν}). Les bosons de jauge issus de la lisibilité 4D minimale sont nécessairement sans masse au niveau classique.",
      },
      {
        title: "Lien avec la trivialité du commutant",
        tag: "Observation structurelle",
        content:
          "La Remarque VI.4.2 établit le lien avec le Corollaire I.1 : la trivialité de {D,T}′ = ℂ·Id garantit que A_μ ne peut transporter d'information interne indépendante. Aucun projecteur interne non trivial ne commute avec D et T, de sorte que le champ A_μ constitue uniquement la correction de covariance locale nécessaire, sans contenu physique résiduel interne.",
      },
    ],
    diagram: "quotient",
    quiz: [
      {
        question:
          "La connexion A_μ est-elle postulée indépendamment dans IST ?",
        options: [
          "Oui, comme dans le Modèle Standard où les champs de jauge sont des degrés de liberté fondamentaux",
          "Non, elle est la structure compensatrice minimale imposée par la localisation de G et la cohérence locale",
          "Oui, elle est introduite pour assurer la renormalisabilité",
          "Non, elle est dérivée d'une symétrie globale de S₀",
        ],
        answer: 1,
        explanation:
          "Le Théorème VI.4.1 établit que A_μ apparaît comme conséquence nécessaire de la localisation du groupe d'automorphismes internes G. Elle n'est pas un degré de liberté indépendant ajouté, mais la structure minimale requise pour que la description locale sur M₄ soit cohérente avec la redondance interne G.",
      },
      {
        question:
          "Pourquoi un terme de masse Tr(A_μA^μ) est-il exclu dans IST (au niveau classique) ?",
        options: [
          "Parce que A_μ est massless par postulat",
          "Parce que les bosons de jauge sont des particules scalaires",
          "Parce que ce terme n'est pas invariant sous les transformations locales A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹",
          "Parce que la constante cosmologique interdit un terme de masse",
        ],
        answer: 2,
        explanation:
          "Le Théorème VI.3 démontre explicitement que sous la transformation locale, Tr(A_μA^μ) développe des termes croisés en ∂_μg qui ne se compensent pas — rendant ce terme non invariant. L'invariance de jauge locale, imposée par la structure du cadre, interdit donc tout terme de masse pour les bosons de jauge.",
      },
      {
        question:
          "L'identification du groupe G avec SU(3)×SU(2)×U(1) est-elle établie dans IST-I ?",
        options: [
          "Oui, c'est le résultat principal du Théorème VI.4.1",
          "Non, c'est un programme ouvert : IST-I établit la structure de jauge mais pas l'identification du groupe",
          "Oui, elle découle directement de la ternarité de ℤ₃",
          "Non, et elle ne sera jamais établie dans IST",
        ],
        answer: 1,
        explanation:
          "Le Théorème VI.4.1 établit l'existence d'une structure de jauge locale associée à G, mais l'identification explicite de G avec SU(3)×SU(2)×U(1) est signalée comme programme ouvert. La Section VI.5 examine la compatibilité conditionnelle avec SU(3) si un paquet dégénéré de dimension 3 existe dans S₀.",
      },
    ],
    memo: [
      "La localisation de G impose une connexion A_μ — pas un postulat, une nécessité de cohérence.",
      "Masslessness classique des bosons de jauge : conséquence directe de l'invariance de jauge locale.",
      "Lien fondamental : trivialité du commutant {D,T}′ → A_μ uniquement structure compensatrice.",
    ],
    exercise: {
      prompt:
        "Reconstituez l'argument minimal montrant que la dérivée ordinaire ∂_μ brise la covariance locale sous G et qu'une connexion est nécessaire. Quelles sont les hypothèses utilisées ?",
      correction:
        "Hypothèses : (H1) non-factorisabilité (impose l'existence de G), (H2) lisibilité 4D minimale (toute observable est G-invariante), (H3) localité (les transformations g(x) dépendent du point), (H4) invariance physique sous G. Argument : sous g(x) ∈ G, ∂_μ(g(x)ψ) = g(x)∂_μψ + (∂_μg)ψ. Le second terme est inévitable. Pour que la dérivée transforme covariamment — ∇_μ(gψ) = g(∇_μψ) — on doit introduire A_μ avec la loi A_μ ↦ gA_μg⁻¹ − (∂_μg)g⁻¹, ce qui compense exactement le terme (∂_μg)ψ.",
    },
  },

  {
    id: 7,
    shortTitle: "Structure causale",
    title: "Structure causale et cône causal unique",
    intro:
      "Cette section établit comment, à partir de l'opérateur effectif projeté, une structure causale lorentzienne unique émerge. La signature lorentzienne n'est pas postulée : elle est sélectionnée comme seule structure compatible avec un secteur sans masse propagatif et un problème de Cauchy bien posé.",
    goal:
      "Comprendre pourquoi un symbole principal lorentzien est nécessaire (Proposition VII.1), maîtriser le Théorème VII.1 sur la propagation causale, et saisir la sélection conditionnelle d = 4 par le Théorème VII.3.2.",
    plan: [
      "Montrer que l'existence d'un secteur massless propagatif impose l'hyperbolicité (Proposition VII.1)",
      "Établir la propagation causale lorentzienne (Théorème VII.1)",
      "Démontrer l'unicité conditionnelle du cône causal dans le secteur sans masse (Proposition VII.2)",
      "Sélectionner d = 4 sous H_loc, H_cov et H_sel (Théorème VII.3.2)",
    ],
    notions: [
      {
        title: "Hyperbolicité nécessaire du symbole principal",
        tag: "Résultat structurel",
        content:
          "Un symbole elliptique donne un spectre discret sans propagation (incompatible avec un secteur sans masse). Un symbole ultra-hyperbolique (signature (p,q) avec p,q ≥ 2) ne permet pas de problème de Cauchy bien posé au sens de Hadamard. Seul un symbole strictement hyperbolique (signature lorentzienne) est compatible avec un secteur massless propagatif et un cône causal non dégénéré.",
      },
      {
        title: "Propagation causale — Théorème VII.1",
        tag: "Résultat établi",
        content:
          "Pour P de symbole principal σ_P(x,ξ) = h^{μν}(x) ξ_μ ξ_ν Id_E de signature lorentzienne (−,+,+,+) : P est normalement hyperbolique ; l'ensemble caractéristique h^{μν} ξ_μ ξ_ν = 0 définit localement un double cône non dégénéré ; les singularités des solutions se propagent le long des bicaractéristiques nulles de h^{μν}. La vitesse limite c est définie par ω² = c² |k|².",
      },
      {
        title: "Unicité conditionnelle du cône causal",
        tag: "Conditionnel fort",
        content:
          "La Proposition VII.2 établit, sous des hypothèses explicites (projecteur canonique Π₀, dépendance en une même forme quadratique q_{μν}, irréductibilité du secteur massless), que tous les opérateurs sans masse partagent le même cône causal. Le Lemme VII.1 vérifie l'irréductibilité du secteur massless canonique dans S₀ (mode (0,0) de dimension 1).",
      },
      {
        title: "Sélection de d = 4 — Théorème VII.3.2",
        tag: "Conditionnel",
        content:
          "En d < 4 : la gravité locale n'a pas de degrés de liberté propagatifs (d=2 topologique, d=3 Weyl nul). En d > 4 : plusieurs densités lagrangiennes locales covariantes à deux dérivées sont dynamiquement inéquivalentes (Lovelock), et sans invariant spectral supplémentaire (H_sel), aucune n'est sélectionnée. En d = 4 : la classification de Lovelock réduit à √|g| et R√|g| à divergence totale près — l'action gravitationnelle est unique.",
      },
    ],
    diagram: "cone",
    quiz: [
      {
        question:
          "Pourquoi un symbole principal ultra-hyperbolique est-il exclu dans IST ?",
        options: [
          "Parce qu'il produirait des valeurs propres complexes pour D",
          "Parce que le théorème d'Asgeirsson montre qu'il ne permet pas de problème de Cauchy bien posé, interdisant toute causalité locale cohérente",
          "Parce qu'il est incompatible avec la ternarité de ℤ₃",
          "Parce qu'il produirait une dimension d > 4",
        ],
        answer: 1,
        explanation:
          "La Proposition VII.1 cite le théorème d'Asgeirsson : pour un symbole ultra-hyperbolique de signature (p,q) avec p,q ≥ 2, aucune donnée initiale à support compact ne peut engendrer une solution localisée, ce qui interdit toute notion de causalité locale cohérente. C'est l'argument d'exclusion.",
      },
      {
        question:
          "La dimension d = 4 est-elle postulée dans IST ?",
        options: [
          "Oui, c'est un axiome fondateur",
          "Non, elle est sélectionnée conditionnellement par le Théorème VII.3.2 sous H_loc, H_cov et H_sel",
          "Non, IST est formulée en dimension arbitraire",
          "Oui, mais de manière implicite via la structure de S₀",
        ],
        answer: 1,
        explanation:
          "Le Théorème VII.3.2 et son Corollaire VII.3.1 sont explicites : sous H_loc (localité IR), H_cov (covariance difféomorphe), et H_sel (absence de sélection spectrale supplémentaire en d > 4), la dimension d = 4 est la seule pour laquelle l'action gravitationnelle infrarouge est uniquement déterminée. Le résultat est conditionnel mais structurellement motivé.",
      },
      {
        question:
          "L'universalité de la vitesse limite c dans le secteur massless découle de :",
        options: [
          "La relativité restreinte postulée comme axiome",
          "L'unicité du cône causal effectif, elle-même conséquence de l'irréductibilité du secteur massless canonique",
          "La normalisation du mode (0,0) dans S₀",
          "La non-factorisabilité spectrale de ℋ_adm",
        ],
        answer: 1,
        explanation:
          "Le Corollaire VII.1 est précis : tous les champs massless lisibles partagent le même ensemble caractéristique, donc le même cône causal effectif et la même vitesse limite c. Cela découle de la Proposition VII.2 et du Lemme VII.1 sur l'irréductibilité du secteur canonique — non d'un postulat de relativité.",
      },
    ],
    memo: [
      "Signature lorentzienne : seule compatible avec un secteur massless propagatif + Cauchy bien posé.",
      "Cône causal unique dans le secteur massless : conditionnel fort, via l'irréductibilité du mode (0,0).",
      "d = 4 : sélectionné par la rigidité Lovelock + H_sel — conditionnel mais non arbitraire.",
    ],
    exercise: {
      prompt:
        "Expliquez en quoi la sélection de d = 4 dans IST est différente d'un postulat. Quelles hypothèses sont utilisées et laquelle reste la plus délicate ?",
      correction:
        "Un postulat affirme d = 4 sans justification. Le Théorème VII.3.2 dérive d = 4 comme conséquence de trois hypothèses : H_loc (localité IR, nécessaire pour définir la causalité locale), H_cov (covariance difféomorphe, nécessaire pour que la description soit indépendante des coordonnées), et H_sel (absence de principe spectral supplémentaire sélectionnant parmi les densités de Lovelock en d > 4). L'hypothèse la plus délicate est H_sel : elle reconnaît qu'IST-I ne dispose pas encore d'un mécanisme spectral interne qui, en d > 4, sélectionnerait une combinaison privilégiée des invariants de Lovelock. Sans H_sel, le résultat ne serait pas établi.",
    },
  },

  {
    id: 8,
    shortTitle: "Gravitation effective",
    title: "Gravitation effective et constantes spectrales",
    intro:
      "Une fois la structure causale lorentzienne établie, la question est : quelle dynamique métrique est compatible avec la description effective ? Le théorème de Lovelock répond : en dimension 4, c'est uniquement l'action d'Einstein–Hilbert avec constante cosmologique. Et dans IST, G_N et Λ ont une origine spectrale.",
    goal:
      "Comprendre l'unicité conditionnelle de la dynamique gravitationnelle infrarouge (Théorème VIII.1), écrire les équations d'Einstein comme conséquence de cette unicité, et situer l'origine spectrale de G_N et Λ via les coefficients du noyau de chaleur.",
    plan: [
      "Identifier la métrique effective g_{μν} à partir du symbole principal de P_eff",
      "Établir l'unicité de l'action gravitationnelle par la classification de Lovelock (Théorème VIII.1)",
      "Dériver les équations d'Einstein avec constante cosmologique (Section VIII.3)",
      "Relier G_N et Λ aux coefficients spectraux a₀ et a₂ du noyau de chaleur de D_Σ",
    ],
    notions: [
      {
        title: "Métrique effective émergente",
        tag: "Résultat établi",
        content:
          "Le symbole principal σ(P)(x,k) = g^{μν}(x) k_μ k_ν définit une structure quadratique lorentzienne. Cette structure est interprétable comme une métrique g_{μν}(x) — l'objet géométrique minimal compatible avec l'hyperbolicité (Section VII), l'absence de référentiel privilégié, et la covariance locale. La métrique n'est pas postulée : elle émerge du symbole principal.",
      },
      {
        title: "Unicité Lovelock de l'action gravitationnelle IR",
        tag: "Conditionnel",
        content:
          "En dimension 4, le théorème de Lovelock implique que toute densité lagrangienne locale, covariante, produisant des équations d'ordre ≤ 2 est, à termes topologiques près, combinaison de √|g| et R√|g|. Donc S_grav[g] = (1/16πG_N) ∫(R − 2Λ)√|g| d⁴x est l'unique action gravitationnelle IR. Ce résultat est conditionnel aux hypothèses formulées à la Section VIII.",
      },
      {
        title: "Équations d'Einstein avec constante cosmologique",
        tag: "Conséquence conditionnelle",
        content:
          "La variation de S_grav donne αG_{μν} + βg_{μν} = (1/2)T_{μν}, soit avec α = 1/(16πG_N) et β = Λ/(8πG_N) les équations G_{μν} + Λg_{μν} = 8πG_N T_{μν}. Ces équations apparaissent comme la seule dynamique infrarouge locale compatible avec les hypothèses retenues — invariance difféomorphe, localité, action à deux dérivées, signature lorentzienne.",
      },
      {
        title: "Origine spectrale de G_N et Λ",
        tag: "Programme ouvert",
        content:
          "Dans IST, G_N et Λ ne sont pas des paramètres libres : ils sont en principe déterminés par les invariants spectraux de S₀. Le noyau de chaleur de D_Σ donne Tr(e^{−tD_Σ²}) ~ Σ a_n t^{(n−6)/2}. Les relations Λ ∝ a₀ et 1/G_N ∝ a₂ identifient ces constantes à des invariants géométriques de Σ₆. Leur calcul explicite est le programme IST-V.",
      },
    ],
    diagram: "cone",
    quiz: [
      {
        question:
          "Pourquoi le théorème de Lovelock est-il crucial dans IST-I ?",
        options: [
          "Il démontre que d = 4 est la seule dimension physique possible",
          "Il garantit qu'en dimension 4, l'action gravitationnelle locale covariante à deux dérivées est unique à termes topologiques près",
          "Il prouve que G_N et Λ sont des paramètres libres",
          "Il interdit l'existence de la constante cosmologique",
        ],
        answer: 1,
        explanation:
          "En dimension 4, Lovelock réduit les densités lagrangiennes locales covariantes à deux dérivées à √|g| et R√|g| (à divergence totale près). Cette unicité est précisément ce qui permet de dériver l'action d'Einstein–Hilbert avec constante cosmologique comme seule dynamique gravitationnelle IR — sans paramètre arbitraire dans la forme de l'action.",
      },
      {
        question:
          "Dans IST, la constante de Newton G_N est-elle un paramètre libre ?",
        options: [
          "Oui, elle est ajustée aux données expérimentales",
          "Non, elle est en principe déterminée par le coefficient spectral a₂ du noyau de chaleur de D_Σ",
          "Non, elle est identiquement nulle dans le cadre spectral",
          "Oui, mais seulement dans le régime ultraviolet",
        ],
        answer: 1,
        explanation:
          "La Remarque VIII.2 est explicite : 1/G_N ∝ a₂ où a₂ est un invariant spectral intrinsèque déterminé par la géométrie de Σ₆. G_N n'est pas un paramètre libre mais un invariant spectral de S₀, en principe calculable. Son calcul explicite est réservé à IST-V.",
      },
      {
        question:
          "En quoi la métrique effective g_{μν} diffère-t-elle dans son statut d'une métrique postulée ?",
        options: [
          "Elle n'en diffère pas : c'est une reformulation terminologique",
          "Elle émerge du symbole principal de l'opérateur effectif projeté, sans être introduite comme objet géométrique primitif",
          "Elle est définie par une équation différentielle de type Einstein–Hilbert a priori",
          "Elle est choisie parmi plusieurs métriques pour minimiser l'action",
        ],
        answer: 1,
        explanation:
          "La métrique effective émerge du symbole principal σ(P)(x,k) = g^{μν}(x)k_μk_ν comme l'objet géométrique minimal compatible avec l'hyperbolicité et la covariance. Elle n'est pas postulée comme structure de fond : elle est dérivée de la structure spectrale via l'opérateur effectif projeté.",
      },
    ],
    memo: [
      "Métrique effective = symbole principal lorentzien — pas postulée mais émergente.",
      "Lovelock en d=4 : action gravitationnelle IR unique = Einstein–Hilbert + constante cosmologique.",
      "G_N ∝ 1/a₂ et Λ ∝ a₀ : invariants spectraux de S₀, pas paramètres libres — calcul ouvert (IST-V).",
    ],
    exercise: {
      prompt:
        "Que signifie dire que les équations d'Einstein 'apparaissent comme la seule dynamique infrarouge locale compatible avec les hypothèses retenues' ? Listez précisément ces hypothèses.",
      correction:
        "Les hypothèses sont : (1) invariance par difféomorphismes sur M₄ ; (2) construction locale à partir de g_{μν} ; (3) action sans dérivées d'ordre > 2 ; (4) équations du mouvement d'ordre au plus 2 ; (5) dimension d = 4 (établie conditionnellement sous H_loc, H_cov, H_sel). Sous ces hypothèses, le théorème de Lovelock réduit toutes les possibilités à αR − 2β, et la variation donne les équations d'Einstein avec constante cosmologique. Ce n'est donc pas une dérivation autonome depuis le spectre, mais une contrainte de cohérence : dès qu'on postule une dynamique métrique locale à deux dérivées, elle doit être einsteinienne.",
    },
  },

  {
    id: 9,
    shortTitle: "Réalisation canonique S₀",
    title: "Réalisation canonique S₀ et spectre filtré",
    intro:
      "Cette section donne une réalisation explicite du cadre abstrait. La variété auxiliaire Σ₆ = (S³ × S³)/ℤ₃ n'est pas un espace physique fondamental : c'est le support de calcul spectral. Le filtrage ternaire réorganise le spectre de S³ × S³ en orbites ℤ₃ cohérentes.",
    goal:
      "Maîtriser la construction de Σ₆ = (S³ × S³)/ℤ₃ comme support de calcul, comprendre le filtrage spectral ternaire et le spectre filtré, et établir la structure spin de Σ₆ et la nullité de l'indice de Dirac.",
    plan: [
      "Présenter Σ₆ = (S³ × S³)/ℤ₃ et son statut de support auxiliaire (pas d'espace physique fondamental)",
      "Identifier S³ ≅ SU(2) et les symétries de représentation Grep (Proposition IX.1)",
      "Calculer le spectre filtré : modes (ℓ₁,ℓ₂) avec ℓ₁ + ℓ₂ ≡ 0 (mod 3)",
      "Établir la structure spin de Σ₆ et la nullité de l'indice analytique (Propositions IX.2–IX.3)",
    ],
    notions: [
      {
        title: "Σ₆ = (S³ × S³)/ℤ₃ : support de calcul",
        tag: "Convention",
        content:
          "Cette écriture ne définit pas un espace physique fondamental. Elle désigne la structure spectrale admissible obtenue après imposition de la contrainte ℤ₃ sur la représentation auxiliaire S³ × S³. Les résultats structurels d'IST-I portent sur le triplet admissible et ne dépendent pas de ce choix particulier. Σ₆ sert de cadre de calcul explicite.",
      },
      {
        title: "Spectre sur S³ × S³ et filtrage ternaire",
        tag: "Construction explicite",
        content:
          "Sur S³, les modes propres ont pour valeur propre λ_ℓ = ℓ(ℓ+2) et dégénérescence d_ℓ = (ℓ+1)². Sur S³ × S³ : λ_{ℓ₁,ℓ₂} = ℓ₁(ℓ₁+2) + ℓ₂(ℓ₂+2), d_{ℓ₁,ℓ₂} = (ℓ₁+1)²(ℓ₂+1)². Le filtrage ℤ₃ sélectionne les modes avec ℓ₁ + ℓ₂ ≡ 0 (mod 3). Premiers modes : (0,0) → λ=0 ; (1,2) et (2,1) → λ=11 ; (3,0) et (0,3) → λ=15.",
      },
      {
        title: "Structure spin de Σ₆",
        tag: "Résultat topologique établi",
        content:
          "La Proposition IX.2 démontre que Σ₆ admet une structure spin : w₂(Σ₆) = 0. La 3-sphère S³ est spin (w₂(S³)=0) ; le produit l'est aussi. L'action libre de ℤ₃ préserve cette structure via le degré de l'application de transfert (deg = 3 ≡ 1 mod 2, donc injectivité de l'application induite en cohomologie ℤ₂). Un fibré des spineurs bien défini 𝒮_Σ → Σ₆ existe.",
      },
      {
        title: "Nullité de l'indice de Dirac sur Σ₆",
        tag: "Résultat établi",
        content:
          "La Proposition IX.3 montre ind(D_Σ) = 0. Par Atiyah–Singer, ind(D_Σ) = ∫ Â(TM). Les classes de Pontryagin p_k ∈ H^{4k}(M;ℚ) vivent en degrés multiples de 4. En degré 6 (non multiple de 4), la composante de Â(TM) est nulle — donc ind(D_Σ) = 0. Ce résultat est purement géométrique ; il ne constitue pas une obstruction au mécanisme chiral.",
      },
    ],
    diagram: "spectrum",
    quiz: [
      {
        question:
          "Que désigne exactement l'écriture Σ₆ = (S³ × S³)/ℤ₃ dans IST ?",
        options: [
          "Un espace physique fondamental avec une réalité ontologique propre",
          "Un support auxiliaire de calcul spectral — la structure spectrale admissible obtenue après imposition de la contrainte ℤ₃",
          "L'espace-temps effectif après réduction dimensionnelle",
          "Le groupe de jauge interne de la théorie",
        ],
        answer: 1,
        explanation:
          "La Remarque IX.1 est explicite : cette écriture ne définit pas un espace physique fondamental. Elle désigne la structure spectrale admissible obtenue après imposition de la contrainte ℤ₃ sur la représentation auxiliaire S³ × S³, utilisée comme support de calcul.",
      },
      {
        question:
          "Pourquoi la nullité de l'indice ind(D_Σ) = 0 ne constitue-t-elle pas une obstruction au mécanisme chiral ?",
        options: [
          "Parce que l'indice analytique est toujours nul en dimension 6",
          "Parce que la chiralité fermionique effective repose sur une asymétrie sectorielle ℤ₃-équivariante, pas sur l'indice topologique global",
          "Parce que D_Σ n'est pas l'opérateur de Dirac physique",
          "Parce que la chiralité est brisée dans IST-I",
        ],
        answer: 1,
        explanation:
          "La Remarque IX.3 distingue deux niveaux : la nullité de l'indice est une propriété topologique globale (ind = ∫Â). La chiralité fermionique effective dans IST repose sur une asymétrie sectorielle induite par la structure ℤ₃-équivariante, développée dans IST-II — un mécanisme distinct de l'indice global.",
      },
      {
        question:
          "Quel est le mode de plus basse énergie non triviale dans le spectre filtré de S₀ ?",
        options: [
          "Le mode (0,0) avec λ = 0",
          "Le mode (1,1) avec λ = 6",
          "Les modes (1,2) et (2,1) avec λ = 11",
          "Les modes (1,0) et (0,1) avec λ = 3",
        ],
        answer: 2,
        explanation:
          "Le mode (0,0) donne λ = 0 (mode zéro). Les modes (1,0) et (0,1) donnent λ = 3 mais 1+0 = 1 ≢ 0 (mod 3) — ils sont filtrés. Le mode (1,1) donne 1+1 = 2 ≢ 0 (mod 3) — filtré aussi. Les premiers modes admissibles non triviaux vérifiant ℓ₁+ℓ₂ ≡ 0 (mod 3) avec λ > 0 sont (2,1) et (1,2) avec λ = 8+3 = 11.",
      },
    ],
    memo: [
      "Σ₆ = support de calcul, pas espace physique fondamental — les résultats d'IST-I ne dépendent pas de ce choix.",
      "Filtrage ternaire : seuls les modes ℓ₁+ℓ₂ ≡ 0 (mod 3) sont admissibles dans ℋ₀.",
      "ind(D_Σ) = 0 : topologique, pas une obstruction — la chiralité effective relève d'IST-II.",
    ],
    exercise: {
      prompt:
        "Vérifiez que les modes (2,0), (0,2), (3,0), (0,3) sont bien admissibles dans le secteur ℋ₀ et calculez leurs valeurs propres. Sont-ils dégénérés ?",
      correction:
        "(2,0) : 2+0=2 — non, pas admissible (2 ≢ 0 mod 3). (0,2) : idem. (3,0) : 3+0=3≡0 — admissible. λ = 3·5+0 = 15. (0,3) : admissible. λ = 0+3·5 = 15. Les modes (3,0) et (0,3) sont donc dégénérés avec la même valeur propre λ=15. Notons aussi (2,1) et (1,2) : 2+1=3≡0, λ = 2·4+1·3 = 11 pour (2,1) et 1·3+2·4 = 11 pour (1,2) — également dégénérés à λ=11.",
    },
  },

  {
    id: 10,
    shortTitle: "Connexion de jauge",
    title: "Émergence contrainte d'une connexion de jauge",
    intro:
      "Ce chapitre redonne, sous forme plus explicite et systématique, l'argument de la Section VI.4 : la connexion A_μ n'est pas ajoutée à la main, mais imposée par la structure du cadre spectral dès que la projection 4D est rendue locale. La répétition est ici pédagogique : elle fixe la forme technique utile pour les Sections XI–XIV.",
    goal:
      "Reformuler clairement l'argument de nécessité d'une connexion de jauge, depuis les hypothèses X.1–X.3 jusqu'au Théorème X.2, en distinguant ce qui est établi de ce qui est conditionnel.",
    plan: [
      "Redéfinir G et le principe de lisibilité minimale (Hypothèse X.1)",
      "Formuler la localité 4D et le choix local de représentants (Hypothèses X.2–X.3)",
      "Démontrer la non-covariance de ∂_μ (Proposition X.1)",
      "Établir l'existence nécessaire de la connexion ∇_μ = ∂_μ + A_μ (Théorème X.2)",
    ],
    notions: [
      {
        title: "Les trois hypothèses structurantes",
        tag: "Cadre",
        content:
          "Hypothèse X.1 (Lisibilité minimale) : deux états reliés par U ∈ G définissent la même configuration physique 4D. Hypothèse X.2 (Localité 4D) : description par des champs locaux ψ(x) sur M₄. Hypothèse X.3 (Choix local de représentants) : le représentant ψ(x) dans chaque classe d'équivalence peut dépendre de x, avec deux représentants reliés par ψ(x) ↦ U(x)ψ(x).",
      },
      {
        title: "Non-covariance de ∂_μ — Proposition X.1",
        tag: "Résultat conditionnel",
        content:
          "Sous les Hypothèses X.1–X.3, la dérivée ordinaire se transforme selon ∂_μψ ↦ U(x)∂_μψ + (∂_μU(x))ψ. Le terme (∂_μU)ψ est inévitable et ne se compense pas sous une transformation locale générale. Il constitue l'obstruction à la covariance — la source structurelle de la nécessité d'une connexion.",
      },
      {
        title: "Émergence nécessaire de la connexion — Théorème X.2",
        tag: "Conditionnel sous X.1–X.3",
        content:
          "Pour restaurer la covariance — ∇_μ(U(x)ψ) = U(x)∇_μψ — il faut introduire ∇_μ = ∂_μ + A_μ(x) avec A_μ(x) ∈ 𝔤 se transformant selon A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹. C'est la seule forme compatible avec l'exigence de covariance (cf. la structure de fibré principal de la Proposition VI.4.4).",
      },
      {
        title: "Statut logique du chapitre X",
        tag: "Clarification",
        content:
          "Ce chapitre ne redémontre pas l'origine du cadre (Section VI.4). Il reformule la même dérivation sous forme plus systématique. Non-covariance de ∂_μ (Proposition X.1) : établi. Existence de la connexion (Théorème X.2) : conditionnel sous X.1–X.3. Identification de G avec le groupe du Modèle Standard : ouvert. Dynamique de type Yang–Mills : conditionnel — relève de la Section XI.",
      },
    ],
    diagram: "quotient",
    quiz: [
      {
        question:
          "Pourquoi le Chapitre X répète-t-il un argument déjà présent en Section VI.4 ?",
        options: [
          "Pour corriger une erreur de la Section VI.4",
          "Pour fixer une forme technique plus explicite et systématique, utile pour les développements spectraux des Sections XI–XIV",
          "Pour démontrer un résultat plus fort que VI.4",
          "Pour introduire de nouvelles hypothèses absent de VI.4",
        ],
        answer: 1,
        explanation:
          "Le préambule de la Section X est explicite : ce chapitre ne lui ajoute pas de principe nouveau — il en donne une reformulation technique et explicite, utile pour les développements spectraux des Sections XI à XIV. La répétition est pédagogique et prépare le terrain pour XII et XIII.",
      },
      {
        question:
          "L'Hypothèse X.3 (choix local de représentants) implique que :",
        options: [
          "Il existe un représentant canonique global dans chaque orbite de G",
          "Le choix d'un représentant ψ(x) peut varier en x, ce qui force la transformation à être locale : U(x) ∈ G",
          "Les orbites de G sont de dimension un",
          "La connexion A_μ est nulle dans une jauge appropriée",
        ],
        answer: 1,
        explanation:
          "L'hypothèse X.3 est précisément que le choix d'un représentant dans chaque classe d'équivalence peut dépendre du point x ∈ M₄. Deux représentants locaux sont reliés par ψ(x) ↦ U(x)ψ(x) avec U(x) ∈ G — c'est le passage de la symétrie globale à la symétrie locale qui rend ∂_μ non covariante.",
      },
      {
        question:
          "Quel est le statut de l'identification de G avec SU(3)×SU(2)×U(1) dans IST-I ?",
        options: [
          "Établi dans le Chapitre IX via la structure de S³ × S³",
          "Ouvert — IST-I établit la structure de jauge sans identifier le groupe précis",
          "Conditionnel fort — sous les hypothèses de la Section VI.5",
          "Démontré par la minimalité de ℤ₃",
        ],
        answer: 1,
        explanation:
          "Le statut logique de la Section X est explicite sur ce point : 'Identification de G avec le groupe de jauge du Modèle Standard : ouvert.' IST-I ne ferme pas cette question. La Section VI.5 examine conditionnellement la compatibilité avec SU(3) si un paquet dégénéré de dimension 3 existe dans S₀.",
      },
    ],
    memo: [
      "X.1 : deux états G-équivalents = même contenu physique. X.2 : description locale. X.3 : représentants locaux dépendent de x.",
      "∂_μ brise la covariance locale → connexion A_μ nécessaire.",
      "Groupe de jauge exact : ouvert dans IST-I.",
    ],
    exercise: {
      prompt:
        "Rédigez en une demi-page la chaîne d'implications menant de la non-factorisabilité spectrale à la nécessité d'une connexion de jauge locale A_μ. Identifiez à chaque étape les hypothèses supplémentaires requises.",
      correction:
        "1. Non-factorisabilité spectrale (Sect. I, établi) → existence de G = {U | [U,D]=[U,T]=0}. 2. G encode les redondances internes (pas de contenu physique indépendant). 3. Hypothèse X.1 : deux états G-équivalents = même état physique 4D. 4. Hypothèse X.2 : description par champs locaux ψ(x) sur M₄. 5. Hypothèse X.3 : le représentant local peut dépendre de x → transformation U(x) ∈ G locale. 6. Conséquence (Prop. X.1) : ∂_μ(U(x)ψ) = U(x)∂_μψ + (∂_μU)ψ — non covariante. 7. Cohérence impose ∇_μ = ∂_μ + A_μ avec A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹ (Théorème X.2). La connexion A_μ n'est pas ajoutée : elle est la correction minimale imposée par la localité de la redondance interne.",
    },
  },

  {
    id: 11,
    shortTitle: "Dynamique de jauge IR",
    title: "Dynamique du secteur de jauge et régime infrarouge",
    intro:
      "Admettons l'existence de la connexion A_μ (Section X). Quelle dynamique peut-elle avoir ? Cette section fixe la forme minimale sous laquelle la dynamique infrarouge est compatible avec l'invariance de jauge — et montre que le terme Tr(F_{μν}F^{μν}) en découle sous une hypothèse de minimalité locale.",
    goal:
      "Comprendre la définition du tenseur de courbure F_{μν}, son comportement sous G, pourquoi Tr(F²) est l'unique invariant quadratique de jauge minimal, et pourquoi l'invariance locale exclut un terme de masse explicite.",
    plan: [
      "Définir F_{μν} = [∇_μ, ∇_ν] = ∂_μA_ν − ∂_νA_μ + [A_μ,A_ν] et sa loi de transformation",
      "Établir l'invariance de Tr(F_{μν}F^{μν}) sous G (Proposition XI.1)",
      "Formuler l'Hypothèse XI.1 de minimalité locale effective",
      "Dériver le terme cinétique Tr(F²) comme terme dominant (Proposition XI.2) et exclure le terme de masse (Proposition XI.3)",
    ],
    notions: [
      {
        title: "Tenseur de courbure F_{μν}",
        tag: "Définition",
        content:
          "F_{μν} = [∇_μ, ∇_ν] = ∂_μA_ν − ∂_νA_μ + [A_μ, A_ν]. Sous U(x) ∈ G, il se transforme de manière homogène : F_{μν} ↦ UF_{μν}U⁻¹. Cette transformation homogène, contrairement à celle de A_μ (inhomogène, avec terme en ∂_μU), est la propriété qui permet de construire des invariants de jauge.",
      },
      {
        title: "Hypothèse de minimalité locale effective",
        tag: "Hypothèse de régime",
        content:
          "L'Hypothèse XI.1 stipule que la dynamique infrarouge effective est déterminée par les invariants locaux de plus bas ordre en dérivées, compatibles avec l'invariance sous G, la localité sur M₄, et la covariance relativiste. Il s'agit d'une contrainte structurante indépendante — elle ne découle pas des Hypothèses X.1–X.3 et doit être formulée explicitement.",
      },
      {
        title: "Terme cinétique minimal Tr(F_{μν}F^{μν})",
        tag: "Conditionnel sous XI.1",
        content:
          "Sous l'Hypothèse XI.1, Tr(F_{μν}F^{μν}) est : (i) le scalaire local d'ordre le plus bas construit à partir de A_μ ; (ii) quadratique en dérivées ; (iii) scalaire de Lorentz et G-invariant. Aucun scalaire de degré inférieur en F_{μν} n'est disponible — le terme linéaire Tr(F) est topologique et ne contribue pas à la dynamique en 4D.",
      },
      {
        title: "Exclusion du terme de masse — Proposition XI.3",
        tag: "Résultat établi sous invariance locale",
        content:
          "Un terme m²Tr(A_μA^μ) n'est pas invariant sous les transformations locales A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹. Les termes croisés en ∂_μU ne se compensent pas. En l'absence de mécanisme explicite de brisure de symétrie, ce terme est exclu. Le secteur de jauge est donc sans masse en régime infrarouge (Corollaire XI.4), conditionnellement au maintien de la symétrie locale.",
      },
    ],
    diagram: "ternary",
    quiz: [
      {
        question:
          "Pourquoi F_{μν} se transforme-t-il de manière homogène sous G alors que A_μ ne le fait pas ?",
        options: [
          "Parce que F_{μν} est défini comme dérivée de A_μ uniquement",
          "Parce que F_{μν} = [∇_μ,∇_ν] absorbe les termes inhomogènes (∂_μU) dans sa définition par commutateur",
          "Parce que F_{μν} est un scalaire de Lorentz",
          "Parce que l'algèbre de Lie de G est abélienne",
        ],
        answer: 1,
        explanation:
          "Le commutateur [∇_μ,∇_ν] = [∂_μ+A_μ, ∂_ν+A_ν] développe des termes en ∂A et [A,A]. Les termes en ∂U présents dans la transformation de A_μ se compensent exactement dans le commutateur, laissant F_{μν} ↦ UF_{μν}U⁻¹ — transformation homogène.",
      },
      {
        question:
          "L'Hypothèse XI.1 (minimalité locale effective) découle-t-elle des Hypothèses X.1–X.3 ?",
        options: [
          "Oui, c'est une conséquence directe de la lisibilité 4D minimale",
          "Non, c'est une hypothèse de régime infrarouge distincte, formulée explicitement et indépendamment",
          "Oui, via la non-factorisabilité spectrale",
          "Non, mais elle est implicite dans la définition du triplet admissible",
        ],
        answer: 1,
        explanation:
          "La Remarque XI.1 est explicite : cette hypothèse est une contrainte structurante indépendante. Elle ne découle pas des Hypothèses X.1–X.3 et doit être formulée explicitement. Son statut est celui d'une hypothèse de régime infrarouge — distincte des hypothèses structurelles.",
      },
      {
        question:
          "Dans IST-I, le terme cinétique Tr(F_{μν}F^{μν}) est-il entièrement dérivé ou simplement contraint ?",
        options: [
          "Entièrement dérivé depuis le seul cadre spectral",
          "Contraint en forme par l'invariance de jauge et la minimalité IR — mais ni le groupe ni les coefficients ne sont fixés",
          "Postulé comme dans le Modèle Standard",
          "Dérivé avec coefficients numériques précis par le noyau de chaleur",
        ],
        answer: 1,
        explanation:
          "La Section XI.8 est claire sur la portée : 'sous des hypothèses de minimalité et d'invariance, une dynamique de type Yang–Mills apparaît comme description effective naturelle. Les constantes de couplage et le groupe exact ne sont pas fixés à ce stade.' La forme est contrainte; les coefficients relèvent de l'analyse spectrale dans S₀ (Sections XII–XIV).",
      },
    ],
    memo: [
      "F_{μν} = [∇_μ,∇_ν] : transformation homogène → permet des invariants de jauge.",
      "Tr(F²) : invariant local quadratique minimal sous G et covariance — conditionnel sous XI.1.",
      "Terme de masse exclu par l'invariance locale — boson de jauge sans masse en régime IR.",
    ],
    exercise: {
      prompt:
        "Vérifiez explicitement que Tr(A_μA^μ) n'est pas invariant sous la transformation A_μ ↦ UA_μU⁻¹ − (∂_μU)U⁻¹. Quels termes brisent l'invariance ?",
      correction:
        "En substituant A_μ → UA_μU⁻¹ − (∂_μU)U⁻¹ dans Tr(A_μA^μ), on obtient Tr[(UA_μU⁻¹ − (∂_μU)U⁻¹)(UA^μU⁻¹ − (∂^μU)U⁻¹)] = Tr[A_μA^μ] − Tr[A_μ(∂^μU)U⁻¹] − Tr[(∂_μU)U⁻¹A^μ] + Tr[(∂_μU)U⁻¹(∂^μU)U⁻¹]. Les termes croisés (deuxième et troisième) en ∂U ne se compensent pas sous une transformation générale non constante. Ils constituent l'obstruction à l'invariance : Tr(AμAμ) n'est donc pas G-invariant pour des transformations locales.",
    },
  },

  {
    id: 12,
    shortTitle: "Terme cinétique spectral",
    title: "Origine spectrale du terme cinétique de jauge",
    intro:
      "La Section XI a établi Tr(F²) sous une hypothèse de minimalité. Ce chapitre montre que cette même forme est sélectionnée de manière structurelle par les invariants spectraux locaux de l'opérateur de Dirac covariant effectif — sans se contenter du seul argument de minimalité.",
    goal:
      "Comprendre comment le développement asymptotique du noyau de chaleur de 𝒟_A sélectionne Tr(F_{μν}F^{μν}) comme premier invariant quadratique de jauge, et situer ce résultat par rapport à l'argument de minimalité de la Section XI.",
    plan: [
      "Construire l'opérateur de Dirac covariant effectif 𝒟_A = γ^μ(∂_μ + A_μ)",
      "Écrire 𝒟_A² = ∇^μ∇_μ + E(F) comme opérateur de Laplace généralisé",
      "Développer l'invariant spectral Tr(e^{−t𝒟_A²}) et identifier ses premiers termes",
      "Établir que le premier invariant quadratique de jauge est Tr(F_{μν}F^{μν}) (Proposition XII.1)",
    ],
    notions: [
      {
        title: "Opérateur de Dirac covariant 𝒟_A",
        tag: "Construction",
        content:
          "𝒟_A = γ^μ(∂_μ + A_μ) est la version localement covariante de la dérivation 4D effective. Il encode conjointement la structure différentielle de M₄ et la connexion de jauge. Son carré 𝒟_A² = ∇^μ∇_μ + E(F) est un opérateur de Laplace généralisé, où E(F) dépend algébriquement de la courbure F_{μν} = [∇_μ, ∇_ν].",
      },
      {
        title: "Développement asymptotique du noyau de chaleur",
        tag: "Outil standard",
        content:
          "La quantité régularisée S_spect = Tr(e^{−t𝒟_A²}) admet en dimension 4 un développement asymptotique : S_spect ~ Σ_{k≥0} a_k(𝒟_A²) t^{(k−4)/2}. Les coefficients a_k sont des invariants locaux construits à partir de la métrique effective, de la connexion et de leurs courbures. Ils sont entièrement déterminés par la géométrie spectrale locale de 𝒟_A.",
      },
      {
        title: "Sélection spectrale de Tr(F²) — Proposition XII.1",
        tag: "Résultat structurel",
        content:
          "Dans le développement asymptotique de tout invariant spectral fondé sur 𝒟_A², le premier terme purement de jauge quadratique en la courbure est de la forme Tr(F_{μν}F^{μν}). La covariance locale interdit toute dépendance non invariante en A_μ ; le premier scalaire local non trivial quadratique en F_{μν} est nécessairement ce terme. Il apparaît dans a₄.",
      },
      {
        title: "Portée et limites du résultat",
        tag: "Clarification",
        content:
          "Ce résultat est plus fort qu'un argument de minimalité : il situe Tr(F²) comme conséquence spectrale locale structurelle. Il est cependant plus faible qu'une dérivation complète de la dynamique du Modèle Standard : il ne fixe ni le groupe de jauge exact, ni les constantes de couplage, ni les coefficients numériques précis — ces éléments dépendent de la normalisation globale du spectre admissible (Sections XIII–XIV).",
      },
    ],
    diagram: "spectrum",
    quiz: [
      {
        question:
          "Quel avantage a l'approche par le noyau de chaleur (Section XII) par rapport à l'argument de minimalité (Section XI) ?",
        options: [
          "Elle permet de calculer les constantes de couplage exactes",
          "Elle situe Tr(F²) comme invariant spectral local structurel, pas seulement comme terme minimal postulé",
          "Elle identifie le groupe de jauge du Modèle Standard",
          "Elle démontre la renormalisabilité de la théorie de jauge",
        ],
        answer: 1,
        explanation:
          "La Remarque XII.2 l'explicite : ce résultat est plus fort qu'un simple argument de minimalité — il situe Tr(F_{μν}F^{μν}) au niveau d'une conséquence spectrale locale structurelle plutôt qu'au niveau d'un postulat indépendant. Mais il reste plus faible qu'une dérivation quantitative complète.",
      },
      {
        question:
          "Dans quel coefficient du développement asymptotique apparaît le premier terme de jauge quadratique ?",
        options: [
          "a₀ (terme volumique)",
          "a₂ (terme en courbure scalaire)",
          "a₄ (premier terme quadratique en courbure)",
          "a₆ (terme d'ordre supérieur)",
        ],
        answer: 2,
        explanation:
          "Le terme volumique est a₀ (proportionnel à ∫√|g|d⁴x). Le terme a₂ contient la courbure scalaire R. Le premier terme quadratique en la courbure de jauge F_{μν} apparaît dans a₄. C'est ce terme qui contient Tr(F_{μν}F^{μν}) avec le coefficient universel 1/(24π²).",
      },
      {
        question:
          "L'évaluation numérique des coefficients a_k dépend-elle du choix précis de l'opérateur admissible ?",
        options: [
          "Non, les coefficients a_k sont universels et indépendants de tout choix",
          "Oui, mais la forme de Tr(F²) comme premier invariant quadratique ne dépend pas de ce choix",
          "Non, ils sont entièrement déterminés par la minimalité",
          "Oui, et la forme elle-même du terme de jauge en dépend",
        ],
        answer: 1,
        explanation:
          "La Proposition XII.1 distingue deux niveaux : (1) la forme de Tr(F_{μν}F^{μν}) comme premier invariant quadratique de jauge est structurelle et ne dépend pas du choix de l'opérateur ; (2) les coefficients numériques précis dépendent du choix précis de l'opérateur admissible et ne sont pas évalués dans la Section XII.",
      },
    ],
    memo: [
      "𝒟_A² est un opérateur de Laplace généralisé → développement asymptotique en chaleur bien défini.",
      "Tr(F²) apparaît dans a₄ : premier invariant quadratique de jauge — structurellement imposé.",
      "Forme de Tr(F²) : structurelle. Coefficients numériques précis : dépendent de l'opérateur exact.",
    ],
    exercise: {
      prompt:
        "Expliquez la phrase 'Tr(F_{μν}F^{μν}) est une conséquence spectrale locale structurelle'. Que signifie 'locale', 'spectrale', et 'structurelle' dans ce contexte ?",
      correction:
        "'Locale' : le terme apparaît dans les coefficients a_k qui sont des expressions intégrées de densités locales construites point par point sur M₄ — pas d'intégrale sur l'espace interne à ce niveau. 'Spectrale' : le terme découle du développement asymptotique de Tr(e^{−t𝒟_A²}), une quantité entièrement déterminée par le spectre de 𝒟_A². 'Structurelle' : sa présence ne dépend pas d'une hypothèse de minimalité supplémentaire (comme XI.1) mais de la structure même de l'opérateur covariant et de l'invariance de jauge locale — tout opérateur du même type produira ce terme.",
    },
  },

  {
    id: 13,
    shortTitle: "Origine spectrale commune",
    title: "Origine spectrale commune : gravitation et secteur de jauge",
    intro:
      "La Section XII a montré que Tr(F²) émerge du développement spectral de 𝒟_A. Ce chapitre étend le calcul à la géométrie 4D : en couplant simultanément la connexion spinorielle de g_{μν} et la connexion interne A_μ dans un seul opérateur 𝒟_{g,A}, les termes gravitationnels et de jauge apparaissent conjointement dans le même développement asymptotique.",
    goal:
      "Comprendre comment R et Tr(F²) émergent conjointement des premiers invariants spectraux de 𝒟_{g,A}, maîtriser la structure des premiers termes de l'expansion, et connaître le coefficient universel κ_F = 1/(24π²).",
    plan: [
      "Construire 𝒟_{g,A} = γ^μ(∇^spin_μ + A_μ) couplant géométrie et jauge",
      "Écrire 𝒟_{g,A}² = −g^{μν}∇_μ∇_ν + E(R,F) et son développement asymptotique",
      "Identifier les trois types d'invariants locaux dans a_k : terme cosmologique, R, et Tr(F²)",
      "Calculer le coefficient universel κ_F = ±1/(24π²) (Section XIII.7)",
    ],
    notions: [
      {
        title: "L'opérateur covariant couplé 𝒟_{g,A}",
        tag: "Construction centrale",
        content:
          "𝒟_{g,A} = γ^μ(∇^spin_μ + A_μ) encode simultanément la connexion spinorielle (géométrie 4D) et la connexion interne (jauge). C'est la propriété clé : géométrie 4D et jauge entrent ensemble dans le même opérateur spectral, rendant possible leur dérivation commune depuis un seul développement asymptotique.",
      },
      {
        title: "Structure des premiers invariants spectraux — Proposition XIII.1",
        tag: "Résultat structurel",
        content:
          "Dans l'expansion de Tr(e^{−t𝒟²_{g,A}}), les premiers termes non triviaux contiennent : (i) un terme volumique ∫√|g|d⁴x ; (ii) un terme gravitationnel ∫√|g|R d⁴x ; (iii) un terme de jauge quadratique ∫√|g|Tr(F_{μν}F^{μν})d⁴x. C'est la structure standard des coefficients locaux pour les opérateurs covariants de type Laplace généralisé en dimension 4 (Gilkey, Berline–Getzler–Vergne).",
      },
      {
        title: "Action effective unifiée",
        tag: "Conditionnel",
        content:
          "Sous l'hypothèse que la dynamique IR est gouvernée par les premiers invariants spectraux, S_eff ~ ∫√|g|(Λ_eff + c_R R + c_F Tr(F_{μν}F^{μν}) + …)d⁴x. Les constantes c_R, c_F et Λ_eff ne sont pas des paramètres libres mais des invariants spectraux de 𝒟_{g,A} — déterminables en principe par le calcul des coefficients a_k dans S₀.",
      },
      {
        title: "Coefficient universel κ_F = 1/(24π²)",
        tag: "Établi",
        content:
          "Le calcul algébrique direct (Section XIII.7) à partir des identités de trace spinorielle standard donne : la contribution du terme Ω² dans a₄ → +4F_μν F^{μν} ; la contribution du terme E² → −2F_μν F^{μν} ; total = +2, avec le facteur global (4π)^{−2} = 1/(16π²) et les poids : κ_F = ±1/(24π²). Sous la convention de la Remarque XIII.3 (générateurs antihermitiens normalisés), κ_F = +1/(24π²) > 0 — terme cinétique de signe positif dans l'action euclidienne.",
      },
    ],
    diagram: "cone",
    quiz: [
      {
        question:
          "Pourquoi les termes gravitationnels et de jauge apparaissent-ils dans le même développement spectral ?",
        options: [
          "Parce que la gravité et la jauge ont la même constante de couplage",
          "Parce que l'opérateur 𝒟_{g,A} encode simultanément la connexion spinorielle (géométrie) et la connexion interne (jauge)",
          "Parce que le groupe de jauge G contient le groupe de Lorentz",
          "Parce que la non-factorisabilité spectrale force leur unification",
        ],
        answer: 1,
        explanation:
          "La Section XIII.1 identifie la propriété essentielle : 𝒟_{g,A} = γ^μ(∇^spin_μ + A_μ) couple dans un même opérateur spectral la connexion spinorielle (géométrie riemannienne de M₄) et la connexion interne (jauge). Leur présence dans le même développement asymptotique est une conséquence directe de ce couplage.",
      },
      {
        question:
          "Le coefficient κ_F = 1/(24π²) dépend-il du groupe de jauge précis ?",
        options: [
          "Oui, il dépend de la dimension de la représentation fondamentale",
          "Non, c'est un coefficient local universel indépendant du groupe de jauge",
          "Oui, il change selon que G = SU(2) ou SU(3)",
          "Non, mais il dépend de la dimension de M₄",
        ],
        answer: 1,
        explanation:
          "La Remarque XIII.3 et la Section XIII.7 sont explicites : le coefficient 1/(24π²) est universel et local — il provient du calcul algébrique direct à partir des identités de trace spinorielle pour un opérateur de Dirac covariant standard, indépendamment du groupe de jauge précis. La normalisation physique complète dépend ensuite du facteur N_Σ de la trace interne (Section XIV).",
      },
      {
        question:
          "Que ne fixe pas encore la dérivation de la Section XIII ?",
        options: [
          "La forme du terme cinétique Tr(F²)",
          "Le coefficient local universel 1/(24π²) du terme de jauge",
          "Le groupe de jauge effectif exact et les constantes de couplage observées",
          "La présence d'un terme gravitationnel dans l'action effective",
        ],
        answer: 2,
        explanation:
          "La Section XIII.8 liste explicitement ce qui n'est pas encore fixé : les coefficients c_R et c_F au-delà de la normalisation universelle, le groupe de jauge effectif exact, la relation numérique finale entre c_F et les constantes de couplage observées, et la dynamique UV complète. Ces éléments nécessitent la normalisation globale du spectre admissible.",
      },
    ],
    memo: [
      "𝒟_{g,A} couple géométrie et jauge → R et Tr(F²) émergent du même développement spectral.",
      "κ_F = 1/(24π²) : coefficient local universel, établi algébriquement — indépendant du groupe de jauge.",
      "c_R, c_F, Λ_eff : invariants spectraux de S₀ — forme contrainte, normalisation globale encore ouverte.",
    ],
    exercise: {
      prompt:
        "Expliquez ce que signifie l'expression 'gravitation et jauge ont une origine spectrale commune dans IST'. En quoi cette formulation est-elle plus précise que 'IST unifie gravitation et jauge' ?",
      correction:
        "'Origine spectrale commune' signifie que les deux types de termes (gravitationnel R et de jauge Tr(F²)) apparaissent comme contributions d'un seul et même développement asymptotique de Tr(e^{−t𝒟²_{g,A}}), sans avoir été introduits séparément. Cette formulation est plus précise qu''unification' pour plusieurs raisons : (1) IST ne dérive pas encore une action complète du Modèle Standard ; (2) les coefficients et le groupe de jauge exact restent à fixer ; (3) le couplage entre gravité et jauge dans 𝒟_{g,A} est structurel mais conditionnel aux hypothèses de la Section XIII. 'Origine commune' décrit un fait spectral établi; 'unification' suggère une fermeture théorique qui n'est pas encore atteinte.",
    },
  },

  {
    id: 14,
    shortTitle: "Coefficient spectral de jauge",
    title: "Coefficient spectral du terme cinétique de jauge",
    intro:
      "Ce chapitre isole et précise le coefficient universel 1/(24π²) du terme cinétique de jauge. Il distingue soigneusement deux niveaux : ce qui est fixé par le calcul local du noyau de chaleur (la forme et le facteur universel), et ce qui reste conditionnel à la normalisation globale de la trace interne.",
    goal:
      "Maîtriser la Proposition XIV.1 (coefficient local universel), comprendre la Proposition XIV.2 sur l'unicité du type Dirac effectif, et distinguer ce qui est établi de ce qui reste ouvert concernant la constante physique complète c_F.",
    plan: [
      "Définir l'invariant spectral régularisé Θ_A(t) = Tr(e^{−t𝒟_A²}) et son développement en dimension 4",
      "Établir le coefficient local universel 1/(24π²) dans a₄ (Proposition XIV.1)",
      "Démontrer l'unicité du type Dirac effectif sous (H1)–(H4) (Proposition XIV.2)",
      "Distinguer coefficient universel local (fixé) et normalisation globale N_Σ (ouverte)",
    ],
    notions: [
      {
        title: "Coefficient local universel 1/(24π²)",
        tag: "Établi",
        content:
          "Pour un opérateur covariant de type Dirac en dimension 4, la contribution purement quadratique de jauge au coefficient a₄ est universellement proportionnelle à (1/24π²) ∫Tr(F_{μν}F^{μν})d⁴x sous la convention de la Remarque XIII.3. Le facteur 1/(24π²) est universel et local — il résulte du calcul algébrique direct des identités de trace spinorielle, indépendamment du groupe de jauge.",
      },
      {
        title: "Unicité du type Dirac effectif — Proposition XIV.2",
        tag: "Conditionnel fortement contraint",
        content:
          "Sous (H1) non-factorisabilité, (H2) lisibilité 4D minimale, (H3) secteur massless hyperbolique, (H4) localité IR d'ordre ≤ 1, l'opérateur effectif fondamental est de la forme D_eff = γ^μ(∂_μ + A_μ). La structure de type Dirac n'est pas postulée : elle résulte de l'algèbre de Clifford imposée par l'hyperbolicité du carré, de l'irréductibilité de la représentation imposée par la non-factorisabilité, et des couplages admissibles.",
      },
      {
        title: "Deux niveaux à distinguer",
        tag: "Clarification essentielle",
        content:
          "Fixé ici : (a) la forme locale du premier invariant quadratique de jauge Tr(F_{μν}F^{μν}) ; (b) son ordre spectral (coefficient a₄) ; (c) son coefficient universel local 1/(24π²). Non fixé ici : (d) la normalisation physique complète c_F = N_Σ/(24π²) ; (e) le groupe de jauge effectif exact ; (f) la relation numérique finale avec les constantes de couplage observées. Ces éléments dépendent de N_Σ, le facteur de normalisation globale de la trace interne admissible.",
      },
      {
        title: "Corollaire de normalisation — Corollaire XIV.1",
        tag: "Conditionnel",
        content:
          "Sous l'hypothèse que la dynamique effective IR est gouvernée par les premiers invariants spectraux locaux, le terme cinétique de jauge est S_jauge = [N_Σ/(24π²)] ∫Tr(F_{μν}F^{μν})d⁴x, où N_Σ est un facteur global sans dimension entièrement déterminé en principe par la normalisation spectrale interne admissible.",
      },
    ],
    diagram: "spectrum",
    quiz: [
      {
        question:
          "Que signifie que le coefficient 1/(24π²) est 'universel et local' ?",
        options: [
          "Il est le même pour tous les groupes de jauge et résulte d'un calcul local (point par point) sur M₄, indépendamment de la normalisation globale",
          "Il est indépendant de la dimension de l'espace interne Σ₆",
          "Il est égal à la constante de couplage fine α_em",
          "Il est indépendant de la signature lorentzienne",
        ],
        answer: 0,
        explanation:
          "Le Corollaire XIV.1 distingue deux facteurs : 1/(24π²), calculé algébriquement à partir des identités de trace spinorielle, est universel (même pour tout groupe de jauge) et local (résulte du calcul local des coefficients a_k). Et N_Σ, qui est la normalisation globale de la trace interne, dépend de la réalisation canonique S₀ et reste à calculer.",
      },
      {
        question:
          "Pourquoi la structure de type Dirac n'est-elle pas postulée dans IST ?",
        options: [
          "Parce que D_eff est défini comme l'opérateur de Dirac par construction",
          "Parce que l'algèbre de Clifford est imposée par l'hyperbolicité du carré D_eff², l'irréductibilité par la non-factorisabilité, et les couplages par l'invariance locale",
          "Parce que S³ × S³ est naturellement muni d'une structure spinorielle",
          "Parce que le Modèle Standard utilise des spineurs de Dirac",
        ],
        answer: 1,
        explanation:
          "La Proposition XIV.2 démontre (schématiquement) que sous (H1)–(H4) : (i) l'ordre différentiel 1 est requis par (H4) ; (ii) l'algèbre de Clifford {Γ^μ, Γ^ν} = 2g^{μν} est imposée par l'hyperbolicité D_eff² ~ g^{μν}∂_μ∂_ν ; (iii) la représentation irréductible Γ^μ ≃ γ^μ résulte de la non-factorisabilité ; (iv) le couplage à A_μ résulte de la covariance locale. La structure de Dirac est donc contrainte, pas postulée.",
      },
      {
        question:
          "La constante de couplage physique c_F est-elle entièrement déterminée dans IST-I ?",
        options: [
          "Oui, c_F = 1/(24π²)",
          "Non, c_F = N_Σ/(24π²) où N_Σ dépend de la normalisation globale encore à calculer",
          "Oui, c_F est déterminée par la ternarité de ℤ₃",
          "Non, elle est un paramètre libre ajusté aux données",
        ],
        answer: 1,
        explanation:
          "La Section XIV.6 distingue explicitement : le coefficient local universel 1/(24π²) est fixé. Mais c_F = N_Σ/(24π²) dépend de N_Σ — le facteur global de normalisation de la trace interne — dont le calcul dans la réalisation canonique S₀ constitue un programme ouvert. C_F n'est pas un paramètre libre, mais son calcul complet nécessite N_Σ.",
      },
    ],
    memo: [
      "κ_F = 1/(24π²) : établi localement, algébriquement, universel (tous groupes de jauge).",
      "c_F = N_Σ/(24π²) : forme contrainte, normalisation globale N_Σ encore à calculer dans S₀.",
      "Type Dirac contraint par (H1)–(H4) : algèbre de Clifford + irréductibilité + covariance locale.",
    ],
    exercise: {
      prompt:
        "Distinguez précisément ce que IST-I établit et ce qu'il ne fixe pas encore concernant la dynamique du secteur de jauge. Organisez votre réponse en deux colonnes : 'Établi' et 'Ouvert ou conditionnel'.",
      correction:
        "Établi : (1) existence de la connexion A_μ comme structure compensatrice minimale (conditionnel fort sous X.1–X.3) ; (2) définition de F_{μν} et invariance de Tr(F²) sous G (standard) ; (3) forme locale du terme de jauge quadratique Tr(F_{μν}F^{μν}) comme premier invariant de a₄ ; (4) coefficient universel local 1/(24π²) — calculé algébriquement ; (5) type Dirac effectif contraint sous (H1)–(H4). Ouvert ou conditionnel : (1) identification de G avec le groupe de jauge du Modèle Standard ; (2) valeur de N_Σ et donc de c_F ; (3) terme cinétique comme dynamique IR dominante (conditionnel — hypothèse XI.1) ; (4) constantes de couplage observées ; (5) dynamique UV complète.",
    },
  },

  {
    id: 15,
    shortTitle: "Synthèse & rigidité",
    title: "Théorème de portée modérée et rigidité spectrale",
    intro:
      "Ce chapitre synthétise les Sections X–XIV sous la forme d'un théorème unique de portée explicitement modérée (Théorème XV.1), puis établit la rigidité locale du secteur basse énergie de S₀ dans la classe des triplets admissibles (Proposition XVI.1).",
    goal:
      "Maîtriser le Théorème XV.1 (origine spectrale commune sous hypothèses explicites), comprendre ce que signifie la rigidité locale de S₀, et situer ces résultats dans la chaîne logique complète d'IST-I.",
    plan: [
      "Énoncer et démontrer le Théorème XV.1 (portée modérée, hypothèses H1–H4)",
      "Expliquer pourquoi la portée est dite 'modérée' et ce qui la distingue d'une dérivation complète",
      "Définir l'équivalence unitaire et les conditions de rigidité (C1)–(C6)",
      "Établir la Proposition XVI.1 : rigidité locale du secteur basse énergie de S₀",
    ],
    notions: [
      {
        title: "Théorème XV.1 — portée modérée",
        tag: "Conditionnel",
        content:
          "Sous (H1) lisibilité 4D minimale par quotient local sous G, (H2) émergence d'une connexion A_μ, (H3) existence d'un opérateur covariant 𝒟_{g,A} de type Dirac, (H4) dynamique IR gouvernée par les premiers invariants spectraux locaux, l'action effective dominante contient nécessairement des termes de type S_IR = ∫d⁴x√|g|(c₀ + c₁R + c₂Tr(F_{μν}F^{μν})) avec κ_F = +1/(24π²).",
      },
      {
        title: "Pourquoi 'portée modérée' ?",
        tag: "Clarification essentielle",
        content:
          "Le Théorème XV.1 compacte les résultats de X–XIV sans en renforcer la portée. Il ne dérive pas l'action complète du Modèle Standard. Sous des hypothèses de minimalité et de lisibilité explicitement formulées, les trois termes dominants (cosmologique, gravitationnel, de jauge) apparaissent naturellement. Le terme de jauge est quantitativement ancré par 1/(24π²). Au-delà : ouvert.",
      },
      {
        title: "Rigidité locale du secteur basse énergie — Proposition XVI.1",
        tag: "Établi",
        content:
          "Soit {S_t} une famille continue de triplets satisfaisant (C1)–(C6) : auto-adjonction de D_t, unitarité d'ordre 3 de T_t, admissibilité et non-factorisabilité préservées, gap spectral uniforme, multiplicités constantes, structure ternaire dans la même classe de conjugaison. Alors, pour |t| suffisamment petit, il existe une famille continue d'unitaires U_t telle que le secteur basse énergie de S_t est unitairement équivalent à celui de S₀.",
      },
      {
        title: "Chaîne logique complète — Section VIII.3",
        tag: "Vue d'ensemble",
        content:
          "Les étapes (1)–(3), (6)–(7) sont établies sans hypothèse dynamique supplémentaire. Les étapes (4)–(5) : conditionnelles fortes (identification lisible = orbites de G). Les étapes (8)–(9) : conditionnelles (unicité du cône causal, connexion de jauge locale). Les étapes (10)–(12) : conditionnelles à H_loc et H_cov, avec (11) dépendant en outre de H_sel. G_N et Λ : programme ouvert (IST-V).",
      },
    ],
    diagram: "triplet",
    quiz: [
      {
        question:
          "Pourquoi le Théorème XV.1 est-il qualifié de 'portée modérée' ?",
        options: [
          "Parce qu'il ne s'applique qu'en régime ultraviolet",
          "Parce qu'il synthétise des résultats conditionnels sous des hypothèses explicites, sans prétendre dériver l'action complète du Modèle Standard",
          "Parce que ses hypothèses sont trop restrictives pour être physiquement réalisées",
          "Parce que le coefficient 1/(24π²) est trop petit",
        ],
        answer: 1,
        explanation:
          "La Remarque XV.1 explicite : 'le Théorème XV.1 est intentionnellement formulé avec une portée modérée. Il ne prétend pas dériver l'action complète du Modèle Standard. Il compacte les résultats dispersés de X à XIV sans en renforcer artificiellement la portée.' L'honnêteté épistémique sur ce que le théorème établit est une caractéristique délibérée d'IST-I.",
      },
      {
        question:
          "La rigidité locale de la Proposition XVI.1 est-elle une équivalence unitaire globale de S₀ ?",
        options: [
          "Oui, elle établit que tout triplet dans la classe 𝒞 est unitairement équivalent à S₀",
          "Non, elle établit seulement l'équivalence unitaire locale du secteur basse énergie pour des perturbations suffisamment petites sous (C1)–(C6)",
          "Oui, mais seulement pour les perturbations de la structure ternaire",
          "Non, elle montre que S₀ est instable vis-à-vis des perturbations spectrales",
        ],
        answer: 1,
        explanation:
          "La Remarque XVI.1 le précise : 'la Proposition XVI.1 établit une rigidité locale du secteur basse énergie, non une équivalence unitaire globale des triplets. Un isolement global nécessiterait une analyse complète des invariants spectraux sur l'ensemble du spectre.' La rigidité est locale (petites perturbations) et partielle (secteur basse énergie).",
      },
      {
        question:
          "Quelles étapes de la chaîne logique d'IST-I sont établies sans hypothèse dynamique supplémentaire ?",
        options: [
          "Toutes les étapes (1)–(12)",
          "Les étapes (1)–(3), (6)–(7) : triplet admissible, commutant trivial, quotient canonique, opérateur effectif et symbole principal",
          "Uniquement les étapes (1)–(2)",
          "Les étapes (4)–(5) et (8)–(12)",
        ],
        answer: 1,
        explanation:
          "La Section VIII.3 distingue les niveaux : les étapes (1)–(3) (triplet admissible, commutant trivial, quotient canonique) et (6)–(7) (opérateur effectif, symbole principal) sont établies sans hypothèse dynamique supplémentaire. Les étapes (4)–(5) sont conditionnelles fortes ; (8)–(12) sont conditionnelles à des hypothèses de localité, covariance et/ou absence de sélection spectrale supplémentaire.",
      },
    ],
    memo: [
      "Théorème XV.1 : Λ + R + Tr(F²) avec κ_F = 1/(24π²) — sous 4 hypothèses explicites, portée modérée.",
      "Rigidité XVI.1 : locale, secteur basse énergie, sous (C1)–(C6) — pas équivalence globale.",
      "Chaîne IST-I : étapes (1)–(3),(6)–(7) établies ; (4)–(12) conditionnelles à divers niveaux.",
    ],
    exercise: {
      prompt:
        "Rédigez une 'fiche épistémique' d'IST-I : listez séparément les résultats démontrés, les résultats conditionnels forts, et les programmes ouverts. Limitez-vous à cinq items par catégorie.",
      correction:
        "Démontrés : (1) Non-factorisabilité spectrale et {D,T}′ = ℂ·Id. (2) Minimalité de ℤ₃ et décomposition ternaire. (3) Construction π_Λ et scalarité interne du symbole principal. (4) Propagation causale lorentzienne (Théorème VII.1). (5) Coefficient universel κ_F = 1/(24π²) et rigidité locale XVI.1. Conditionnels forts : (1) Unicité minimale Π₄D sous (H4). (2) Unicité du symbole principal effectif (HV1–HV5). (3) Masslessness classique sous invariance IR. (4) Unicité du cône causal dans le secteur massless. (5) Action gravitationnelle IR unique sous H_loc, H_cov, H_sel. Programmes ouverts : (1) Calcul de G_N et Λ depuis a₀, a₂ (IST-V). (2) Identification de G avec SU(3)×SU(2)×U(1). (3) Chiralité fermionique (IST-II). (4) Origine spectrale des masses (IST-III). (5) Calcul explicite de D_int dans S₀.",
    },
  },

  {
    id: 16,
    shortTitle: "Interaction interne & perspectives",
    title: "Interaction interne entre les deux composantes S³ et synthèse générale",
    intro:
      "Le dernier chapitre d'IST-I aborde l'interaction géométrique entre les deux facteurs de Σ₆ = (S³ × S³)/ℤ₃ et synthétise l'ensemble du programme, en distinguant explicitement ce qui est établi, ce qui reste conditionnel, et ce qui constitue les verrous ouverts pour les volumes suivants.",
    goal:
      "Comprendre le rôle du terme de couplage D_int dans la non-factorisabilité effective, identifier les conséquences physiques structurellement motivées (chiralité, familles, masses), et maîtriser la synthèse de l'ensemble de la chaîne logique d'IST-I.",
    plan: [
      "Expliquer comment la contrainte ℤ₃ couple les deux facteurs S³ et génère D_int",
      "Formuler le principe de proximité spectrale (Hypothèse XVII.1) et son interprétation géométrique",
      "Identifier les trois directions physiques ouvertes : chiralité, familles fermioniques, mécanisme des masses",
      "Synthétiser la chaîne logique complète d'IST-I et les verrous ouverts pour IST-II à IST-V",
    ],
    notions: [
      {
        title: "Opérateur de couplage D_int",
        tag: "Programme ouvert",
        content:
          "La contrainte ℤ₃ empêche la factorisation de D_Σ = D₁ + D₂ : un terme de couplage D_int est nécessaire structurellement. Sans D_int, D_Σ se factoriserait et ℋ_adm serait factorisable — contradiction. D_int n'est pas un paramètre libre mais une conséquence structurelle de la contrainte ℤ₃. Son calcul explicite dans S₀ reste un problème ouvert identifié.",
      },
      {
        title: "Trois conséquences physiques structurellement motivées",
        tag: "Conjonctures structurelles",
        content:
          "(1) Chiralité : si D_int n'est pas invariant sous y₁ ↔ y₂, une asymétrie chirale émerge — étudié dans IST-II via l'opérateur de Dirac τ-équivariant. (2) Familles fermioniques : la décomposition sectorielle ℤ₃ + couplage D_int → groupes de modes candidats aux trois familles (conjecture structurelle). (3) Masses : D_int contribue au spectre des valeurs propres → hiérarchie des masses via la relation m² = λ_n (IST-III).",
      },
      {
        title: "Synthèse : ce qui est établi dans IST-I",
        tag: "Bilan",
        content:
          "IST-I établit : la classe des triplets admissibles non-factorisables avec ternarité minimale, la construction quadridimensionnelle canonique, la scalarité interne du symbole principal, la propagation causale lorentzienne, la rigidité locale de S₀, et le coefficient universel local 1/(24π²) du terme de jauge. Il ne ferme pas encore le secteur fermionique, l'origine quantitative des masses, ni la dérivation purement spectrale de toute la dynamique IR.",
      },
      {
        title: "Verrous ouverts pour IST-II à IST-V",
        tag: "Programme",
        content:
          "IST-II : chiralité émergente et contenu fermionique effectif. IST-III : origine spectrale des masses, localisation modale interne, émergence du temps effectif. IST-IV : intrication quantique comme corrélations non-factorisables. IST-V : calcul explicite de a_n dans S₀ pour G_N et Λ. Tous conditionnels au calcul explicite de D_int dans S₀ et à l'identification d'un paquet spectral IR de multiplicité 3 pour SU(3).",
      },
    ],
    diagram: "ternary",
    quiz: [
      {
        question:
          "Pourquoi le terme de couplage D_int est-il structurellement nécessaire dans S₀ ?",
        options: [
          "Pour reproduire les interactions du Modèle Standard",
          "Parce que sans lui, D_Σ se factoriserait et ℋ_adm serait factorisable — contradiction avec la non-factorisabilité admissible",
          "Pour assurer la nullité de l'indice de Dirac",
          "Parce que la chiralité fermionique le requiert",
        ],
        answer: 1,
        explanation:
          "La Section XVII.1 est explicite : en l'absence de la contrainte ℤ₃, D_Σ = D₁ ⊗ Id + Id ⊗ D₂ se décomposerait et ℋ serait factorisable. La contrainte ℤ₃ sélectionne ℋ_adm qui n'est plus factorisable. D_int encode précisément cet effet de sélection au niveau opératoriel — sa présence est une conséquence structurelle de la contrainte ℤ₃, non un paramètre libre.",
      },
      {
        question:
          "L'identification des secteurs ℤ₃ aux trois familles de fermions est-elle un résultat d'IST-I ?",
        options: [
          "Oui, c'est une conséquence directe de la Proposition II.1",
          "Non, c'est une conjecture structurelle développée dans IST-II et IST-III",
          "Oui, elle découle du coefficient κ_F = 1/(24π²)",
          "Non, et elle ne peut pas être établie dans IST",
        ],
        answer: 1,
        explanation:
          "La Section XVII.5 qualifie explicitement cette identification de 'conjecture structurelle'. IST-I pose seulement les conditions structurelles permettant de formuler cette identification : la décomposition sectorielle ℤ₃ + le couplage D_int → groupes de modes candidats naturels. La vérification quantitative relève d'IST-II et IST-III.",
      },
      {
        question:
          "Quelle est la principale lacune d'IST-I identifiée dans la Section XVIII.3 ?",
        options: [
          "L'absence de démonstration de la non-factorisabilité spectrale",
          "L'incapacité à calculer explicitement G_N, Λ, les masses fermioniques, et D_int dans S₀",
          "L'impossibilité d'établir la ternarité de ℤ₃",
          "L'absence de preuve que la dimension émergente est d = 4",
        ],
        answer: 1,
        explanation:
          "La Section XVIII.3 liste les verrous principaux : calcul de a_n dans S₀ pour G_N et Λ (IST-V) ; chiralité fermionique (IST-II) ; masses et émergence du temps (IST-III) ; intrication quantique (IST-IV) ; calcul explicite de D_int ; identification du paquet IR de multiplicité 3 pour SU(3). Ces points 'forment le noyau des développements ultérieurs nécessaires' et ne constituent pas des 'difficultés périphériques'.",
      },
    ],
    memo: [
      "D_int : nécessaire structurellement (sinon ℋ_adm factorisable) — calcul explicite ouvert.",
      "Chiralité, familles, masses : conséquences structurellement motivées de D_int — relèvent d'IST-II à IST-III.",
      "IST-I = cadre spectral fondateur cohérent — pas encore une théorie complète confrontée quantitativement.",
    ],
    exercise: {
      prompt:
        "Écrivez un paragraphe qui expliquerait, à un physicien théoricien non spécialiste, ce qu'IST-I accomplit et ce qu'il ne prétend pas encore avoir accompli. Soyez précis sur les résultats établis et les programmes ouverts.",
      correction:
        "IST-I construit un cadre spectral fondateur pour une classe de triplets (ℋ_adm, D, T) dits admissibles non-factorisables. Il démontre que la non-factorisabilité impose une structure ternaire minimale (ℤ₃), une projection 4D canonique (unique à isomorphisme près sous hypothèse explicite), et un symbole principal lorentzien compatible avec une propagation causale cohérente. Il établit que la localisation des redondances internes impose une connexion de jauge, et calcule rigoureusement le coefficient universel local 1/(24π²) du terme cinétique de jauge. Ce que IST-I ne prétend pas encore avoir accompli : il ne dérive pas l'action complète du Modèle Standard, ne calcule pas G_N et Λ (programme IST-V), ne démontre pas la chiralité fermionique (IST-II) ni l'origine des masses (IST-III), et n'identifie pas encore explicitement G avec SU(3)×SU(2)×U(1). IST-I fixe les contraintes structurelles minimales auxquelles les développements ultérieurs devront se conformer — c'est à la fois sa contribution propre et la limite déclarée de sa portée.",
    },
  },
];
