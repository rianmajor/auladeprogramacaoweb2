// Template do formulário de cadastro
const cadastroTemplate = `
  <form id="cadastro-form">
    <label>Nome:</label>
    <input type="text" id="nome" required><br><br>

    <label>Email:</label>
    <input type="email" id="email" required><br><br>

    <label>Senha:</label>
    <input type="password" id="senha" required><br><br>

    <button type="submit">Enviar</button>
  </form>
  <div id="mensagem"></div>
`;