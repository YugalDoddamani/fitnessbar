(() => {
  "use strict";
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      document.body.classList.remove("menu-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 720) closeMenu(); });
  }

  // Reveal content as it enters the viewport, with a restrained stagger.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll(
    ".hero-content > *, .intro-copy > *, .section-heading > *, .facility-card, .feature-content > *, .training-grid > *, .training-list article, .membership-grid > *, .visit-grid > *, .footer-main > *, .footer-bottom > *"
  );
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("js-motion");
    revealTargets.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${(index % 5) * 75}ms`);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach(element => observer.observe(element));
  }
})();