/* ═══════════════════════════════════════════════════════
   CHEMSPREAD · INTERACTIONS ENGINE v3.0
   Particles · Ripple · DYK · Reveal · Compare · Charts
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── HELPERS ─────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const isMobile = () => window.innerWidth <= 768;

  /* ════════════════════════════════════════════════════
     1. PARTICLE CANVAS — atom-inspired floating dots
  ════════════════════════════════════════════════════ */
  function initParticles() {
    if (isMobile()) return;

    const canvas = document.createElement("canvas");
    canvas.id = "cs-particle-canvas";
    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    const COLORS = [
      "rgba(90,79,207,",
      "rgba(159,122,234,",
      "rgba(45,27,105,",
    ];

    class Particle {
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * W;
        this.y = init ? Math.random() * H : H + 10;
        this.r = Math.random() * 2.2 + 0.6;
        this.speed = Math.random() * 0.28 + 0.06;
        this.drift = (Math.random() - 0.5) * 0.18;
        this.opacity = Math.random() * 0.45 + 0.08;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.015 + 0.005;
        // connection partner index
        this.pair = -1;
      }
      update() {
        this.y -= this.speed;
        this.x += this.drift;
        this.pulse += this.pulseSpeed;
        if (this.y < -10) this.reset();
      }
      draw() {
        const alpha = this.opacity * (0.75 + 0.25 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + alpha + ")";
        ctx.fill();
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initParticlesArr() {
      const count = Math.min(55, Math.floor(W * H / 18000));
      particles = Array.from({ length: count }, () => new Particle());
    }

    function drawConnections() {
      const dist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            const alpha = (1 - d / dist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(90,79,207,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    let rafId;
    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      rafId = requestAnimationFrame(loop);
    }

    resize();
    initParticlesArr();
    loop();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resize(); initParticlesArr(); }, 200);
    });
  }

  /* ════════════════════════════════════════════════════
     2. RIPPLE EFFECT on buttons
  ════════════════════════════════════════════════════ */
  function initRipple() {
    function addRipple(e) {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top  - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "ripple-wave";
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    }

    const selectors = [
      ".btn-primary", ".btn-outline", ".nav-cta",
      ".calc-btn-run", ".calc-btn-reset"
    ];
    selectors.forEach(sel => {
      $$(`${sel}:not([data-ripple])`).forEach(btn => {
        btn.dataset.ripple = "1";
        btn.addEventListener("click", addRipple);
      });
    });

    // observe dynamic buttons (calculators load them dynamically)
    const btnObs = new MutationObserver(() => {
      selectors.forEach(sel => {
        $$(`${sel}:not([data-ripple])`).forEach(btn => {
          btn.dataset.ripple = "1";
          btn.addEventListener("click", addRipple);
        });
      });
    });
    btnObs.observe(document.body, { childList: true, subtree: true });
  }

  /* ════════════════════════════════════════════════════
     3. DID-YOU-KNOW ROTATING ENGINE
  ════════════════════════════════════════════════════ */
  const DYK_FACTS = [
    "A single mole of sand grains would cover Earth to a depth of several metres — yet chemists routinely work with moles of atoms in a test tube.",
    "Fluorine is so reactive it will ignite glass, concrete, and even water under the right conditions.",
    "Diamond and graphite are both pure carbon — their properties differ entirely because of how the carbon atoms are arranged.",
    "Hydrogen makes up about 75% of the mass of all ordinary matter in the universe.",
    "The smell of rain (petrichor) is caused by a compound called geosmin, produced by bacteria and released when rain hits dry soil.",
    "Gold is so malleable that one gram can be beaten into a sheet covering roughly 1 square metre.",
    "At room temperature, bromine is the only nonmetal that exists as a liquid.",
    "Osmium is the densest naturally occurring element — a cube 10 cm on each side would weigh about 22.6 kg.",
    "The human body contains enough carbon to make around 9,000 pencils.",
    "Oxygen was discovered independently by Carl Wilhelm Scheele and Joseph Priestley — within two years of each other.",
    "The word 'chemistry' traces to the Arabic 'al-kīmiyā', itself from the Greek 'khēmia', meaning the art of transmuting metals.",
    "At absolute zero (−273.15 °C), molecular motion theoretically stops — but quantum mechanics prevents anything from ever reaching exactly 0 K.",
    "Water expands when it freezes — which is why ice floats and aquatic life survives under frozen lakes in winter.",
    "The Haber-Bosch process for synthesising ammonia is estimated to feed roughly half the global population today.",
    "Gallium melts at just 29.8 °C — you can melt it simply by holding it in your hand.",
  ];

  function initDYKEngine() {
    $$(".dyk-block").forEach(block => {
      // skip if already processed
      if (block.dataset.dyk) return;
      block.dataset.dyk = "1";

      // build rotating content
      const textEl = block.querySelector("p");
      if (!textEl) return;

      const originalText = textEl.textContent;

      // build pool: original + 4 random from global facts
      const pool = [originalText];
      const shuffled = [...DYK_FACTS].sort(() => Math.random() - 0.5);
      for (const f of shuffled) {
        if (pool.length >= 5) break;
        if (f !== originalText) pool.push(f);
      }

      // replace inner HTML
      const label = block.querySelector(".dyk-label");
      const labelHTML = label ? label.outerHTML : '<div class="dyk-label">Did you know?</div>';

      block.innerHTML = `
        ${labelHTML}
        <div class="dyk-rotating">
          ${pool.map((f, i) =>
            `<p class="${i === 0 ? "dyk-active" : ""}">${f}</p>`
          ).join("")}
        </div>
        <div class="dyk-dots">
          ${pool.map((_, i) =>
            `<div class="dyk-dot ${i === 0 ? "active" : ""}" data-idx="${i}"></div>`
          ).join("")}
        </div>`;

      let cur = 0;
      const allP = $$("p", block);
      const allDots = $$(".dyk-dot", block);

      function goTo(idx) {
        allP[cur].classList.remove("dyk-active");
        allDots[cur].classList.remove("active");
        cur = idx;
        allP[cur].classList.add("dyk-active");
        allDots[cur].classList.add("active");
      }

      allDots.forEach(dot => {
        dot.addEventListener("click", () => {
          clearInterval(timer);
          goTo(parseInt(dot.dataset.idx));
          timer = setInterval(() => goTo((cur + 1) % pool.length), 5000);
        });
      });

      let timer = setInterval(() => goTo((cur + 1) % pool.length), 5000);
    });
  }

  /* ════════════════════════════════════════════════════
     4. ENHANCED SCROLL REVEAL (debounced fallback)
     Already handled by IntersectionObserver in components.js
     — add additional "active" class for legacy support
  ════════════════════════════════════════════════════ */
  function initRevealFallback() {
    const reveals = $$(".reveal");
    const check = () => {
      reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          el.classList.add("visible");
          el.classList.add("active"); // legacy class
        }
      });
    };
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => { check(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    check();
  }

  /* ════════════════════════════════════════════════════
     5. STAGGER REVEAL — add reveal-stagger to grids
  ════════════════════════════════════════════════════ */
  function initStaggerReveal() {
    const gridObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          gridObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    $$(".reveal-stagger").forEach(el => gridObs.observe(el));
  }

  /* ════════════════════════════════════════════════════
     6. AMBIENT SOUND TOGGLE (optional, off by default)
  ════════════════════════════════════════════════════ */
  function initSoundToggle() {
    const btn = document.createElement("button");
    btn.id = "sound-toggle";
    btn.title = "Toggle ambient sound";
    btn.innerHTML = "♪";
    btn.setAttribute("aria-label", "Toggle ambient sound");
    document.body.appendChild(btn);

    // Synthesised ambient using Web Audio API — no file needed
    let audioCtx = null;
    let gainNode = null;
    let noiseSource = null;
    let soundOn = false;

    function createAmbience() {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

      // Brown noise via script processor
      const bufferSize = 4096;
      const brown = audioCtx.createScriptProcessor(bufferSize, 1, 1);
      let lastOut = 0;
      brown.onaudioprocess = (e) => {
        const out = e.outputBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          out[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = out[i];
          out[i] *= 3.5;
        }
      };
      brown.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      noiseSource = brown;
    }

    btn.addEventListener("click", () => {
      soundOn = !soundOn;
      btn.classList.toggle("sound-on", soundOn);
      btn.innerHTML = soundOn ? "♫" : "♪";
      btn.title = soundOn ? "Ambient sound ON (click to mute)" : "Toggle ambient sound";

      if (soundOn) {
        if (!audioCtx) createAmbience();
        else audioCtx.resume();
        gainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 0.8);
      } else if (audioCtx) {
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
        setTimeout(() => audioCtx.suspend(), 900);
      }
    });
  }

  /* ════════════════════════════════════════════════════
     7. ELEMENT HOVER PREVIEW (periodic table page only)
  ════════════════════════════════════════════════════ */
  function initElementHoverPreview() {
    const grid = $("#ptable-grid");
    if (!grid) return;

    const preview = document.createElement("div");
    preview.id = "el-hover-preview";
    document.body.appendChild(preview);

    let previewTimer;

    grid.addEventListener("mouseover", (e) => {
      const el = e.target.closest(".el:not(.el-empty)");
      if (!el) return;
      const sym = el.querySelector(".el-sym")?.textContent || "";
      const name = el.querySelector(".el-name")?.textContent || "";
      const num  = el.querySelector(".el-num")?.textContent  || "";

      clearTimeout(previewTimer);
      previewTimer = setTimeout(() => {
        preview.innerHTML = `
          <div class="ph-num">Atomic No. ${num}</div>
          <div class="ph-sym">${sym}</div>
          <div class="ph-name">${name}</div>
          <div class="ph-desc" id="ph-desc-text">Click to view full details →</div>`;
        preview.classList.add("visible");
      }, 80);
    });

    grid.addEventListener("mousemove", (e) => {
      const x = e.clientX + 16;
      const y = e.clientY - 80;
      preview.style.left = Math.min(x, window.innerWidth - 220) + "px";
      preview.style.top  = Math.max(y, 10) + "px";
    });

    grid.addEventListener("mouseleave", () => {
      clearTimeout(previewTimer);
      preview.classList.remove("visible");
    });

    grid.addEventListener("click", () => {
      preview.classList.remove("visible");
    });
  }

  /* ════════════════════════════════════════════════════
     8. ELEMENT COMPARISON TOOL (periodic table page only)
  ════════════════════════════════════════════════════ */
  const ELEMENT_DATA = {
    H:  { name:"Hydrogen",   mass:1.008,  en:2.20, bp:-252.9, density:0.0000899, cat:"Nonmetal" },
    He: { name:"Helium",     mass:4.003,  en:0,    bp:-268.9, density:0.0001785, cat:"Noble Gas" },
    Li: { name:"Lithium",    mass:6.941,  en:0.98, bp:1342,   density:0.534,     cat:"Alkali Metal" },
    Be: { name:"Beryllium",  mass:9.012,  en:1.57, bp:2470,   density:1.85,      cat:"Alkaline Earth" },
    B:  { name:"Boron",      mass:10.811, en:2.04, bp:2550,   density:2.34,      cat:"Metalloid" },
    C:  { name:"Carbon",     mass:12.011, en:2.55, bp:3642,   density:2.267,     cat:"Nonmetal" },
    N:  { name:"Nitrogen",   mass:14.007, en:3.04, bp:-195.8, density:0.001251,  cat:"Nonmetal" },
    O:  { name:"Oxygen",     mass:15.999, en:3.44, bp:-183.0, density:0.001429,  cat:"Nonmetal" },
    F:  { name:"Fluorine",   mass:18.998, en:3.98, bp:-188.1, density:0.001696,  cat:"Halogen" },
    Ne: { name:"Neon",       mass:20.180, en:0,    bp:-246.1, density:0.0009002, cat:"Noble Gas" },
    Na: { name:"Sodium",     mass:22.990, en:0.93, bp:883,    density:0.971,     cat:"Alkali Metal" },
    Mg: { name:"Magnesium",  mass:24.305, en:1.31, bp:1091,   density:1.738,     cat:"Alkaline Earth" },
    Al: { name:"Aluminium",  mass:26.982, en:1.61, bp:2519,   density:2.698,     cat:"Post-Transition" },
    Si: { name:"Silicon",    mass:28.086, en:1.90, bp:3265,   density:2.33,      cat:"Metalloid" },
    P:  { name:"Phosphorus", mass:30.974, en:2.19, bp:280.5,  density:1.82,      cat:"Nonmetal" },
    S:  { name:"Sulfur",     mass:32.065, en:2.58, bp:444.6,  density:2.067,     cat:"Nonmetal" },
    Cl: { name:"Chlorine",   mass:35.453, en:3.16, bp:-34.0,  density:0.003214,  cat:"Halogen" },
    Ar: { name:"Argon",      mass:39.948, en:0,    bp:-185.8, density:0.001784,  cat:"Noble Gas" },
    K:  { name:"Potassium",  mass:39.098, en:0.82, bp:759,    density:0.862,     cat:"Alkali Metal" },
    Ca: { name:"Calcium",    mass:40.078, en:1.00, bp:1484,   density:1.55,      cat:"Alkaline Earth" },
    Fe: { name:"Iron",       mass:55.845, en:1.83, bp:2862,   density:7.874,     cat:"Transition Metal" },
    Cu: { name:"Copper",     mass:63.546, en:1.90, bp:2562,   density:8.96,      cat:"Transition Metal" },
    Zn: { name:"Zinc",       mass:65.38,  en:1.65, bp:907,    density:7.133,     cat:"Transition Metal" },
    Ag: { name:"Silver",     mass:107.87, en:1.93, bp:2162,   density:10.49,     cat:"Transition Metal" },
    Au: { name:"Gold",       mass:196.97, en:2.54, bp:2856,   density:19.32,     cat:"Transition Metal" },
    Hg: { name:"Mercury",    mass:200.59, en:2.00, bp:356.7,  density:13.534,    cat:"Transition Metal" },
    Pb: { name:"Lead",       mass:207.2,  en:2.33, bp:1749,   density:11.34,     cat:"Post-Transition" },
    U:  { name:"Uranium",    mass:238.03, en:1.38, bp:4131,   density:19.1,      cat:"Actinide" },
    Br: { name:"Bromine",    mass:79.904, en:2.96, bp:59.0,   density:3.122,     cat:"Halogen" },
    I:  { name:"Iodine",     mass:126.90, en:2.66, bp:184.3,  density:4.933,     cat:"Halogen" },
  };

  function initCompare() {
    const grid = $("#ptable-grid");
    if (!grid) return;

    let selected = [];
    const statusBar = document.createElement("div");
    statusBar.style.cssText = `
      font-family:var(--mono);font-size:0.68rem;color:var(--text-muted);
      padding:0.7rem 0;letter-spacing:0.06em;margin-bottom:0.5rem;
      transition:color 0.3s;
    `;
    statusBar.textContent = "Click any element to compare · Select 2 to see side-by-side analysis";

    const panel = document.createElement("div");
    panel.id = "compare-panel";

    // Insert after ptable grid
    const ptableWrap = grid.parentElement;
    ptableWrap.after(statusBar);
    statusBar.after(panel);

    // Add compare button to each element
    $$(".el:not(.el-empty)", grid).forEach(el => {
      const sym = el.querySelector(".el-sym")?.textContent;
      if (!sym) return;
      const btn = document.createElement("button");
      btn.className = "el-compare-btn";
      btn.title = "Add to compare";
      btn.innerHTML = "+";
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleCompare(sym, el);
      });
      el.style.position = "relative";
      el.appendChild(btn);
    });

    function toggleCompare(sym, elDiv) {
      const idx = selected.indexOf(sym);
      if (idx > -1) {
        selected.splice(idx, 1);
        elDiv.classList.remove("compare-selected");
      } else {
        if (selected.length >= 2) {
          // deselect oldest
          const old = selected.shift();
          $$(".el", grid).forEach(e => {
            if (e.querySelector(".el-sym")?.textContent === old) {
              e.classList.remove("compare-selected");
            }
          });
        }
        selected.push(sym);
        elDiv.classList.add("compare-selected");
      }
      updateStatus();
      if (selected.length === 2) renderCompare();
      else panel.className = "";
    }

    function updateStatus() {
      if (selected.length === 0) {
        statusBar.textContent = "Click any element to compare · Select 2 to see side-by-side analysis";
        statusBar.style.color = "var(--text-muted)";
      } else if (selected.length === 1) {
        statusBar.textContent = `Selected: ${selected[0]} · Select one more element to compare`;
        statusBar.style.color = "var(--accent)";
      } else {
        statusBar.textContent = `Comparing ${selected[0]} vs ${selected[1]}`;
        statusBar.style.color = "var(--primary)";
      }
    }

    function renderCompare() {
      const [symA, symB] = selected;
      const A = ELEMENT_DATA[symA];
      const B = ELEMENT_DATA[symB];
      if (!A || !B) {
        panel.innerHTML = `<div class="compare-header">Comparison data not available for one or both elements<button class="compare-close">✕</button></div>`;
        panel.className = "open";
        return;
      }

      const maxMass = 240, maxEN = 4, maxDensity = 22;
      const fmtBP = v => v > 0 ? `+${v}°C` : `${v}°C`;

      panel.innerHTML = `
        <div class="compare-header">
          <span>ELEMENT COMPARISON · ${symA} vs ${symB}</span>
          <button class="compare-close" onclick="document.getElementById('compare-panel').className='';this.closest('#compare-panel').className=''">✕</button>
        </div>
        <div class="compare-body">
          <div class="compare-col">
            <div class="compare-symbol">${symA}</div>
            <div class="compare-name">${A.name}</div>
            ${compRow("Atomic Mass", A.mass + " u", B.mass + " u", A.mass / maxMass * 100, false)}
            ${compRow("Electronegativity", A.en || "—", B.en || "—", A.en / maxEN * 100, false)}
            ${compRow("Boiling Point", fmtBP(A.bp), fmtBP(B.bp), null, false)}
            ${compRow("Density (g/cm³)", A.density, B.density, A.density / maxDensity * 100, false)}
            ${compRow("Category", A.cat, B.cat, null, false)}
          </div>
          <div class="compare-vs">vs</div>
          <div class="compare-col">
            <div class="compare-symbol">${symB}</div>
            <div class="compare-name">${B.name}</div>
            ${compRow("Atomic Mass", B.mass + " u", A.mass + " u", B.mass / maxMass * 100, true)}
            ${compRow("Electronegativity", B.en || "—", A.en || "—", B.en / maxEN * 100, true)}
            ${compRow("Boiling Point", fmtBP(B.bp), fmtBP(A.bp), null, true)}
            ${compRow("Density (g/cm³)", B.density, A.density, B.density / maxDensity * 100, true)}
            ${compRow("Category", B.cat, A.cat, null, true)}
          </div>
        </div>`;

      panel.className = "open";
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // animate bars
      setTimeout(() => {
        $$(".compare-bar", panel).forEach(bar => {
          bar.style.width = bar.dataset.w + "%";
        });
      }, 100);
    }

    function compRow(label, val, otherVal, barPct, right) {
      const barHTML = barPct != null
        ? `<div class="compare-bar-wrap"><div class="compare-bar" data-w="${Math.min(100, barPct || 0)}" style="width:0"></div></div>`
        : "";
      return `<div class="compare-row">
        <div>
          <div class="compare-key">${label}</div>
          <div class="compare-val">${val}</div>
          ${barHTML}
        </div>
      </div>`;
    }
  }

  /* ════════════════════════════════════════════════════
     9. TREND CHARTS (periodic table page only)
  ════════════════════════════════════════════════════ */
  function initTrendCharts() {
    const ptWrap = $("#ptable-grid");
    if (!ptWrap) return;

    // Create section
    const section = document.createElement("div");
    section.id = "trend-charts";
    section.innerHTML = `
      <div class="container">
        <div class="reveal" style="margin-bottom:2rem">
          <span class="label">Periodic Trends · Across Period 2 & 3</span>
          <h2 style="margin-top:0.4rem;color:var(--primary)">Element Property Trends</h2>
          <p style="color:var(--text-muted);margin-top:0.4rem;font-size:0.9rem;max-width:52ch">
            Properties of elements vary systematically across periods and down groups. These graphs show key trends for the first three periods.
          </p>
        </div>
        <div class="trend-tabs">
          <button class="trend-tab active" data-chart="en">Electronegativity</button>
          <button class="trend-tab" data-chart="ie">Ionisation Energy</button>
          <button class="trend-tab" data-chart="ar">Atomic Radius</button>
        </div>
        <div class="trend-chart-wrap">
          <canvas id="trend-canvas"></canvas>
        </div>
      </div>`;

    document.body.querySelector("#main-footer")?.before(section);

    // Chart data
    const CHART_DATA = {
      en: {
        label: "Electronegativity (Pauling Scale)",
        labels: ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar"],
        data:   [2.20,0,0.98,1.57,2.04,2.55,3.04,3.44,3.98,0,0.93,1.31,1.61,1.90,2.19,2.58,3.16,0],
        color:  "rgba(159,122,234,",
        note:   "Electronegativity increases across a period (left → right) and decreases down a group."
      },
      ie: {
        label: "First Ionisation Energy (kJ/mol)",
        labels: ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar"],
        data:   [1312,2372,520,900,800,1086,1402,1314,1681,2081,496,738,577,786,1012,1000,1251,1521],
        color:  "rgba(90,79,207,",
        note:   "Ionisation energy generally increases across a period. Noble gases have the highest values."
      },
      ar: {
        label: "Atomic Radius (pm)",
        labels: ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar"],
        data:   [53,31,167,112,87,67,56,48,42,38,190,145,118,111,98,88,79,71],
        color:  "rgba(45,27,105,",
        note:   "Atomic radius decreases across a period as nuclear charge increases, pulling electrons closer."
      }
    };

    let chartInstance = null;

    function drawChart(type) {
      const d = CHART_DATA[type];
      const canvas = $("#trend-canvas");
      if (!canvas) return;

      if (chartInstance) chartInstance.destroy();

      const Chart = window.Chart;
      if (!Chart) return;

      chartInstance = new Chart(canvas, {
        type: "bar",
        data: {
          labels: d.labels,
          datasets: [{
            label: d.label,
            data: d.data,
            backgroundColor: d.data.map((v, i) =>
              v === 0 ? "rgba(159,122,234,0.08)" : `${d.color}${0.55 + (i / d.data.length) * 0.35})`
            ),
            borderColor: d.data.map(v =>
              v === 0 ? "rgba(159,122,234,0.1)" : d.color + "0.8)"
            ),
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          animation: { duration: 700, easing: "easeOutQuart" },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "rgba(45,27,105,0.95)",
              titleFont: { family: "JetBrains Mono", size: 11 },
              bodyFont: { family: "JetBrains Mono", size: 10 },
              callbacks: {
                title: items => items[0].label,
                label: item => {
                  if (item.raw === 0) return "Noble gas — no standard value";
                  return `${d.label.split("(")[0].trim()}: ${item.raw}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: { color: "rgba(45,27,105,0.06)" },
              ticks: { font: { family: "JetBrains Mono", size: 10 }, color: "#6B6580" }
            },
            y: {
              grid: { color: "rgba(45,27,105,0.06)" },
              ticks: { font: { family: "JetBrains Mono", size: 10 }, color: "#6B6580" }
            }
          }
        }
      });

      // Update note
      let noteEl = section.querySelector(".trend-note");
      if (!noteEl) {
        noteEl = document.createElement("p");
        noteEl.className = "trend-note";
        noteEl.style.cssText = "font-family:var(--mono);font-size:0.68rem;color:var(--text-muted);margin-top:1rem;letter-spacing:0.04em;";
        section.querySelector(".container").appendChild(noteEl);
      }
      noteEl.textContent = d.note;
    }

    // Load Chart.js dynamically
    if (!window.Chart) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js";
      script.onload = () => drawChart("en");
      document.head.appendChild(script);
    } else {
      drawChart("en");
    }

    // Tab switching
    $$(".trend-tab", section).forEach(tab => {
      tab.addEventListener("click", () => {
        $$(".trend-tab", section).forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        drawChart(tab.dataset.chart);
      });
    });
  }

  /* ════════════════════════════════════════════════════
     10. REACTION FILTER SYSTEM (topics page only)
  ════════════════════════════════════════════════════ */
  function initReactionFilter() {
    const organicSection = $("#organic");
    if (!organicSection) return;

    const reactionData = [
      {
        name:"Combustion of Methane",
        formula:"CH₄ + 2O₂ → CO₂ + 2H₂O",
        desc:"Rapid oxidation releasing heat and light. Used in natural gas burners and engines.",
        types:["combustion","redox"], difficulty:"easy", use:"industrial"
      },
      {
        name:"Neutralisation",
        formula:"HCl + NaOH → NaCl + H₂O",
        desc:"Acid-base reaction producing salt and water. ΔH ≈ −57 kJ/mol for strong acid + base.",
        types:["neutralisation"], difficulty:"easy", use:"laboratory"
      },
      {
        name:"Photosynthesis",
        formula:"6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        desc:"Endothermic light-driven synthesis of glucose from CO₂ and water by chlorophyll.",
        types:["synthesis","redox"], difficulty:"medium", use:"biological"
      },
      {
        name:"Haber Process",
        formula:"N₂ + 3H₂ ⇌ 2NH₃",
        desc:"Equilibrium reaction at 450°C and 200 atm with Fe catalyst. Basis of fertiliser production.",
        types:["synthesis"], difficulty:"hard", use:"industrial"
      },
      {
        name:"Thermal Decomposition of CaCO₃",
        formula:"CaCO₃ → CaO + CO₂",
        desc:"High-temperature decomposition used in cement manufacture. Endothermic.",
        types:["decomposition"], difficulty:"easy", use:"industrial"
      },
      {
        name:"Esterification",
        formula:"CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
        desc:"Reversible reaction between carboxylic acid and alcohol to form ester. Acid-catalysed.",
        types:["addition"], difficulty:"medium", use:"industrial"
      },
      {
        name:"Reduction of Iron Ore",
        formula:"Fe₂O₃ + 3CO → 2Fe + 3CO₂",
        desc:"Core reaction in the blast furnace. CO acts as the reducing agent.",
        types:["redox","decomposition"], difficulty:"medium", use:"industrial"
      },
      {
        name:"Electrolysis of Water",
        formula:"2H₂O → 2H₂ + O₂",
        desc:"Electrical energy decomposes water into hydrogen and oxygen gases.",
        types:["decomposition","redox"], difficulty:"easy", use:"laboratory"
      },
      {
        name:"Saponification",
        formula:"Triglyceride + 3NaOH → Glycerol + 3RCOONa",
        desc:"Base-catalysed hydrolysis of fats to form soap (fatty acid salts) and glycerol.",
        types:["substitution"], difficulty:"medium", use:"industrial"
      },
      {
        name:"Fermentation",
        formula:"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
        desc:"Anaerobic conversion of glucose to ethanol and CO₂ by yeast enzymes.",
        types:["decomposition"], difficulty:"easy", use:"biological"
      },
    ];

    // Insert reaction section
    const section = document.createElement("div");
    section.style.cssText = "padding:5rem 0;border-top:1px solid var(--border);";
    section.innerHTML = `
      <div class="container">
        <div class="reveal" style="margin-bottom:2rem">
          <span class="label">Interactive · Filter by Type</span>
          <h2 style="margin-top:0.4rem;color:var(--primary)">Chemical Reactions</h2>
        </div>
        <div class="reaction-filter reveal">
          <div class="filter-group">
            <span class="filter-label">Type:</span>
            <div class="tag-system" id="type-filters">
              <div class="chem-tag tag-active" data-filter="all">All</div>
              <div class="chem-tag" data-filter="combustion">Combustion</div>
              <div class="chem-tag" data-filter="redox">Redox</div>
              <div class="chem-tag" data-filter="synthesis">Synthesis</div>
              <div class="chem-tag" data-filter="decomposition">Decomposition</div>
              <div class="chem-tag" data-filter="neutralisation">Neutralisation</div>
              <div class="chem-tag" data-filter="substitution">Substitution</div>
            </div>
          </div>
          <div class="filter-group">
            <span class="filter-label">Difficulty:</span>
            <div class="tag-system" id="diff-filters">
              <div class="chem-tag tag-active" data-diff="all">All Levels</div>
              <div class="chem-tag" data-diff="easy">Introductory</div>
              <div class="chem-tag" data-diff="medium">Intermediate</div>
              <div class="chem-tag" data-diff="hard">Advanced</div>
            </div>
          </div>
        </div>
        <div id="reaction-cards"></div>
        <p id="reaction-empty" style="display:none;font-family:var(--mono);font-size:0.75rem;color:var(--text-muted);padding:1.5rem 0;">No reactions match the selected filters.</p>
      </div>`;

    organicSection.after(section);

    // Render cards
    const cardsWrap = section.querySelector("#reaction-cards");
    reactionData.forEach(r => {
      const card = document.createElement("div");
      card.className = "reaction-card";
      card.dataset.types = r.types.join(",");
      card.dataset.diff = r.difficulty;
      card.innerHTML = `
        <div class="rc-formula">${r.formula}</div>
        <strong style="font-family:var(--serif);color:var(--primary);font-size:1rem">${r.name}</strong>
        <div class="rc-desc">${r.desc}</div>
        <div class="rc-tags">
          ${r.types.map(t => `<span class="rc-tag">${t}</span>`).join("")}
          <span class="rc-tag" style="color:var(--accent);border-color:var(--accent)">${r.difficulty}</span>
          <span class="rc-tag">${r.use}</span>
        </div>`;
      cardsWrap.appendChild(card);
    });

    let activeType = "all", activeDiff = "all";

    function applyFilters() {
      const cards = $$(".reaction-card", cardsWrap);
      let visible = 0;
      cards.forEach(card => {
        const types = card.dataset.types.split(",");
        const diff  = card.dataset.diff;
        const typeOk = activeType === "all" || types.includes(activeType);
        const diffOk = activeDiff === "all" || diff === activeDiff;
        card.classList.toggle("hidden", !(typeOk && diffOk));
        if (typeOk && diffOk) visible++;
      });
      section.querySelector("#reaction-empty").style.display = visible === 0 ? "block" : "none";
    }

    $$(".chem-tag", section.querySelector("#type-filters")).forEach(tag => {
      tag.addEventListener("click", () => {
        $$(".chem-tag", section.querySelector("#type-filters")).forEach(t => t.classList.remove("tag-active"));
        tag.classList.add("tag-active");
        activeType = tag.dataset.filter;
        applyFilters();
      });
    });

    $$(".chem-tag", section.querySelector("#diff-filters")).forEach(tag => {
      tag.addEventListener("click", () => {
        $$(".chem-tag", section.querySelector("#diff-filters")).forEach(t => t.classList.remove("tag-active"));
        tag.classList.add("tag-active");
        activeDiff = tag.dataset.diff;
        applyFilters();
      });
    });
  }

  /* ════════════════════════════════════════════════════
     11. COMPOUND TAG FILTER (glossary / topics page)
  ════════════════════════════════════════════════════ */
  function initCompoundTags() {
    const tagContainers = $$("[data-compound-tag]");
    tagContainers.forEach(container => {
      const tag = container.dataset.compoundTag;
      container.classList.add(`tag-${tag}`);
    });

    // Add filter UI to glossary page
    const glossaryContent = $("#glossary-content");
    if (!glossaryContent) return;

    const filterWrap = document.createElement("div");
    filterWrap.className = "tag-system";
    filterWrap.style.marginBottom = "1.5rem";
    filterWrap.innerHTML = `
      <div class="chem-tag tag-active" data-tag="">All</div>
      <div class="chem-tag" data-tag="organic">Organic</div>
      <div class="chem-tag" data-tag="inorganic">Inorganic</div>
      <div class="chem-tag" data-tag="industrial">Industrial</div>
      <div class="chem-tag" data-tag="biological">Biological</div>`;

    glossaryContent.before(filterWrap);

    filterWrap.querySelectorAll(".chem-tag").forEach(tag => {
      tag.addEventListener("click", () => {
        filterWrap.querySelectorAll(".chem-tag").forEach(t => t.classList.remove("tag-active"));
        tag.classList.add("tag-active");
        // filter glossary entries by .term-tag
        const filter = tag.dataset.tag;
        $$(".term-entry").forEach(entry => {
          if (!filter) { entry.style.display = ""; return; }
          const entryTag = entry.querySelector(".term-tag");
          entry.style.display = (entryTag && entryTag.textContent.includes(filter)) ? "" : "none";
        });
        // hide empty alpha sections
        $$(".alpha-section").forEach(sec => {
          const visible = $$(".term-entry", sec).some(e => e.style.display !== "none");
          sec.style.display = visible ? "" : "none";
        });
      });
    });
  }

  /* ════════════════════════════════════════════════════
     12. SMOOTH TEXT UNDERLINE on h3/h4 links
  ════════════════════════════════════════════════════ */
  function initTextUnderlines() {
    $$(".link-arrow, .footer-col a, .nav-links a").forEach(el => {
      if (!el.classList.contains("ul-grow")) el.classList.add("ul-grow");
    });
  }

  /* ════════════════════════════════════════════════════
     13. ENHANCED SEARCH — category labels
  ════════════════════════════════════════════════════ */
  function enhanceSearch() {
    const drop = $("#search-dropdown");
    const input = $("#nav-search-input");
    if (!drop || !input) return;

    // Patch the search results to add category labels
    const observer = new MutationObserver(() => {
      $$("a", drop).forEach(link => {
        if (link.dataset.enhanced) return;
        link.dataset.enhanced = "1";
        const url = link.getAttribute("href") || "";
        let cat = "Reference";
        if (url.includes("calculator")) cat = "Calculator";
        else if (url.includes("periodic")) cat = "Element";
        else if (url.includes("topics")) cat = "Topic";
        else if (url.includes("chemist")) cat = "Person";
        else if (url.includes("glossary")) cat = "Definition";
        const badge = `<span style="font-family:var(--mono);font-size:0.52rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-left:auto;padding-left:1rem">${cat}</span>`;
        link.style.display = "flex";
        link.style.justifyContent = "space-between";
        link.insertAdjacentHTML("beforeend", badge);
      });
    });
    observer.observe(drop, { childList: true });
  }

  /* ════════════════════════════════════════════════════
     INIT — run all systems
  ════════════════════════════════════════════════════ */
  function init() {
    initParticles();
    initRipple();
    initRevealFallback();
    initStaggerReveal();
    initDYKEngine();
    initTextUnderlines();
    enhanceSearch();
    initSoundToggle();
    initCompoundTags();

    // Page-specific
    if ($("#ptable-grid")) {
      initElementHoverPreview();
      initCompare();
      initTrendCharts();
    }
    if ($("#organic")) {
      initReactionFilter();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
