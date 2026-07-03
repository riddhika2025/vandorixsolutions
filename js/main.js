/* ===========================================
   VANDORIX SOLUTIONS
   Main JavaScript
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Smooth Navigation Highlight
    // ==============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

});



/* ===========================================
   Header Shadow While Scrolling
=========================================== */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});



/* ===========================================
   Reveal Animation
=========================================== */

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {

    const trigger = window.innerHeight * 0.90;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* ===========================================
   Footer Year
=========================================== */

const yearElement = document.querySelector(".copyright-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}



console.log("BIGULE Website Loaded Successfully");