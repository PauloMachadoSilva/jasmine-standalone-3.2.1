//FUNÇÃO JAVASCRIPT GLOBAL DO JASMINE QUE É EXECUTADA UMA UNICA VEZ DEPOIS DA EXECUÇÃO DOS TESTES 
//SERVE PARA LIMPAR ALGUNS STATUS GLOBAIS

describe('Teste do afterAll', function() {
    var contador = 0;

    //APENAS UMA UNICA VEZ ANTES DO TESTE
    beforeAll(function() {
        contador = 10;
    });

    //A CADA EXECUÇÃO DE TESTE
    afterAll(function() {
        contador = 0;
    });

    it('Deve garantir o valor 11 para o contador', function () {
        expect(contador).toEqual(10);
    });

    it('Deve garantir o valor 12 para o contador', function () {
        expect(contador).toEqual(10);
    });
})