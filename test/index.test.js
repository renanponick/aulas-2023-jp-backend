import { describe, expect, it } from '@jest/globals';
import ServicoExercicio from "../src/services/exercicios";

describe('Testes do primeiro exercício', () => {

   const servico = new ServicoExercicio()

   // Executado antes de TODOS os testes
   beforeAll(async () => {
      console.info('Iniciando TDD com jest!');
   });

   // Executado após TODOS os testes
   afterAll(() => {
      console.info('Encerrados os testes');
   });

   it('Should add a name', () => {
      const qtde = servico.PegarTodos().length
      servico.Adicionar("Joao")
      const qtdeAfter = servico.PegarTodos().length
      
      expect(qtdeAfter).toBe(qtde + 1);
   })

   it('Should add a name and validate', () => {
      const nome = "Lucas"
      servico.Adicionar(nome)

      const addedNome = servico.PegarUm(servico.PegarTodos().length - 1)
      console.log(addedNome)
      expect(nome).toBe(addedNome);
   })

})
