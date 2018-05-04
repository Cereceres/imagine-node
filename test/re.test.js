
const assert = require('assert');
const Complex = require('../index');


describe('test to i method', () => {
    it('should the calculate the re of a complex number', () => {
        const complex = new Complex(10, 4);

        const iComplex = complex.re();
        assert(iComplex.real === 10);
        assert(iComplex.imaginary === 0);
    });

    it('should the calculate the i of a complex number', () => {
        const iComplex = Complex.re(4);
        assert(iComplex.real === 4);
        assert(iComplex.imaginary === 0);
    });
});
