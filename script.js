/* ============================================================
   FITNESS BAR — vanilla JS interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Sticky nav state ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Active nav link highlighting ---------- */
  const sections = [...document.querySelectorAll("section[id]")];
  const navAnchors = [...navLinks.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Class timetable (DEMO DATA — replace with real schedule) ---------- */
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // type -> pill colour
  const TYPE_COLORS = {
    "Yoga": "#00e0a4",
    "Zumba": "#ff8a00",
    "Les Mills": "#38b6ff",
    "MMA": "#ff4d2e",
    "HIIT": "#c8ff00",
    "Strength": "#c26bff",
  };

  const SCHEDULE = {
    1: [
      { time: "6:00 AM", name: "Sunrise HIIT", type: "HIIT", coach: "Coach Tariq", level: "Advanced", dur: 45 },
      { time: "7:15 AM", name: "Power Yoga", type: "Yoga", coach: "Asha Desai", level: "All levels", dur: 60 },
      { time: "5:00 PM", name: "Les Mills BodyPump", type: "Les Mills", coach: "Rohan Pereira", level: "Intermediate", dur: 45 },
      { time: "6:30 PM", name: "Zumba Fitness", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "8:00 PM", name: "MMA Fundamentals", type: "MMA", coach: "Imran Shaikh", level: "Beginner", dur: 60 },
    ],
    2: [
      { time: "6:00 AM", name: "Strength Foundations", type: "Strength", coach: "Coach Tariq", level: "Beginner", dur: 60 },
      { time: "7:00 AM", name: "Vinyasa Flow", type: "Yoga", coach: "Asha Desai", level: "Intermediate", dur: 60 },
      { time: "5:30 PM", name: "Les Mills GRIT", type: "Les Mills", coach: "Rohan Pereira", level: "Advanced", dur: 30 },
      { time: "7:00 PM", name: "Zumba Toning", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "8:30 PM", name: "MMA Sparring", type: "MMA", coach: "Imran Shaikh", level: "Advanced", dur: 60 },
    ],
    3: [
      { time: "6:00 AM", name: "Cardio Blast", type: "HIIT", coach: "Coach Tariq", level: "Intermediate", dur: 45 },
      { time: "7:15 AM", name: "Hatha Yoga", type: "Yoga", coach: "Asha Desai", level: "All levels", dur: 60 },
      { time: "5:00 PM", name: "Les Mills BodyPump", type: "Les Mills", coach: "Rohan Pereira", level: "Intermediate", dur: 45 },
      { time: "6:30 PM", name: "Zumba Fitness", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "8:00 PM", name: "MMA Fundamentals", type: "MMA", coach: "Imran Shaikh", level: "Beginner", dur: 60 },
    ],
    4: [
      { time: "6:00 AM", name: "Sunrise HIIT", type: "HIIT", coach: "Coach Tariq", level: "Advanced", dur: 45 },
      { time: "7:00 AM", name: "Power Yoga", type: "Yoga", coach: "Asha Desai", level: "All levels", dur: 60 },
      { time: "5:30 PM", name: "Les Mills GRIT", type: "Les Mills", coach: "Rohan Pereira", level: "Advanced", dur: 30 },
      { time: "7:00 PM", name: "Zumba Gold", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "8:30 PM", name: "MMA Sparring", type: "MMA", coach: "Imran Shaikh", level: "Advanced", dur: 60 },
    ],
    5: [
      { time: "6:00 AM", name: "Strength Foundations", type: "Strength", coach: "Coach Tariq", level: "Beginner", dur: 60 },
      { time: "7:15 AM", name: "Vinyasa Flow", type: "Yoga", coach: "Asha Desai", level: "Intermediate", dur: 60 },
      { time: "5:00 PM", name: "Les Mills BodyPump", type: "Les Mills", coach: "Rohan Pereira", level: "Intermediate", dur: 45 },
      { time: "6:30 PM", name: "Zumba Party", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "8:00 PM", name: "MMA Fundamentals", type: "MMA", coach: "Imran Shaikh", level: "Beginner", dur: 60 },
    ],
    6: [
      { time: "7:00 AM", name: "Weekend Warrior HIIT", type: "HIIT", coach: "Coach Tariq", level: "Intermediate", dur: 45 },
      { time: "8:30 AM", name: "Yoga for Mobility", type: "Yoga", coach: "Asha Desai", level: "All levels", dur: 60 },
      { time: "10:00 AM", name: "Zumba Fitness", type: "Zumba", coach: "Priya Nair", level: "All levels", dur: 60 },
      { time: "5:00 PM", name: "Les Mills BodyPump", type: "Les Mills", coach: "Rohan Pereira", level: "Intermediate", dur: 45 },
      { time: "6:30 PM", name: "MMA Fundamentals", type: "MMA", coach: "Imran Shaikh", level: "Beginner", dur: 60 },
    ],
    0: [], // Sunday — closed
  };

  const TYPES = ["All", "Strength", "HIIT", "Yoga", "Zumba", "Les Mills", "MMA"];

  const dayTabsEl = document.getElementById("dayTabs");
  const typeChipsEl = document.getElementById("typeChips");
  const classListEl = document.getElementById("classList");

  // Start on today's day (fallback to Monday)
  const todayIdx = new Date().getDay();
  let activeDay = SCHEDULE[todayIdx] ? todayIdx : 1;
  let activeType = "All";

  // Build day tabs (Mon-first order)
  [1, 2, 3, 4, 5, 6, 0].forEach((d) => {
    const btn = document.createElement("button");
    btn.className = "day-tab";
    btn.textContent = DAYS[d];
    btn.dataset.day = d;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.addEventListener("click", () => {
      activeDay = d;
      renderTimetable();
    });
    dayTabsEl.appendChild(btn);
  });

  // Build type filter chips
  TYPES.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "type-chip";
    btn.textContent = t;
    btn.dataset.type = t;
    btn.addEventListener("click", () => {
      activeType = t;
      renderTimetable();
    });
    typeChipsEl.appendChild(btn);
  });

  function levelClass(level) {
    return level === "Beginner"
      ? "pill--beginner"
      : level === "Intermediate"
      ? "pill--intermediate"
      : "pill--advanced";
  }

  function renderTimetable() {
    dayTabsEl.querySelectorAll(".day-tab").forEach((b) => {
      const active = Number(b.dataset.day) === activeDay;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    typeChipsEl.querySelectorAll(".type-chip").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.type === activeType)
    );

    const classes = (SCHEDULE[activeDay] || []).filter(
      (c) => activeType === "All" || c.type === activeType
    );

    classListEl.innerHTML = "";

    if (!classes.length) {
      const empty = document.createElement("div");
      empty.className = "class-empty";
      empty.innerHTML = activeDay === 0
        ? "<strong>Sunday</strong> — the gym rests. See you Monday at 5:30 AM."
        : "No " + activeType + " sessions on " + DAYS[activeDay] + ". Try another day or type.";
      classListEl.appendChild(empty);
      return;
    }

    classes.forEach((c, i) => {
      const row = document.createElement("div");
      row.className = "class-row";
      row.style.animationDelay = i * 0.05 + "s";
      row.innerHTML =
        '<span class="class-row__time">' + c.time + "</span>" +
        '<div><div class="class-row__name">' + c.name + '</div>' +
        '<div class="class-row__meta">' + c.coach + " · " + c.dur + " min</div></div>" +
        '<div class="class-row__tags">' +
        '<span class="pill pill--type" style="background:' + (TYPE_COLORS[c.type] || "#c8ff00") + '">' + c.type + "</span>" +
        '<span class="pill ' + levelClass(c.level) + '">' + c.level + "</span>" +
        "</div>";
      classListEl.appendChild(row);
    });
  }

  renderTimetable();

  /* ---------- Live status rail: open/closed + next-class countdown ---------- */
  const OPEN_AM = 5 * 60 + 30;   // 5:30 AM
  const NOON = 12 * 60;          // 12:00 PM
  const OPEN_PM = 15 * 60;       // 3:00 PM
  const CLOSE_PM = 22 * 60;      // 10:00 PM

  function parseTime(t) {
    const [hm, ap] = t.split(" ");
    let [h, m] = hm.split(":").map(Number);
    if (ap === "PM" && h !== 12) h += 12;
    if (ap === "AM" && h === 12) h = 0;
    return h * 60 + m;
  }

  function gymStatus(now) {
    const day = now.getDay();
    if (day === 0) return { open: false, label: "CLOSED · OPENS MON 5:30 AM" };
    const mins = now.getHours() * 60 + now.getMinutes();
    if ((mins >= OPEN_AM && mins < NOON) || (mins >= OPEN_PM && mins < CLOSE_PM))
      return { open: true, label: "OPEN NOW" };
    if (mins < OPEN_AM) return { open: false, label: "OPENS TODAY 5:30 AM" };
    if (mins >= NOON && mins < OPEN_PM) return { open: false, label: "OPENS TODAY 3:00 PM" };
    return { open: false, label: "OPENS TOMORROW 5:30 AM" };
  }

  function nextClassFrom(now) {
    const day = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();
    const todays = (SCHEDULE[day] || []).filter((c) => parseTime(c.time) > mins);
    if (todays.length) return { cls: todays[0], inDays: 0, at: parseTime(todays[0].time) };
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7;
      if ((SCHEDULE[d] || []).length) {
        return { cls: SCHEDULE[d][0], inDays: i, at: parseTime(SCHEDULE[d][0].time) };
      }
    }
    return null;
  }

  function renderStatus() {
    const now = new Date();
    const st = gymStatus(now);
    const pill = document.getElementById("statusPill");
    pill.classList.toggle("is-open", st.open);
    pill.classList.toggle("is-closed", !st.open);
    document.getElementById("statusText").textContent = st.label;

    const nx = nextClassFrom(now);
    const ncEl = document.getElementById("nextClass");
    const cdEl = document.getElementById("countdown");
    if (nx) {
      ncEl.textContent = nx.cls.time + " · " + nx.cls.name;
      const target = new Date(now);
      target.setDate(target.getDate() + nx.inDays);
      target.setHours(Math.floor(nx.at / 60), nx.at % 60, 0, 0);
      const diff = Math.max(0, target - now);
      const totalH = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      const pad = (n) => String(n).padStart(2, "0");
      const dayPart = totalH >= 24 ? Math.floor(totalH / 24) + "d " : "";
      cdEl.textContent = "in " + dayPart + pad(totalH % 24) + ":" + pad(m) + ":" + pad(s);
    } else {
      ncEl.textContent = "No classes scheduled";
      cdEl.textContent = "";
    }

    const today = SCHEDULE[now.getDay()] || [];
    document.getElementById("todayList").innerHTML = today.length
      ? today.slice(0, 3).map((c) =>
          '<li><strong>' + c.time + "</strong><span>" + c.name + "</span></li>"
        ).join("")
      : '<li><strong>Rest day</strong><span>See you Monday</span></li>';
  }

  renderStatus();
  setInterval(renderStatus, 1000);

  /* ---------- Count-up hero stats ---------- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const statEls = document.querySelectorAll(".hero__stats dt[data-count]");
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        statObserver.unobserve(entry.target);
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const decimals = Number(el.dataset.decimals || 0);
        if (reducedMotion) {
          el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString("en-IN");
          return;
        }
        const dur = 1400;
        const t0 = performance.now();
        (function tick(t) {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = target * eased;
          el.textContent = decimals
            ? val.toFixed(decimals)
            : Math.round(val).toLocaleString("en-IN");
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => statObserver.observe(el));

  /* ---------- Trial modal ---------- */
  const modal = document.getElementById("trialModal");
  const modalCard = modal.querySelector(".modal__card");
  let lastFocus = null;

  function openModal() {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    const input = modal.querySelector("input");
    if (input) input.focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll("[data-open-modal]").forEach((b) =>
    b.addEventListener("click", openModal)
  );
  modal.querySelectorAll("[data-close-modal]").forEach((b) =>
    b.addEventListener("click", closeModal)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
  modal.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusables = modalCard.querySelectorAll("input, select, button");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ---------- Lead forms ---------- */
  const toast = document.getElementById("toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  function handleLeadForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().replace(/[\s-]/g, "");
      const cls = data.get("class");

      let ok = true;
      form.querySelectorAll("input, select").forEach((input) => input.classList.remove("is-invalid"));

      if (name.length < 2) {
        form.querySelector('[name="name"]').classList.add("is-invalid");
        ok = false;
      }
      if (!/^[+]?[0-9]{10,13}$/.test(phone)) {
        form.querySelector('[name="phone"]').classList.add("is-invalid");
        ok = false;
      }
      if (!cls) {
        form.querySelector('[name="class"]').classList.add("is-invalid");
        ok = false;
      }
      if (!ok) {
        showToast("Please add your name, a valid phone number and a class choice.");
        return;
      }

      // Demo storage — wire to Formspree / WhatsApp API / email backend for production
      const leads = JSON.parse(localStorage.getItem("fb_leads") || "[]");
      leads.push({
        name,
        phone,
        class: cls,
        goal: data.get("goal") || "",
        source: form.id,
        at: new Date().toISOString(),
      });
      localStorage.setItem("fb_leads", JSON.stringify(leads));

      form.reset();
      if (form.id === "modalForm") closeModal();
      showToast("You're in! " + name.split(" ")[0] + ", your free day is claimed — we'll call " + phone + " shortly.");
    });
  }

  handleLeadForm(document.getElementById("leadForm"));
  handleLeadForm(document.getElementById("modalForm"));

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
