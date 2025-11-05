export function homeTemplate() {
    return `
        <h2>Página Inicial</h2>
        <p>Aqui você pode acessar nossos serviços e se cadastrar.</p>

        <img class="main-img" src="assets/img/foto.png" alt="Voluntariado">

        <button id="btn-cadastrar" class="btn">Me Cadastrar</button>

        <div id="form-container"></div>
    `;
}

export function sobreTemplate() {
    return `
        <h2>Sobre Nós</h2>
        <p>Este projeto demonstra uma Single Page Application usando HTML, CSS e JavaScript.</p>
        <p>Objetivo: aprender versionamento, acessibilidade e deploy!</p>
    `;
}

export function contatoTemplate() {
    return `
        <h2>Contato</h2>
        <p>Preencha o formulário e entraremos em contato com você:</p>

        <form id="form-contato">
            <input type="text" placeholder="Seu nome" required>
            <input type="email" placeholder="Seu e-mail" required>
            <textarea placeholder="Sua mensagem" required></textarea>
            <button type="submit" class="btn">Enviar</button>
        </form>
    `;
}