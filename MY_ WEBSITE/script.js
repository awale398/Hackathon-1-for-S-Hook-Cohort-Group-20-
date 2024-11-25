// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Typing effect
const typingText = document.querySelector('.text-animation span');
const words = ["Frontend Developer", "UI/UX Designer", "Web Developer", "Software Tester"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    if (i < words.length) {
        const currentWord = words[i];
        typingText.textContent = isDeleting
            ? currentWord.substring(0, j--)
            : currentWord.substring(0, j++);

        if (j === currentWord.length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 100 : 150);
    }
}
type();

// Modal open/close functionality
const modal = document.getElementById('modal');
const contactBtn = document.getElementById('contact-btn');
const closeModal = document.getElementById('close-modal');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
