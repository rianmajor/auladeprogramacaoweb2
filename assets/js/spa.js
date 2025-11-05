import { homeTemplate, sobreTemplate, contatoTemplate } from "./templates.js";
import { carregarForm } from "./form.js";

const links = document.querySelectorAll("nav a");
const themeToggle = document.getElementById("toggle-theme");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        renderPage(page);
    });
});

function renderPage(page) {
    let content = document.getElementById("content");

    if (page === "sobre") {
        content.innerHTML = sobreTemplate();
    } else if (page === "contato") {
        content.innerHTML = contatoTemplate();
    } else {
        content.innerHTML = homeTemplate();
    }

    carregarForm(); // para o botão funcionar na Home
    ativarDarkMode(); // garante o dark mode após cada troca
}

// Dark Mode ✅
function ativarDarkMode() {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

// Iniciar Home
renderPage("home");
ativarDarkMode(); // ativa ao carregar a primeira vez