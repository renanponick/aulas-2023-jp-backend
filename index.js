// Importa o módulo 'express' para uso no código.
import express from "express";
import { exercicio1 } from "./exercicios/exercicios-parte-um.js";

// Cria uma instância do aplicativo Express.
const app = express();

app.get("/api/pessoa/:id", (req, res) => {
    const nome = req.query.nome;
    const pessoaId = req.params.id;

    res.json({
        message: `Você passou um queryParam: ${nome} e um routParam: ${pessoaId}`
    });
});

app.post("/api/pessoa/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.get("/api/exercicioum", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = exercicio1(num1, num2);
    
    res.json({ message: `Resultado: ${result}` }).status(200);
});


// Inicia o servidor Express na porta 3000 e define uma função de retorno de chamada.
app.listen(3000, () => {
    // Exibe uma mensagem no console quando o servidor estiver ativo.
    console.log("Servidor rodando na porta 3000");
});

