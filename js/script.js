const botaoAdicionar = document.querySelector("#btn-adicionar");
const botaoVerTarefas = document.querySelector("#btn-ver-tarefas");
const inputTitulo = document.querySelector("#titulo")
const inputDescricao = document.querySelector("#descricao")
const mensagemErro = document.querySelectorAll(".mensagem-erro");

const estaVazio = (valor) => valor === null || valor === "";

inputTitulo.addEventListener("focusout", () => {
    if (estaVazio(inputTitulo.value)) {
        inputTitulo.style.border = "1px solid red";
        mensagemErro[0].textContent = "O campo é obrigatório";
    } else {
        inputTitulo.style.border = "1px solid green";
        mensagemErro[0].textContent = "";
    }
});

inputDescricao.addEventListener("focusout", () => {
    if (estaVazio(inputDescricao.value)) {
        inputDescricao.style.border = "1px solid red";
        mensagemErro[1].textContent = "O campo é obrigatório";
    } else {
        inputDescricao.style.border = "1px solid green";
        mensagemErro[1].textContent = "";
    }
});

botaoVerTarefas.addEventListener("click", () => {window.location.href = "lista.html"});
botaoAdicionar.addEventListener("click", () => {
    const titulo = document.querySelector("#titulo").value;
    const descricao = document.querySelector("#descricao").value;
    
    if (!estaVazio(titulo) && !estaVazio(descricao)) {
        const tarefa = {titulo: titulo, descricao: descricao};

        let listaTarefas = JSON.parse(localStorage.getItem("lista"));
        if (estaVazio(listaTarefas)) listaTarefas = [];
        listaTarefas.push(tarefa);

        localStorage.setItem("lista", JSON.stringify(listaTarefas));
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }

});