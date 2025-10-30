document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCadastro');
    const tabela = document.getElementById('tabelaUsuarios');

    // Função para atualizar a tabela
    function atualizarTabela() {
        tabela.innerHTML = '';
        listarUsuarios().forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = <><td>${u.nome}</td><td>${u.email}</td><td>${u.telefone}</td></>;
            tabela.appendChild(tr);
        });
    }

    // Atualiza a tabela ao carregar a página
    atualizarTabela();

    // Evento de envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const usuario = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value
        };

        salvarUsuario(usuario);
        atualizarTabela();
        form.reset();
    });
});