// Smooth Scroll
const anchors = document.querySelectorAll('.navbar a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Active Nav Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 120;
        const sectionHeight = sec.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// Typing Effect (No Repeat Issue)
const text = "MERN Stack Developer";
const element = document.querySelector(".home-content span");
let index = 0;

if (element) {
    element.textContent = "";

    function typeEffect() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
}


// Contact Form Submission
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);

        fetch("https://formspree.io/f/xreaeolz", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => {
            if (response.ok) {
                status.textContent = "Message sent successfully!";
                form.reset();
            } else {
                status.textContent = "Something went wrong. Try again.";
            }
        })
        .catch(() => {
            status.textContent = "Network error. Please try again.";
        });
    });
}


// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}


// Scroll Reveal Animation
if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    ScrollReveal().reveal('.home-content', { origin: 'top' });
    ScrollReveal().reveal('.skills h2, .projects h2, .contact h2', { origin: 'top' });
    ScrollReveal().reveal('.skill, .project-card, .dsa-card, .contact form', { origin: 'bottom', interval: 150 });
}