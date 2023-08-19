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

   it('Should sum two numbers', () => {
      const result = servico.Calcular(1, 2)
      
      expect(result).toBe(3);
   })

   it('Should sum two numbers', () => {
      const result = () => servico.Calcular('a', '2')
      
      expect(result).toThrow('Favor informar números');
   })

})
