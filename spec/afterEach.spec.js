//FUNÇÃO JAVASCRIPT GLOBAL DO JASMINE QUE É EXECUTADA DEPOIS DE CADA TESTE
//PODE SER EXECUTADA DEPOIS DE CADA TESTE, SERVE PARA INICIALIZAR O REINICIAR UM STATUS
//PODE TAMBEM EXECUTAR UMA AÇÃO DEPOIS DE CADA TESTE

describe('Teste do beforeEach', function() {
    var contador = 0;

    beforeEach(function() {
        contador++;
    });

    afterEach(function() {
        contador = 0;
    });

    it('Deve garantir o contador para 1', function () {
        expect(contador).toEqual(1);
    });

    it('Deve ainda garantir o contador para 1', function () {
        expect(contador).toEqual(1);
    });
})