drop database if exists tarefas;
CREATE DATABASE tarefas;
USE tarefas;

CREATE TABLE tarefas(
    id_tarefa INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    progresso INT NOT NULL CHECK (progresso >= 0 AND progresso <= 100)
);