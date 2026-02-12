const navLinks = document.querySelectorAll('a[href^="#"]');
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "";
    message.className = "form-message";

    const naam = form.naam.value.trim();
    const email = form.email.value.trim();
    const bericht = form.bericht.value.trim();

    if (!naam || !email || !bericht) {
      message.textContent = "Vul alle velden in voordat je verstuurt.";
      message.classList.add("error");
      return;
    }

    if (!isValidEmail(email)) {
      message.textContent = "Vul een geldig e-mailadres in.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Bedankt! Je bericht is ontvangen (mock).";
    message.classList.add("success");
    form.reset();
  });
}
