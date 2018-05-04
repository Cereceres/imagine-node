
const assert = require('assert');
const Complex = require('../index');


describe('test to div method', () => {
    it('should the calculate the div of a complex number', () => {
        const complex = new Complex(1, 1);

        const divComplex = complex.div({ real: 2, imaginary:3 });
        assert(divComplex.real - 5 / 13 < 0.01);
        assert(divComplex.imaginary - 1 / 13 < 0.01);
    });

    it('should the calculate the div of a complex number', () => {
        const complex = new Complex(1, 1);

        const divComplex = complex.div({ real: 1, imaginary:1 });
        assert(divComplex.real - 1 < 0.0001);
        assert(divComplex.imaginary === 0);
    });

    it('should the calculate the div of a complex number', () => {
        const divComplex = Complex.div({ i:1, r:1 }, { real: 1, imaginary:1 });
        assert(divComplex.real - 1 < 0.0001);
        assert(divComplex.imaginary === 0);
    });
});
