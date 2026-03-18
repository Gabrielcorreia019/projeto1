const db = require("../db/dbConnect.js");

class Tarefa {
  //Read
  static async readAllTarefas() {
    console.log("tarefas.model.js", "readAllTarefas()");
    const query = "select * from tarefas";
    // var dados = await db.executarQuery(query);
    return db.executarQuery(query);
  }
}

// Tarefa.readAllTarefas().then((dados) => {
//   console.log(dados);
// });

module.exports = Tarefa;
