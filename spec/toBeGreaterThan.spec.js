//COMPARA DE UM VALOR NUMÉRICO É MAIOR QUE O OUTRO
//REALIZA UMA CONVERSÃO PARA VALOR NUMÉRICO ANTES DA COMPARAÇÃO, PODENDO SER TEXTO
//PARA VALORES IGUAIS UTILIZE O TOEQUAL
describe('Comparador com toBeGreaterThan', function() {
    it('Deve demonstrar o uso do toBeGreaterThan', function () {
       var pi = 3.1415;

        expect(4).toBeGreaterThan(pi);
        expect('5').toBeGreaterThan(pi);        
        expect('3').not.toBeGreaterThan(pi); 

    })
})
