import { homeTemplate, sobreTemplate, contatoTemplate } from "./templates.js";
import { carregarForm } from "./form.js";

const links = document.querySelectorAll("nav a");

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

    carregarForm(); // garante funcionamento do botão em qualquer navegação
}

// Carregar Home ao iniciar
renderPage("home");