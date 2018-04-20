
const assert = require('assert');
const Complex = require('../index');


describe('test to sqrt method', () => {
    it('should the calculate the sqrt of a complex number', () => {
        const complex = new Complex(1, 1);

        const sqrtComplex = complex.sqrt(4);
        assert(sqrtComplex.length === 4);
        sqrtComplex.forEach(({ imaginary, real }) => assert(imaginary && real));
    });
});
