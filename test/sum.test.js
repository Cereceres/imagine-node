
const assert = require('assert');
const Complex = require('../index');


describe('test to add method', () => {
    it('should the calculate the add of a complex number', () => {
        const complex = new Complex(1, 1);

        const addComplex = complex.add({ real: 2, imaginary:3 });
        assert(addComplex.real === 3);
        assert(addComplex.imaginary === 4);
    });

    it('should the calculate the add of a complex number', () => {
        const addComplex = Complex.add({ i:1, r:1 }, { real: 2, imaginary:3 });
        assert(addComplex.real === 3);
        assert(addComplex.imaginary === 4);
    });
});
