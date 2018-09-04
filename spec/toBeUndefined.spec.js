//VERIFICA SE UM OBJETO NÃO FOI DEFINIDO
describe('Comparador com toBeUndefined', function() {
    it('Deve demonstrar o uso do toBeUndefined', function () {
        var n1;
        var n2 = undefined;
        var n3 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        //ERRADO
        expect(n3).not.toBeUndefined();
        expect(null).not.toBeUndefined();

    })
})
