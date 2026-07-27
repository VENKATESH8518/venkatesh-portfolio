/*==========================================
PORTFOLIO JAVASCRIPT
==========================================*/

console.log("Portfolio Loaded Successfully");

/*==========================================
STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#0b1120";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "#111827";
        navbar.style.boxShadow = "none";

    }

});

/*==========================================
ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

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

/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
BACK TO TOP BUTTON
==========================================*/

const topButton = document.createElement("button");

topButton.id = "topBtn";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
SCROLL REVEAL
==========================================*/

const revealElements = document.querySelectorAll(

    ".skill-box, .soft-box, .project-card, .timeline-item, .certificate-card, .activity-card"

);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/*==========================================
TYPEWRITER EFFECT
==========================================*/

const typingElement = document.querySelector(".hero h3");

const words = [



    

    "Cloud security engineer",

    

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

/*==========================================
CONTACT FORM
==========================================*/

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}

/*==========================================
IMAGE HOVER EFFECT
==========================================*/

const profileImage = document.querySelector(".profile-img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transform = "scale(1.08)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1)";

    });

}

/*==========================================
PAGE LOADER
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});

/*==========================================
CURRENT YEAR IN FOOTER
==========================================*/

const footerParagraph = document.querySelector("footer p:last-child");

if (footerParagraph) {

    footerParagraph.innerHTML = `© ${new Date().getFullYear()} Venkatesh K. All Rights Reserved.`;

}

console.log("Portfolio Ready!");