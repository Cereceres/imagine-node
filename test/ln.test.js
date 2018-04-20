
const assert = require('assert');
const Complex = require('../index');


describe('test to ln method', () => {
    it('should the calculate the ln of a complex number', () => {
        const complex = new Complex(0, 1);

        const lnComplex = complex.ln();
        assert(lnComplex.real !== undefined);
        assert(lnComplex.imaginary !== undefined);
    });
});
