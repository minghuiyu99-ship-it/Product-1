/* =========================================================
   俞铭晖 · 设计作品集 2026
   ========================================================= */

const PROJECTS = [
  {
    id: "medical-bed",
    no: "01",
    title: "智能多功能医疗床",
    en: "Intelligent Multi-functional Medical Bed",
    cat: "product",
    catLabel: "产品设计",
    kind: "医疗产品",
    note: "概念设计",
    summary: "面向住院转运与护理场景，把导航、体位、消杀与监测整合进一张床体。",
    problem: "病房到手术室的转运依赖多名护士，床体功能单一，转运途中的监测与应急能力弱。",
    method: "以护士动线与患者体位为起点，拆解转运、翻身、清洁、监测四类场景，再做模块叠加与尺寸推演。",
    solution: "自动导航与避障、可升降扶手、气囊防压疮、紫外线消杀、生命体征屏与红外热疗，构成一体化床体，尺寸按 1900 × 900 × 350 mm 推演。",
    tags: ["医疗产品", "结构设计", "Rhino / KeyShot", "人机尺寸"],
    img: "assets/work/medical-bed.jpg",
    thumb: "assets/thumbs/medical-bed.jpg"
  },
  {
    id: "polar-eagle",
    no: "02",
    title: "POLAR EAGLE 极地科考无人机",
    en: "Polar Eagle / Polar Research UAV",
    cat: "product",
    catLabel: "产品设计",
    kind: "航空产品",
    note: "概念设计",
    summary: "为极地科考做的一架复合翼无人机：垂直起降、太阳能补能、模块化载荷。",
    problem: "极地地形复杂、低温下续航衰减，科考设备运输与观测半径受到限制。",
    method: "用复合翼兼顾垂直起降与巡航效率，机翼集成太阳能板，腹部预留模块化载荷舱。",
    solution: "双旋翼垂直起降 + 固定翼巡航，太阳能充电，可换装观测与采样模块，并以三视图、爆炸图与场景渲染完成方案表达。",
    tags: ["航空产品", "复合翼", "太阳能", "模块化载荷"],
    img: "assets/work/polar-eagle.jpg",
    thumb: "assets/thumbs/polar-eagle.jpg"
  },
  {
    id: "pet-feeder",
    no: "03",
    title: "自动宠物喂食器",
    en: "Automatic Pet Feeder",
    cat: "product",
    catLabel: "产品设计",
    kind: "小家电",
    note: "概念设计",
    summary: "把「出差时谁来喂猫」拆成储粮、称重、防卡粮、清洁四件事。",
    problem: "主人出差或加班时喂养不规律；普通喂食器容易卡粮，粮仓与出粮通道难拆洗。",
    method: "从喂食流程与清洁路径倒推结构，把粮仓、称重模块与出粮通道做成可拆分区。",
    solution: "30 天储粮、每餐称重、防卡粮出粮结构、模块化可拆洗，配套 App 记录进食数据。",
    tags: ["小家电", "结构拆解", "材质分析", "App 界面"],
    img: "assets/work/pet-feeder.jpg",
    thumb: "assets/thumbs/pet-feeder.jpg"
  },
  {
    id: "coffee-table",
    no: "04",
    title: "家具茶几改良设计",
    en: "Multi-functional Coffee Table",
    cat: "product",
    catLabel: "产品设计",
    kind: "家具设计",
    note: "2025 毕业设计",
    summary: "毕业设计：把娱乐、充电、冷藏与升降台面收进一张茶几。",
    problem: "小户型客厅的娱乐、收纳与充电需求叠加，单一茶几无法承载，桌面很快被杂物占满。",
    method: "以客厅动线与「坐下—放置—充电—收纳」的动作序列，划分模块与开合方式。",
    solution: "触控屏、无线充电、隐藏冷藏、升降台面、抽屉收纳与 App 控制，模块可独立维护，尺寸 1200 × 700 × 420 mm。",
    tags: ["家具设计", "模块化", "智能家居", "结构爆炸图"],
    img: "assets/work/coffee-table.jpg",
    thumb: "assets/thumbs/coffee-table.jpg"
  },
  {
    id: "watch",
    no: "05",
    title: "五星出东方 · 腕表设计",
    en: "“Five Stars Rising in the East” Watch",
    cat: "product",
    catLabel: "产品设计",
    kind: "文创产品",
    note: "纹样转译",
    summary: "从汉代织锦「五星出东方利中国」提取纹样与星象，做一只可佩戴的叙事。",
    problem: "文物纹样直接贴用容易变成符号堆砌，缺少与日常佩戴场景的连接。",
    method: "拆解织锦的云气、瑞兽与五色体系，转译为表带织纹与表盘星图，再用金属表壳收住复杂度。",
    solution: "星空表盘 + 织锦表带 + 金属表壳，指针取星芒，在文化叙事与日常佩戴之间取得平衡。",
    tags: ["文创产品", "纹样转译", "三视图", "爆炸图"],
    img: "assets/work/watch.jpg",
    thumb: "assets/thumbs/watch.jpg"
  },
  {
    id: "green-logistics",
    no: "06",
    title: "绿色物流 · 低碳未来",
    en: "Green Logistics, Low-carbon Future",
    cat: "visual",
    catLabel: "视觉传达",
    kind: "海报设计",
    note: "系列主视觉",
    summary: "用一张海报，把「新能源重卡—清洁运输—绿色矿山」讲成一条闭环。",
    problem: "低碳物流的信息分散，需要在一张图里建立「运输—能源—生态」的因果关系。",
    method: "以公路为视觉主轴，由近及远安排重卡、风光储与复垦矿山，形成从运输到生态的阅读顺序。",
    solution: "高饱和绿色系 + 扁平插画 + 三块信息卡，标题字做描边处理：远看有冲击，近读有信息。",
    tags: ["海报设计", "信息层级", "字体设计", "系列视觉"],
    img: "assets/work/green-logistics.jpg",
    thumb: "assets/thumbs/green-logistics.jpg"
  },
  {
    id: "sea-rail",
    no: "07",
    title: "海铁联运 · 物流枢纽",
    en: "Sea-Rail Intermodal Hub",
    cat: "visual",
    catLabel: "视觉传达",
    kind: "海报设计",
    note: "品牌视觉",
    summary: "用港口落日的实景做底，把「通江达海」的枢纽能力压进一屏。",
    problem: "港口业务链条长，需要在品牌海报里同时传达枢纽规模与作业效率。",
    method: "以夕阳码头的大场景建立体量感，右侧标题与三块功能卡承接信息，底部用图标收束业务关键词。",
    solution: "实景摄影 + 深蓝信息卡 + 描边大字，形成「远看气势、近看业务」的两层阅读。",
    tags: ["海报设计", "图像合成", "版式设计", "品牌视觉"],
    img: "assets/work/sea-rail.jpg",
    thumb: "assets/thumbs/sea-rail.jpg"
  },
  {
    id: "xiazhi",
    no: "08",
    title: "夏至 · XIA ZHI",
    en: "Summer Solstice",
    cat: "visual",
    catLabel: "视觉传达",
    kind: "海报设计",
    note: "节气视觉",
    summary: "以窗为框、以荷为景，把节气做成一张可以停下来看的画面。",
    problem: "节气海报容易停留在素材拼贴，需要建立统一的东方视觉语法。",
    method: "取宋画的留白与局部构图，用「窗中景」制造观看距离，再用纸质肌理统一质感。",
    solution: "荷、窗、石绿与米白构成主调，书法「夏至」与英文排版形成中西并置，日期作为落款收尾。",
    tags: ["海报设计", "构图", "肌理", "字体"],
    img: "assets/work/xiazhi.jpg",
    thumb: "assets/thumbs/xiazhi.jpg"
  },
  {
    id: "palace-app",
    no: "09",
    title: "故宫博物院 App 体验设计",
    en: "The Palace Museum App",
    cat: "digital",
    catLabel: "数字体验",
    kind: "UI / UX",
    note: "三屏界面",
    summary: "从「我今天想看什么」出发，重排首页、导览与购票三条主路径。",
    problem: "故宫 App 功能多、入口密，首次到访者难以快速决定「去哪、看什么、怎么约」。",
    method: "以到访前—到访中—到访后三段旅程梳理信息架构，首页只保留今日开馆、购票与地图三条主任务。",
    solution: "首页用「今日开馆 + 购票约展 + 地图导览」三卡定调；导览页按时间与体力给路线；购票页前置年票与公告。",
    tags: ["信息架构", "UI 设计", "服务设计", "三屏界面"],
    img: "assets/work/palace-app.jpg",
    thumb: "assets/thumbs/palace-app.jpg"
  }
];

const CAT_LABEL = { all: "全部", product: "产品设计", visual: "视觉传达", digital: "数字体验" };

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const grid = $("#grid");
const lightbox = $("#lightbox");
const lbImg = $("#lbImg");
const lbTitle = $("#lbTitle");
const lbCat = $("#lbCat");
const lbEn = $("#lbEn");
const lbSummary = $("#lbSummary");
const lbProblem = $("#lbProblem");
const lbMethod = $("#lbMethod");
const lbSolution = $("#lbSolution");
const lbTags = $("#lbTags");
const lbCount = $("#lbCount");
const gridCount = $("#gridCount");

let current = -1;
let lastFocus = null;

/* ---------- render ---------- */

function renderCards() {
  grid.innerHTML = PROJECTS.map((p, i) => `
    <button class="card" type="button" data-id="${p.id}" data-cat="${p.cat}"
            aria-label="查看项目：${p.title}" style="animation-delay:${i * 55}ms">
      <span class="card-media">
        <img src="${p.thumb}" alt="${p.title} 作品展板" width="800" height="600" loading="${i < 3 ? "eager" : "lazy"}">
        <span class="card-view" aria-hidden="true">查看 ↗</span>
      </span>
      <span class="card-info">
        <span class="card-top"><span class="card-no">${p.no}</span><span>${p.catLabel}</span></span>
        <h3>${p.title}</h3>
        <span class="card-meta"><span>${p.kind}</span><em>${p.note}</em></span>
      </span>
    </button>
  `).join("");

  $$(".card", grid).forEach((card, i) => {
    card.classList.add("animate-in");
    card.addEventListener("click", () => openProject(i));
  });
}

/* ---------- filter ---------- */

function applyFilter(filter) {
  let visible = 0;
  $$(".card", grid).forEach((card) => {
    const show = filter === "all" || card.dataset.cat === filter;
    card.classList.toggle("is-filtered", !show);
    if (show) {
      visible += 1;
      card.classList.remove("animate-in");
      void card.offsetWidth;
      card.classList.add("animate-in");
    }
  });

  $$(".filter").forEach((btn) => {
    const active = btn.dataset.filter === filter;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  gridCount.textContent = `${String(visible).padStart(2, "0")} 个项目`;
}

$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
});

/* ---------- lightbox ---------- */

function setImage(src, alt) {
  lbImg.classList.remove("is-loaded");
  lbImg.onload = () => lbImg.classList.add("is-loaded");
  lbImg.src = src;
  lbImg.alt = alt;
  lbImg.title = "点击放大";
}

/* file:// 下 replaceState 可能被浏览器拒绝，静默降级即可 */
function setHash(hash) {
  try {
    history.replaceState(null, "", hash);
  } catch (err) {
    /* ignore */
  }
}

function openProject(index, updateHash = true) {
  const p = PROJECTS[index];
  if (!p) return;

  current = index;
  lastFocus = document.activeElement;

  lbImg.closest(".lb-media").classList.remove("is-zoomed");
  lbImg.closest(".lb-panel").classList.remove("is-zoomed");

  lbCat.textContent = `${p.catLabel} — ${p.kind}`;
  lbTitle.textContent = p.title;
  lbEn.textContent = p.en;
  lbSummary.textContent = p.summary;
  lbProblem.textContent = p.problem;
  lbMethod.textContent = p.method;
  lbSolution.textContent = p.solution;
  lbTags.innerHTML = p.tags.map((t) => `<li>${t}</li>`).join("");
  lbCount.textContent = `${p.no} / ${String(PROJECTS.length).padStart(2, "0")}`;

  setImage(p.img, `${p.title} 作品展板`);

  lightbox.hidden = false;
  requestAnimationFrame(() => lightbox.classList.add("is-open"));

  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : "";
  document.body.classList.add("no-scroll");

  if (updateHash) setHash(`#${p.id}`);

  $("#lbClose").focus({ preventScroll: true });
}

function closeProject() {
  if (current < 0) return;

  lightbox.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  document.body.style.paddingRight = "";

  window.setTimeout(() => {
    lightbox.hidden = true;
    lbImg.src = "";
    lbImg.closest(".lb-media").classList.remove("is-zoomed");
    lbImg.closest(".lb-panel").classList.remove("is-zoomed");
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }, 180);

  current = -1;
  setHash("#work");
}

function stepProject(direction) {
  if (current < 0) return;
  const next = (current + direction + PROJECTS.length) % PROJECTS.length;
  openProject(next);
}

$("#lbClose").addEventListener("click", closeProject);
$(".lb-backdrop").addEventListener("click", closeProject);
$("#lbPrev").addEventListener("click", () => stepProject(-1));
$("#lbNext").addEventListener("click", () => stepProject(1));

lbImg.addEventListener("click", () => {
  const media = lbImg.closest(".lb-media");
  const panel = media.closest(".lb-panel");
  const zoomed = media.classList.toggle("is-zoomed");
  panel.classList.toggle("is-zoomed", zoomed);
  if (zoomed) {
    requestAnimationFrame(() => {
      media.scrollLeft = (media.scrollWidth - media.clientWidth) / 2;
      media.scrollTop = (media.scrollHeight - media.clientHeight) / 2;
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (current < 0) return;
  if (event.key === "Escape") closeProject();
  if (event.key === "ArrowLeft") stepProject(-1);
  if (event.key === "ArrowRight") stepProject(1);
});

/* keep focus inside the dialog */
lightbox.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;
  const focusables = $$("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])", lightbox)
    .filter((el) => !el.disabled && el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

/* ---------- reveal on scroll ---------- */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
);

$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObserver.observe(el);
});

$$(".process li").forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
});

/* ---------- header ---------- */

const header = $("#siteHeader");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- boot ---------- */

$("#year").textContent = new Date().getFullYear();
renderCards();
applyFilter("all");

const initialId = decodeURIComponent(location.hash.replace("#", ""));
const initialIndex = PROJECTS.findIndex((p) => p.id === initialId);
if (initialIndex >= 0) {
  window.setTimeout(() => openProject(initialIndex, false), 220);
}
