const express = require("express");
const ControllerExercicio = require("../controllers/exercicios.js");

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/api/exercicio1", controllers.Calcular);

module.exports = router;
