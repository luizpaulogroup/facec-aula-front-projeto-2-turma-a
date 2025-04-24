var nome = document.getElementById("nome");
var profissao = document.getElementById("profissao");
var botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    if (nome.value == "") {
        alert("Informe o nome!");
        return;
    } else if (nome.value.length < 3) {
        alert("Informe o nome completo!");
        return;
    }

    if (profissao.value == "") {
        alert("Informe a profissão!");
        return;
    }

    console.log(nome.value);
    console.log(profissao.value);
    console.log("Final");
});