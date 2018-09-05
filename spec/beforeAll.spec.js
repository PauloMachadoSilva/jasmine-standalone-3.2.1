//FUNÇÃO JAVASCRIPT GLOBAL DO JASMINE QUE É EXECUTADA UMA UNICA VEZ ANTES DA EXECUÇÃO DOS TESTES 
//SERVE PARA INICIALIZAR UM STATUS OU CRIAR OBJETOS

describe('Teste do beforeAll', function() {
    var contador = 0;

    //APENAS UMA UNICA VEZ ANTES DO TESTE
    beforeAll(function() {
        contador = 10;
    });

    //A CADA EXECUÇÃO DE TESTE
    beforeEach(function() {
        contador++;
    });

    it('Deve garantir o valor 11 para o contador', function () {
        expect(contador).toEqual(11);
    });

    it('Deve garantir o valor 12 para o contador', function () {
        expect(contador).toEqual(12);
    });
})