
const assert = require('assert');
const Complex = require('../index');


describe('test to ln method', () => {
    it('should the calculate the ln of a complex number', () => {
        const complex = new Complex(0, 1);

        const lnComplex = complex.ln();
        assert(lnComplex.real !== undefined);
        assert(lnComplex.imaginary !== undefined);
    });

    it('should the calculate the ln of a complex number', () => {
        const complex = new Complex(1000000, 1);

        const lnComplex = complex.ln();
        assert(lnComplex.real === Math.log(Math.hypot(1000000, 1)));
        assert(lnComplex.imaginary === Math.atan2(1, 1000000));
    });

    it('should the calculate the ln of a complex number', () => {
        const lnComplex = Complex.ln({ r:1000000, i:1 });
        assert(lnComplex.real === Math.log(Math.hypot(1000000, 1)));
        assert(lnComplex.imaginary === Math.atan2(1, 1000000));
    });
});
