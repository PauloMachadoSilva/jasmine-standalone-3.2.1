//DESABILITANDO DESCRIBE

xdescribe('Desabilitando DESCRIBE', function() {
    var contador = 0;
    beforeEach(function() {
        contador++;
    });

    it('Deve incrementar o contador para 1', function () {
        expect(contador).toEqual(122);
    });

    it('Deve incrementar o contador para 2', function () {
        expect(contador).toEqual(2);
    });
})