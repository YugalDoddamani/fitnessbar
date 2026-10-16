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
    dayTabsEl.querySelectorAll(".day-tab").forEach((b) =>
      b.classList.toggle("is-active", Number(b.dataset.day) === activeDay)
    );
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
