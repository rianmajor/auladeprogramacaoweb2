document.addEventListener('submit', function(e) {
  if (e.target && e.target.id === 'cadastro-form') {
    e.preventDefault(); // evita envio real

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (!nome || !email || !senha) {
      mensagem.textContent = "Preencha todos os campos corretamente!";
      mensagem.style.color = "red";
      return;
    }

    // Exemplo simples de validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      mensagem.textContent = "Digite um email válido!";
      mensagem.style.color = "red";
      return;
    }

    // Se tudo certo
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    // Aqui você poderia salvar no localStorage ou enviar para backend
    e.target.reset();
  }
});