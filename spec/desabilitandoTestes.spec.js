//PARA DESABILITAR UM TESTE USAMOS UM 'X' NA FRENTE DO 'IT'
//ELES TAMBEM PODEM SER CONSIDERADOS INATIVOS CASO NÃO POSSUAM ARGUMENTOS
//PODEMOS TAMBEM USAR UMA FUNÇÃO DENOMINADA 'PENDING' DENTRO DO TESTE PARA INATIVALO
describe('Desabilitando testes', function() {
    var contador = 0;
    beforeEach(function() {
        contador++;
    });

    xit('Teste desabilitado com Xit', function () {
        expect(contador).toEqual(122);
    });

    it('Teste sem spec', function () {
        
    });

    it('Teste ainda pendente', function () {
        expect(contador).toEqual(122);
        pending('teste ainda pendente')
    });
})