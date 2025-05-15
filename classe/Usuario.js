class Usuario {
    cadastrar({ nome = null, profissao = null }) {
        try {
            if (!nome || !profissao) {
                return { erro: true, msg: "Informe os dados completos!" }
            }

            let usuarios = localStorage.getItem("usuarios") || "[]";

            usuarios = JSON.parse(usuarios);

            usuarios.push({
                id: usuarios.length + 1,
                nome,
                profissao
            });

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            return { erro: false, msg: "Usuário cadastrado com sucesso!" }
        } catch (error) {
            return { erro: true, msg: error.message }
        }
    }

    listar() {
        try {
            let usuarios = localStorage.getItem("usuarios") || "[]";
            
            usuarios = JSON.parse(usuarios);

            let html = ``;
            
            if (usuarios.length == 0) {
                html += `<tr><td colspan="3">Sem resultados!</td></tr>`;
            } else {
                for (let usuario of usuarios) {
                    html += `<tr>`;
                    html += `<th>${usuario.id}</th>`;
                    html += `<td>${usuario.nome}</td>`;
                    html += `<td>${usuario.profissao}</td>`;
                    html += `</tr>`;
                }
            }

            return html;
        } catch (error) {
            return "";
        }
    }
}