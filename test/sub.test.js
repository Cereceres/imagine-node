
const assert = require('assert');
const Complex = require('../index');


describe('test to sub method', () => {
    it('should the calculate the sub of a complex number', () => {
        const complex = new Complex(1, 1);

        const subComplex = complex.sub({ real: -2, imaginary:-3 });
        assert(subComplex.real === 3);
        assert(subComplex.imaginary === 4);
    });

    it('should the calculate the sub of a complex number', () => {
        const complex = new Complex({ i:1, r:1 });

        const subComplex = complex.sub({ i: -2, r:-3 });
        assert(subComplex.real === 4);
        assert(subComplex.imaginary === 3);
    });

    it('should the calculate the sub of a complex number', () => {
        const subComplex = Complex.sub({ i:1, r:1 }, { i: -2, r:-3 });
        assert(subComplex.real === 4);
        assert(subComplex.imaginary === 3);
    });
});
