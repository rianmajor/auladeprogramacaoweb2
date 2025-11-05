export function homeTemplate() {
    return `
        <h2>Bem-vindo ao Voluntariar!</h2>
        <p>Conectamos voluntários com projetos sociais. Faça a diferença hoje mesmo!</p>

        <img class="main-img" src="assets/img/foto.png" alt="Voluntariado">

        <button id="btn-cadastrar" class="btn pulse">Quero Ajudar</button>

        <div id="form-container"></div>
    `;
}

export function sobreTemplate() {
    return `
        <h2>Quem Somos</h2>
        <p>Somos uma iniciativa que conecta pessoas dispostas a fazer o bem com projetos sociais que precisam de ajuda.</p>
        <p>Acreditamos que pequenas atitudes podem transformar vidas. Nosso objetivo é facilitar o caminho para quem quer contribuir com ações de impacto na sociedade.</p>
        <p>Faça parte dessa rede de solidariedade e venha construir um futuro melhor com a gente! 💚</p>
    `;
}

export function contatoTemplate() {
    return `
        <h2>Fale Conosco</h2>
        <p>Está pronto para ajudar ou tem dúvidas? Envie sua mensagem!</p>

        <form id="form-contato">
            <input type="text" placeholder="Seu nome" required>
            <input type="email" placeholder="Seu e-mail" required>
            <textarea placeholder="Como você quer contribuir?" required></textarea>
            <button type="submit" class="btn pulse">Enviar</button>
        </form>
    `;
}