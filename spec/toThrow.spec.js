//VERIFICA SE UMA EXCEÇÃO É LANÇADA POR UM MÉTODO
//NÃO REALIZA VALIDAÇÃO EM DETALHE DO TIPO DE EXCEÇÃO LANÇADA,
//APENA CERTIFICA QUE UM ERRO OCORREU NA EXECUÇÃO DA FUNÇÃO
describe('Comparador com toThrow', function() {
    it('Deve validar o uso do toThrow', function () {
        var multi = function() {
            numero * 10;
        }
    
        var somar = function(n1,n2) {
            return n1 + n2;
        }
    
        expect(multi).toThrow();
        expect(somar).not.toThrow();        
    })
})