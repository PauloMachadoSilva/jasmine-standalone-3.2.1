//FUNÇÃO JAVASCRIPT GLOBAL DO JASMINE QUE É EXECUTADA ANTES DE CADA TESTE
//PODE SER EXECUTADA ANTES DE CADA TESTE, SERVE PARA INICIALIZAR O REINICIAR UM STATUS
//PODE TAMBEM EXECUTAR UMA AÇÃO ANTES DE CADA TESTE

describe('Teste do beforeEach', function() {
    var contador = 0;
    beforeEach(function() {
        contador++;
    });

    it('Deve incrementar o contador para 1', function () {
        expect(contador).toEqual(1);
    });

    it('Deve incrementar o contador para 2', function () {
        expect(contador).toEqual(2);
    });
})