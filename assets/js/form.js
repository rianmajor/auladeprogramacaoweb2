// assets/js/form.js
document.addEventListener('submit', function (e) {
  if (!e.target || e.target.id !== 'cadastro-form') return;

  e.preventDefault();
  const nome = document.getElementById('nome')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const telefone = document.getElementById('telefone')?.value.trim();
  const mensagem = document.getElementById('mensagem');

  if (!nome || !email) {
    mensagem.textContent = 'Por favor, preencha os campos obrigatórios (Nome e Email).';
    mensagem.style.color = 'red';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensagem.textContent = 'Digite um email válido.';
    mensagem.style.color = 'red';
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push({ nome, email, telefone, created: new Date().toISOString() });
  localStorage.setItem('users', JSON.stringify(users));

  mensagem.textContent = 'Cadastro realizado com sucesso!';
  mensagem.style.color = 'green';
  e.target.reset();
});