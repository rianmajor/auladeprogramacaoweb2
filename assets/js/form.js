document.addEventListener("submit", (e) => {
    if (e.target.id === "form-contato") {
        e.preventDefault();
        alert("Mensagem enviada com sucesso ✅");
        e.target.reset();
    }
});