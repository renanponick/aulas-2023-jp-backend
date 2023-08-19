import express from "express";
import ControllerExercicio from "../controllers/exercicios.js";

const router = express.Router();

const controllers = new ControllerExercicio()

router.get("/api/nomes/", controllers.PegarTodos);
router.get("/api/nome/:index", controllers.PegarUm);
router.post("/api/nome", controllers.Adicionar);
router.put("/api/nome/:index", controllers.Alterar);
router.delete("/api/nome/:index", controllers.Deletar);

export default router;
