// ===== MOBILE NAV TOGGLE =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close nav menu when a link is clicked (mobile)
document.querySelectorAll("#main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


// ===== SMOOTH SCROLLING (for internal anchor links) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


// ===== CONTACT FORM VALIDATION =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    contactForm.reset();
  });
}

// Simple email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
