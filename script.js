// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Scroll Animation
const elements = document.querySelectorAll(".animate");

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < trigger) element.classList.add("show");
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// Contact Form
const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        alert("Thank you! We will contact you shortly.");

        form.reset();
    });
}
