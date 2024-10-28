// Get all navigation links and content sections
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

// Function to show and scroll to the correct section
function navigateToSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');  // Hide all sections
        section.classList.add('hidden');     // Ensure hidden class is added
    });

    // Show the selected section and scroll to it
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');  // Make the selected section visible
    targetSection.classList.remove('hidden');

    // Smooth scroll to the selected section
    targetSection.scrollIntoView({ behavior: 'smooth' });
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
        navigateToSection(sectionId);
    });
});

// Show "About Me" section by default on load
navigateToSection('about');
