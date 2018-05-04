
const assert = require('assert');
const Complex = require('../index');


describe('test to conjugate method', () => {
    it('should the calculate the conjugate of a complex number', () => {
        const complex = new Complex(10, 4);

        const iComplex = complex.conjugate();
        assert(iComplex.real === 10);
        assert(iComplex.imaginary === -4);
    });

    it('should the calculate the conjugate of a complex number', () => {
        const iComplex = Complex.conjugate({ i:10, r:4 });
        assert(iComplex.real === 4);
        assert(iComplex.imaginary === -10);
    });
});
