import ServicoExercicio from "../services/exercicios.js";

const servico = new ServicoExercicio()

export default class ControllerExercicio {

  Calcular(req, res) {
    try {
      const num1 = req.body.num1;
      const num2 = req.body.num2;
      
      const result = servico.Calcular(num1, num2);
      res.status(201).json({ message: `Resultado: ${result}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}