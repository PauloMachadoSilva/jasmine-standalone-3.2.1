//COMPARA DE UM VALOR NUMÉRICO É MENOR QUE O OUTRO
//REALIZA UMA CONVERSÃO PARA VALOR NUMÉRICO ANTES DA COMPARAÇÃO, PODENDO SER TEXTO
//PARA VALORES IGUAIS UTILIZE O TOEQUAL
describe('Comparador com toBeLessThan', function() {
    it('Deve demonstrar o uso do toBeLessThan', function () {
       var pi = 3.1415;

        expect(3).toBeLessThan(pi);
        expect(3.5).not.toBeLessThan(pi);        

    })
})
