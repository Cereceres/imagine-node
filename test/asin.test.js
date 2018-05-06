
const assert = require('assert');
const Complex = require('../index');


describe('test to asin method', () => {
    it('should the calculate the asin of a complex number', () => {
        const complex = new Complex(1, 0);

        const asinComplex = complex.asin();
        assert(asinComplex.real - Math.PI / 2 < 0.0001);
        assert(asinComplex.imaginary < 0.0001);
    });

    it('should the calculate the asin of a complex number', () => {
        const complex = new Complex(0, 0);

        const asinComplex = complex.asin();
        assert(asinComplex.real < 0.0001);
        assert(asinComplex.imaginary < 0.0001);
    });

    it('should the calculate the asin of a complex number', () => {
        const asinComplex = Complex.asin(0, 0);
        assert(asinComplex.real < 0.0001);
        assert(asinComplex.imaginary < 0.0001);
    });

    it('should the calculate the asin of a complex number', () => {
        const asinComplex = Complex.asin(1, 0);
        assert(asinComplex.real - Math.PI / 2 < 0.0001);
        assert(asinComplex.imaginary < 0.0001);
    });
});
