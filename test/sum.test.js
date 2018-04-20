
const assert = require('assert');
const Complex = require('../index');


describe('test to sum method', () => {
    it('should the calculate the sum of a complex number', () => {
        const complex = new Complex(1, 1);

        const sumComplex = complex.sum({ real: 2, imaginary:3 });
        assert(sumComplex.real === 3);
        assert(sumComplex.imaginary === 4);
    });
});
