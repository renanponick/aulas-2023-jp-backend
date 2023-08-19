import ServicoExercicio from "../services/exercicios.js";

const servico = new ServicoExercicio()

export default class ControllerExercicio {

    PegarUm(req, res){
      try {
        const index = req.params.index

        const result = servico.PegarUm(index)
        
        res.status(200).json({ nome: result});
      } catch (error) {
        res.status(500).json({ message: "Erro ao pegar um nome"});
        
      }
    }

    PegarTodos(req, res){
      try {
        const result = servico.PegarTodos()

        res.status(201).json({ nomes: result }); 
      } catch (error) {
        res.status(500).json({ message: "Erro ao listar nomes"});
      }
    }

    Adicionar(req, res){
      try {
        const nome = req.body.nome

        servico.Adicionar(nome)
        
        res.status(201).json({ message: "Adicionado com sucesso!"});
      } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar"});
      }
    }

    Alterar(req, res){
      try {
        const index = req.params.index
        const nome = req.body.nome
    
        servico.Alterar(index, nome)
          
        res.status(200).json({ message: "Alterado com sucesso!"});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Alterar"});
        
      }
    }

    Deletar(req, res){
      try {
        const index = req.params.index

        servico.Deletar(index)
          
        res.status(200).json({ message: "Deletado com sucesso!"});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Deletar"});
        
      }
    }

}