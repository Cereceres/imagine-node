
const assert = require('assert');
const Complex = require('../index');


describe('test to atang method', () => {
    it('should the calculate the atang of a complex number', () => {
        const complex = new Complex(1, 0);

        const atangComplex = complex.atang();
        assert(atangComplex.real - Math.PI / 4 < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });

    it('should the calculate the atang of a complex number', () => {
        const complex = new Complex(1000, 0);

        const atangComplex = complex.atang();
        assert(atangComplex.real - 1.56979633 < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });

    it('should the calculate the atang of a complex number', () => {
        const complex = new Complex(0, 0);

        const atangComplex = complex.atang();
        assert(atangComplex.real < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });

    it('should the calculate the atang of a complex number', () => {
        const atangComplex = Complex.atang(0, 0);
        assert(atangComplex.real < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });

    it('should the calculate the atang of a complex number', () => {
        const atangComplex = Complex.atang(1, 0);
        assert(atangComplex.real - Math.PI / 4 < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });

    it('should the calculate the atang of a complex number', () => {
        const atangComplex = Complex.atang(1000, 0);
        assert(atangComplex.real - 1.56979633 < 0.0001);
        assert(atangComplex.imaginary < 0.0001);
    });
});
