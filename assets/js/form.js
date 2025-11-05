export function carregarForm() {
    const btn = document.getElementById("btn-cadastrar");

    if (!btn) return;

    btn.addEventListener("click", () => {
        document.getElementById("form-container").innerHTML = `
            <h3>Cadastro de Voluntário</h3>

            <form id="form-voluntario">
                <input type="text" placeholder="Seu nome" required>
                <input type="email" placeholder="Seu e-mail" required>

                <select required>
                    <option value="">Área de interesse</option>
                    <option>Educação</option>
                    <option>Animais</option>
                    <option>Saúde</option>
                    <option>Meio Ambiente</option>
                </select>

                <button type="submit" class="btn">Enviar</button>
            </form>
        `;

        document.getElementById("form-container").scrollIntoView({ behavior: "smooth" });
    });
}