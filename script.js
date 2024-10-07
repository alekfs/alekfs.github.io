// Get all navigation links and content sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

// Function to show the correct section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.add('hidden');  // Hide all sections
        section.classList.remove('active');  // Remove active class
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');
}

// Event listener for navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove active class from all nav links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Show the section based on the clicked link
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Show "About Me" section by default on load
showSection('about');
