
const assert = require('assert');
const Complex = require('../index');


describe('test to exp method', () => {
    it('should the calculate the exp of a complex number', () => {
        const complex = new Complex(1, 1);

        const expComplex = complex.exp();
        assert(expComplex.real !== undefined);
        assert(expComplex.imaginary !== undefined);
    });

    it('should the calculate the exp of a complex number Pi/2 i', () => {
        const complex = new Complex(0, Math.PI / 2);

        const expComplex = complex.exp();
        assert(expComplex.real < 0.0001);
        assert(expComplex.imaginary === 1);
    });

    it('should the calculate the exp of a complex number  Pi i ', () => {
        const complex = new Complex(0, Math.PI);

        const expComplex = complex.exp();
        assert(expComplex.real === -1);
        assert(expComplex.imaginary < 0.00001);
    });
});
