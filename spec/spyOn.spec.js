//SERVA PARA CRIAR UM MOCK OBJETO FALSO A SER UTILIZADO NOS TESTES
//UM OBJETO SPY RECEBE COMO PARAMETROS O NOME DO OBJETO E DO METODO A SEREM UTILIZADOS NO MOCK
describe('Teste do objeto SPY', function() {
    var calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        somarFake: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        },
        multiplicar: function (n1, n2) {
            return n1 * n2;
        },
        div: function (n1, n2) {
            return n1 * n2;
        }
    }
    beforeEach(function() {
        //AO CRIAR OS SPY DEIXAMOS NOSSO OBJETO INDEFINIDO
        spyOn(calculadora, 'somar');
        //SPYFAKE TRANFORMA CALL ANTERIOR EM UMA NOVA CALL
        spyOn(calculadora, 'somarFake').and.callFake(function(n1,n2) {
            return n1 - n2;
        });
        //CRIAR UM SPY QUE EXECUTA O MÉTODO ORIGINAL
        spyOn(calculadora, 'subtrair').and.callThrough();
        //CRIAR UM SPY QUE SIMULAR O RETORNO UM VALOR
        spyOn(calculadora, 'multiplicar').and.returnValue(100);
        //CRIAR UM SPY QUE SIMULAR O RETORNA VARIOS VALORES
        spyOn(calculadora, 'div').and.returnValues(1,2,3);
    })
  
    //toHaveBeenCalled - VERIRFICA SE O MÉTODO FOI CHAMADO
    it('deve chamar o método somar ao menos uma vez', function() {
        calculadora.somar(1,1);
        expect(calculadora.somar).toHaveBeenCalled();
    });

    //toBeUndefined - VERIRFICA SE O MÉTODO É INDEFINIDO
    it('deve chamar o método somar como não definido', function() {
        //caculadora.somar(1,1);
        expect(calculadora.somar(1,1)).toBeUndefined();
    });

    //toHaveBeenCalledTimes - VERIRFICA SE O MÉTODO FOI CHAMADO 2 VEZES
    it('deve chamar o método somar 2 vezes', function() {
        calculadora.somar(1,1);
        calculadora.somar(1,1);
        expect(calculadora.somar).toHaveBeenCalledTimes(2);
    });

    //VERIRFICA SE O MÉTODO FOI CHAMADO COM OS RESPECTIVOS PARAMETROS
    it('deve chamar o método com os respectivos paramentros (1,1) e (1,2)', function() {
        calculadora.somar(1,1);
        calculadora.somar(1,2);
        expect(calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(calculadora.somar).toHaveBeenCalledWith(1,2);
    });


     //EXECUTA O MÉTODO ORGINAL
    it('deve chamar o método ORIGINAL', function() {
        expect(calculadora.somar(1,1)).toBeUndefined();
        expect(calculadora.subtrair(2,1)).toEqual(1);
    });

     //EXECUTA O MÉTODO ORGINAL
    it('deve retornar 100 para o método multiplicar', function() {
        expect(calculadora.multiplicar(10,10)).toEqual(100);
    });

    //DEVE RETORNAR VALORES DISTINTOS
    it('deve retornar varios valores de acordo com chamadas', function() {
        expect(calculadora.div(3,4)).toEqual(1);
        expect(calculadora.div(3,4)).toEqual(2);
        expect(calculadora.div(3,4)).toEqual(3);
        expect(calculadora.div(3,4)).toBeUndefined(3);
    });

     //DEVE TRANSFORMAR O MÉTODO SOMAR EM SUB
     it('deve transformar o método anterior em um novo método', function() {
        expect(calculadora.somarFake(5,1)).toEqual(4);
    });
    
})