const modelExercicio = require("../models/exercicios.js")

const model = new modelExercicio()
class ServicoExercicio {

    PegarUm(index){
        return model.PegarUm(index)
    }

    PegarTodos(){
        return model.PegarTodos()
    }

    Adicionar(nome){
        if(!nome) {
          throw new Error("Favor preencher o nome.")
        }
        model.Adicionar(nome)
    }

    Alterar(index, nome){
      if(!nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      model.Adicionar(nome)
    }

    Deletar(index){
      if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      model.Deletar(index)
    }

}

module.exports = ServicoExercicio;