
const assert = require('assert');
const Complex = require('../index');


describe('test to cos method', () => {
    it('should the calculate the cos of a complex number', () => {
        const complex = new Complex(0, 0);

        const cosComplex = complex.cosh();
        assert(cosComplex.real === 1);
        assert(cosComplex.imaginary < 0.0001);
    });

    it('should the calculate the cos of a complex number', () => {
        const cosComplex = Complex.cosh({ r:1, i:0 });
        assert(cosComplex.real - Math.exp(1) < 0.0001);
        assert(cosComplex.imaginary < 0.0001);
    });
});
