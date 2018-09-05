//SUITES PODEM SER ANINHADAS E CONTER OUTRAS SUÍTES DENTRO DELAS
//AS FUNÇÕES ESPECIAIS COMO BEFOREEACH OU AFTERALL SERÃO EXECUTADAS ANTES E DEPOIS DOS TESTES EM ORDEM
//TOMAR CUIDADO AO ANINHAR SUITES PARA NÃO TORNAR O TESTE COMPLEXO E DE DIFICIL COMPREENSÃO

describe('Suite Externa', function() {
    var contadorExterno = 0;

    //É EXECUTADO EXTERNAMENTE E INTERNAMENTE
    beforeEach(function() {
        contadorExterno++;
    });

    it('Deve conter 1 para o contadorExterno', function () {
        expect(contadorExterno).toEqual(1);
    });
    describe('Suite Interna', function() {
        var contadorInterno = 0;
        //APENAS UMA UNICA VEZ ANTES DO TESTE
        beforeEach(function() {
            contadorInterno++;
        });

        it('Deve validar o valor dos contadores', function () {
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });
    });
})
