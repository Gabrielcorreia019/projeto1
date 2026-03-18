const express = require("express");
const tarefasController = require("../controllers/tarefas.controller");
const router = express.Router();

// rotas da aplicação
router.get("/", tarefasController.mostrarTarefas);

module.exports = router; // necessário para poder usar as funções deste módulo fora dele
