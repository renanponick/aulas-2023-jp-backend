import express from "express";
import ControllerExercicio from "../controllers/exercicios.js";

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/api/exercicio1", controllers.Calcular);

export default router;
