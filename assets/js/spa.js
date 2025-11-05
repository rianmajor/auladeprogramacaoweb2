import { homeTemplate, sobreTemplate, contatoTemplate } from "./templates.js";
import { carregarForm } from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const nav = document.querySelector("nav");
    const themeToggle = document.getElementById("toggle-theme");

    // --- THEME HELPERS ---
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.add("dark");
            themeToggle.textContent = "☀️";
            localStorage.setItem("voluntariar_theme", "dark");
        } else {
            document.body.classList.remove("dark");
            themeToggle.textContent = "🌙";
            localStorage.setItem("voluntariar_theme", "light");
        }
    }

    function initThemeFromStorage() {
        const saved = localStorage.getItem("voluntariar_theme");
        if (saved === "dark") {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }

    // --- ensure we add the theme listener only once ---
    function initThemeToggle() {
        if (!themeToggle) return;
        // remove previous listener (defensive) then add exactly one
        themeToggle.replaceWith(themeToggle.cloneNode(true)); // cheap way to remove duplicates
        const newToggle = document.getElementById("toggle-theme") || document.querySelector("#toggle-theme");
        newToggle.addEventListener("click", () => {
            const isDark = document.body.classList.contains("dark");
            setTheme(!isDark);
        });
    }

    // --- routing / rendering ---
    function renderPage(page) {
        switch (page) {
            case "sobre":
                content.innerHTML = sobreTemplate();
                break;
            case "contato":
                content.innerHTML = contatoTemplate();
                break;
            default:
                content.innerHTML = homeTemplate();
        }

        // animação: garante a classe para fade-in
        content.classList.remove("fade-in");
        // small timeout to re-trigger CSS transition if needed
        setTimeout(() => content.classList.add("fade-in"), 20);

        // ativa comportamento do formulário / botão "Quero Ajudar"
        carregarForm();
    }

    // --- nav delegation (added once) ---
    if (nav) {
        nav.addEventListener("click", (e) => {
            const a = e.target.closest("a[data-page]");
            if (!a) return;
            e.preventDefault();
            const page = a.dataset.page;
            renderPage(page);
        });
    }

    // --- inicialização ---
    initThemeFromStorage();
    initThemeToggle();
    renderPage("home");
});