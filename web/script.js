document.getElementById('cadastro').addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: event.target.nome.value,
        data: event.target.data.value,
        progresso: event.target.progresso.value
    };
    fetch('http://localhost:4000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpo)
    })
    .then(response => response.status === 201 ? alert('Tarefa cadastrada com sucesso') : alert('Erro ao cadastrar tarefa'))
    .then(() => window.location.reload());
});

function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = dataObj.getFullYear();
    return `${dia}-${mes}-${ano}`;
}

fetch('http://localhost:4000/tarefas')
.then(response => response.json())
.then(tarefas => {
    const tabela = document.getElementById('tarefas');
    tarefas.forEach(tarefa => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${tarefa.id_tarefa}</td>
            <td>${tarefa.nome}</td>
            <td>${formatarData(tarefa.data)}</td>
            <td>${tarefa.progresso}</td>
            <td>
                <button onclick="editarTarefa(${tarefa.id_tarefa}, '${tarefa.nome}', '${tarefa.data}', ${tarefa.progresso})">Editar</button>
                <button onclick="deletarTarefa(${tarefa.id_tarefa})">Deletar</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
});

function editarTarefa(id_tarefa, nome, data, progresso) {
    document.getElementById('id_tarefa').value = id_tarefa;
    document.getElementById('nome_tarefa').value = nome;
    document.getElementById('data_tarefa').value = data;
    document.getElementById('progresso_tarefa').value = progresso;
    document.getElementById('edicao').style.display = 'block';
}

document.getElementById('editar').addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        id_tarefa: event.target.id_tarefa.value,
        nome: event.target.nome_tarefa.value,
        data: event.target.data_tarefa.value,
        progresso: event.target.progresso_tarefa.value
    };
    fetch('http://localhost:4000/tarefas', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpo)
    })
    .then(response => response.status === 200 ? alert('Tarefa atualizada com sucesso') : alert('Erro ao atualizar tarefa'))
    .then(() => window.location.reload());
});

function deletarTarefa(id_tarefa) {
    fetch(`http://localhost:4000/tarefas/${id_tarefa}`, {
        method: 'DELETE'
    })
    .then(response => response.status === 200 ? alert('Tarefa deletada com sucesso') : alert('Erro ao deletar tarefa'))
    .then(() => window.location.reload());
}

function cancelarEdicao() {
    document.getElementById('edicao').style.display = 'none';
}

