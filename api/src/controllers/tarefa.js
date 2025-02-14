const con = require('../connect');

function create(req, res) {
    const { nome, data, progresso } = req.body;
    const sql = `INSERT INTO tarefas (nome, data, progresso) VALUES ('${nome}', '${data}', ${progresso})`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar tarefa');
        } else {
            res.status(201).json('Tarefa cadastrada com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM tarefas';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar tarefas');
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id_tarefa, nome, data, progresso } = req.body;
    const sql = `UPDATE tarefas SET nome = '${nome}', data = '${data}', progresso = ${progresso} WHERE id_tarefa = ${id_tarefa}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao atualizar tarefa');
        } else {
            res.status(200).json('Tarefa atualizada com sucesso');
        }
    });
}

function remove(req, res) {
    const { id_tarefa } = req.params;
    const sql = `DELETE FROM tarefas WHERE id_tarefa = ${id_tarefa}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao deletar tarefa');
        } else {
            res.status(200).json('Tarefa deletada com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    update,
    remove
}