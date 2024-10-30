const nomes = new Array("Alice", "Bob", "Charlie");

class ModelExercicio {

    PegarUm(index){
        return nomes[index]
    }

    PegarTodos(){
        return nomes
    }

    Adicionar(nome){
        nomes.push(nome)
    }

    Alterar(index, nome){
        nomes[index] = nome
    }

    Deletar(index){
        nomes.splice(index, 1)
    }

}

module.exports = ModelExercicio;