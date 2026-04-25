// ======================= HAMBURGER MENU =======================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ======================= SMOOTH SCROLL =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // tutup menu mobile setelah klik
    navLinks.classList.remove("open");
  });
});

// ======================= ACTIVE LINK =======================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ======================= REVEAL ANIMATION =======================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ======================= PROGRESS BAR =======================
const progressFill = document.getElementById("progressFill");
const progressPct = document.getElementById("progressPct");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  progressFill.style.width = progress + "%";
  progressPct.textContent = Math.round(progress) + "%";
});

// ======================= DARK MODE =======================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "light") {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

// ======================= FAQ ACCORDION =======================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    // tutup semua
    faqItems.forEach(i => {
      i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      i.querySelector(".faq-answer").classList.remove("open");
    });

    // buka yang diklik
    if (!isOpen) {
      question.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    }
  });
});

// ======================= SCROLL TO TOP =======================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});