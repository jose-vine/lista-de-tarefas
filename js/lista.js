const divLista = document.querySelector("#lista-tarefas");
const listaLocalStorage = JSON.parse(localStorage.getItem("lista"));

const estaVazio = (valor) => {
    return valor === null || valor === "";
};

if (estaVazio(listaLocalStorage)) {
    console.log("Não há tarefas cadastradas!");
} else {
    listaLocalStorage.forEach((objeto) => {
        const tarefa = document.createElement("div");
        for (let propriedade in objeto) {
            const divConteudo = document.createElement("div");
            tarefa.appendChild(divConteudo);
            divConteudo.textContent = objeto[propriedade];
        }
        document.body.appendChild(tarefa);
        divLista.appendChild(tarefa);
    });
}
