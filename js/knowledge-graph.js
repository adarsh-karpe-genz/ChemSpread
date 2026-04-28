/* ════════════════════════════════════════════════════
   CHEMSPREAD · KNOWLEDGE GRAPH
   Connects topics, compounds, reactions, experiments
════════════════════════════════════════════════════ */

const KNOWLEDGE_GRAPH = {
  // Topic nodes
  topics: {
    "atomic-structure": {
      label:"Atomic Structure", url:"topics.html#atomic", icon:"⚛",
      connects:["chemical-bonding","periodic-trends","electron-config","quantum-mechanics"],
      feeds_into:["chemical-bonding","spectroscopy"],
      prerequisite_of:["chemical-bonding","electronegativity"],
      commonMistake:"Confusing atomic number (protons) with mass number (protons+neutrons). Isotopes have the same atomic number but different mass numbers.",
      whyItMatters:"The arrangement of electrons in orbitals determines EVERY chemical property of an element — reactivity, bonding type, colour, and metallic character."
    },
    "chemical-bonding": {
      label:"Chemical Bonding", url:"topics.html#bonding", icon:"🔗",
      connects:["molecular-geometry","intermolecular-forces","electronegativity","ionic-bonding","covalent-bonding"],
      feeds_into:["molecular-geometry","states-of-matter"],
      prerequisite_of:["reactions","organic-chemistry"],
      commonMistake:"Confusing bond polarity with molecule polarity. CO₂ has polar bonds but is non-polar overall (linear geometry). H₂O has polar bonds AND is polar (bent geometry).",
      whyItMatters:"Bond type determines whether something conducts electricity, its melting point, solubility, and reactivity. Understanding bonding is understanding materials."
    },
    "acids-bases": {
      label:"Acids & Bases", url:"topics.html#acids", icon:"⚗",
      connects:["pH-scale","neutralisation","buffer-solutions","titration","salt-formation"],
      feeds_into:["buffer-solutions","industrial-chemistry"],
      prerequisite_of:["buffer-solutions","biochemistry"],
      commonMistake:"Strong acid ≠ concentrated acid. HF is weak but extremely corrosive. Strength refers to degree of dissociation, not corrosiveness or concentration.",
      whyItMatters:"pH control is fundamental to biological life (blood pH 7.4), industrial processes (fertiliser synthesis), and environmental health (acid rain at pH < 5.6)."
    },
    "thermochemistry": {
      label:"Thermochemistry", url:"topics.html#thermo", icon:"🔥",
      connects:["enthalpy","entropy","gibbs-energy","reaction-spontaneity","bond-energies"],
      feeds_into:["reaction-rates","chemical-equilibrium"],
      prerequisite_of:["industrial-chemistry","electrochemistry"],
      commonMistake:"Exothermic reactions are NOT always spontaneous. A reaction with ΔH < 0 may not occur if ΔS is also very negative (ΔG = ΔH - TΔS must be negative for spontaneity).",
      whyItMatters:"Energy changes in reactions determine whether industrial processes are economically viable, whether reactions need heating or cooling, and the direction of all natural processes."
    },
    "mole-concept": {
      label:"Mole Concept", url:"topics.html#moles", icon:"⚖",
      connects:["stoichiometry","concentration","limiting-reagent","empirical-formula","avogadro"],
      feeds_into:["quantitative-chemistry","concentration-calculations"],
      prerequisite_of:["stoichiometry","titration"],
      commonMistake:"Moles and grams are NOT interchangeable. Always convert: n = m/M. A mole of water (18g) and a mole of sulphuric acid (98g) contain the same NUMBER of molecules.",
      whyItMatters:"The mole is the bridge between atoms (unweighable) and grams (weighable). Without it, quantitative chemistry would be impossible."
    },
    "organic-chemistry": {
      label:"Organic Chemistry", url:"topics.html#organic", icon:"🧬",
      connects:["functional-groups","reaction-mechanisms","isomerism","polymers","biochemistry"],
      feeds_into:["pharmaceuticals","materials","biochemistry"],
      prerequisite_of:["reaction-mechanisms","functional-groups"],
      commonMistake:"Structural isomers have the same molecular formula but different connectivity. Stereoisomers have the same connectivity but different 3D arrangement. Both matter biologically.",
      whyItMatters:"Carbon's ability to form 4 bonds and chain with itself creates ~10 million known organic compounds — all the drugs, plastics, foods, and living molecules in existence."
    }
  },

  // Learning paths (structured sequences)
  learningPaths: {
    beginner: {
      label:"Foundation Path",
      description:"Essential concepts for absolute beginners (Class 8-9)",
      color:"#27AE60",
      steps:[
        {title:"Chemistry Basics",        url:"basics.html",         time:"20 min", desc:"What chemistry is, physical vs chemical change, elements/compounds/mixtures"},
        {title:"Atomic Structure",        url:"topics.html#atomic",  time:"30 min", desc:"Protons, neutrons, electrons, shells, and the Bohr model"},
        {title:"Periodic Table",          url:"periodic-table.html", time:"25 min", desc:"Groups, periods, trends, and why elements are where they are"},
        {title:"Chemical Bonding",        url:"topics.html#bonding", time:"35 min", desc:"Ionic, covalent, and metallic bonding — what holds matter together"},
        {title:"Acids, Bases & Salts",    url:"topics.html#acids",   time:"30 min", desc:"pH scale, neutralisation, and everyday chemistry"},
        {title:"Matter & States",         url:"topics.html#matter",  time:"20 min", desc:"States of matter, phase changes, and particle theory"},
        {title:"Test Your Knowledge",     url:"quiz.html",           time:"15 min", desc:"Quiz: Foundation Level — 10 questions"}
      ]
    },
    intermediate: {
      label:"Core Chemistry Path",
      description:"Class 10-11 — building serious understanding",
      color:"#5A4FCF",
      steps:[
        {title:"Mole Concept",            url:"topics.html#moles",   time:"40 min", desc:"Avogadro, molar mass, stoichiometry — the quantitative heart of chemistry"},
        {title:"Thermochemistry",         url:"topics.html#thermo",  time:"45 min", desc:"Enthalpy, Hess's Law, Gibbs energy, and reaction spontaneity"},
        {title:"Chemical Reactions",      url:"reactions.html",      time:"40 min", desc:"Types, mechanisms, energy diagrams, and rate factors"},
        {title:"Molecules & Geometry",    url:"molecules.html",      time:"30 min", desc:"VSEPR theory, molecular shapes, and polarity"},
        {title:"Key Compounds",           url:"compounds.html",      time:"30 min", desc:"Properties, uses, and WHY of 15+ important compounds"},
        {title:"Industrial Chemistry",    url:"industrial.html",     time:"35 min", desc:"Haber, Contact, Blast Furnace, Chlor-Alkali — scale-up of chemistry"},
        {title:"Calculators & Practice",  url:"calculators.html",    time:"20 min", desc:"Apply mole concept, pH, gas law, titration calculations"},
        {title:"Test Your Knowledge",     url:"quiz.html",           time:"20 min", desc:"Quiz: Intermediate Level — 15 questions"}
      ]
    },
    advanced: {
      label:"Advanced Path",
      description:"Class 12 / A-Level — exam-ready depth",
      color:"#C0392B",
      steps:[
        {title:"Organic Chemistry",       url:"topics.html#organic", time:"60 min", desc:"Functional groups, mechanisms, isomerism, and synthesis"},
        {title:"Bonding Visualizer",      url:"bonding.html",        time:"30 min", desc:"Interactive ionic vs covalent bonding — deep understanding"},
        {title:"Reaction Mechanisms",     url:"reactions.html#mechanisms", time:"45 min", desc:"Electrophilic addition, free radicals, nucleophilic substitution"},
        {title:"Formula Derivations",     url:"derivations.html",    time:"40 min", desc:"Where all the formulas come from — first-principles understanding"},
        {title:"Data Tables",             url:"data-tables.html",    time:"20 min", desc:"Electrode potentials, enthalpies, Ka values — reference data"},
        {title:"Lab Experiments",         url:"experiments.html",    time:"30 min", desc:"8 key experiments with theory, procedure, and analysis"},
        {title:"Element Deep Dive",       url:"periodic-table.html", time:"30 min", desc:"Compare elements, explore trends, understand periodic patterns"},
        {title:"Final Quiz",              url:"quiz.html",           time:"25 min", desc:"Advanced Quiz — all topics, 20 questions"}
      ]
    }
  },

  // Cross-link suggestions (compound → reaction → experiment)
  crossLinks: {
    "H₂SO₄": { reactions:["Contact Process","Esterification","Neutralisation"], experiments:["Titration"], elements:["S","O","H"] },
    "NH₃":   { reactions:["Haber Process","Neutralisation"], experiments:["Flame tests"], elements:["N","H"] },
    "NaCl":  { reactions:["Electrolysis","Neutralisation"], experiments:["Electrolysis of brine"], elements:["Na","Cl"] },
    "CO₂":   { reactions:["Combustion","Photosynthesis"], experiments:["Limewater test"], elements:["C","O"] },
  }
};

// Helper: get concept connections for a given topic
function getConnections(topicId) {
  return KNOWLEDGE_GRAPH.topics[topicId] || null;
}

// Helper: get learning path
function getLearningPath(level) {
  return KNOWLEDGE_GRAPH.learningPaths[level] || null;
}
