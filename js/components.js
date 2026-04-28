/* ═══════════════════════════════════════════════
   CHEMSPREAD · SHARED COMPONENTS v4.0
   Complete nav + footer linking ALL 26 pages
   ═══════════════════════════════════════════════ */
(function(){
"use strict";
const $  = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];

/* ── NAV ── */
document.body.insertAdjacentHTML("afterbegin",`
<div id="scroll-progress"></div>
<nav id="main-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Chem<em>Spread</em><sup>β</sup></a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html"           data-page="home">Home</a></li>
      <li><a href="topics.html"          data-page="topics">Topics</a></li>
      <li><a href="periodic-table.html"  data-page="ptable">Elements</a></li>
      <li><a href="calculators.html"     data-page="calculators">Tools</a></li>
      <li><a href="reactions.html"       data-page="reactions">Reactions</a></li>
      <li><a href="quiz.html"            data-page="quiz">Quiz</a></li>
      <li class="nav-more-item">
        <a href="#" class="nav-more-trigger" id="nav-more-btn">More ▾</a>
        <ul class="nav-dropdown" id="nav-dropdown">
          <li><a href="compounds.html"      data-page="compounds">Compounds</a></li>
          <li><a href="molecules.html"      data-page="molecules">Molecules</a></li>
          <li><a href="chemists.html"       data-page="chemists">Chemists</a></li>
          <li><a href="glossary.html"       data-page="glossary">Glossary</a></li>
          <li><a href="timeline.html"       data-page="timeline">Timeline</a></li>
          <li><a href="daily-chemistry.html" data-page="daily">Daily Chemistry</a></li>
          <li><a href="experiments.html"    data-page="experiments">Experiments</a></li>
          <li><a href="lab-safety.html"     data-page="labsafety">Lab Safety</a></li>
          <li><a href="instruments.html"    data-page="instruments">Instruments</a></li>
          <li><a href="unit-conversion.html" data-page="unitconv">Unit Conversion</a></li>
          <li><a href="industrial.html"     data-page="industrial">Industrial</a></li>
          <li><a href="data-tables.html"    data-page="data-tables">Data Tables</a></li>
          <li><a href="derivations.html"    data-page="derivations">Derivations</a></li>
          <li><a href="books.html"          data-page="books">Books</a></li>
          <li><a href="resources.html"      data-page="resources">Resources</a></li>
          <li><a href="basics.html"         data-page="basics">Basics</a></li>
          <li><a href="domains.html"        data-page="domains">Domains</a></li>
          <li><a href="careers.html"        data-page="careers">Careers</a></li>
          <li><a href="projects.html"       data-page="projects">Projects</a></li>
          <li><a href="bonding.html"       data-page="bonding">Bonding Visualizer</a></li>
          <li><a href="learning-path.html"  data-page="learning-path">Learning Path</a></li>
          <li><a href="all-topics.html"     data-page="all-topics">Full Index</a></li>
        </ul>
      </li>
    </ul>
    <div class="nav-search">
      <span style="color:var(--text-muted);font-size:.8rem">⌕</span>
      <input type="text" id="nav-search-input" placeholder="Search…" autocomplete="off"/>
    </div>
    <a href="topics.html" class="btn nav-cta">Explore →</a>
    <div class="nav-hamburger" id="nav-hamburger"><span></span><span></span><span></span></div>
  </div>
  <div id="search-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;background:var(--bg);border-bottom:1px solid var(--border);border-top:1px solid var(--border);padding:1rem clamp(1.2rem,5vw,4rem);z-index:300;max-height:340px;overflow-y:auto"></div>
</nav>`);

/* ── FOOTER ── */
document.body.insertAdjacentHTML("beforeend",`
<footer id="main-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="footer-brand-name">Chem<em>Spread</em></span>
        <p>A complete chemistry education platform for Class 8–12. Built with scientific rigour.</p>
        <div style="margin-top:1.2rem;font-family:var(--mono);font-size:.6rem;color:var(--accent);letter-spacing:.1em">H · He · Li · Be · B · C · N · O · F · Ne</div>
      </div>
      <div class="footer-col">
        <h4>Core Topics</h4>
        <ul>
          <li><a href="basics.html">Chemistry Basics</a></li>
          <li><a href="topics.html#atomic">Atomic Structure</a></li>
          <li><a href="topics.html#bonding">Chemical Bonding</a></li>
          <li><a href="topics.html#thermo">Thermochemistry</a></li>
          <li><a href="topics.html#organic">Organic Chemistry</a></li>
          <li><a href="topics.html#moles">Mole Concept</a></li>
          <li><a href="reactions.html">Reactions</a></li>
          <li><a href="compounds.html">Compounds</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Tools &amp; Reference</h4>
        <ul>
          <li><a href="periodic-table.html">Periodic Table</a></li>
          <li><a href="calculators.html">Calculators</a></li>
          <li><a href="unit-conversion.html">Unit Conversion</a></li>
          <li><a href="glossary.html">Glossary</a></li>
          <li><a href="data-tables.html">Data Tables</a></li>
          <li><a href="derivations.html">Derivations</a></li>
          <li><a href="molecules.html">Molecules</a></li>
          <li><a href="timeline.html">Timeline</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn &amp; Explore</h4>
        <ul>
          <li><a href="quiz.html">Interactive Quiz</a></li>
          <li><a href="experiments.html">Experiments</a></li>
          <li><a href="lab-safety.html">Lab Safety</a></li>
          <li><a href="instruments.html">Instruments</a></li>
          <li><a href="industrial.html">Industrial Chem</a></li>
          <li><a href="daily-chemistry.html">Daily Chemistry</a></li>
          <li><a href="chemists.html">Notable Chemists</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="books.html">Books</a></li>
          <li><a href="domains.html">Domains</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="all-topics.html">Full Index</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 ChemSpread · Educational Use Only</span>
      <span>ΔG=ΔH−TΔS · PV=nRT · pH=−log[H⁺] · n=m/M</span>
    </div>
  </div>
</footer>
<button id="back-to-top" aria-label="Back to top">↑</button>`);

/* ── DROPDOWN STYLES ── */
const s=document.createElement("style");
s.textContent=`.nav-more-item{position:relative}.nav-dropdown{display:none;position:absolute;top:calc(100% + 6px);right:0;background:var(--bg);border:1px solid var(--border-med);list-style:none;min-width:210px;z-index:400;box-shadow:0 8px 24px rgba(45,27,105,.13);padding:.3rem 0;max-height:400px;overflow-y:auto}.nav-dropdown.open{display:block;animation:fadeSlideUp .2s ease}.nav-dropdown li a{display:block;padding:.45rem 1.1rem;font-size:.77rem;color:var(--text-muted);transition:color .15s,background .15s;letter-spacing:.02em}.nav-dropdown li a:hover{color:var(--primary);background:rgba(159,122,234,.07)}.nav-more-trigger::after{display:none!important}`;
document.head.appendChild(s);

/* ── ACTIVE LINK ── */
const pg=document.documentElement.dataset.page||"";
$$(`[data-page="${pg}"]`).forEach(a=>a.classList.add("active"));

/* ── MORE DROPDOWN ── */
const moreBtn=$("#nav-more-btn"), drop=$("#nav-dropdown");
moreBtn.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();drop.classList.toggle("open");});
document.addEventListener("click",e=>{if(!e.target.closest(".nav-more-item"))drop.classList.remove("open");});

/* ── HAMBURGER ── */
const hb=$("#nav-hamburger"), nl=$("#nav-links");
hb.addEventListener("click",()=>nl.classList.toggle("open"));

/* ── SCROLL ── */
const nav=$("#main-nav"), bar=$("#scroll-progress"), btt=$("#back-to-top");
let tick=false;
window.addEventListener("scroll",()=>{
  if(!tick){requestAnimationFrame(()=>{
    nav.classList.toggle("scrolled",scrollY>40);
    const max=document.body.scrollHeight-innerHeight;
    if(bar&&max>0)bar.style.width=(scrollY/max*100)+"%";
    if(btt)btt.classList.toggle("visible",scrollY>400);
    tick=false;
  });tick=true;}
},{passive:true});

/* ── BACK TO TOP ── */
if(btt)btt.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

/* ── REVEAL ── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target);}});
},{threshold:.06,rootMargin:"0px 0px -40px 0px"});
const initRev=()=>$$(".reveal").forEach(el=>obs.observe(el));
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",initRev):initRev();

/* ── SEARCH INDEX ── */
const IDX=[
  {t:"Mole Concept",u:"topics.html#moles",c:"Topic",k:"moles avogadro stoichiometry n=m/M"},
  {t:"Atomic Structure",u:"topics.html#atomic",c:"Topic",k:"electron proton neutron orbital nucleus Bohr"},
  {t:"Chemical Bonding",u:"topics.html#bonding",c:"Topic",k:"ionic covalent metallic VSEPR hybridisation"},
  {t:"Acids Bases Salts",u:"topics.html#acids",c:"Topic",k:"pH acid base neutralisation buffer titration"},
  {t:"Thermochemistry",u:"topics.html#thermo",c:"Topic",k:"enthalpy Hess Gibbs entropy ΔH ΔG exothermic"},
  {t:"Organic Chemistry",u:"topics.html#organic",c:"Topic",k:"alkane alkene alcohol ester benzene isomer"},
  {t:"Matter & States",u:"topics.html#matter",c:"Topic",k:"solid liquid gas plasma melting phase"},
  {t:"Reactions",u:"reactions.html",c:"Topic",k:"combustion redox synthesis decomposition neutralisation"},
  {t:"Compounds",u:"compounds.html",c:"Reference",k:"H2O NaCl H2SO4 NH3 CO2 ionic covalent"},
  {t:"Molecules",u:"molecules.html",c:"Reference",k:"VSEPR shape geometry polar bent linear tetrahedral"},
  {t:"Timeline",u:"timeline.html",c:"History",k:"history Lavoisier Mendeleev Curie Dalton Bohr discovery"},
  {t:"Periodic Table",u:"periodic-table.html",c:"Tool",k:"element group period mendeleev 118 trend"},
  {t:"Mole Calculator",u:"calculators.html",c:"Calculator",k:"n=m/M moles mass molar gram"},
  {t:"pH Calculator",u:"calculators.html",c:"Calculator",k:"pH acid base log hydrogen concentration"},
  {t:"Ideal Gas Law",u:"calculators.html",c:"Calculator",k:"PV=nRT pressure volume temperature gas"},
  {t:"Unit Conversion",u:"unit-conversion.html",c:"Tool",k:"convert temperature mass pressure volume energy"},
  {t:"Experiments",u:"experiments.html",c:"Lab",k:"titration electrolysis flame test rate reaction"},
  {t:"Lab Safety",u:"lab-safety.html",c:"Lab",k:"PPE goggles hazard COSHH safety symbols fire"},
  {t:"Instruments",u:"instruments.html",c:"Lab",k:"burette pipette spectrophotometer pH meter centrifuge"},
  {t:"Daily Chemistry",u:"daily-chemistry.html",c:"Learn",k:"everyday kitchen food body environment fact"},
  {t:"Industrial Chemistry",u:"industrial.html",c:"Topic",k:"Haber Contact Ostwald Chlor-Alkali cracking"},
  {t:"Chemists",u:"chemists.html",c:"History",k:"Lavoisier Mendeleev Curie Pauling Dalton Nobel"},
  {t:"Glossary",u:"glossary.html",c:"Reference",k:"definitions terms electronegativity entropy catalyst"},
  {t:"Data Tables",u:"data-tables.html",c:"Reference",k:"data electronegativity radius ionisation density table"},
  {t:"Derivations",u:"derivations.html",c:"Reference",k:"formula proof PV=nRT pH Gibbs derive"},
  {t:"Books",u:"books.html",c:"Learn",k:"textbook Atkins Clayden Tro reading chemistry"},
  {t:"Careers",u:"careers.html",c:"Learn",k:"career job chemist pharmacist engineer biochemist"},
  {t:"Domains",u:"domains.html",c:"Learn",k:"organic inorganic physical analytical biochemistry"},
  {t:"Basics",u:"basics.html",c:"Topic",k:"what is chemistry element compound mixture conservation"},
  {t:"Projects",u:"projects.html",c:"Learn",k:"project experiment investigation school science fair"},
  {t:"Quiz",u:"quiz.html",c:"Tool",k:"test MCQ questions score atomic organic acids industrial"},
  {t:"Resources",u:"resources.html",c:"Reference",k:"download symbols units constants formulas reference"},
  {t:"Hydrogen H",u:"periodic-table.html",c:"Element",k:"hydrogen H 1 lightest water universe"},
  {t:"Carbon C",u:"periodic-table.html",c:"Element",k:"carbon C 6 organic diamond graphite life"},
  {t:"Gold Au",u:"periodic-table.html",c:"Element",k:"gold Au 79 noble metal conductor jewellery"},
  {t:"Iron Fe",u:"periodic-table.html",c:"Element",k:"iron Fe 26 steel haemoglobin blood transition"},
  {t:"Sodium Na",u:"periodic-table.html",c:"Element",k:"sodium Na 11 alkali NaCl salt reactive"},
  {t:"Oxygen O",u:"periodic-table.html",c:"Element",k:"oxygen O 8 combustion respiration air"},
  {t:"Nitrogen N",u:"periodic-table.html",c:"Element",k:"nitrogen N 7 atmosphere Haber fertiliser"},
  {t:"Uranium U",u:"periodic-table.html",c:"Element",k:"uranium U 92 nuclear radioactive actinide"},
];
const CCOLORS={Topic:"#5A4FCF",Calculator:"#9F7AEA",Tool:"#27AE60",Element:"#E67E22",
  History:"#16A085",Lab:"#C0392B",Reference:"#2980B9",Learn:"#8E44AD",
  Interactive:"#D35400",Compound:"#16A085",Reaction:"#C0392B"};

const si=$("#nav-search-input"), sd=$("#search-dropdown");
si.addEventListener("input",()=>{
  const q=si.value.trim().toLowerCase();
  if(!q||q.length<2){sd.style.display="none";return;}
  const esc=q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  const res=IDX.filter(r=>r.t.toLowerCase().includes(q)||r.k.toLowerCase().includes(q)||(r.c||"").toLowerCase().includes(q)).slice(0,8);
  if(!res.length){sd.innerHTML=`<span style="font-family:var(--mono);font-size:.72rem;color:var(--text-muted)">No results for "${q}"</span>`;}
  else{sd.innerHTML=res.map(r=>{
    const hi=r.t.replace(new RegExp(esc,"gi"),m=>`<mark style="background:rgba(159,122,234,.2);color:var(--primary);padding:0 2px">${m}</mark>`);
    const col=CCOLORS[r.c]||"#6B6580";
    return `<a href="${r.u}" style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;color:var(--text);border-bottom:1px solid var(--border);font-size:.8rem;text-decoration:none" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text)'"><span>${hi}</span><span style="font-family:var(--mono);font-size:.52rem;letter-spacing:.1em;text-transform:uppercase;color:${col};padding:.15rem .4rem;border:1px solid ${col}44;margin-left:.8rem;white-space:nowrap">${r.c}</span></a>`;
  }).join("");}
  sd.style.display="block";
});
si.addEventListener("keydown",e=>{
  const links=$$("a",sd);
  if(e.key==="ArrowDown"&&links.length){e.preventDefault();links[0].focus();}
  if(e.key==="Escape"){sd.style.display="none";si.blur();}
});
$$("a",sd).forEach((l,i)=>l.addEventListener("keydown",e=>{
  const ls=$$("a",sd);
  if(e.key==="ArrowDown"&&ls[i+1]){e.preventDefault();ls[i+1].focus();}
  if(e.key==="ArrowUp"){e.preventDefault();i>0?ls[i-1].focus():si.focus();}
  if(e.key==="Escape"){sd.style.display="none";si.focus();}
}));
document.addEventListener("click",e=>{if(!e.target.closest("#main-nav"))sd.style.display="none";});
})();
