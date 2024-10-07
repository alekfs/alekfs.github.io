// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Smooth scroll
        window.scroll({
            top: target.offsetTop - 70, // Adjusts for navbar height
            behavior: 'smooth'
        });

        // Remove "active" class from all links and apply to clicked link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Scroll Event Listener to update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 75; // Adjust for nav height
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-list a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-list a').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
});
