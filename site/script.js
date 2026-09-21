const navigationToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

if (navigationToggle && navigation) {
  const closeNavigation = () => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  navigationToggle.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navigationToggle.focus();
    }
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

const themeButton = document.querySelector('.theme-toggle');
const updateThemeButton = () => { if (themeButton) themeButton.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'night')); };
updateThemeButton();
themeButton?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'night' ? 'light' : 'night';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('ap-theme', theme); } catch {}
  updateThemeButton();
});
document.querySelector('[data-reset-preferences]')?.addEventListener('click', () => {
  try { localStorage.removeItem('ap-theme'); } catch {}
  delete document.documentElement.dataset.theme;
  updateThemeButton();
  document.querySelector('[data-preference-status]').textContent = 'Saved appearance preference cleared. Light mode is active.';
});
