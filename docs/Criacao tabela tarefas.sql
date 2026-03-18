CREATE DATABASE dbtarefas
    CHARACTER SET utf8mb4;

USE dbtarefas;

CREATE TABLE tarefas(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    datains DATE DEFAULT CURRENT_DATE,
    data DATE,
    hora TIME,
    descricao VARCHAR(255)
    );


-- Deletar a tabela
-- DROP TABLE tarefas;

-- Adicionar tarefas na tabela 
INSERT INTO tarefas(data,hora,descricao)
     VALUES("2026-02-24","13:00:00","Estudar Excel"),
           ("2026-02-27","12:00:00","Comer pastel na feira");

-- Limpar dados da tabela sem deletar
-- TRUNCATE TABLE tarefas;           


-- Retorna todos os dados que foram inseridos na tabela
-- SELECT *
--   FROM tarefas;