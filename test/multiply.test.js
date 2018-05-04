
const assert = require('assert');
const Complex = require('../index');


describe('test to multiply method', () => {
    it('should the calculate the multiply of a complex number', () => {
        const complex = new Complex(1, 1);

        const multiplyComplex = complex.multiply({ real: 2, imaginary:3 });
        assert(multiplyComplex.real === -1);
        assert(multiplyComplex.imaginary === 5);
    });

    it('should the calculate the multiply of a complex number', () => {
        const multiplyComplex = Complex.multiply({ i:1, r:1 }, { real: 2, imaginary:3 });
        assert(multiplyComplex.real === -1);
        assert(multiplyComplex.imaginary === 5);
    });
});
