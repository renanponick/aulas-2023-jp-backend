const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals')
const ServicoExercicio = require("../src/services/pessoa")
const conexao = require('../src/database')

describe('Testes pessoas', () => {

   beforeAll(async () => {
      this.transaction = await conexao.transaction()
   })
   afterAll(async () => {
      this.transaction.rollback()
   })

   const servico = new ServicoExercicio()
   
   it('Should get person', async () => {
      const result = await servico.PegarUm(1, this.transaction)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste@teste.com');
      expect(result.senha).toBe('123456');
   })

   it('Should create a person', async () => {
      const result = await servico.Adicionar({
         nome: 'joao',
         email: 'teste2@teste.com',
         senha: '123456'
      }, this.transaction)

      expect(result.nome).toBe('joao');
      expect(result.email).toBe('teste2@teste.com');
      expect(result.senha).toBe('123456');
   })

})