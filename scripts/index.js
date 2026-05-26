const CONFIG = {
  archduchy: {
    name: "Rivenne",
    fullName: "Archduchy of Rivenne",
    motto: "Fortuna Favet Audaci",
    capital: "Korhaven",
    continent: "Cados",
    population: "15,721,401",
    area: "638,542 km\u00B2",
    currency: "Krone (Kr)",
    founded: "Year 1618 of the Realm",
    languages: ["English", "French", "German", "Spanish"],
    religion: "Monotheism",
    govType: "Semi-Constitutional Archduchy",
    inUniverseDate: "June, Year 1618 of the Realm",
  },

  community: {
    discordInvite: "https://discord.gg/xY5RFEeRys",
    tagline: "A Mock Government Discord Community",
    features: [
      {
        icon: "\uD83C\uDFDB",
        title: "Mock Legislature",
        desc: "Run for office, debate bills and shape national policy in our lottery elected National Assembly.",
      },
      {
        icon: "\uD83C\uDF0D",
        title: "Foreign Affairs",
        desc: "Negotiate treaties, manage embassies, and represent Rivenne on the world stage.",
      },
      {
        icon: "\uD83D\uDCF0",
        title: "Press",
        desc: "Found newspapers, report on scandals, and influence public opinion.",
      },
      {
        icon: "\u2694",
        title: "Roleplay",
        desc: "Roleplay pretty much anything in your imagination.",
      },
    ],
  },

  documents: {
    driveUrl: "https://drive.google.com/drive/u/4/folders/1IeIlnHDwFuaalHPIt5D4GLmIL4XLgxug",
    categories: [
      {
        icon: "\uD83D\uDCDC",
        title: "Constitution",
        desc: "The foundational charter of the Archduchy and the rights of citizens.",
      },
      {
        icon: "\u2696\uFE0F",
        title: "Legal Codes",
        desc: "Criminal, civil, and administrative law as ratified by the National Assembly.",
      },
      {
        icon: "\uD83D\uDDFA",
        title: "Cartographic Surveys",
        desc: "Official maps, provincial boundaries, and territorial claims.",
      },
      {
        icon: "\uD83D\uDCCA",
        title: "Census & Records",
        desc: "Population data, noble registers, and citizenship rolls.",
      },
      {
        icon: "\uD83E\uDD1D",
        title: "Foreign Treaties",
        desc: "Diplomatic agreements, alliances, and international accords.",
      },
      {
        icon: "\uD83C\uDFE2",
        title: "Assembly Minutes",
        desc: "Transcripts and records from the National Assembly sessions.",
      },
    ],
  },

  archduke: {
    name: "Marold von Mannlicher",
    regnalName: "Marold I",
    fullTitle:
      "His Serene Highness Marold I von Mannlicher, Archduke of Rivenne, Duke of Eisenberg and Graumont, Lord Protector of the Sacred Flame, Sovereign of the Iron Crown, Grand Master of the Order of the Black Wolf, Defender of the Realm and Guardian of the Mountain Passes.",
    house: "House von Mannlicher",
    reignStart: "1st of January, Year 1618",
    born: "12th of January, Year 1579",
    personalMotto: "Vincere aut Mori in Tenta",
    biography: [
      "Born the third son of a minor Eisenberg baron, Marold grew up knowing the family fortune was one bad mine collapse from ruin. He learned early that cards don\u2019t care about bloodlines.",
      "By age 22 he had gambled away his inheritance, won it back twice and then started winning against richer men. When the old dukes squabbled after the last unification war, Marold saw opportunity. He hosted a legendary high-stakes game in a mountain fortress and every major noble was invited.",
      "One by one they folded, lost estates, titles, alliances\u2026 until only Marold remained at the table with a royal flush and a grin. The surviving lords, broke and humiliated, had little choice but to acclaim him Archduke. Now he rules with a gambler\u2019s charm. Everyone knows the Archduke never bluffs\u2026 or so he claims.",
    ],
    honours: [
      "Sovereign Gambler of the Iron Crown",
      "Supreme Commander of all Armed Forces",
      "Father and Guardian of the Archduchy",
    ],
  },

  stats: [
    { label: "Capital", value: "Korhaven" },
    { label: "Population", value: "15.7 Million" },
    { label: "Area", value: "638,542 km\u00B2" },
    { label: "Continent", value: "Cados" },
    { label: "Currency", value: "Krone" },
    { label: "Founded", value: "Year 1618" },
    { label: "Government", value: "Semi-Constitutional Archduchy" },
  ],

  government: {
    subtitle: "Year 1618 \u00B7 First Administration of Archduke Marold I",
    description:
      "The Archduchy of Rivenne is a semi-constitutional monarchy where the Basileus (Archduke) holds supreme executive and military power, with the right to issue royal decrees and absolute veto on most legislation. An elected National Assembly handles day-to-day lawmaking but remains subordinate to the Crown.",
  },

  cabinet: [
    {
      title: "Basileus",
      name: "Marold I von Mannlicher",
      ministry: "Head of State",
      isHead: true,
      portrait: "images/portrait.png",
      description: "Supreme authority of the realm, Father and Guardian of the Archduchy.",
    },
    {
      title: "Chief Minister",
      name: "Henrik Korr",
      ministry: "Executive Head",
      isHead: false,
      portrait: "images/korr.png",
      description: "Head of government and chair of the Archducal Cabinet.",
    },
    {
      title: "Minister",
      name: "R.",
      ministry: "Foreign Affairs",
      isHead: false,
      portrait: null,
      description:
        "Oversees diplomatic missions, treaty negotiations, and Rivenne's relations with all foreign powers.",
    },
    {
      title: "Minister",
      name: "Marc-Andr\u00E9 L\u00E9vesque",
      ministry: "Justice",
      isHead: false,
      portrait: "images/marcc.png",
      description: "Administers domestic law, provincial courts, and penal reform.",
    },
    {
      title: "Minister",
      name: "Vacant",
      ministry: "Finance & Treasury",
      isHead: false,
      portrait: null,
      description:
        "Manages the treasury, tax policy, customs revenues, the Royal Mint, and state banking.",
    },
    {
      title: "Minister",
      name: "Vacant",
      ministry: "War",
      isHead: false,
      portrait: null,
      description: "Commands the Archducal Army.",
    },
    {
      title: "Minister",
      name: "Vacant",
      ministry: "Interior",
      isHead: false,
      portrait: null,
      description: "Manages internal affairs.",
    },
    {
      title: "Minister",
      name: "Vacant",
      ministry: "Commerce",
      isHead: false,
      portrait: null,
      description: "Promotes commerce and manages trade negotiations.",
    },
  ],

  history: {
    subtitle: "From Wild Lands to a United Realm",
    foundingStory:
      "For centuries the lands that would become Rivenne were untamed wilds - dense forests, iron-rich mountains, and dangerous frontiers roamed by nomadic tribes. Over time, powerful dukes carved out their own domains, leading to seven rival duchies locked in near-constant warfare and shifting alliances. On the 1st of January 1618, in a legendary high-stakes gathering at the mountain fortress of Adlerhorst, Marold von Mannlicher - a charismatic gambler and minor baron from Eisenberg - challenged the seven dukes to the greatest wager in history. By sunrise, he had won titles, lands, and loyalties from nearly every house. The surviving dukes, exhausted and indebted, bent the knee. Thus was born the Archduchy of Rivenne in a single night of cards, cunning, and audacity.",

    timeline: [
      {
        year: "Pre-900",
        title: "The Wild Years",
        type: "founding",
        body: "The continent of Cados is largely untamed. Nomadic tribes and scattered clans roam the western wilds and dense forests.",
      },
      {
        year: "Year 1150-1480",
        title: "The Rise of the Duchies",
        type: "political",
        body: "Seven powerful duchies gradually form from the chaos: Eisenberg, Valaismont, Graumont, Aiguillefort, Rochfeld, Oberthal, and Schwarzwald. Centuries of rivalry, shifting alliances, and border wars follow.",
      },
      {
        year: "Year 1579",
        title: "Marold's Ascension",
        type: "political",
        body: "Marold is born as the third son of a minor baron in Eisenberg. He earns a reputation as a brilliant gambler, charismatic negotiator, and dangerously lucky man.",
      },
      {
        year: "Year 1618",
        title: "The Grand Gamble",
        type: "political",
        body: "On the night of the 1st of January 1618, Marold hosts the legendary Wager of Adlerhorst at the mountain fortress. By dawn, he had won the submission, titles, and lands of nearly all the rival dukes through a combination of masterful play, prepared alliances, and sheer audacity.",
      },
      {
        year: "Year 1618",
        title: "Coronation of Marold I",
        type: "political",
        body: "Marold von Mannlicher is crowned Archduke Marold I. He declares the birth of a united Archduchy of Rivenne under one crown.",
      },
      {
        year: "Year 1618",
        title: "The Reform Edicts",
        type: "political",
        body: "Archduke Marold I begins centralizing power while establishing the National Assembly to give citizens a voice in governance.",
      },
    ],
  },

  realmFacts: [
    { label: "Total Area", value: "638,542 km\u00B2" },
    { label: "Highest Point", value: "Mount Valdris (5,476 m)" },
    { label: "Major Rivers", value: "Gernsbach, Woldendern, Heisanchenho" },
    { label: "Coastline", value: "1.7 million km\u00B2" },
    { label: "Climate", value: "Temperate Continental with Alpine zones" },
  ],

  provinces: {
    capital: {
      name: "Korhaven \u2014 Archducal Capital District",
      type: "Archducal Capital",
      population: "2.4 Million",
      governor: "TBA",
      description: "The capital city of the Archduchy. Previously known as Veldmarch",
    },
    graumont: {
      name: "Graumont Province",
      type: "Coastal Duchy",
      population: "3.1 Million",
      governor: "TBA",
      description:
        "A long, narrow peninsula of forested hills sloping down to a jagged coastline, dominated by temperate deciduous forests throughout. Mountains on the lower side carry light taiga bands, but these fade quickly into mixed broadleaf woods toward the shores and tidal flats.",
    },
    rochfeld: {
      name: "Rochfeld Province",
      type: "Southern Coastal Duchy",
      population: "2.8 Million",
      governor: "TBA",
      description:
        "Southern coastal basin encircled by mountain walls, with low-lying plains, and sheltered bays covered in taigas. Going east, taigas dominate the northern part with a few mountain clusters. These quickly fade into broadleaf woods towards the shores.",
    },
    valaismont: {
      name: "Valaismont Province",
      type: "Heartland Duchy",
      population: "2.2 Million",
      governor: "TBA",
      description:
        "Broad heartland of gentle rolling hills, temperate grasslands and fertile plateaus surrounded almost entirely in temperate deciduous forests. The scattered lower mountain groups are surrounded by taigas, but the surrounding lowlands quickly return to broadleaf woodlands and open clearings. The landscape is open and traversable, ideal for farming and trade routes.",
    },
    oberthal: {
      name: "Oberthal Province",
      type: "Woodland Duchy",
      population: "1.9 Million",
      governor: "TBA",
      description:
        "A sea of temperate deciduous forests and taigas. The most boring province to probably exist, except a tiny lake and two rivers.",
    },
    eisenberg: {
      name: "Eisenberg Province",
      type: "Iron Mountain Duchy",
      population: "1.8 Million",
      governor: "TBA",
      description:
        "The highest and coldest province, with the mountains surrounded by sparse tundra and rocky barrens. Upper slopes and valleys are ringed by a taiga belt of coniferous trees, but beyond this narrow perimeter, temperate deciduous forest dominates the province. Deep valleys and narrow passes create natural chokepoints amid the rugged highland terrain.",
    },
    aiguillefort: {
      name: "Montverde Province",
      type: "Frontier Mountain Duchy",
      population: "1.2 Million",
      governor: "TBA",
      description:
        "Steep southeastern frontier of high ridges, deep gorges, and sharp alpine peaks surrounded by taigas. Mid-slopes and valleys are also surrounded by taiga belts, but beyond these are temperate deciduous forests, which reclaim the lower terrain and eastern edges. Dramatic cliffs drop toward the coast in places.",
    },
    schwarzwald: {
      name: "Teufelswald Province",
      type: "Western Border Duchy",
      population: "0.3 Million",
      governor: "TBA",
      description:
        "Western borderland of steep foothills and dense forest, entirely temperate deciduous. The terrain grows increasingly rugged westward, but broadleaf forest persists throughout most valleys and slopes.",
    },
  },

  economy: {
    stats: [
      { label: "Est. GDP", value: "128.8 million Kr" },
      { label: "GDP per Capita", value: "786 Kr" },
      { label: "Currency", value: "Krone" },
      { label: "Fiscal Year", value: "Spring to Winter" },
    ],
    industries: [
      { name: "Iron Mining & Metallurgy", share: 24 },
      { name: "Agriculture & Viticulture", share: 18 },
      { name: "Timber & Forestry", share: 14 },
      { name: "Textiles & Wool Trade", share: 12 },
      { name: "Overland Trade & Caravan Routes", share: 11 },
      { name: "Luxury Goods & Fine Crafts", share: 9 },
      { name: "Banking & Mercantile Finance", share: 8 },
      { name: "Arms Manufacturing & Forging", share: 4 },
    ],
    trade: [{ partner: "N/A", type: "N/A" }],
  },

  military: {
    description:
      "The Archducal Host of Rivenne is a professional standing army respected across the continent for its discipline, alpine warfare expertise, and the legendary Royal Musketeers.",
    branches: [
      {
        icon: "\u2694\uFE0F",
        name: "Archducal Army",
        strength: "25,000 active",
        description:
          "The main professional force of Rivenne, composed of line infantry, heavy cavalry, artillery, and elite Mountain J\u00E4gers.",
      },
      {
        icon: "\u269A",
        name: "Royal Musketeers",
        strength: "5,000 active",
        description:
          "The prestigious elite guard of the Archduke. Famous for their marksmanship, flamboyant bravery, and unyielding loyalty.",
      },
      {
        icon: "\uD83D\uDEE1\uFE0F",
        name: "Archducal Guard",
        strength: "2,000 active",
        description:
          "The personal household troops responsible for protecting the royal family and serving as elite shock troops.",
      },
      {
        icon: "\uD83D\uDC6E",
        name: "Archducal Constabulary",
        strength: "20,000 active",
        description:
          "The provincial gendarmerie maintaining law and order, border security, and internal stability.",
      },
    ],
    stats: [
      { label: "Active Personnel", value: "52,000" },
      { label: "Reserve Force", value: "350,000" },
      { label: "Defence Budget", value: "28.4 million Kr" },
    ],
  },

  culture: {
    pillars: [
      {
        icon: "\uD83D\uDD6F",
        title: "The Sacred Flame",
        text: "The spiritual heart of Rivenne. The Eternal Flame, first lit in Year 847 at the heart of Valaismont, has burned continuously for over 771 years. It symbolizes unity, endurance, and the covenant that binds the realm.",
      },
      {
        icon: "\u26F0",
        title: "The Mountain Spirit",
        text: "Rivennians draw strength and identity from the high peaks and deep forests. Self-reliance, resilience, and loyalty to one's kin - forged in the iron mines of Eisenberg and the harsh winters of the continent - remain core national virtues.",
      },
      {
        icon: "\uD83C\uDFB2",
        title: "The Gambler's Legacy",
        text: "Since Archduke Marold I's legendary victory in 1618, a bold, audacious spirit runs through Rivennian culture. Risk-taking, sharp wit, and turning fortune into destiny are celebrated in art, theatre, and everyday life.",
      },
      {
        icon: "\u2694",
        title: "The Code of the Wolf",
        text: "Inspired by the realm's black wolf emblem, Rivennians value pack loyalty, fierce protection of their own, and cunning intelligence. The Order of the Black Wolf, led by the Royal Musketeers, embodies these ideals.",
      },
      {
        icon: "\uD83C\uDF77",
        title: "Festivals of the Hearth",
        text: "Rivenne is famous for its colourful seasonal festivals. The Grand Harvest Feast in Valaismont and the fiery Winterwolf Carnival in Eisenberg draw thousands, celebrating food, wine, music, and storytelling.",
      },
      {
        icon: "\uD83D\uDCDA",
        title: "Scholarship & Craft",
        text: "The Archducal Academy of Veldmarch, founded in 1281, is one of the finest centers of learning on the continent. Rivenne takes great pride in its master artisans, engineers, and scholars who blend tradition with bold innovation.",
      },
    ],
    nobility: [
      {
        rank: "Basileus",
        form: "Your Serene Highness",
        notes: "Sovereign ruler of Rivenne; House von Mannlicher",
      },
      { rank: "Caesar", form: "Your Highness", notes: "Designated heir to the throne" },
      {
        rank: "Archducal Prince / Princess",
        form: "Your Highness",
        notes: "Other children of the Archduke",
      },
      {
        rank: "Duke / Duchess",
        form: "Your Grace",
        notes: "Highest non-royal rank; extremely rare",
      },
      {
        rank: "Margrave / Margravine",
        form: "Your Excellency",
        notes: "Lords of important border provinces",
      },
      {
        rank: "Count / Countess",
        form: "Your Lordship / Ladyship",
        notes: "Core provincial nobility and major landowners",
      },
      {
        rank: "Viscount / Viscountess",
        form: "Your Lordship / Ladyship",
        notes: "Heirs or deputies to Counts",
      },
      {
        rank: "Baron / Baroness",
        form: "Your Lordship / Ladyship",
        notes: "Lowest hereditary landed title",
      },
      {
        rank: "Lord / Lady",
        form: "Lord / Lady",
        notes: "Courtesy title for minor nobles and spouses",
      },
      {
        rank: "Knight / Dame",
        form: "Sir / Dame",
        notes: "Non-hereditary title awarded for merit and service",
      },
    ],
  },

  // Types: 'imperial' | 'military' | 'economic' | 'general'     ║
  decrees: [
    {
      type: "imperial",
      date: "1st of January, Year 1618",
      title: "Edict of Unification & Coronation of Marold I",
      body: "Let it be known that on this day, the seven duchies are dissolved into one united Archduchy under the Iron Crown. Marold von Mannlicher is proclaimed Basileus Marold I, Sovereign of Rivenne, Defender of the Realm, and Guardian of the Mountain Passes. All former dukelands now swear fealty to the Crown. The National Assembly is established.",
      author: "Basileus Marold I von Mannlicher",
    },
    {
      type: "general",
      date: "Sunday, 17th of May, Year 2026",
      title: "Establishment of the Archducal State Portal",
      body: "The Office of the Grand Cartographer and Chief Minister shall maintain this official portal for all citizens and foreign dignitaries. All decrees, census data, and diplomatic correspondence shall be published herein.",
      author: "Office of the Chief Minister",
    },
  ],

  footer: {
    copyright: "\u00A9 Year 0\u20131618 of the Realm. All rights reserved under Archducal Law.",
  },
};

/* ============================================================
   RENDER ENGINE
============================================================ */

/* ── Particle System ───────────────────────────────────── */
(function initParticles() {
  const cv = document.getElementById("particle-canvas");
  const cx = cv.getContext("2d");
  let W, H;
  const pts = [];
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = prefersReduced ? 0 : isMobile ? 25 : 60;

  function resize() {
    W = cv.width = window.innerWidth;
    H = cv.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < count; i++) {
    pts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: -(Math.random() * 0.3 + 0.04),
      life: Math.random(),
      ml: Math.random() * 0.5 + 0.38,
    });
  }

  (function draw() {
    if (prefersReduced) return;
    cx.clearRect(0, 0, W, H);
    pts.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;
      p.life -= 0.0007;
      if (p.life <= 0 || p.y < 0) {
        p.x = Math.random() * W;
        p.y = H + 5;
        p.life = p.ml;
      }
      const a = Math.min(p.life * 3, 1) * 0.45;
      cx.beginPath();
      cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      cx.fillStyle = `rgba(201,168,76,${a})`;
      cx.fill();
    });
    requestAnimationFrame(draw);
  })();
})();

/* ── Dark / Light Mode Toggle ──────────────────────────── */
let isDark = true;
function toggleMode() {
  isDark = !isDark;
  document.body.classList.toggle("light-mode", !isDark);
  const b = document.getElementById("mode-btn");
  if (b) b.innerHTML = isDark ? "&#9789; Dark" : "&#9728; Light";
}

/* ── Mobile Menu ───────────────────────────────────────── */
function toggleMob() {
  document.getElementById("mobile-menu").classList.toggle("open");
  document.getElementById("ham-btn").classList.toggle("open");
}
function closeMob() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("ham-btn").classList.remove("open");
}

/* ── Navbar: scroll effect + active link ───────────────── */
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
  const secs = document.querySelectorAll("section[id]");
  let cur = "";
  secs.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 130) cur = s.id;
  });
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.toggle("active", l.dataset.sec === cur));
});

/* ── Reveal on Scroll ──────────────────────────────────── */
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("vis");
        ro.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07 },
);

function watchReveal() {
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach((el) => ro.observe(el));
}

/* ── Region / City Modal ───────────────────────────────── */
let lastFocused = null;
function showModal(key) {
  const r = CONFIG.provinces[key];
  if (!r) return;
  lastFocused = document.activeElement;
  const content = document.getElementById("modal-content");
  content.innerHTML = `
    <p class="font-cinzel gold-text" style="font-size:0.6rem;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:0.25rem;">${r.type}</p>
    <h3 id="modal-title" class="font-cinzel cream-text" style="font-size:1.2rem;margin-bottom:0.5rem;">${r.name}</h3>
    <div class="gold-rule" style="margin:0.75rem 0;"><span>&#9830;</span></div>
    <div class="grid grid-cols-2 gap-3 mb-4">
      <div class="econ-stat">
        <p class="font-cinzel muted-text" style="font-size:0.55rem;letter-spacing:0.13em;text-transform:uppercase;margin-bottom:2px;">Population</p>
        <p class="cream-text font-garamond">${r.population}</p>
      </div>
      <div class="econ-stat">
        <p class="font-cinzel muted-text" style="font-size:0.55rem;letter-spacing:0.13em;text-transform:uppercase;margin-bottom:2px;">Governor</p>
        <p class="cream-text font-garamond" style="font-size:0.9rem;">${r.governor}</p>
      </div>
    </div>
    <p class="font-garamond" style="font-size:1.02rem;line-height:1.82;color:var(--text-light);">${r.description}</p>
  `;
  document.getElementById("modal-overlay").classList.add("open");
  document.getElementById("modal-box").setAttribute("tabindex", "-1");
  document.getElementById("modal-box").focus();
}
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  if (lastFocused) lastFocused.focus();
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ── Helper: portrait placeholder SVG ──────────────────── */
function miniPortrait(name) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return `
    <svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="120" height="160" fill="#0d1e34"/>
      <ellipse cx="60" cy="58" rx="28" ry="32" fill="#1a3050"/>
      <path d="M10,160 Q28,96 60,88 Q92,96 110,160 Z" fill="#1a3050"/>
      <text x="60" y="65" text-anchor="middle" font-size="18"
            fill="rgba(201,168,76,0.55)" font-family="Cinzel,serif">${initials}</text>
      <rect x="3" y="3" width="114" height="154" fill="none"
            stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
    </svg>`;
}

/* ── Render: Hero ────────────────────────────────────── */
function renderHero() {
  const c = CONFIG.archduchy;
  document.getElementById("hero-title").textContent = c.fullName;
  document.getElementById("hero-motto").textContent = `\u201C${c.motto}\u201D`;
  document.getElementById("hero-date").textContent = c.inUniverseDate;
  document.getElementById("hero-archduke").textContent =
    CONFIG.archduke.regnalName + " von Mannlicher";
  document.getElementById("nav-name").textContent = c.name;
  document.title = `${c.fullName} \u2014 Mock Government Discord Community`;

  const bar = document.getElementById("hero-stats-bar");
  bar.innerHTML = CONFIG.stats
    .map(
      (s) => `
    <div class="stat-item">
      <span class="stat-label">${s.label}</span>
      <span class="stat-value">${s.value}</span>
    </div>`,
    )
    .join("");
}

/* ── Render: Community ─────────────────────────────────── */
function renderCommunity() {
  const grid = document.getElementById("community-grid");
  grid.innerHTML = CONFIG.community.features
    .map(
      (f, i) => `
    <div class="culture-card reveal glass" style="transition-delay:${(i % 4) * 0.08}s;">
      <div style="font-size:2.2rem;margin-bottom:0.9rem;">${f.icon}</div>
      <h3 class="font-cinzel gold-light-text mb-3" style="font-size:1rem;">${f.title}</h3>
      <p class="font-garamond" style="font-size:1rem;line-height:1.84;color:var(--text-muted);">${f.desc}</p>
    </div>
  `,
    )
    .join("");
}

/* ── Render: Documents ─────────────────────────────────── */
function renderDocuments() {
  const d = CONFIG.documents;
  document.getElementById("drive-link").href = d.driveUrl;
  document.getElementById("documents-grid").innerHTML = d.categories
    .map(
      (cat, i) => `
    <div class="culture-card reveal glass" style="transition-delay:${(i % 3) * 0.08}s;">
      <div style="font-size:2.2rem;margin-bottom:0.75rem;">${cat.icon}</div>
      <h3 class="font-cinzel gold-light-text mb-2" style="font-size:1rem;">${cat.title}</h3>
      <p class="font-garamond" style="font-size:0.95rem;line-height:1.7;color:var(--text-muted);">${cat.desc}</p>
    </div>
  `,
    )
    .join("");
}

/* ── Render: Archduke ──────────────────────────────────── */
function renderArchduke() {
  const a = CONFIG.archduke;
  document.getElementById("archduke-full-title").textContent = a.fullTitle;
  document.getElementById("archduke-house").textContent = a.house;
  document.getElementById("archduke-reign").textContent = a.reignStart;
  document.getElementById("archduke-born").textContent = a.born;
  document.getElementById("archduke-pmotto").textContent = `\u201C${a.personalMotto}\u201D`;

  document.getElementById("archduke-bio").innerHTML = a.biography
    .map(
      (p) =>
        `<p class="font-garamond" style="font-size:1.04rem;line-height:1.88;color:var(--text-light);">${p}</p>`,
    )
    .join("");

  document.getElementById("archduke-honours").innerHTML = a.honours
    .map(
      (h) =>
        `<li class="flex items-start gap-2" style="color:var(--text-light);font-family:'EB Garamond',serif;font-size:1rem;">
       <span style="color:var(--gold);flex-shrink:0;margin-top:3px;">&#9830;</span>${h}</li>`,
    )
    .join("");
}

/* ── Render: Government ────────────────────────────────── */
function renderGovernment() {
  const g = CONFIG.government;
  document.getElementById("gov-subtitle").textContent = g.subtitle;
  document.getElementById("gov-desc").textContent = g.description;

  const grid = document.getElementById("cabinet-grid");
  grid.innerHTML = CONFIG.cabinet
    .map((m, i) => {
      const portraitHTML = m.portrait
        ? `<img src="${m.portrait}" alt="Portrait of ${m.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />`
        : miniPortrait(m.name);
      return `
      <div class="cabinet-card${m.isHead ? " is-head" : ""} reveal" style="transition-delay:${(i % 4) * 0.07}s;">
        <div style="height:300px;overflow:hidden;position:relative;background:#0d1e34;border-bottom:1px solid rgba(201,168,76,0.1);">
          ${portraitHTML}
        </div>
        <div style="padding:1.1rem;">
          <p class="font-cinzel" style="font-size:0.53rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--gold);margin-bottom:2px;">${m.title}</p>
          <h4 class="font-cinzel cream-text" style="font-size:0.88rem;line-height:1.3;margin-bottom:3px;">${m.name}</h4>
          <p class="font-garamond" style="font-size:0.78rem;color:var(--gold-dark);letter-spacing:0.05em;margin-bottom:0.6rem;">${m.ministry}</p>
          <p class="font-garamond" style="font-size:0.9rem;line-height:1.65;color:var(--text-muted);">${m.description}</p>
        </div>
      </div>`;
    })
    .join("");
}

/* ── Render: History Timeline ──────────────────────────── */
function renderHistory() {
  document.getElementById("history-sub").textContent = CONFIG.history.subtitle;
  document.getElementById("founding-story").textContent = CONFIG.history.foundingStory;

  const wrap = document.getElementById("timeline-wrap");
  const spine = wrap.querySelector(".t-spine");

  CONFIG.history.timeline.forEach((ev, i) => {
    const isLeft = i % 2 === 0;
    const entry = document.createElement("div");
    entry.className = "mb-8";
    entry.innerHTML = `
      <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
        ${
          isLeft
            ? `
          <div class="reveal-left">
            <div class="t-card">
              <span class="type-badge type-${ev.type}">${ev.type}</span>
              <p class="font-cinzel gold-text" style="font-size:0.72rem;letter-spacing:0.1em;margin-bottom:0.3rem;">${ev.year}</p>
              <h4 class="font-cinzel cream-text text-base mb-2">${ev.title}</h4>
              <p class="font-garamond" style="font-size:1rem;line-height:1.82;color:var(--text-light);">${ev.body}</p>
            </div>
          </div>
          <div class="hidden md:flex justify-start items-center pl-4">
            <div class="t-dot"></div>
          </div>
        `
            : `
          <div class="hidden md:flex justify-end items-center pr-4">
            <div class="t-dot"></div>
          </div>
          <div class="reveal-right">
            <div class="t-card">
              <span class="type-badge type-${ev.type}">${ev.type}</span>
              <p class="font-cinzel gold-text" style="font-size:0.72rem;letter-spacing:0.1em;margin-bottom:0.3rem;">${ev.year}</p>
              <h4 class="font-cinzel cream-text text-base mb-2">${ev.title}</h4>
              <p class="font-garamond" style="font-size:1rem;line-height:1.82;color:var(--text-light);">${ev.body}</p>
            </div>
          </div>
        `
        }
      </div>`;
    wrap.insertBefore(entry, spine);
  });
}

/* ── Render: Realm ─────────────────────────────────────── */
function renderRealm() {
  document.getElementById("realm-facts").innerHTML = CONFIG.realmFacts
    .map(
      (f) => `
    <div class="econ-stat">
      <p class="font-cinzel muted-text" style="font-size:0.55rem;letter-spacing:0.13em;text-transform:uppercase;margin-bottom:2px;">${f.label}</p>
      <p class="cream-text font-garamond">${f.value}</p>
    </div>`,
    )
    .join("");

  document.getElementById("region-list").innerHTML = Object.values(CONFIG.provinces)
    .map(
      (r) => `
    <div class="glass" style="padding:0.75rem;border-radius:2px;">
      <p class="font-cinzel gold-text" style="font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:2px;">${r.type}</p>
      <p class="font-cinzel cream-text" style="font-size:0.82rem;">${r.name.split(" \u2014")[0]}</p>
      <p class="font-garamond muted-text" style="font-size:0.85rem;">Pop. ${r.population}</p>
    </div>`,
    )
    .join("");
}

/* ── Render: Economy ───────────────────────────────────── */
function renderEconomy() {
  const e = CONFIG.economy;

  document.getElementById("econ-stats").innerHTML = e.stats
    .map(
      (s) => `
    <div class="econ-stat-box">
      <p class="font-cinzel muted-text" style="font-size:0.54rem;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px;">${s.label}</p>
      <p class="font-cinzel gold-light-text" style="font-size:1.02rem;">${s.value}</p>
    </div>`,
    )
    .join("");

  document.getElementById("econ-industries").innerHTML = e.industries
    .map(
      (ind) => `
    <div>
      <div class="flex justify-between items-center mb-1">
        <span class="font-garamond" style="font-size:0.96rem;color:var(--text-light);">${ind.name}</span>
        <span class="font-cinzel gold-text" style="font-size:0.7rem;">${ind.share}%</span>
      </div>
      <div class="industry-bar-wrap">
        <div class="industry-bar" style="width:${ind.share * 4}%;"></div>
      </div>
    </div>`,
    )
    .join("");

  document.getElementById("econ-trade").innerHTML = e.trade
    .map(
      (t) => `
    <div class="flex gap-3 items-start glass" style="padding:0.7rem;border-radius:2px;">
      <span style="color:var(--gold);margin-top:3px;flex-shrink:0;">&#9830;</span>
      <div>
        <p class="font-cinzel cream-text" style="font-size:0.78rem;">${t.partner}</p>
        <p class="font-garamond muted-text" style="font-size:0.9rem;">${t.type}</p>
      </div>
    </div>`,
    )
    .join("");
}

/* ── Render: Military ──────────────────────────────────── */
function renderMilitary() {
  const m = CONFIG.military;
  document.getElementById("mil-desc").textContent = m.description;

  document.getElementById("mil-branches").innerHTML = m.branches
    .map(
      (b) => `
    <div class="branch-card">
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-cinzel cream-text" style="font-size:0.9rem;">${b.icon} ${b.name}</h4>
        <span class="font-cinzel gold-text" style="font-size:0.68rem;white-space:nowrap;margin-left:0.5rem;">${b.strength}</span>
      </div>
      <p class="font-garamond" style="font-size:0.97rem;line-height:1.76;color:var(--text-muted);">${b.description}</p>
    </div>`,
    )
    .join("");

  document.getElementById("mil-stats").innerHTML = m.stats
    .map(
      (s) => `
    <div class="econ-stat-box" style="text-align:center;">
      <p class="font-cinzel gold-light-text" style="font-size:1rem;margin-bottom:4px;">${s.value}</p>
      <p class="font-cinzel muted-text" style="font-size:0.52rem;letter-spacing:0.13em;text-transform:uppercase;">${s.label}</p>
    </div>`,
    )
    .join("");
}

/* ── Render: Culture ───────────────────────────────────── */
function renderCulture() {
  document.getElementById("culture-grid").innerHTML = CONFIG.culture.pillars
    .map(
      (p, i) => `
    <div class="culture-card reveal glass" style="transition-delay:${(i % 3) * 0.08}s;">
      <div style="font-size:2.2rem;margin-bottom:0.9rem;">${p.icon}</div>
      <h3 class="font-cinzel gold-light-text mb-3" style="font-size:1rem;">${p.title}</h3>
      <p class="font-garamond" style="font-size:1rem;line-height:1.84;color:var(--text-muted);">${p.text}</p>
    </div>`,
    )
    .join("");

  document.getElementById("nobility-table").innerHTML = `
    <table class="rn-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Form of Address</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        ${CONFIG.culture.nobility
          .map(
            (n) => `
          <tr>
            <td class="font-cinzel" style="font-size:0.86rem;color:var(--gold-light);">${n.rank}</td>
            <td class="italic">${n.form}</td>
            <td class="muted-text" style="font-size:0.9rem;">${n.notes}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ── Render: Decrees ───────────────────────────────────── */
function renderDecrees() {
  const typeLabels = {
    imperial: "&#128081; Imperial Decree",
    military: "&#9876; Military Order",
    economic: "&#9776; Economic Notice",
    general: "&#128220; Court Notice",
  };

  document.getElementById("decrees-list").innerHTML = CONFIG.decrees
    .map(
      (d, i) => `
    <div class="decree-card ${d.type} reveal glass" style="transition-delay:${i * 0.07}s;">
      <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
        <span class="font-cinzel" style="font-size:0.58rem;letter-spacing:0.15em;text-transform:uppercase;color:${
          d.type === "imperial"
            ? "var(--gold)"
            : d.type === "military"
              ? "#6a9acd"
              : d.type === "economic"
                ? "#6abf8a"
                : "var(--burgundy-mid)"
        }">${typeLabels[d.type] || d.type}</span>
        <span class="font-garamond italic muted-text" style="font-size:0.88rem;">${d.date}</span>
      </div>
      <h3 class="font-cinzel cream-text mb-3" style="font-size:0.98rem;line-height:1.4;">${d.title}</h3>
      <p class="font-garamond" style="font-size:1.02rem;line-height:1.88;color:var(--text-light);">${d.body}</p>
      <p class="font-cinzel mt-3" style="font-size:0.58rem;letter-spacing:0.12em;color:var(--text-muted);">
        ISSUED BY: ${d.author}
      </p>
    </div>`,
    )
    .join("");
}

/* ── Render: Footer ────────────────────────────────────── */
function renderFooter() {
  const c = CONFIG.archduchy;
  document.getElementById("footer-name").textContent = c.fullName;
  document.getElementById("footer-motto").textContent = `\u201C${c.motto}\u201D`;
  document.getElementById("footer-copy").textContent = CONFIG.footer.copyright;
  document.getElementById("footer-date").textContent = `Portal current as of: May 17th, 2026`;
}

/* ── Bootstrap ─────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderCommunity();
  renderArchduke();
  renderGovernment();
  renderHistory();
  renderRealm();
  renderEconomy();
  renderMilitary();
  renderCulture();
  renderDocuments();
  renderDecrees();
  renderFooter();
  watchReveal();
});
