// ---------- DARK MODE ----------
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
<script>
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
</script>

// ---------- BURGER MENU ----------
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
});

// ---------- MODAL ----------
function openModal(title, description, imgSrc) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal-image").src = imgSrc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = (e) => {
    if (e.target == document.getElementById("modal")) closeModal();
};

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

