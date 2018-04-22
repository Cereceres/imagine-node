
const assert = require('assert');
const Complex = require('../index');


describe('test to sin method', () => {
    it('should the calculate the sin of a complex number', () => {
        const complex = new Complex(Math.PI, 0);

        const sinComplex = complex.sin();
        assert(sinComplex.real < 0.0001);
        assert(sinComplex.imaginary === 0);
    });

    it('should the calculate the sin of a complex number', () => {
        const complex = new Complex(Math.PI / 2, 0);

        const sinComplex = complex.sin();
        assert(sinComplex.real === 1);
        assert(sinComplex.imaginary < 0.0001);
    });

    it('should the calculate the sin of a complex number', () => {
        const complex = new Complex(0, 0);

        const sinComplex = complex.sin();
        assert(sinComplex.real < 0.0001);
        assert(sinComplex.imaginary === 0);
    });
});
