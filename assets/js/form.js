export function carregarForm() {
    const btn = document.getElementById("btn-cadastrar");

    if (!btn) return;

    btn.addEventListener("click", () => {
        document.getElementById("form-container").innerHTML = `
            <h3>Cadastro de Voluntário</h3>

            <form id="form-voluntario">
                <input type="text" id="nome" placeholder="Seu nome" required>
                <input type="email" id="email" placeholder="Seu e-mail" required>
                
                <select id="interesse" required>
                    <option value="">Área de interesse</option>
                    <option>Educação</option>
                    <option>Animais</option>
                    <option>Saúde</option>
                    <option>Meio Ambiente</option>
                </select>

                <button type="submit" class="btn">Enviar</button>
            </form>

            <p id="status-msg" style="margin-top: 10px; font-weight: 600;"></p>
        `;

        const form = document.getElementById("form-voluntario");
        const statusMsg = document.getElementById("status-msg");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const interesse = document.getElementById("interesse").value;

            if (!nome || !email || !interesse) {
                statusMsg.textContent = "⚠️ Preencha todos os campos antes de enviar!";
                statusMsg.style.color = "#ff4444";
                return;
            }

            // Se passou na validação ✅
            statusMsg.textContent = "✅ Obrigado! Sua inscrição foi enviada com sucesso!";
            statusMsg.style.color = "#00a859";

            form.reset();
        });

        document.getElementById("form-container").scrollIntoView({ behavior: "smooth" });
    });
}