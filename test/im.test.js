
const assert = require('assert');
const Complex = require('../index');


describe('test to i method', () => {
    it('should the calculate the i of a complex number', () => {
        const complex = new Complex(10, 4);

        const iComplex = complex.im();
        assert(iComplex.real === 0);
        assert(iComplex.imaginary === 4);
    });

    it('should the calculate the i of a complex number', () => {
        const iComplex = Complex.im(4);
        console.log('');
        assert(iComplex.real === 0);
        assert(iComplex.imaginary === 4);
    });
});
