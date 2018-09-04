//FALHA MANUAL PERMITE INTERROMPER UM TESTE LANÇANDO UM ERRO
//O JASMINE POSSUI A FUNÇÃO 'FAIL' PARA FALHAR MANUALKMENTE UM TESTE
//UTILIZAMOS A FALHA MANUAL PARA CERTIFICAR QUE UMA OPERAÇÃO NÃO DESEJADA NÃO SEJA EXECUTADA
describe('Teste a função "Fail" de falha manual', function() {
    it('Deve demonstrar o uso do Fail', function () {
        var op = function(executar,callback) {
            if(executar) {
                callback();
            }
        } 
        op(false, function() {
            fail('não deve executar função de callback');
        });
    })
})