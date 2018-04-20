
const assert = require('assert');
const Complex = require('../index');


describe('test to exp method', () => {
    it('should the calculate the exp of a complex number', () => {
        const complex = new Complex(1, 1);

        const expComplex = complex.exp();
        assert(expComplex.real !== undefined);
        assert(expComplex.imaginary !== undefined);
    });
});
