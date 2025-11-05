import { homeTemplate, sobreTemplate, contatoTemplate } from './templates.js';

const content = document.getElementById("content");

function loadPage(page) {
    content.classList.remove("fade-in");

    setTimeout(() => {
        switch(page) {
            case "sobre":
                content.innerHTML = sobreTemplate();
                break;
            case "contato":
                content.innerHTML = contatoTemplate();
                break;
            default:
                content.innerHTML = homeTemplate();
        }
        content.classList.add("fade-in");
    }, 200);
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        loadPage(e.target.dataset.page);
    });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Carrega Home ao entrar
loadPage("home");