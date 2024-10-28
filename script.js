// Navigation and section display
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

// Function to show sections based on navigation
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Event listeners for navbar clicks
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        showSection(this.getAttribute('data-section'));
    });
});

// Enhanced entry animation for the homepage
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".name-heading").classList.add("fade-in");
    document.querySelector(".intro-text").classList.add("slide-in");
});
