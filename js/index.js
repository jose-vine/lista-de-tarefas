const botaoAdicionar = document.querySelector("#btn-adicionar");
const botaoVerTarefas = document.querySelector("#btn-ver-tarefas");
const camposDados = document.querySelectorAll("input");

const estaVazio = (valor) => valor === null || valor === "";

const limparCampos = () => camposDados.forEach((campo) => {campo.value = ""});

const redirecionarPagina = (pagina) => window.location.href = pagina;

const validarCampo = (campo) => {
    if (estaVazio(campo.value)) {
        campo.style.border = "1px solid red";
        campo.parentNode.children[2].textContent = "O campo é obrigatório";
    } else {
        campo.style.border = "1px solid green";
        campo.parentNode.children[2].textContent = "";
    }
}

const adicionarTarefa = () => {
    const camposDados = document.querySelectorAll("input");
    
    let situacao = true;
    for (let i = 0; i < camposDados.length; i++) {
        if (estaVazio(camposDados[i].value)) {
            situacao = false;
            break;
        };
    }
    
    if (situacao) {
        const tarefa = {};
        camposDados.forEach((elemento) => tarefa[elemento.name] = elemento.value);

        let listaTarefas = JSON.parse(localStorage.getItem("lista"));
        if (estaVazio(listaTarefas)) listaTarefas = [];
        listaTarefas.push(tarefa);

        localStorage.setItem("lista", JSON.stringify(listaTarefas));
        
        alert("A tarefa foi adicionada com sucesso!");
        limparCampos();
    } else {
        alert("Todos os campos devem ser preenchidos!");
    }
};