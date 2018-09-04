//VERIFICA SE UM OBJETO FOI DEFINIDO
describe('Comparador com toBeDefined', function() {
    it('Deve demonstrar u uso do toBeDefined', function () {
        var n1 = 10;
        var n2;
        var n3 = undefined;

        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

        //ERRADO
        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();

    })
})
