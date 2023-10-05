const Pessoa = require('../models/pessoa.js');

class RepositorioExercicio {

    async PegarUm(id){
        return Pessoa.findOne({
            where: {
                id
            },
            include: ['Cachorros']
        })
    }

    async PegarTodos(){
        return Pessoa.findAll()
    }

    async Adicionar(pessoa, transaction){
        return Pessoa.create(pessoa, {
            transaction
        })
    }

    async Alterar(id, pessoa){
        return Pessoa.update(pessoa, {
            where: {
                id
            }
        })
    }

    async Deletar(id){
        return Pessoa.destroy({
            where: {
                id
            }
        })
    }

}

module.exports = RepositorioExercicio