const tarefasModel = require("../models/tarefas.model");

const criarTarefa = (req, res) => {
  res.end("criarTarefa vou implementar");
};

const mostrarTarefas = (req, res) => {
  //res.send("rota raiz");

  tarefasModel.readAllTarefas().then((tarefas) => {
    res.render("index", { title: "principal", dados: tarefas });
  });
};

const alterarTarefa = (req, res) => {
  res.end("alterarTarefa vou implementar");
};

const deletarTarefa = (req, res) => {
  res.end("deletarTarefa vou implementar");
};

module.exports = {
  criarTarefa,
  mostrarTarefas,
  alterarTarefa,
  deletarTarefa,
};








