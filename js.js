// Toggle menu mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
}

// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const toggle = document.getElementById('theme-toggle');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Modal
function openModal(title, description, image) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    const modalImage = document.getElementById('modal-image');
    modalImage.src = image;
    modalImage.onclick = () => window.open(image, '_blank');
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Typing animation
const text = "Welcome to DE_Design Portfolio";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Validasi form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan terkirim!');
        this.reset();
    } else {
        alert('Harap isi semua field.');
    }
});
