//REALIZADA BUSCA POR DETERMINADO ITEM NO ARRAY
//TABEM PODE SER UTILIZADO PARA BUSCAR UM SBSTRING DENTRO DE UMA STRING
//NÃO SUPORTA REGEX
describe('Comparador com toContain', function() {
    it('Deve demonstrar o uso do toContain', function () {
        var texto = 'Meu nome é Marcio';
        var frutas = ['laranja','banana','pera'];

        expect(texto).toContain('Marcio');
        expect(texto).not.toContain('marcio');

        
        expect(frutas).toContain('laranja');
        expect(frutas).not.toContain('uva');

    })
})



