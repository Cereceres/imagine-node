
const assert = require('assert');
const Complex = require('../index');


describe('test to sqrt method', () => {
    it('should the calculate the sqrt of a complex number', () => {
        const complex = new Complex(1, 1);

        const sqrtComplex = complex.sqrt(4);
        assert(sqrtComplex.length === 4);
        sqrtComplex.forEach(({ imaginary, real }) => assert(imaginary && real));
    });

    it('should the calculate the sqrt of a complex number', () => {
        const complex = new Complex(-1, 0);
        const sqrtComplex = complex.sqrt();
        assert(sqrtComplex.length === 2);
        console.log('sqrtComplex[0] ', sqrtComplex);
        assert(sqrtComplex[0].real < 0.0001);
        assert(sqrtComplex[0].i === 1);
        assert(sqrtComplex[1].real < 0.0001);
        assert(sqrtComplex[1].i === -1);
    });

    it('should the calculate the sqrt of a complex number', () => {
        const sqrtComplex = Complex.sqrt({ i:1, r:1 }, 4);
        assert(sqrtComplex.length === 4);
        sqrtComplex.forEach(({ imaginary, real }) => assert(imaginary && real));
    });
});
