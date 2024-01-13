const botaoAdicionar = document.querySelector("#btn-adicionar");
const botaoVerTarefas = document.querySelector("#btn-ver-tarefas");

botaoAdicionar.addEventListener("click", () => {
    const titulo = document.querySelector("#titulo").value;
    const descricao = document.querySelector("#descricao").value;
    const tarefa = {titulo: titulo, descricao: descricao};

    let listaTarefas = JSON.parse(localStorage.getItem("lista"));
    if (listaTarefas == null) {
        listaTarefas = [];
    }

    listaTarefas.push(tarefa);
    
    localStorage.setItem("lista", JSON.stringify(listaTarefas));
});

botaoVerTarefas.addEventListener("click", () => {
    window.location.href = "lista.html";
});