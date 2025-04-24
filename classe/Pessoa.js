class Pessoa {
    cadastrar({ nome, profissao }) {
        try {
            var pessoas = localStorage.getItem("pessoas");

            if (pessoas) {
                pessoas = JSON.parse(pessoas);
            } else {
                pessoas = [];
            }

            pessoas.push({ nome, profissao });

            localStorage.setItem("pessoas", JSON.stringify(pessoas));
        } catch (error) {
            console.log(error);
        }
    }
}