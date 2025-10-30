function salvarUsuario(usuario) {
    let lista = JSON.parse(localStorage.getItem('usuarios')) || [];
    lista.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(lista));
}

function carregarUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}