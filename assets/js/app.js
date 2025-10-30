const form = document.getElementById('formCadastro');
const tabela = document.getElementById('tabelaUsuarios');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();

    let valido = true;

    document.getElementById('erroNome').innerText = nome ? "" : "Campo obrigatório";
    if (!nome) valido = false;

    document.getElementById('erroEmail').innerText = email.includes('@') ? "" : "Email inválido";
    if (!email.includes('@')) valido = false;

    document.getElementById('erroTel').innerText = telefone.length >= 8 ? "" : "Telefone inválido";
    if (telefone.length < 8) valido = false;

    if (!valido) return;

    let usuario = { nome, email, telefone };
    salvarUsuario(usuario);
    exibirUsuarios();
    form.reset();
    navigate('lista');
});

function exibirUsuarios() {
    tabela.innerHTML = "";
    carregarUsuarios().forEach(user => {
        tabela.innerHTML += `
            <tr>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.telefone}</td>
            </tr>
        `;
    });
}

window.onload = () => exibirUsuarios();