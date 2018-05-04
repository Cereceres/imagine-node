
const assert = require('assert');
const Complex = require('../index');


describe('test to inverse method', () => {
    it('should the calculate the inverse of a complex number', () => {
        const complex = new Complex(1, 1);

        const inverseComplex = complex.inverse();
        assert(inverseComplex.r - 0.5 < 0.0001);
        assert(inverseComplex.i + 0.5 < 0.00001);
    });

    it('should the calculate the inverse of a complex number', () => {
        const inverseComplex = Complex.inverse({ i:1, r:1 });
        assert(inverseComplex.r - 0.5 < 0.0001);
        assert(inverseComplex.i + 0.5 < 0.00001);
    });
});
