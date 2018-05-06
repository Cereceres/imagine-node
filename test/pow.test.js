
const assert = require('assert');
const Complex = require('../index');


describe('test to pow method', () => {
    it('should the calculate the pow of a complex number', () => {
        const complex = new Complex(1, 1);

        const powComplex = complex.pow({ real:4 });
        assert(powComplex.real);
        assert(powComplex.imaginary);
    });

    it('should the the second pow of real', () => {
        const complex = new Complex(1, 0);

        const powComplex = complex.pow({ real:2 });
        assert(powComplex.real === 1);
        assert(powComplex.imaginary === 0);
    });

    it('should the the second pow of real', () => {
        const complex = new Complex(0, 1);

        const powComplex = complex.pow({ real:2 });
        assert(powComplex.real === -1);
        assert(powComplex.imaginary < 0.001);
    });

    it('should the the second pow of real', () => {
        const complex = new Complex(0, 1);

        const powComplex = complex.pow({ real:3 });
        assert(powComplex.real < 0.001);
        assert(powComplex.imaginary === -1);
    });

    it('should the the second pow of real', () => {
        const powComplex = Complex.pow({ r:0, i:1 }, { real:3 });
        assert(powComplex.real < 0.001);
        assert(powComplex.imaginary === -1);
    });
});
