const express = require('express');
const routes = express.Router();
const Tarefa = require('./controllers/tarefa');

routes.get('/', (req, res) => {
    res.send('API de Controle de Tarefas Respondendo');
});

routes.post('/tarefas', Tarefa.create);
routes.get('/tarefas', Tarefa.read);
routes.put('/tarefas', Tarefa.update); // Para atualizar uma tarefa
routes.delete('/tarefas/:id_tarefa', Tarefa.remove); // Para deletar uma tarefa

module.exports = routes;