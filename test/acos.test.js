
const assert = require('assert');
const Complex = require('../index');


describe('test to acos method', () => {
    it('should the calculate the acos of a complex number', () => {
        const complex = new Complex(1, 0);

        const acosComplex = complex.acos();
        assert(acosComplex.real < 0.0001);
        assert(acosComplex.imaginary < 0.0001);
    });

    it('should the calculate the acos of a complex number', () => {
        const complex = new Complex(0, 0);

        const acosComplex = complex.acos();
        console.log('acosComplex  ', acosComplex, Math.PI / 2);
        assert(acosComplex.real - Math.PI / 2 < 0.0001);
        assert(acosComplex.imaginary < 0.0001);
    });
});
