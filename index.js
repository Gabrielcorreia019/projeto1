// importações de bibliotecas e configurações básicas
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();

//importação de rotas
const tarefasRoutes = require("./routes/tarefas.routes");

// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

const porta = Number(process.env.PORTA);

app.use("/", tarefasRoutes);

app.use((req, res) => {
  //res.status(404).send("Página não encontrada!");
  res.status(404).render("erro404", { title: "erro 404" });
});

// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
