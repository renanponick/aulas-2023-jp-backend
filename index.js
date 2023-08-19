import express from "express";
import routers from "./src/routes/exercicios.js";

const app = express();

app.use(express.json());

app.use(routers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
