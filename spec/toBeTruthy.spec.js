//VERIFICA SE UM VALOR É VALIDO, OU SEJA, DIFERENTE DE 'FALSE', '0', '', 
//'UNDEFINED', 'NULL' OU 'Nan'
describe('Comparador com toBeTruthy', function() {
    it('Deve demonstrar o uso do toBeTruthy', function () {
        var n1 = null;
        var n2 = undefined;
        var n3 = 0;
        var n4 = '';
        var n5 = null;
        var n6 = NaN;
        var n7;



        expect(n1).not.toBeTruthy();
        expect('teste').toBeTruthy();
        expect(true).toBeTruthy();

        expect(n2).not.toBeTruthy();
        expect(n3).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
        expect(n5).not.toBeTruthy();
        expect(n6).not.toBeTruthy();
        expect(n7).not.toBeTruthy();
        expect(false).not.toBeTruthy();
        


    })
})
