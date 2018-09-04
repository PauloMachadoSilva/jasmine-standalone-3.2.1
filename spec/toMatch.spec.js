//VALIDA EXPRESSÕES REGULARES
describe('Comparador com toMatch', function() {
    it('Deve validar o uso do toMatch', function () {
        var texto = "teste com jasmine";
        expect(texto).toMatch('jasmine');
        expect(texto).toMatch(/Jasmine/i);
        expect('23036-150').toMatch(/^\d{5}-\d{3}$/);
    })
})