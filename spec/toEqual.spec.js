//VALIDA OS VALORES LITERAIS, TIPO OS VALORES DE UM OBJETO
describe('Comparador com toEqual', function() {
    it('Deve validar o uso do toEqual', function () {
        var obj1 = {
            valor: true
        }
        var obj2 = {
            valor: true
        }
        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    })
})