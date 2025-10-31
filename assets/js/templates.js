// assets/js/templates.js
export const cadastroTemplate = `
  <section id="cadastro-section">
    <h3>Cadastro de Usuários</h3>
    <form id="cadastro-form" novalidate>
      <label for="nome">Nome:</label><br>
      <input type="text" id="nome" name="nome" required><br><br>

      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br><br>

      <label for="telefone">Telefone:</label><br>
      <input type="tel" id="telefone" name="telefone"><br><br>

      <button type="submit">Cadastrar</button>
    </form>

    <div id="mensagem" aria-live="polite"></div>
  </section>
`;