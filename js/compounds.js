/* ════════════════════════════════════════════════════
   CHEMSPREAD · COMPOUNDS DATA
   Structured data for 30 key compounds
════════════════════════════════════════════════════ */
const COMPOUNDS_DATA = [
  {
    formula:"H₂O", name:"Water", type:"covalent", molarMass:18.015,
    melt:0, boil:100, density:1.0,
    uses:"Universal solvent, biological reactions, coolant, fire suppression",
    realWorld:"Every cell in your body is ~70% water. It buffers temperature on Earth.",
    connections:["Hydrogen bonding","Polar molecules","Acids & Bases","Electrolysis"],
    links:["topics.html#bonding","topics.html#acids","experiments.html"],
    whyItMatters:"Water's bent shape (104.5°) creates a permanent dipole. Its hydrogen bonding gives it anomalously high boiling point, surface tension, and heat capacity — all essential for life.",
    commonMistake:"Students often think water is linear like CO₂. It is bent because of 2 lone pairs on oxygen that push bonding pairs closer together.",
    category:"covalent"
  },
  {
    formula:"NaCl", name:"Sodium Chloride", type:"ionic", molarMass:58.44,
    melt:801, boil:1413, density:2.165,
    uses:"Food seasoning, preservation, de-icing roads, electrolysis feedstock",
    realWorld:"Your nerve cells use Na⁺ and Cl⁻ to transmit electrical signals every second.",
    connections:["Ionic bonding","Electrolysis","Acids & Bases","Solutions"],
    links:["topics.html#bonding","experiments.html","industrial.html"],
    whyItMatters:"The high melting point (801°C) reflects the strength of the ionic lattice — millions of alternating Na⁺ and Cl⁻ ions held by electrostatic forces.",
    commonMistake:"NaCl doesn't conduct electricity as a solid — ions are fixed. It conducts only when melted or dissolved (ions free to move).",
    category:"ionic"
  },
  {
    formula:"H₂SO₄", name:"Sulphuric Acid", type:"acid", molarMass:98.08,
    melt:10, boil:337, density:1.84,
    uses:"Fertilisers, battery acid, metal refining, dyes, pharmaceuticals",
    realWorld:"Over 270 million tonnes produced annually — the most-made industrial chemical. Your car battery uses it.",
    connections:["Acids & Bases","Contact Process","Oxidation states","Equilibrium"],
    links:["topics.html#acids","industrial.html","reactions.html"],
    whyItMatters:"H₂SO₄ is diprotic — it can donate 2 protons. Concentrated H₂SO₄ is a dehydrating agent (removes water from compounds), not just an acid.",
    commonMistake:"Always add acid to water, never water to acid. The dissolution is highly exothermic — adding water to conc. H₂SO₄ can cause boiling and spitting.",
    category:"acid"
  },
  {
    formula:"NH₃", name:"Ammonia", type:"covalent", molarMass:17.03,
    melt:-77.7, boil:-33.4, density:0.000771,
    uses:"Fertilisers (Haber process), cleaning products, refrigerant, nitric acid",
    realWorld:"Ammonia production feeds approximately 50% of the world's population through nitrogen fertilisers.",
    connections:["Haber Process","Hydrogen bonding","Lewis bases","Trigonal pyramidal"],
    links:["industrial.html","molecules.html","reactions.html"],
    whyItMatters:"NH₃ is a Lewis base with a lone pair on N. Its trigonal pyramidal shape (107°) results from 1 lone pair repelling 3 bonding pairs.",
    commonMistake:"NH₄⁺ and NH₃ are often confused. NH₃ is the free base; NH₄⁺ is the conjugate acid formed when NH₃ accepts a proton.",
    category:"covalent"
  },
  {
    formula:"CO₂", name:"Carbon Dioxide", type:"covalent", molarMass:44.01,
    melt:-56.6, boil:-78.5, density:0.00196,
    uses:"Fizzy drinks, fire extinguishers, photosynthesis, dry ice, supercritical solvent",
    realWorld:"Atmospheric CO₂ at ~420 ppm is the primary driver of anthropogenic climate change.",
    connections:["Greenhouse effect","Photosynthesis","Linear molecules","Non-polar"],
    links:["daily-chemistry.html","topics.html#organic","molecules.html"],
    whyItMatters:"Despite having 2 polar C=O bonds, CO₂ is non-polar overall because the linear geometry causes the dipoles to cancel exactly.",
    commonMistake:"CO₂ and CO are completely different. CO (carbon monoxide) is toxic — it binds haemoglobin 200× more strongly than O₂.",
    category:"covalent"
  },
  {
    formula:"NaOH", name:"Sodium Hydroxide", type:"ionic", molarMass:40.00,
    melt:323, boil:1388, density:2.13,
    uses:"Soap (saponification), paper industry, drain cleaner, food processing",
    realWorld:"The Chlor-Alkali process co-produces NaOH, Cl₂, and H₂ from NaCl — three essential industrial chemicals from one.",
    connections:["Strong bases","Saponification","Neutralisation","Chlor-Alkali"],
    links:["topics.html#acids","industrial.html","reactions.html"],
    whyItMatters:"NaOH fully dissociates: NaOH → Na⁺ + OH⁻. This makes it a strong base. Dissolving it in water is exothermic — the solution heats up noticeably.",
    commonMistake:"Students confuse 'strong' with 'concentrated'. A strong base fully dissociates. A weak base only partially dissociates, regardless of concentration.",
    category:"ionic"
  },
  {
    formula:"CaCO₃", name:"Calcium Carbonate", type:"ionic", molarMass:100.09,
    melt:825, boil:null, density:2.71,
    uses:"Limestone, cement (CaO), antacids, chalk, marble architecture",
    realWorld:"The white cliffs of Dover are pure CaCO₃ formed from compressed marine shells over 70 million years.",
    connections:["Thermal decomposition","Calcium chemistry","Building materials","Acid rain"],
    links:["reactions.html","industrial.html","daily-chemistry.html"],
    whyItMatters:"CaCO₃ thermally decomposes at 840°C: CaCO₃ → CaO + CO₂. This is the basis of the cement industry — CaO (quicklime) reacts with water to set.",
    commonMistake:"CaCO₃ reacts with acids: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. This is why acid rain erodes limestone buildings and marble statues.",
    category:"ionic"
  },
  {
    formula:"C₆H₁₂O₆", name:"Glucose", type:"organic", molarMass:180.16,
    melt:146, boil:null, density:1.54,
    uses:"Cellular respiration, IV drips, food industry, fermentation to ethanol",
    realWorld:"Every ATP molecule your cells make requires glucose oxidation. Your brain alone uses 120g of glucose per day.",
    connections:["Cellular respiration","Fermentation","Photosynthesis","Carbohydrates"],
    links:["topics.html#organic","daily-chemistry.html","experiments.html"],
    whyItMatters:"Glucose oxidation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2870 kJ. This energy drives every biological process — from muscle contraction to DNA synthesis.",
    commonMistake:"Glucose is not just 'sugar' — it's the universal energy currency. Sucrose (table sugar) must be hydrolysed into glucose + fructose before cells can use it.",
    category:"organic"
  },
  {
    formula:"C₂H₅OH", name:"Ethanol", type:"organic", molarMass:46.07,
    melt:-114.1, boil:78.4, density:0.789,
    uses:"Beverages, bioethanol fuel, antiseptic solvent, perfumery, organic synthesis",
    realWorld:"Brazil runs 30% of its vehicle fleet on pure bioethanol derived from sugarcane fermentation.",
    connections:["Fermentation","Oxidation of alcohols","Esterification","Functional groups"],
    links:["topics.html#organic","reactions.html","experiments.html"],
    whyItMatters:"Ethanol can be oxidised in stages: ethanol → ethanal (Cr₂O₇²⁻/H⁺, distill) → ethanoic acid (Cr₂O₇²⁻/H⁺, reflux). The choice of conditions controls the product.",
    commonMistake:"Ethanol is NOT the only alcohol. Methanol (CH₃OH) is highly toxic — metabolised to formaldehyde. Do not confuse them; methanol has caused mass poisoning incidents.",
    category:"organic"
  },
  {
    formula:"CH₃COOH", name:"Ethanoic Acid", type:"organic", molarMass:60.05,
    melt:16.6, boil:117.9, density:1.049,
    uses:"Vinegar (5% solution), food preservative (E260), solvent, acetate manufacture",
    realWorld:"Vinegar has been used as a preservative and medicine since ancient Egypt. Modern acetic acid is made industrially via methanol carbonylation.",
    connections:["Weak acids","Esterification","Carboxylic acids","Ka values"],
    links:["topics.html#acids","topics.html#organic","reactions.html"],
    whyItMatters:"Ethanoic acid is a weak acid (Ka = 1.8×10⁻⁵) — only ~1% dissociates at typical concentrations. This distinguishes it from strong acids like HCl which dissociate 100%.",
    commonMistake:"Weak acid ≠ dilute acid. A weak acid has a small Ka regardless of concentration. A concentrated weak acid can still have a low pH if concentration is high enough.",
    category:"organic"
  },
  {
    formula:"HCl", name:"Hydrochloric Acid", type:"acid", molarMass:36.46,
    melt:-114.2, boil:-85.1, density:0.00164,
    uses:"Metal cleaning, PVC manufacture, food processing (E507), gastric acid",
    realWorld:"Your stomach produces HCl at pH 1.5–2. Without it, you couldn't digest proteins or kill pathogens in food.",
    connections:["Strong acids","Neutralisation","Ionic dissociation","pH scale"],
    links:["topics.html#acids","calculators.html","experiments.html"],
    whyItMatters:"HCl is a strong acid — complete dissociation in water: HCl → H⁺ + Cl⁻. For 0.1 mol/L HCl, pH = 1 (no equilibrium calculation needed).",
    commonMistake:"HF is NOT a strong acid despite fluorine being the most electronegative element. The H-F bond is so strong that HF is actually a weak acid (Ka = 6.8×10⁻⁴).",
    category:"acid"
  },
  {
    formula:"Fe₂O₃", name:"Iron(III) Oxide", type:"ionic", molarMass:159.69,
    melt:1565, boil:null, density:5.24,
    uses:"Rust, red pigment (ochre), iron ore (haematite), thermite reaction",
    realWorld:"Rusting of iron costs the global economy over $2.5 trillion annually. Galvanisation (Zn coating) prevents it by sacrificial protection.",
    connections:["Oxidation states","Redox reactions","Blast furnace","Corrosion"],
    links:["reactions.html","topics.html#thermo","industrial.html"],
    whyItMatters:"Rusting is electrochemical: Fe loses electrons at anode (oxidation), O₂ gains electrons at cathode (reduction). Water acts as electrolyte. Fe → Fe²⁺ → Fe³⁺ in Fe₂O₃.",
    commonMistake:"Rust is not just 'dirty iron' — it's a completely different compound (Fe₂O₃·xH₂O) that flakes off, exposing fresh iron underneath. Unlike aluminium oxide, it's not protective.",
    category:"ionic"
  },
  {
    formula:"H₂O₂", name:"Hydrogen Peroxide", type:"covalent", molarMass:34.01,
    melt:-0.43, boil:150.2, density:1.44,
    uses:"Bleaching hair/teeth, wound antiseptic, rocket oxidiser, wastewater treatment",
    realWorld:"At 90%+ concentration, H₂O₂ was used as a propellant in early rocket engines — it decomposes rapidly releasing O₂ and steam.",
    connections:["Oxidising agents","Catalase enzyme","Decomposition reactions","Disproportionation"],
    links:["reactions.html","experiments.html","topics.html#thermo"],
    whyItMatters:"H₂O₂ is both an oxidising AND reducing agent depending on conditions — it can disproportionate: 2H₂O₂ → 2H₂O + O₂. Catalase in blood does this at 6 million molecules/second.",
    commonMistake:"Higher concentration H₂O₂ is NOT safer for wounds — it damages healthy tissue and slows healing. Medical use is typically 3%, not the 30% used industrially.",
    category:"covalent"
  },
  {
    formula:"C₆H₆", name:"Benzene", type:"organic", molarMass:78.11,
    melt:5.5, boil:80.1, density:0.879,
    uses:"Precursor to plastics, dyes, pharmaceuticals, nylon, TNT, styrene",
    realWorld:"Benzene's aromatic stability makes it the foundation of the dye industry — the first synthetic dyes (1850s) transformed fashion and led to modern drug synthesis.",
    connections:["Aromaticity","Electrophilic substitution","Delocalisation","Resonance"],
    links:["topics.html#organic","reactions.html","molecules.html"],
    whyItMatters:"All 6 C-C bonds in benzene are equal (1.40 Å — between single 1.54Å and double 1.34Å). The delocalised π system gives ~150 kJ/mol extra stability (resonance energy).",
    commonMistake:"Benzene undergoes substitution, NOT addition. Adding Br₂ across benzene would destroy the aromatic ring's stabilisation energy — thermodynamically unfavourable.",
    category:"organic"
  },
  {
    formula:"CuSO₄", name:"Copper(II) Sulphate", type:"ionic", molarMass:159.61,
    melt:200, boil:null, density:3.6,
    uses:"Fungicide (Bordeaux mixture), electroplating, Benedict's test, swimming pools",
    realWorld:"CuSO₄·5H₂O (blue) → CuSO₄ (white) at 150°C. This colour change is a classic test for water presence.",
    connections:["Transition metal chemistry","Hydrated salts","Electroplating","Water test"],
    links:["periodic-table.html","experiments.html","data-tables.html"],
    whyItMatters:"The blue colour of hydrated CuSO₄ comes from Cu²⁺ ions with 4-6 water ligands causing d-orbital splitting. This is the basis of transition metal colour theory.",
    commonMistake:"The colour change from blue to white is physical, not chemical — but heating further does give a chemical change. The anhydrous white salt is a desiccant.",
    category:"ionic"
  },
];
