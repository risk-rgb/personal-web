/*==================== Toggle Icon Navbar ========================*/

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Toggle between menu and close icon
    navbar.classList.toggle('active'); // Show/hide navbar
};

/*===================== Scroll Section Active Link ================*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY; // Get vertical scroll position
    sections.forEach(section => {
        const offset = section.offsetTop - 150; // Offset for active link detection
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Add active class to the corresponding nav link
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });

    /*====================== Sticky Navbar ======================*/
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Make navbar sticky after scroll

    /*====================== Remove Toggle Icon and Navbar ======================*/
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark'); // Reset icon if navbar is active
        navbar.classList.remove('active'); // Hide navbar when scrolling
    }
};

/*====================== Scroll Reveal ======================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, h2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { delay: 200 });
ScrollReveal().reveal('.about-img', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

/*====================== Type.js ======================*/
const typed = new Typed('.multiple-text', { // Corrected from 'typed'
    strings: ['Frontend Developer', 'Web Designer', 'YouTuber'], // Corrected from 'String'
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

app.use(express.static('public'));
