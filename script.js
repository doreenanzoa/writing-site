// Read a sample: expand / collapse the excerpt
const sampleToggle = document.getElementById("sampleToggle");
const sample = document.getElementById("sample");

sampleToggle.addEventListener("click", function () {
    const willOpen = sample.hidden;
    sample.hidden = !willOpen;
    sampleToggle.setAttribute("aria-expanded", String(willOpen));
    sampleToggle.textContent = willOpen ? "Hide sample" : "Read a sample";
});

// Highlight the nav link of the section in view
const navLinks = document.querySelectorAll(".site-nav nav a");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (section) { observer.observe(section); });
}

// Floating back-to-top button
const backToTop = document.querySelector(".back-to-top");
function toggleBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 400);
}
window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
