
const assert = require('assert');
const Complex = require('../index');


describe('test to cos method', () => {
    it('should the calculate the cos of a complex number', () => {
        const complex = new Complex(Math.PI, 0);

        const cosComplex = complex.cos();
        console.log(cosComplex);
        assert(cosComplex.real === -1);
        assert(cosComplex.imaginary < 0.0001);
    });
});
