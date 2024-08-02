const RepositorioExercicio = require("../repositories/exercicios.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

    PegarUm(index){
        return repositorio.PegarUm(index)
    }

    PegarTodos(){
        return repositorio.PegarTodos()
    }

    Adicionar(nome){
        if(!nome) {
          throw new Error("Favor preencher o nome.")
        }
        repositorio.Adicionar(nome)
    }

    Alterar(index, nome){
      if(!nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      repositorio.Adicionar(nome)
    }

    Deletar(index){
      if(!index || isNaN(index)) {
        throw new Error("Favor corretamente o index.")
      }

      repositorio.Deletar(index)
    }

}

module.exports = ServicoExercicio;