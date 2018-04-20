
const assert = require('assert');
const Complex = require('../index');


describe('test to pow method', () => {
    it('should the calculate the pow of a complex number', () => {
        const complex = new Complex(1, 1);

        const powComplex = complex.pow(4);
        assert(powComplex.real);
        assert(powComplex.imaginary);
    });
});
