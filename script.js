// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Virtual Assistant",
    "Data Entry Specialist"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;
    }


    // Finished typing
    if (!isDeleting && charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1800);

        return;
    }


    // Finished deleting
    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }


    const typingSpeed = isDeleting ? 60 : 100;

    setTimeout(typeEffect, typingSpeed);
}


// Start animation
document.addEventListener("DOMContentLoaded", () => {

    if (typingText) {
        typeEffect();
    }

});